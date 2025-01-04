export const navigationLinks = [
  { id: 1, name: 'Home', link: 'home' },
  { id: 2, name: 'About', link: 'about' },
  { id: 3, name: 'Portfolio', link: 'portfolio' },
  { id: 4, name: 'Pricing', link: 'pricing' },
  { id: 5, name: 'Skills', link: 'skills' },
  { id: 6, name: 'Contact', link: 'contact' },
] as const;

export type NavigationLink = typeof navigationLinks[number];
