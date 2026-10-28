// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export const PROFILE = {
  name: 'Shubham Gangurde',
  shortName: 'Shubham Gangurde',
  alias: 'Shubham',
  title: 'Full Stack Software Engineer',
  email: 'shubhamatpolimi@gmail.com',
  phone: '+39 344 447 1322',
  location: 'Milan, Italy',
  website: '',
  blogHost: '',
  formspreeId: '',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Shubham1632',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ShubhamGangurde/',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:shubhamatpolimi@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
