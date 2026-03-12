export default function ParaArquitetosSection() {
  return (
    <section className="bg-layer-3 text-secondary-900 py-16 lg:py-24 pb-32 lg:pb-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Transforme projetos comuns em{" "}
            <span className="text-primary-500">
              experiências extraordinárias
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-secondary-500 max-w-4xl mx-auto leading-relaxed">
            {`Seus clientes querem mais que um projeto bonito - eles querem se sentir especiais.`}
            <strong className="text-secondary-800">
              Vamos criar essa experiência juntos.
            </strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">

          {/* ===================== COLUNA ESQUERDA — SITUAÇÕES ===================== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              <svg
                className="w-6 h-6 inline mr-2 text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                {/* CORREÇÃO 1: fill-rule → fillRule | clip-rule → clipRule */}
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Situações que você já viveu:
            </h3>
            <div className="space-y-4">

              {/* Card 1 */}
              <div className="flex items-start gap-4 p-4 bg-secondary-50/80 shadow-sm rounded-lg border-l-4 border-red-400">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-secondary-700">
                  "Projetos bonitos, mas que não geram 'uau' no cliente"
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4 p-4 bg-secondary-50/80 shadow-sm rounded-lg border-l-4 border-red-400">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-secondary-700">
                  "Cliente vê automação como 'luxo desnecessário'"
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4 p-4 bg-secondary-50/80 shadow-sm rounded-lg border-l-4 border-red-400">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-secondary-700">
                  "Dificuldade para justificar o valor agregado da automação"
                </p>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-4 p-4 bg-secondary-50/80 shadow-sm rounded-lg border-l-4 border-red-400">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-secondary-700">
                  "Concorrência oferece 'mais do mesmo'"
                </p>
              </div>

              {/* Card 5 */}
              <div className="flex items-start gap-4 p-4 bg-secondary-50/80 shadow-sm rounded-lg border-l-4 border-red-400">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-secondary-700">
                  "Cliente não entende o retorno do investimento"
                </p>
              </div>

            </div>
          </div>

          {/* ===================== COLUNA DIREITA — SOLUÇÕES ===================== */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-secondary-900 mb-6">
              <svg
                className="w-6 h-6 inline mr-2 text-accent-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Como eu resolvo para você:
            </h3>
            <div className="space-y-4">

              {/* CORREÇÃO 2+3: tokens success-* → accent-* | bg-secondary-200 → bg-accent-50 */}
              {/* Card Projetos Memoráveis */}
              <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-400">
                <div className="w-8 h-8 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-accent-200">
                  <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">
                    Projetos Memoráveis
                  </h4>
                  <p className="text-secondary-600">
                    Clientes que viram fãs da sua marca
                  </p>
                </div>
              </div>

              {/* Card Valor Tangível */}
              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">
                    Valor Tangível
                  </h4>
                  <p className="text-secondary-600">
                    ROI que convence na primeira reunião
                  </p>
                </div>
              </div>

              {/* Card Diferencial Competitivo */}
              <div className="flex items-start gap-4 p-4 bg-accent-50 rounded-lg border-l-4 border-accent-400">
                <div className="w-8 h-8 bg-accent-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 ring-1 ring-accent-200">
                  <svg className="w-4 h-4 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">
                    Diferencial Competitivo
                  </h4>
                  <p className="text-secondary-600">
                    Automação que ninguém mais oferece
                  </p>
                </div>
              </div>

              {/* Card Vendas Facilitadas */}
              <div className="flex items-start gap-4 p-4 bg-primary-50 rounded-lg border-l-4 border-primary-400">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">
                    Vendas Facilitadas
                  </h4>
                  <p className="text-secondary-600">
                    Apresentações que vendem sozinhas
                  </p>
                </div>
              </div>

              {/* Card Clientes Encantados — acento gold (premium) */}
              <div className="flex items-start gap-4 p-4 bg-gold-500/10 rounded-lg border-l-4 border-gold-500">
                <div className="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    <path d="M6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800">
                    Clientes Encantados
                  </h4>
                  <p className="text-secondary-600">
                    Referências que multiplicam seus negócios
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CORREÇÃO 4: separador + bloco dark premium */}
        <div className="w-24 h-px bg-gold-500/30 mx-auto mb-12"></div>

        <div className="bg-layer-1 rounded-2xl p-8 lg:p-12 shadow-2xl ring-1 ring-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-secondary-50 mb-4">
              <svg
                className="w-8 h-8 inline mr-2 text-gold-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              Diferencial Técnico que Importa
            </h3>
            <p className="text-lg text-secondary-300">
              Não é só mais um engenheiro. É integração total com seu workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* BIM & AutoCAD */}
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-secondary-50 mb-2">BIM & AutoCAD</h4>
              <p className="text-secondary-300">Seus arquivos, nossa expertise</p>
            </div>

            {/* ROI Comprovado */}
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h4 className="font-bold text-secondary-50 mb-2">ROI Comprovado</h4>
              <p className="text-secondary-300">Valorização patrimonial mensurável</p>
            </div>

            {/* Automação Smart */}
            <div className="text-center">
              <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-secondary-50 mb-2">Automação Smart</h4>
              <p className="text-secondary-300">Tecnologia que impressiona</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}