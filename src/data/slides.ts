export interface SlideData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  copy?: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  microcopy?: string[];
}

export const heroSlides: SlideData[] = [
  {
    id: 1,
    image: '/images/main-slider/15.webp',
    title: 'Seus projetos merecem ser inesquecíveis',
    subtitle: 'Automação residencial que encanta clientes e diferencia sua marca.',
    copy: 'O parceiro técnico que transforma sua visão criativa em experiências extraordinárias. BIM & AutoCAD, MBA FGV, João Pessoa - PB.',
    ctaText: 'Vamos criar algo extraordinário juntos',
    ctaHref: '/#contato',
    ctaSecondaryText: 'Como funciona',
    ctaSecondaryHref: '/#processo',
    microcopy: ['BIM & AutoCAD', 'MBA FGV', 'CREA-PB Ativo'],
  },
  {
    id: 2,
    image: '/images/main-slider/10.webp',
    title: 'Parceria estratégica para arquitetos',
    subtitle: 'Você lidera o design. Eu adiciono a expertise elétrica que faltava.',
    copy: 'Clientes que viram fãs da sua marca. ROI que convence na primeira reunião. Automação que ninguém mais oferece.',
    ctaText: 'Quero ser seu parceiro técnico',
    ctaHref: '/#contato',
    ctaSecondaryText: 'Ver cases reais',
    ctaSecondaryHref: '/#cases',
    microcopy: ['Sem compromisso', 'Só uma conversa entre profissionais'],
  },
  {
    id: 3,
    image: '/images/main-slider/house-croqui.webp',
    title: 'Projetos que vendem por si mesmos',
    subtitle: 'Automação inteligente que impressiona desde a primeira apresentação.',
    copy: 'Integração total com seu workflow. Seus arquivos BIM/AutoCAD, nossa expertise. Apresentações que vendem sozinhas.',
    ctaText: 'Começar uma parceria',
    ctaHref: '/#contato',
    ctaSecondaryText: 'Conhecer o processo',
    ctaSecondaryHref: '/#processo',
    microcopy: ['Projetos que vendem', 'Clientes encantados', 'Referências garantidas'],
  },
  {
    id: 4,
    image: '/images/main-slider/6.webp',
    title: 'Tecnologia invisível, experiência memorável',
    subtitle: 'Cada detalhe pensado para criar momentos únicos em cada ambiente.',
    copy: 'Da iluminação circadiana ao som ambiente, da climatização às persianas. Tudo integrado, tudo elegante, tudo seu.',
    ctaText: 'Vamos conversar',
    ctaHref: '/#contato',
    ctaSecondaryText: 'Ver portfólio',
    ctaSecondaryHref: '/#cases',
    microcopy: ['Atendimento presencial em João Pessoa', 'Projetos remotos para toda a Paraíba'],
  },
];
