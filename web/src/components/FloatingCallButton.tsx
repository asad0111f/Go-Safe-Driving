import MicroBounce from '@/components/motion/MicroBounce';
import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <div
      className="fixed bottom-4 right-4 z-40 md:hidden"
      style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom))' }}
    >
      <MicroBounce>
        <a
          href="tel:+12897001347"
          aria-label="Call Now"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-soft hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Phone size={20} />
        </a>
      </MicroBounce>
    </div>
  );
}
