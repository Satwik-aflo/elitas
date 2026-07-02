export const SITE = {
  name: 'Bioma',
  tagline: 'Red earth · Living land',
  description:
    'Bioma builds serviced farm plot communities near Hyderabad. Resident crews farm every plot year-round — owners arrive to shade, soil and a standing harvest.',
  phoneDisplay: '+91 800 890 81 82',
  phoneHref: 'tel:+918008908182',
  whatsappNumber: '918008908182',
  location: 'Hyderabad, Telangana',
};

export function whatsappHref(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Prefix a root-relative path with the deploy base (GitHub Pages serves under /bioma). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path === '/') return `${base}/`;
  return `${base}${path}`;
}
