export interface PersonaExample {
  text: string;
}

export interface Persona {
  id: number;
  emoji: string;
  title: string;
  shortDesc: string;
  image: string;
  imagePosition?: string; // object-position da imagem, ex: 'top', '50% 20%'. Padrão: 'center'
  goal: string;
  examples: string[];
  result: string;
  idealPackage: string;
}

export interface InspirationTab {
  id: number;
  label: string;
  icon: string;
  color: string;
  personas: Persona[];
}

export const inspirationTabs: InspirationTab[] = [
  {
    id: 1,
    label: 'Por Estágio de Vida',
    icon: 'fa-users',
    color: '#00bdbd',
    personas: [
      {
        id: 11,
        emoji: '',
        title: 'Casal Jovem Sem Filhos',
        shortDesc: 'Conforto, entretenimento e tecnologia que funciona do jeito de vocês.',
        image: '/images/casal-sem-filhos.webp',
        goal: 'Automação que intensifica o conforto e o entretenimento. Você quer tecnologia que funcione ao chegar em casa, em uma festa, ou quando viaja.',
        examples: [
          'Iluminação que muda de cor conforme a música (festas, filme)',
          'Temperatura automática — dorme bem, acorda refrescante',
          'Sonorização integrada — música em toda a casa ou só no quarto',
          'Segurança inteligente — câmeras + sensores enquanto viaja',
          'App centralizado — uma tela controla tudo',
        ],
        result: 'Casa que é extensão de vocês. Mais conforto, menos tarefas. Mais tempo juntos, menos tempo com controles remotos.',
        idealPackage: 'CONFORTO ou PREMIUM',
      },
      {
        id: 12,
        emoji: '',
        title: 'Família Com Crianças Pequenas',
        shortDesc: 'Rotina mais fácil, casa mais segura. Menos coisas para lembrar.',
        image: '/images/crianca-saindo-da-caixa-de-papelao.webp',
        goal: 'Automação que torna a rotina mais fácil e a casa mais segura. Menos coisas para lembrar, mais tranquilidade.',
        examples: [
          'Iluminação noturna automática — evita acidentes, dorme bem',
          'Temperatura controlada — bebê dorme melhor em ambiente ideal',
          'Segurança: câmeras + sensores de movimento',
          'Rotinas automáticas — hora de dormir = luzes diminuem + som branco',
          'Controle de acesso — saber quem entra e sai da casa',
          'App simples — você, pai/mãe ou babá conseguem acessar',
        ],
        result: 'Mais segurança enquanto você dorme. Menos preocupação. Rotina mais previsível para a criança.',
        idealPackage: 'ESSENCIAL ou CONFORTO',
      },
      {
        id: 13,
        emoji: '',
        title: 'Família Com Filhos Adolescentes',
        shortDesc: 'Economizar energia, controlar consumo e reduzir contas.',
        image: '/images/jovem-tocando-violao.webp',
        imagePosition: 'top',
        goal: 'Economizar energia. Controlar o consumo e desperdício. Casa inteligente que reduz contas.',
        examples: [
          'Iluminação eficiente — LED inteligente, apaga sozinha quando sai do quarto',
          'Temperatura controlada — ar-condicionado só quando precisa',
          'Monitoramento de consumo — app mostra quanto cada coisa gasta',
          'Rotinas automáticas — chuveiro quente sem deixar água esquentando',
          'Segurança para dar liberdade — monitoramento discreto',
          'Integração com energia solar (se tiver)',
        ],
        result: 'Conta de energia reduzida em até 30%. Adolescentes aprendem a economizar. Você mantém controle sem ser invasivo.',
        idealPackage: 'CONFORTO ou PREMIUM',
      },
      {
        id: 14,
        emoji: '',
        title: 'Casal Maduro',
        shortDesc: 'Conforto máximo, acessibilidade e independência com segurança.',
        image: '/images/casal-de-idoso-em-ligacao-no-celular.webp',
        imagePosition: 'top',
        goal: 'Conforto máximo. Acessibilidade. Gestão simplificada. Envelhecer em casa com segurança e independência.',
        examples: [
          'Iluminação automática à noite — evita quedas',
          'Cortinas e persianas motorizadas — sem esforço físico',
          'Controle por voz — sem apertar botões pequenos',
          'Temperatura automática — proteção contra choques térmicos',
          'Sistema de emergência — um botão chama ajuda',
          'Acessibilidade total — tudo controlável da cama ou sofá',
        ],
        result: 'Independência mantida. Segurança aumentada. Família descansa sabendo que vocês estão bem.',
        idealPackage: 'CONFORTO ou PREMIUM',
      },
    ],
  },
  {
    id: 2,
    label: 'Por Tipo de Imóvel',
    icon: 'fa-home',
    color: '#59ab66',
    personas: [
      {
        id: 21,
        emoji: '',
        title: 'Apartamento',
        shortDesc: 'Sem obra, sem fios aparentes. Automação wireless que cabe em qualquer lugar.',
        image: '/images/apartamenti-planta-isometrica.webp',
        goal: 'Espaço limitado. Sem obra civil. Sem mexer na estrutura. Automação wireless (WiFi/Zigbee) que cabe em qualquer lugar.',
        examples: [
          'Iluminação inteligente — lâmpadas + luminárias portáteis',
          'Temperatura via controle inteligente — ar + aquecedor',
          'Segurança portátil — câmeras e sensores sem instalação',
          'Sonorização via Bluetooth + alto-falantes espertos',
          'Tudo funciona na rede WiFi do seu apartamento',
        ],
        result: 'Leva para outro apartamento se mudar. Sem danos ao imóvel. Fácil expansão.',
        idealPackage: 'ESSENCIAL ou CONFORTO',
      },
      {
        id: 22,
        emoji: '',
        title: 'Casa',
        shortDesc: 'Mais espaço, mais ambientes, mais oportunidades. Automação completa.',
        image: '/images/house-croqui.webp',
        goal: 'Espaço maior. Mais ambientes. Mais oportunidades. Automação completa: wireless + cabeamento estruturado.',
        examples: [
          'Iluminação em todos os ambientes — sala, quartos, cozinha, garagem',
          'Sonorização em áreas diferentes — sistema distribuído',
          'Segurança abrangente — câmeras e sensores em pontos-chave',
          'Automação de fachada — portão, garagem, iluminação externa',
          'Sistema de irrigação inteligente para jardim',
          'Controle de acesso na entrada principal',
        ],
        result: 'Escalabilidade total. Começar pequeno, expandir aos poucos. Tecnologia fio + wireless trabalhando juntas.',
        idealPackage: 'PREMIUM ou CUSTOMIZADO',
      },
      {
        id: 23,
        emoji: '',
        title: 'Retrofit (Imóvel Antigo)',
        shortDesc: 'Modernizar sem destruir. Automação que respeita a estrutura existente.',
        image: '/images/preparando-tinta-para-reforma.webp',
        goal: 'Casa antiga. Possível reforma. Vontade de modernizar sem destruir o que já existe.',
        examples: [
          'Cabeamento estruturado nas paredes durante obra (se houver)',
          'Wireless nos ambientes que não passam por reforma',
          'Tecnologia Zigbee que penetra paredes de concreto',
          'Fios passando por canaletas discretas — visual limpo',
          'Acessórios que não danificam — arandelas e luminárias portáteis',
        ],
        result: 'Modernizar sem destruir o charme antigo. Solução elegante mesmo em estrutura limitada.',
        idealPackage: 'ESSENCIAL → PREMIUM (conforme escopo)',
      },
    ],
  },
  {
    id: 3,
    label: 'Necessidades Especiais',
    icon: 'fa-heart',
    color: '#ff6c3a',
    personas: [
      {
        id: 31,
        emoji: '',
        title: 'Família Com TEA ou Síndrome de Down',
        shortDesc: 'Ambiente previsível = segurança emocional. Iluminação circadiana e rotinas visuais.',
        image: '/images/rostos-em-papel-sendo-central-cores-inclusao.webp',
        goal: 'Crianças com TEA/Down têm sensibilidades sensoriais intensas. Ambiente previsível = segurança emocional e melhor aprendizado.',
        examples: [
          'Iluminação circadiana — luz que acompanha a rotina do dia',
          'Rotinas visuais automáticas — hora de dormir, banho, estudo com sinais de luz',
          'Redução de sensibilidade — luz uniforme, sem piscadas',
          'Sons brancos que mascaram ruídos externos',
          'Cortinas automáticas para controle de luz externa',
          'Temperatura mantida sem flutuações',
        ],
        result: 'Criança dorme melhor. Rotina visual = segurança. Menos crises de ansiedade. Qualidade de vida familiar aumenta significativamente.',
        idealPackage: 'CONFORTO expandido com foco em iluminação circadiana',
      },
      {
        id: 32,
        emoji: '',
        title: 'Segurança Para Idosos (Aging in Place)',
        shortDesc: 'Envelhecer em casa com independência, dignidade e segurança discreta.',
        image: '/images/casal-idosos-brincando-guerra-travesseiro.webp',
        goal: 'Idosos querem envelhecer em casa mantendo independência. Quedas são a principal causa de morte acidental em idosos.',
        examples: [
          'Sensores de movimento — luz acende gradualmente à noite no corredor',
          'Botão único na cama — controla luz, cortina e temperatura',
          'Controle por voz (Alexa/Google Home) — sem sair da cama',
          'Monitoramento discreto — detecta inatividade e alerta a família',
          'Sistema de emergência — um botão chama ajuda',
          'Interface simples — não de "jovem"',
        ],
        result: 'Idoso mantém independência em casa. Família tem paz mental. Vida com dignidade, do seu jeito, até o final.',
        idealPackage: 'PREMIUM com foco em acessibilidade + segurança discreta',
      },
    ],
  },
];
