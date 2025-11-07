import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

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
          {/* Brand */}
          <div className="flex items-center gap-2">
            <img src="/brand/logo.png?v=2" alt="Go Safe Driving" className="h-12 w-auto" width="180" height="40" />
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
            <span className="text-sm text-neutral-600">Serving the Greater Toronto Area</span>
            <div className="flex items-center gap-3 text-neutral-500">
              <a href="#" aria-label="Facebook" className="hover:text-neutral-800">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-neutral-800">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-neutral-800">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row: legal note, compact and unobtrusive */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-xs text-neutral-500">© {new Date().getFullYear()} Go Safe Driving</p>
          <p className="text-[0.72rem] text-neutral-600/70">
            Licensed private driving instructor. Not a Ministry-licensed driving school. G2/G lessons only.
          </p>
        </div>
      </div>
    </footer>
  );
}
