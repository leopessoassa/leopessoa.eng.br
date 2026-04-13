import type { NavItem } from '../types/navigation';

export const navItems: NavItem[] = [
  { label: 'O Que É Possível', href: '/#inspiracao' },
  { label: 'Quem Sou Eu',      href: '/#sobre' },
  { label: 'Como Funciona',    href: '/#como-funciona' },
  { label: 'Projetos Reais',   href: '/#projetos' },
  {
    label: 'Para Parceiros',
    href: 'https://parceiros.leopessoa.eng.br',
    isExternal: true,
    isPartner: true,
  },
  {
    label: 'Fale Comigo',
    href: '/#contato',
    isCta: true,
  },
];
