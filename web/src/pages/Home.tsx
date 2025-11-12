import { Helmet } from 'react-helmet-async';
import { Canonical, JsonLd, SocialMeta } from '@/lib/seo';
import { BUSINESS, SOCIAL_LINKS } from '@/lib/site';
import { REVIEWS, AGGREGATE } from '@/lib/reviews';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import { Button } from '@/components/Button';
import { LinkButton } from '@/components/LinkButton';
import Section from '@/components/Section';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import { heroCar } from '@/assets/placeholders';
import FeatureItem from '@/components/FeatureItem';
import TestimonialCard from '@/components/TestimonialCard';
import Stat from '@/components/Stat';
import FadeIn from '@/components/motion/FadeIn';
import MicroBounce from '@/components/motion/MicroBounce';
import { useBookLesson } from '@/components/book/BookLessonProvider';
import { Calendar, MapPin, Smile, Shield, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GoSafe Driving | Driving Lessons in Hamilton, Ontario</title>
        <meta name="description" content="Modern, patient 1-on-1 driving lessons in Hamilton. G2 & G road test prep with professional instructors." />
      </Helmet>
      <SocialMeta
        title="GoSafe Driving | Driving Lessons in Hamilton"
        description="Modern, patient 1-on-1 driving lessons in Hamilton. Book today!"
        imagePath="https://www.gosafedriving.ca/cover.jpg"
        pageUrl="https://www.gosafedriving.ca/"
      />
      <Canonical />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DrivingSchool',
          '@id': `${BUSINESS.url}#driving-school`,
          name: BUSINESS.name,
          url: BUSINESS.url,
          logo: BUSINESS.logo,
          image: [BUSINESS.image, BUSINESS.logo],
          telephone: BUSINESS.phone,
          email: BUSINESS.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: BUSINESS.address.locality,
            addressRegion: BUSINESS.address.region,
            addressCountry: BUSINESS.address.country,
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: BUSINESS.geo.lat,
            longitude: BUSINESS.geo.lon,
          },
          areaServed: [
            'Hamilton, ON',
            'Burlington, ON',
            'Stoney Creek, ON',
            'Ancaster, ON',
          ],
          serviceArea: [
            { '@type': 'Place', name: 'Hamilton, ON' },
            { '@type': 'Place', name: 'Burlington, ON' },
            { '@type': 'Place', name: 'Stoney Creek, ON' },
            { '@type': 'Place', name: 'Ancaster, ON' },
          ],
          openingHoursSpecification: [
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '20:00' },
            { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '17:00' },
          ],
          priceRange: '$$',
          hasMap: BUSINESS.mapUrl,
          sameAs: SOCIAL_LINKS,
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: AGGREGATE.avg,
            reviewCount: AGGREGATE.total,
          },
          review: REVIEWS.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: r.name },
            datePublished: r.dateIso,
            reviewBody: r.text,
            reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5, worstRating: 1 },
          })),
        }}
      />

      {/* Hero */}
      <Section className="pt-6" decorativeBlobs>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <FadeIn as="div">
            {/** Modal hook */}
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            {(() => { return null; })()}
            <h1>Modern, Patient, 1-on-1 Driving Lessons in Hamilton</h1>
            <p className="mt-4 text-lg text-neutral-700">Road-test prep • Highway confidence • Parking mastery</p>
            <div className="mt-6 flex gap-3">
              <MicroBounce>
                <a
                  href="tel:+12897001347"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-5 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
                >
                  Call Now
                </a>
              </MicroBounce>
              <BookLessonButton />
            </div>

            {/* Social proof */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm text-neutral-800 shadow-soft">
              <span className="flex items-center gap-0.5 text-amber-500">
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
                <Star size={16} className="fill-current" />
              </span>
              <span className="text-neutral-700">4.9 from 120+ learners</span>
            </div>
          </FadeIn>

          {/* Hero image with subtle parallax on hover */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 240, damping: 24 }}
              className="overflow-hidden rounded-3xl shadow-soft"
            >
              <ResponsiveImage
                basePath="/src/assets/images/hero/car"
                alt="Car interior dashboard"
                sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 100vw"
                imgClassName="h-auto w-full object-cover"
                fallbackSrc="/images/hero/hero-header.jpg"
                // Hero image should not be lazy for LCP
                widths={[768, 1024, 1440, 1920]}
                fetchPriority="high"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why choose us?" subtitle="Focused, friendly coaching tailored to your goals.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureItem icon={<Calendar size={20} />} title="Flexible scheduling" text="Lessons that fit your week, evenings and weekends available." />
          <FeatureItem icon={<MapPin size={20} />} title="Local test routes" text="Practice on the exact roads you'll see on test day." delay={0.05} />
          <FeatureItem icon={<Smile size={20} />} title="Calm coaching" text="Patient instruction to build confidence at your pace." delay={0.1} />
          <FeatureItem icon={<Shield size={20} />} title="Safe vehicle" text="Fully insured, dual-controls, clean and comfortable." delay={0.15} />
        </div>
      </Section>

      {/* Services summary (replaces How it works) */}
      <Section title="Popular services" subtitle="Targeted coaching designed to move you forward fast.">
        <div className="grid gap-6 md:grid-cols-3">
          <FadeIn>
            <Card hoverLift className="p-6">
              <h3 className="text-xl">G2 Road-Test Prep</h3>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Practice on local test routes</li>
                <li>Core maneuvers + parking</li>
                <li>Test-day strategy</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <MicroBounce>
                  <LinkButton href="tel:+12897001347">Call Now</LinkButton>
                </MicroBounce>
                <MicroBounce>
                  <LinkButton href="/contact" variant="secondary">Book now</LinkButton>
                </MicroBounce>
              </div>
            </Card>
          </FadeIn>
          <FadeIn delay={0.05}>
            <Card hoverLift className="p-6">
              <h3 className="text-xl">Parking Intensive</h3>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Parallel + reverse parking</li>
                <li>Three-point turns mastered</li>
                <li>Tight-space control</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <MicroBounce>
                  <LinkButton href="tel:+12897001347">Call Now</LinkButton>
                </MicroBounce>
                <MicroBounce>
                  <LinkButton href="/contact" variant="secondary">Book now</LinkButton>
                </MicroBounce>
              </div>
            </Card>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Card hoverLift className="p-6">
              <h3 className="text-xl">Highway Confidence</h3>
              <ul className="mt-3 space-y-1 text-neutral-700">
                <li>Entry/exit + merging</li>
                <li>Safe lane changes</li>
                <li>Defensive spacing</li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                <MicroBounce>
                  <LinkButton href="tel:+12897001347">Call Now</LinkButton>
                </MicroBounce>
                <MicroBounce>
                  <LinkButton href="/contact" variant="secondary">Book now</LinkButton>
                </MicroBounce>
              </div>
            </Card>
          </FadeIn>
        </div>
        <div className="mt-6">
          <MicroBounce>
            <LinkButton variant="secondary" href="/services">View all Services</LinkButton>
          </MicroBounce>
        </div>
      </Section>

      {/* Training in action gallery */}
      <Section title="Training in action" subtitle="Real moments from behind the wheel.">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {[
            { src: '/images/Gallery/training/1.jpg', alt: 'Learner driving during lesson with instructor notes' },
            { src: '/images/Gallery/training/2.jpg', alt: 'Instructor coaching beside car and cones' },
            { src: '/images/Gallery/training/3.jpg', alt: 'Student at test lot practicing with cones' },
          ].map((g) => (
            <SwiperSlide key={g.src}>
              <img
                src={g.src}
                alt={g.alt}
                className="h-64 w-full rounded-2xl object-cover shadow-soft"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      

      {/* Testimonials carousel */}
      <Section title="What learners say" subtitle="Real feedback from local drivers.">
        <Swiper spaceBetween={16} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 1.2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
          <SwiperSlide>
            <TestimonialCard
              name="Ava C."
              isLocalGuide
              rating={5}
              date="Sep 2024"
            >
              Super patient and clear instruction. Practiced the exact test routes and felt calm on test day. Passed first try!
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Jasmin K."
              rating={5}
              date="Aug 2024"
            >
              Great coaching style. Parking finally clicked for me after struggling for months. Highly recommend!
            </TestimonialCard>
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard
              name="Marco T."
              rating={5}
              date="Aug 2024"
            >
              Very helpful lessons on highway merging and lane changes. I feel way more confident now.
            </TestimonialCard>
          </SwiperSlide>
        </Swiper>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions" subtitle="Everything you need to know about our driving lessons in Hamilton.">
        {(() => {
          const faqs = [
            {
              q: 'How much do driving lessons cost?',
              a: 'See our Pricing page for up-to-date packages and rates. We keep pricing clear and upfront.'
            },
            {
              q: 'What\'s the difference between G2 and G road test prep?',
              a: 'G2 focuses on city driving, core maneuvers, parking, and road-test strategies. G adds highway skills, advanced observation, and complex intersections.'
            },
            {
              q: 'How long is each lesson?',
              a: 'Most lessons are 60–90 minutes depending on the focus. We\'ll recommend a plan after your first session.'
            },
            {
              q: 'Do you offer pickup and drop-off? Which areas?',
              a: 'Yes—within our service area: Hamilton, Burlington, Stoney Creek, and Ancaster (subject to availability).'
            },
            {
              q: 'Can I use the lesson vehicle for my road test?',
              a: 'Yes—subject to availability. Ask about car-for-test pricing when you book.'
            },
            {
              q: 'What is your reschedule/cancellation policy?',
              a: 'We have a 24-hour reschedule policy. Late cancellations or no-shows may incur a fee.'
            },
            {
              q: 'How do I book a lesson?',
              a: 'Use the Contact page to request a time, or call us to discuss availability.'
            },
            {
              q: 'Which payment methods do you accept?',
              a: 'E-transfer and cash are accepted. Receipts available on request.'
            },
          ];
          return (
            <div>
              <div className="mx-auto max-w-3xl divide-y divide-neutral-200 rounded-2xl bg-white/70 shadow-soft">
                {faqs.map((item, i) => (
                  <details key={i} className="group px-4" aria-label={`FAQ ${i + 1}`}>
                    <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-left text-sm font-medium text-neutral-900">
                      {item.q}
                      <span className="ml-3 select-none text-neutral-400 group-open:rotate-180">▾</span>
                    </summary>
                    <div className="pb-4 text-sm text-neutral-700">{item.a}</div>
                  </details>
                ))}
              </div>
              <JsonLd
                data={{
                  '@context': 'https://schema.org',
                  '@type': 'FAQPage',
                  mainEntity: faqs.map((f) => ({
                    '@type': 'Question',
                    name: f.q,
                    acceptedAnswer: { '@type': 'Answer', text: f.a },
                  })),
                }}
              />
            </div>
          );
        })()}
      </Section>

      {/* Final CTA banner */}
      <Section decorativeBlobs blobsVariant="center" className="py-8">
        <Card className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-primary/10 via-white to-accent/10 p-8 text-center">
          <h3 className="text-2xl">Ready to feel confident behind the wheel?</h3>
          <p className="mt-2 text-neutral-700">Book your first lesson today and start progressing fast.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <MicroBounce>
              <a
                href="tel:+12897001347"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
              >
                Call Now
              </a>
            </MicroBounce>
            <BookLessonButton large />
          </div>
        </Card>
      </Section>
    </>
  );
}

function BookLessonButton({ large = false }: { large?: boolean }) {
  const { open } = useBookLesson();
  const size = large ? 'lg' : 'md';
  return (
    <MicroBounce>
      <Button variant="secondary" size={size as any} onClick={() => open()}>
        Book Lesson
      </Button>
    </MicroBounce>
  );
}

