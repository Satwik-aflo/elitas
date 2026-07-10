export const SITE = {
  name: 'Elitas',
  tagline: 'Land. Life. Legacy.',
  description:
    'Elitas creates serviced farm plot communities near Hyderabad, shaped for slower weekends, living landscapes and lasting value.',
  phoneDisplay: '+91 800 890 81 82',
  phoneHref: 'tel:+918008908182',
  whatsappNumber: '918008908182',
  location: 'Hyderabad, Telangana',
};

export function whatsappHref(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Prefix a root-relative path with the deploy base used by GitHub Pages. */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return `${base}/`;
  return `${base}${path}`;
}
