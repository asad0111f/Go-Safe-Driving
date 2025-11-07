import { Link, NavLink } from 'react-router-dom';
import { Dialog } from '@headlessui/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookLesson } from '@/components/book/BookLessonProvider';

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
];

type HeaderProps = { sticky?: boolean };

export default function Header({ sticky = false }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { open: openBook } = useBookLesson();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${sticky ? 'sticky top-0 z-40' : ''} transition-colors duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur shadow-soft border-b border-neutral-200/70' : 'bg-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between" role="navigation" aria-label="Primary">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-neutral-900">
          <img src="/brand/logo.png?v=2" alt="Go Safe Driving" className="h-12 w-auto" width="180" height="40" />
        </Link>

        {/* Nav links (desktop) */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-neutral-800 hover:text-neutral-900'
                }`
              }
              end
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+1234567890"
            aria-label="Call Now"
            className="inline-flex h-10 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
          >
            Call Now
          </a>
          <button
            type="button"
            onClick={() => openBook()}
            aria-label="Book Lesson"
            className="inline-flex h-10 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
          >
            Book Lesson
          </button>
        </div>

        {/* Mobile toggle (visible only on mobile) */}
        <button
          aria-label="Open main menu"
          className="inline-flex rounded-xl p-2 hover:bg-neutral-100 md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-50 md:hidden" aria-label="Mobile menu">
        <div className="fixed inset-0">
          <AnimatePresence>
            {open && (
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/30"
                onClick={() => setOpen(false)}
              />
            )}
          </AnimatePresence>
        </div>
        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <AnimatePresence>
            {open && (
              <motion.div
                key="panel"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                className="w-80 max-w-[85vw] bg-white shadow-soft"
              >
                <div className="flex h-16 items-center justify-between px-4">
                  <Dialog.Title className="sr-only" id="mobile-menu-title">Main menu</Dialog.Title>
                  <Link to="/" className="font-semibold" onClick={() => setOpen(false)}>
                    <img src="/brand/logo.png?v=2" alt="Go Safe Driving" className="h-11 w-auto" width="160" height="36" />
                  </Link>
                  <button
                    aria-label="Close menu"
                    className="inline-flex rounded-xl p-2 hover:bg-neutral-100"
                    onClick={() => setOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>
                <nav className="grid gap-1 px-3 pb-4" aria-labelledby="mobile-menu-title">
                  {links.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `rounded-xl px-3 py-2 text-sm font-medium ${
                          isActive ? 'bg-primary/10 text-primary' : 'text-neutral-900 hover:bg-neutral-100'
                        }`
                      }
                      end
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </NavLink>
                  ))}
                  <div className="mt-2 grid gap-2 px-0.5">
                    <a
                      href="tel:+1234567890"
                      aria-label="Call Now"
                      className="inline-flex h-10 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
                    >
                      Call Now
                    </a>
                    <button
                      type="button"
                      aria-label="Book Lesson"
                      className="inline-flex h-10 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                      onClick={() => {
                        setOpen(false);
                        openBook();
                      }}
                    >
                      Book Lesson
                    </button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Dialog>
    </header>
  );
}
