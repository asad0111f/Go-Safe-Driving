import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import MicroBounce from '@/components/motion/MicroBounce';
import { Link } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const TrainingGallery = lazy(() => import('@/components/TrainingGallery'));

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Go Safe Driving</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Canonical />
      <SocialMeta
        title="GoSafe Driving | Driving Lessons in Hamilton"
        description="Modern, patient 1-on-1 driving lessons in Hamilton. Book today!"
        imagePath="https://www.gosafedriving.ca/cover.jpg"
      />
      <Section decorativeBlobs={false} className="py-16">
        <Card className="mx-auto max-w-xl p-8 text-center">
          <h1>We can’t find that page</h1>
          <p className="mt-3 text-neutral-700">
            The link may be broken or the page might have moved.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <MicroBounce>
              <Link
                to="/"
                className="inline-flex h-12 items-center justify-center rounded-2xl bg-primary px-6 text-sm font-medium text-white shadow-soft hover:bg-primary/90"
              >
                Back to Home
              </Link>
            </MicroBounce>
          </div>
        </Card>
      </Section>

      <Suspense fallback={null}>
        <TrainingGallery />
      </Suspense>
    </>
  );
}
