/**
 * Ponto de entrada SSR para o prerender estático (build time).
 *
 * Executado por scripts/prerender.ts via vite.ssrLoadModule — nunca
 * incluído no bundle do cliente.
 *
 * Usa StaticRouter (server-side) em vez de BrowserRouter para renderizar
 * o HTML da rota "/" sem depender de APIs do browser (window, document…).
 *
 * IMPORTANTE: importar páginas diretamente (sem lazy/Suspense) — o
 * renderToString é síncrono e não suporta Suspense com lazy imports.
 */
import { renderToString } from 'react-dom/server';
import { StrictMode } from 'react';
import { StaticRouter, Routes, Route, Navigate } from 'react-router';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

export async function prerender() {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location="/">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </StaticRouter>
    </StrictMode>,
  );

  return { html };
}
