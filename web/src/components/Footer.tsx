import { Link } from 'react-router-dom';
import { Facebook, Instagram } from 'lucide-react';
import { BUSINESS } from '@/lib/site';
import { LinkButton } from '@/components/LinkButton';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 bg-white/70 text-neutral-700">
      <div className="container py-6">
        <div className="grid items-start gap-6 md:grid-cols-3">
          {/* Brand + NAP (schema.org) */}
          <div className="flex items-center gap-3" itemScope itemType="https://schema.org/DrivingSchool">
            <img src="/brand/logo.png?v=2" alt="GoSafe Driving logo" className="h-12 w-auto" width="180" height="40" loading="lazy" decoding="async" />
            <div className="text-sm" aria-label="Business information">
              <div className="font-medium text-neutral-900" itemProp="name">{BUSINESS.name}</div>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">{BUSINESS.address.locality}</span>, <span itemProp="addressRegion">{BUSINESS.address.region}</span>, <span itemProp="addressCountry">{BUSINESS.address.country}</span>
              </div>
              <a href={`tel:${BUSINESS.phone}`} itemProp="telephone" className="text-neutral-700 hover:text-neutral-900">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm justify-start md:justify-center">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-neutral-900">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Service area + socials */}
          <div className="flex items-center justify-start gap-4 md:justify-end">
            <span className="text-sm text-neutral-600">Serving Hamilton, Ontario</span>
            <div className="flex items-center gap-3 text-neutral-500">
              {import.meta.env.VITE_FACEBOOK_URL ? (
                <a href={import.meta.env.VITE_FACEBOOK_URL} aria-label="Facebook" className="hover:text-neutral-800" rel="me noopener" target="_blank">
                  <Facebook size={18} />
                </a>
              ) : null}
              {import.meta.env.VITE_INSTAGRAM_URL ? (
                <a href={import.meta.env.VITE_INSTAGRAM_URL} aria-label="Instagram" className="hover:text-neutral-800" rel="me noopener" target="_blank">
                  <Instagram size={18} />
                </a>
              ) : null}
            </div>
            <div className="ml-2">
              <LinkButton href="/contact" variant="secondary" size="sm" aria-label="Book an appointment">
                Book Appointment
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Bottom row: legal note, compact and unobtrusive */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} GoSafe Driving</p>
          <p className="text-[0.72rem] text-neutral-600/70">
            Licensed private driving instructor. Not a Ministry-licensed driving school. G2/G lessons only.
          </p>
        </div>
      </div>
    </footer>
  );
}

