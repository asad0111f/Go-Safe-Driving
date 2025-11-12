import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import Section from '@/components/Section';
import { lazy, Suspense } from 'react';
const TrainingGallery = lazy(() => import('@/components/TrainingGallery'));

export default function Policies() {
  return (
    <>
      <Helmet>
        <title>Privacy & Terms — Go Safe Driving</title>
        <meta name="description" content="Privacy and terms for Go Safe Driving. We use a cookie-light approach and respect your privacy." />
      </Helmet>
      <Canonical />
      <SocialMeta
        title="GoSafe Driving | Driving Lessons in Hamilton"
        description="Modern, patient 1-on-1 driving lessons in Hamilton. Book today!"
        imagePath="https://www.gosafedriving.ca/cover.jpg"
      />

      <Section title="Privacy" subtitle="Cookie-light and respectful of your data." decorativeBlobs={false}>
        <div className="prose prose-neutral max-w-none">
          <p>
            We only collect the information you provide when you contact us or book a lesson (name, phone,
            email, preferred date/time, and service details). We use it to schedule lessons and respond to your
            requests. We do not sell your data.
          </p>
          <p>
            Cookies, if present, are minimal and used only for site functionality or basic analytics. You can
            contact us any time to request updates or deletion of your information.
          </p>
        </div>
      </Section>

      <Section title="Terms" subtitle="Simple expectations and fair use." decorativeBlobs={false}>
        <div className="prose prose-neutral max-w-none">
          <ul>
            <li>Scheduling is subject to availability and weather conditions.</li>
            <li>24-hour cancellation policy; late cancellations or no-shows may incur a fee.</li>
            <li>Lesson vehicle is fully insured and maintained for safety.</li>
            <li>No claims of school licensing; private coaching only (see footer note).</li>
          </ul>
          <p>
            These placeholders are not legal advice. Replace with your finalized policy content when ready.
          </p>
        </div>
      </Section>

      <Suspense fallback={null}>
        <TrainingGallery />
      </Suspense>
    </>
  );
}
