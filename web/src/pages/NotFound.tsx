import { Helmet } from 'react-helmet-async';
import { Canonical } from '@/lib/seo';
import Section from '@/components/Section';
import Card from '@/components/Card';
import MicroBounce from '@/components/motion/MicroBounce';
import { Link } from 'react-router-dom';
import TrainingGallery from '@/components/TrainingGallery';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Go Safe Driving</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Canonical />
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

      <TrainingGallery />
    </>
  );
}
