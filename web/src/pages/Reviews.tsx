import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import Section from '@/components/Section';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/Button';
import { LinkButton } from '@/components/LinkButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Star } from 'lucide-react';
import { useMemo, useState } from 'react';
import TrainingGallery from '@/components/TrainingGallery';

type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  text: string;
  isLocalGuide?: boolean;
  avatarUrl?: string;
  featured?: boolean;
};

const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ava C.',
    rating: 5,
    date: 'Sep 2024',
    text: 'Super patient and clear instruction. Practiced the exact test routes and felt calm on test day. Passed first try!',
    isLocalGuide: true,
    featured: true,
  },
  {
    id: 'r2',
    name: 'Jasmin K.',
    rating: 5,
    date: 'Aug 2024',
    text: 'Great coaching style. Parking finally clicked for me after struggling for months. Highly recommend!',
  },
  {
    id: 'r3',
    name: 'Marco T.',
    rating: 5,
    date: 'Aug 2024',
    text: 'Very helpful lessons on highway merging and lane changes. I feel way more confident now.',
  },
  {
    id: 'r4',
    name: 'Priya R.',
    rating: 4,
    date: 'Jul 2024',
    text: 'Flexible scheduling and calm feedback every lesson. Awesome experience overall!',
  },
  {
    id: 'r5',
    name: 'Samir A.',
    rating: 5,
    date: 'Jul 2024',
    text: 'Test prep was spot-on. Practiced maneuvers and observation. The mock test helped a lot.',
    isLocalGuide: true,
  },
];

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 160;
  return (
    <div>
      <p className={`text-neutral-700 ${expanded || !isLong ? '' : 'line-clamp-4'}`}>{text}</p>
      {isLong && (
        <button
          className="mt-2 text-xs font-medium text-neutral-600 underline decoration-neutral-400/70 underline-offset-4 hover:text-neutral-800"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

export default function Reviews() {
  const [ratingFilter, setRatingFilter] = useState<'all' | 5 | 4 | 3>('all');
  const [localGuideOnly, setLocalGuideOnly] = useState(false);

  const avg = 4.9;
  const total = 120;

  const featured = REVIEWS.find((r) => r.featured);

  const filtered = useMemo(() => {
    return REVIEWS.filter((r) => {
      const meetsRating = ratingFilter === 'all' ? true : r.rating >= (ratingFilter as number);
      const meetsGuide = localGuideOnly ? !!r.isLocalGuide : true;
      return meetsRating && meetsGuide;
    });
  }, [ratingFilter, localGuideOnly]);

  return (
    <>
      <Helmet>
        <title>Reviews — Go Safe Driving</title>
        <meta name="description" content="Read real Google-style reviews from learners. Average rating and filterable testimonials." />
      </Helmet>
      <Canonical />
      <SocialMeta
        title="Reviews — Go Safe Driving"
        description="Read real Google-style reviews from learners. Average rating and filterable testimonials."
        imagePath="/og/reviews.svg"
      />

      {/* Intro with stats + CTA */}
      <Section title="What learners say" subtitle="Real feedback from local drivers.">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-2 shadow-soft">
            <span className="flex items-center gap-0.5 text-amber-500">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={18} className="fill-current" />
              ))}
            </span>
            <span className="text-sm text-neutral-800">{avg} average • {total}+ reviews</span>
          </div>
          <LinkButton href="#" variant="secondary">Leave a Google Review</LinkButton>
        </div>
      </Section>

      

      {/* Filters */}
      <Section className="py-6" decorativeBlobs={false}>
        <div className="flex flex-wrap items-center gap-3" role="region" aria-label="Review filters">
          <label className="text-sm text-neutral-700">
            Rating:
            <select
              className="ml-2 rounded-xl border border-neutral-300 bg-white px-2 py-1 text-sm"
              value={ratingFilter as any}
              onChange={(e) => setRatingFilter((e.target.value as any) === 'all' ? 'all' : Number(e.target.value) as 5 | 4 | 3)}
            >
              <option value="all">All</option>
              <option value="5">5 stars</option>
              <option value="4">4+ stars</option>
              <option value="3">3+ stars</option>
            </select>
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" checked={localGuideOnly} onChange={(e) => setLocalGuideOnly(e.target.checked)} aria-label="Local Guides only" />
            Local Guides only
          </label>
        </div>
      </Section>

      {/* Static grid below */}
      <Section decorativeBlobs={false}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <TestimonialCard key={r.id} name={r.name} rating={r.rating} date={r.date} isLocalGuide={r.isLocalGuide}>
              <ReviewText text={r.text} />
            </TestimonialCard>
          ))}
        </div>
      </Section>

      {/* Page CTA */}
      <Section decorativeBlobs={false} className="py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="tel:+12897001347"
            className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
            aria-label="Call Now"
          >
            Call Now
          </a>
          <a
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-2xl border border-neutral-300 bg-white px-6 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
            aria-label="Book Lesson"
          >
            Book Lesson
          </a>
        </div>
      </Section>

      <TrainingGallery />
    </>
  );
}
