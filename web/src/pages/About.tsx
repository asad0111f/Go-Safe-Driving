import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import Stat from '@/components/Stat';
import Badge from '@/components/Badge';
import FadeIn from '@/components/motion/FadeIn';
import MicroBounce from '@/components/motion/MicroBounce';
import ResponsiveImage from '@/components/media/ResponsiveImage';
import { heroLearner, heroCar } from '@/assets/placeholders';
import { Shield, MapPin, BookOpen, Award } from 'lucide-react';
import TrainingGallery from '@/components/TrainingGallery';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — Go Safe Driving</title>
        <meta name="description" content="Patient, safety-first private lessons in Hamilton. Local test route expertise and calm coaching style." />
      </Helmet>
      <Canonical />
      <SocialMeta
        title="About — Go Safe Driving"
        description="Calm, patient coaching in Hamilton with local test route expertise."
        imagePath="/og/about.svg"
      />

      {/* Intro + portrait */}
      <Section className="pt-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1>Hi, I’m your coach</h1>
            <p className="mt-4 text-lg text-neutral-700">
              I teach modern, patient, 1‑on‑1 lessons that build real‑world skills and confidence. My focus is safety,
              calm coaching, and practical prep for Hamilton’s test routes.
            </p>

            <p className="mt-3 text-neutral-800">
              <strong>Coach:</strong> Najam Mallick
            </p>
            <p className="text-neutral-700">
              He has been working as an instructor for more than 10 years.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Badge>Calm, patient coaching</Badge>
              <Badge>Fully insured vehicle</Badge>
              <Badge>Clean driving record</Badge>
            </div>
          </div>
          <FadeIn>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <ResponsiveImage
                basePath="/src/assets/images/hero/learner"
                alt="Friendly learner driver with hands on steering wheel"
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                imgClassName="h-auto w-full object-cover"
                fallbackSrc={heroLearner || heroCar}
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Copy blocks: teaching philosophy, safety, local expertise, coaching style */}
      <Section decorativeBlobs subtitle="A safety‑first approach with local expertise and calm coaching.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card hoverLift className="p-6">
            <div className="flex items-start gap-3">
              <BookOpen size={20} className="text-primary" />
              <div>
                <h3 className="text-xl">Teaching philosophy</h3>
                <p className="mt-1 text-neutral-700">Step‑by‑step coaching, clear feedback, and plenty of practice to build habits that last.</p>
              </div>
            </div>
          </Card>
          <Card hoverLift className="p-6">
            <div className="flex items-start gap-3">
              <Shield size={20} className="text-primary" />
              <div>
                <h3 className="text-xl">Safety & insurance</h3>
                <p className="mt-1 text-neutral-700">Fully insured lesson vehicle with dual controls. Safety is the priority every lesson.</p>
              </div>
            </div>
          </Card>
          <Card hoverLift className="p-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary" />
              <div>
                <h3 className="text-xl">Local expertise</h3>
                <p className="mt-1 text-neutral-700">Practice the exact Hamilton test routes, tricky intersections, and parking areas you’ll see on test day.</p>
              </div>
            </div>
          </Card>
          <Card hoverLift className="p-6">
            <div className="flex items-start gap-3">
              <Award size={20} className="text-primary" />
              <div>
                <h3 className="text-xl">Calm coaching style</h3>
                <p className="mt-1 text-neutral-700">Patient, encouraging instruction tailored to your pace—great for nervous drivers and refreshers.</p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Experience timeline" decorativeBlobs={false}>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { year: '2019', title: 'Began coaching', text: 'Started 1‑on‑1 driver coaching with a focus on safe foundations.' },
            { year: '2021', title: 'Hamilton focus', text: 'Specialized in local test routes and exam‑day preparation.' },
            { year: '2023', title: 'Highway confidence', text: 'Expanded training for highway merging, spacing, and lane changes.' },
          ].map((item, i) => (
            <FadeIn key={item.year} delay={i * 0.05}>
              <div className="relative rounded-2xl bg-white/70 p-5 shadow-soft ring-1 ring-neutral-200/60">
                <div className="text-sm font-medium text-primary">{item.year}</div>
                <div className="mt-1 text-lg font-semibold text-neutral-900">{item.title}</div>
                <p className="mt-1 text-neutral-700">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Light stats row */}
      <Section decorativeBlobs={false}>
        <div className="grid gap-6 sm:grid-cols-3">
          <Stat value="10 Years" label="Years teaching" />
          <Stat value="120+" label="Students coached" />
          <Stat value="4.9★" label="Average rating" />
        </div>
      </Section>

      {/* Page CTA */}
      <Section decorativeBlobs={false} className="py-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <MicroBounce>
            <a
              href="tel:+1234567890"
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
