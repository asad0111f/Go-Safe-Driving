import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta, JsonLd } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Badge from '@/components/Badge';
import { Button } from '@/components/Button';
import { Check } from 'lucide-react';
import MicroBounce from '@/components/motion/MicroBounce';
import TrainingGallery from '@/components/TrainingGallery';

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — Go Safe Driving</title>
        <meta name="description" content="Clear, upfront pricing for driving lessons in Hamilton. No hidden fees." />
      </Helmet>
      <Canonical />\n      <JsonLd data={{'@context':'https://schema.org','@type':'ItemList',name:'Lesson Packages',itemListElement:[{'@type':'Product',name:'Starter',description:'60-min 1-on-1 lesson for beginners',offers:{'@type':'Offer',price:'49',priceCurrency:'CAD',availability:'https://schema.org/InStock'}},{'@type':'Product',name:'Focused Prep',description:'Three 60-min lessons for test prep',offers:{'@type':'Offer',price:'129',priceCurrency:'CAD',availability:'https://schema.org/InStock'}},{'@type':'Product',name:'Confidence Pack',description:'Six 60-min lessons plus mock test',offers:{'@type':'Offer',price:'249',priceCurrency:'CAD',availability:'https://schema.org/InStock'}}]} } />\n
      \n      <JsonLd data={{'@context':'https://schema.org','@type':'ItemList',name:'Lesson Packages',itemListElement:[{'@type':'Product',name:'Starter',description:'60-min 1-on-1 lesson for beginners',offers:{'@type':'Offer',price:'49',priceCurrency:'CAD',availability:'https://schema.org/InStock'}},{'@type':'Product',name:'Focused Prep',description:'Three 60-min lessons for test prep',offers:{'@type':'Offer',price:'129',priceCurrency:'CAD',availability:'https://schema.org/InStock'}},{'@type':'Product',name:'Confidence Pack',description:'Six 60-min lessons plus mock test',offers:{'@type':'Offer',price:'249',priceCurrency:'CAD',availability:'https://schema.org/InStock'}}]} } />

      <Section title="Simple plans, real value" subtitle="Choose the plan that fits your goals.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Starter */}
          <Card className="p-6">
            <h3>Starter</h3>
            <p className="mt-2 text-3xl font-semibold tracking-tight">$49</p>
            <p className="mt-1 text-sm text-neutral-600">What’s included</p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              {['60‑min 1‑on‑1 lesson', 'Beginner basics + safety', 'Immediate feedback + next steps'].map((f) => (
                <li key={f} className="flex items-start gap-2"><Check size={18} className="mt-0.5 text-primary" /><span>{f}</span></li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90" href="tel:+12897001347">Call Now</a>
              </MicroBounce>
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="/contact">Book Lesson</a>
              </MicroBounce>
            </div>
          </Card>

          {/* Focused Prep (Most Popular) */}
          <Card className="p-6 ring-1 ring-primary/20">
            <div className="flex items-center justify-between">
              <h3>Focused Prep</h3>
              <Badge>Most Popular</Badge>
            </div>
            <p className="mt-2 text-3xl font-semibold tracking-tight">$129</p>
            <p className="mt-1 text-sm text-neutral-600">What’s included</p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              {['3 × 60‑min lessons', 'Road‑test strategies + routes', 'Parking + observation mastery'].map((f) => (
                <li key={f} className="flex items-start gap-2"><Check size={18} className="mt-0.5 text-primary" /><span>{f}</span></li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90" href="tel:+12897001347">Call Now</a>
              </MicroBounce>
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="/contact">Book Lesson</a>
              </MicroBounce>
            </div>
          </Card>

          {/* Confidence Pack */}
          <Card className="p-6">
            <h3>Confidence Pack</h3>
            <p className="mt-2 text-3xl font-semibold tracking-tight">$249</p>
            <p className="mt-1 text-sm text-neutral-600">What’s included</p>
            <ul className="mt-3 space-y-2 text-neutral-700">
              {['6 × 60‑min lessons', 'Highway practice + merging', 'Mock test + final tune‑up'].map((f) => (
                <li key={f} className="flex items-start gap-2"><Check size={18} className="mt-0.5 text-primary" /><span>{f}</span></li>
              ))}
            </ul>
            <div className="mt-6 grid gap-2">
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90" href="tel:+12897001347">Call Now</a>
              </MicroBounce>
              <MicroBounce>
                <a className="inline-flex h-10 w-full items-center justify-center rounded-2xl border border-neutral-300 bg-white px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-50" href="/contact">Book Lesson</a>
              </MicroBounce>
            </div>
          </Card>
        </div>

        {/* Guarantee + terms */}
        <p className="mt-6 text-center text-sm text-neutral-700">Clear, upfront pricing. No hidden fees.</p>
        <p className="mt-2 text-center text-xs text-neutral-500">Terms: 24‑hour cancellation policy. Late cancellations or no‑shows may incur a fee. Prices subject to change.</p>
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

      <TrainingGallery />
    </>
  );
}
