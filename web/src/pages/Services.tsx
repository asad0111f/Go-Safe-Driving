import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import { Button } from '@/components/Button';
import FadeIn from '@/components/motion/FadeIn';
import { Disclosure } from '@headlessui/react';
import { BadgeCheck, RefreshCw, Car, Navigation, Route, ChevronDown } from 'lucide-react';
import MicroBounce from '@/components/motion/MicroBounce';
import TrainingGallery from '@/components/TrainingGallery';

type Service = {
  key: string;
  name: string;
  icon: JSX.Element;
  bullets: string[];
  length: string;
};

const services: Service[] = [
  {
    key: 'g2',
    name: 'G2 Road-Test Prep',
    icon: <Route size={20} />,
    bullets: ['Route practice on local test roads', 'Essential maneuvers + parking', 'Test-day strategy + tips'],
    length: 'Typically 2 x 60-min sessions',
  },
  {
    key: 'g',
    name: 'G Road-Test Prep',
    icon: <BadgeCheck size={20} />,
    bullets: ['Highway + advanced observation', 'Complex intersections + merging', 'Polished test readiness'],
    length: 'Typically 2 x 90-min sessions',
  },
  {
    key: 'refresher',
    name: 'Refresher Lessons',
    icon: <RefreshCw size={20} />,
    bullets: ['Rebuild confidence quickly', 'Update on rules + best practices', 'Smooth city driving'],
    length: '60-min per session',
  },
  {
    key: 'parking',
    name: 'Parking Intensive',
    icon: <Car size={20} />,
    bullets: ['Parallel + reverse parking', 'Three-point turns mastered', 'Tight-space control'],
    length: '60-min focused session',
  },
  {
    key: 'highway',
    name: 'Highway Confidence',
    icon: <Navigation size={20} />,
    bullets: ['Entry/exit + merging', 'Safe lane changes + spacing', 'Defensive highway strategies'],
    length: '90-min confidence builder',
  },
];

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — Go Safe Driving</title>
        <meta
          name="description"
          content="G2/G road-test prep, refresher lessons, parking intensive, and highway confidence coaching in Hamilton."
        />
      </Helmet>
      <SocialMeta
        title="Services — Go Safe Driving"
        description="G2/G road-test prep, refresher lessons, parking intensive, and highway confidence coaching in Hamilton."
        imagePath="/og/services.svg"
      />
      <Canonical />

      {/* Intro */}
      <Section
        title="Focused services for real progress"
        subtitle="Choose a targeted path or mix and match to fit your goals."
      >
        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.key} delay={i * 0.05}>
              <Card hoverLift className="p-6">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {s.icon}
                  </div>
                  <h3 className="text-xl">{s.name}</h3>
                </div>
                <ul className="mt-4 space-y-1 text-neutral-700">
                  {s.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm text-neutral-600">{s.length}</p>
                <div className="mt-5">
                  <MicroBounce>
                    <Button as="a" href="/contact" className="w-full text-center">
                      Book this service
                    </Button>
                  </MicroBounce>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Page CTA */}
      <Section decorativeBlobs={false} className="py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <MicroBounce>
            <a
              href="tel:+12897001347"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
            >
              Call Now
            </a>
          </MicroBounce>
          <MicroBounce>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            >
              Book Lesson
            </a>
          </MicroBounce>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        title="Frequently asked questions"
        subtitle="Have more questions? Reach out — happy to help."
        decorativeBlobs={false}
      >
        <div
          className="mx-auto max-w-3xl divide-y divide-neutral-200 rounded-2xl bg-white/70 shadow-soft"
          role="region"
          aria-label="FAQs"
        >
          {[
            {
              q: 'Do you provide the car for the road test?',
              a: 'Yes. The lesson vehicle is available for test day (subject to availability). Ask about pricing when booking.',
            },
            {
              q: 'What areas do you serve?',
              a: 'Hamilton and nearby areas. If you are outside the core, contact us to confirm.',
            },
            {
              q: 'How do I book or reschedule?',
              a: 'Use the contact page to request a time. Rescheduling is easy with 24 hours notice.',
            },
            {
              q: 'Payment methods?',
              a: 'E-transfer and cash are accepted. Receipts provided on request.',
            },
          ].map((item) => (
            <Disclosure as="div" key={item.q} className="px-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between py-4 text-left">
                    <span className="text-sm font-medium text-neutral-900">{item.q}</span>
                    <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pb-4 text-sm text-neutral-700">{item.a}</Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </Section>

      <TrainingGallery />
    </>
  );
}

