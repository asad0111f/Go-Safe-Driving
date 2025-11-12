export const BUSINESS = {
  name: 'GoSafe Driving',
  url: 'https://www.gosafedriving.ca/',
  phone: '+1-289-700-1347',
  phoneDisplay: '(289) 700-1347',
  email: (import.meta as any)?.env?.VITE_CONTACT_EMAIL as string | undefined,
  address: {
    locality: 'Hamilton',
    region: 'ON',
    country: 'CA',
  },
  logo: 'https://www.gosafedriving.ca/brand/logo.png',
  image: 'https://www.gosafedriving.ca/cover.jpg',
  geo: { lat: 43.2557, lon: -79.8711 },
  mapUrl: 'https://maps.google.com/?q=Hamilton,ON',
};

export const SOCIALS = {
  facebook: (import.meta as any)?.env?.VITE_FACEBOOK_URL as string | undefined,
  instagram: (import.meta as any)?.env?.VITE_INSTAGRAM_URL as string | undefined,
};

export const SOCIAL_LINKS = Object.values(SOCIALS).filter(Boolean) as string[];
