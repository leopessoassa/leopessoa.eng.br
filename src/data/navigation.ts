import type { NavItem } from '../types/navigation';

export const navItems: NavItem[] = [
  { label: 'O Especialista',        href: '/#sobre' },
  { label: 'A Parceria',            href: '/#processo' },
  { label: 'Projetos',              href: '/#cases' },
  {
    label: 'Para Clientes',
    href: 'https://casainteligente.leopessoa.eng.br',
    isExternal: true,
  },
  {
    label: 'Conversar →',
    href: '/#contato',
    isCta: true,
  },
];
