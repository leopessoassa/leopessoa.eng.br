/**
 * scripts/prerender.ts
 *
 * Script standalone de prerendering — roda após `vite build`.
 * Usa vite.ssrLoadModule para carregar src/prerender.tsx no Node,
 * chama prerender(), injeta o HTML no dist/index.html e encerra
 * explicitamente com process.exit(0).
 *
 * Compatível com Vercel, Netlify e qualquer CI — não deixa processos
 * pendentes.
 *
 * Uso: node --import tsx/esm scripts/prerender.ts
 */

import { createServer } from 'vite';
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');
const distIndex = resolve(root, 'dist/index.html');

async function main() {
  console.log('[prerender] Iniciando...');

  // Garante que o build foi gerado antes de prosseguir
  if (!existsSync(distIndex)) {
    throw new Error(
      `dist/index.html não encontrado em "${distIndex}". Execute "vite build" antes do prerender.`,
    );
  }

  // Cria servidor Vite em modo SSR (não inicia HTTP — só transforma módulos)
  const vite = await createServer({
    root,
    mode: 'production',
    server: { middlewareMode: true },
    appType: 'custom',
  });

  try {
    // Carrega src/prerender.tsx no contexto Node via SSR transform
    const mod = await vite.ssrLoadModule('/src/prerender.tsx');

    if (typeof mod.prerender !== 'function') {
      throw new Error('src/prerender.tsx não exporta uma função "prerender"');
    }

    const result = await mod.prerender();
    const { html } = result;

    if (!html || typeof html !== 'string') {
      throw new Error('prerender() retornou HTML inválido ou vazio');
    }

    // Lê o shell HTML gerado pelo vite build
    const template = readFileSync(distIndex, 'utf-8');

    // Injeta o HTML renderizado dentro de #root
    const output = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`,
    );

    if (output === template) {
      throw new Error(
        'Placeholder <div id="root"></div> não encontrado em dist/index.html. ' +
        'Verifique se o index.html usa exatamente esse markup no root.',
      );
    }

    writeFileSync(distIndex, output, 'utf-8');

    const sizeKb = (output.length / 1024).toFixed(1);
    console.log(`[prerender] ✅ dist/index.html atualizado (${sizeKb} KB)`);
    console.log('[prerender] Prerendered 1 page: /');
  } finally {
    // Fecha o servidor Vite — sem isso o processo fica pendurado
    await vite.close();
  }
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error('[prerender] ❌ Erro:', err);
    process.exit(1);
  });
