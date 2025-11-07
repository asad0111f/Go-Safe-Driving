import { Helmet } from 'react-helmet-async';
import { Canonical, SocialMeta } from '@/lib/seo';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/Button';
import Section from '@/components/Section';
import FormField from '@/components/FormField';
import Toast from '@/components/Toast';
import { useState } from 'react';
import TrainingGallery from '@/components/TrainingGallery';

const ContactSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone')
    .regex(/^[0-9+()\-\s]+$/, 'Enter a valid phone'),
  email: z.string().email('Enter a valid email'),
  preferredDateTime: z.string().min(1, 'Please choose a preferred date/time'),
  pickupArea: z.string().min(2, 'Please enter a pickup area'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
});

type ContactForm = z.infer<typeof ContactSchema>;

export default function Contact() {
  const [toastOpen, setToastOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 700));
    setToastOpen(true);
    reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact — Go Safe Driving</title>
      </Helmet>
      <Canonical />
      <SocialMeta
        title="Contact — Go Safe Driving"
        description="Call or message to get started. Quick replies."
        imagePath="/og/contact.svg"
      />

      <Section title="Get in touch" subtitle="Tell us a bit about your goals and schedule. We'll reply quickly to confirm.">
        {/* Prefer to talk? */}
        <div className="mb-4">
          <span className="text-sm text-neutral-800">Prefer to talk?</span>
          <a
            href="tel:+1234567890"
            className="ml-3 inline-flex h-9 items-center justify-center rounded-2xl bg-primary px-3 text-xs font-medium text-white shadow-soft hover:bg-primary/90"
          >
            Call Now
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left: contact form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <FormField id="name" label="Name" error={errors.name?.message} registerReturn={register('name')} />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="phone" label="Phone" error={errors.phone?.message} registerReturn={register('phone')} />
              <FormField id="email" label="Email" error={errors.email?.message} registerReturn={register('email')} type="email" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField id="preferredDateTime" label="Preferred Date/Time" error={errors.preferredDateTime?.message} registerReturn={register('preferredDateTime')} type="datetime-local" />
              <FormField id="pickupArea" label="Pickup Area" error={errors.pickupArea?.message} registerReturn={register('pickupArea')} />
            </div>
            <FormField id="message" label="Message" error={errors.message?.message} as="textarea" registerReturn={register('message')} />
            <div>
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'}</Button>
            </div>
          </form>

          {/* Right: map embed (lazy) */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200/70 shadow-soft">
              <iframe
                title="Hamilton map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full"
                src="https://www.google.com/maps?q=Hamilton%2C%20ON&output=embed"
              />
            </div>
            <p className="mt-2 text-xs text-neutral-600">Serving Hamilton and nearby areas.</p>
          </div>
        </div>
      </Section>

      <TrainingGallery />

      <Toast show={toastOpen} onClose={() => setToastOpen(false)} message={'Thanks — we\'ll confirm shortly.'} />
    </>
  );
}

