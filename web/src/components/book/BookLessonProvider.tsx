import { createContext, useContext, useMemo, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SERVICE_TYPES, submitLessonBooking } from '@/lib/booking';
import { X } from 'lucide-react';

type Prefill = Partial<{ serviceType: string; preferredDateTime: string }>;

type Ctx = {
  open: (prefill?: Prefill) => void;
};

const BookLessonCtx = createContext<Ctx | undefined>(undefined);

export function useBookLesson() {
  const ctx = useContext(BookLessonCtx);
  if (!ctx) throw new Error('useBookLesson must be used within BookLessonProvider');
  return ctx;
}

const Schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(7, 'Enter a valid phone')
    .regex(/^[0-9+()\-\s]+$/, 'Enter a valid phone'),
  serviceType: z.string().min(2, 'Choose a service'),
  preferredDateTime: z.string().min(1, 'Pick a preferred date/time'),
});

type FormValues = z.infer<typeof Schema>;

export default function BookLessonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [initial, setInitial] = useState<Prefill>({});

  const open = (prefill?: Prefill) => {
    setInitial(prefill ?? {});
    setThankYou(false);
    setOpen(true);
  };

  const value = useMemo(() => ({ open }), []);

  return (
    <BookLessonCtx.Provider value={value}>
      {children}
      <Dialog open={isOpen} onClose={() => setOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-6">
            <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <Dialog.Title className="text-lg font-semibold">Book a Lesson</Dialog.Title>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="rounded-xl p-2 hover:bg-neutral-100"
                >
                  <X size={18} />
                </button>
              </div>
              {thankYou ? (
                <div className="mt-4">
                  <p className="text-neutral-700">Thanks — we'll confirm shortly.</p>
                  <div className="mt-4">
                    <button
                      className="inline-flex h-10 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white hover:bg-primary/90"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <BookLessonForm
                  initial={initial}
                  onSubmitted={() => {
                    setThankYou(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </BookLessonCtx.Provider>
  );
}

function BookLessonForm({ initial, onSubmitted }: { initial?: Prefill; onSubmitted: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: '',
      phone: '',
      serviceType: initial?.serviceType ?? '',
      preferredDateTime: initial?.preferredDateTime ?? '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    await submitLessonBooking(values);
    reset();
    onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4 grid gap-3">
      <div>
        <label htmlFor="bl-name" className="block text-sm font-medium text-neutral-800">Name</label>
        <input id="bl-name" className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" {...register('name')} />
        {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="bl-phone" className="block text-sm font-medium text-neutral-800">Phone</label>
        <input id="bl-phone" className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" {...register('phone')} />
        {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="bl-service" className="block text-sm font-medium text-neutral-800">Service Type</label>
        <select id="bl-service" className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" {...register('serviceType')}>
          <option value="">Select a service</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.serviceType && <p className="mt-1 text-xs text-red-600">{errors.serviceType.message}</p>}
      </div>
      <div>
        <label htmlFor="bl-dt" className="block text-sm font-medium text-neutral-800">Preferred Date/Time</label>
        <input id="bl-dt" type="datetime-local" className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white px-3 py-2 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40" {...register('preferredDateTime')} />
        {errors.preferredDateTime && <p className="mt-1 text-xs text-red-600">{errors.preferredDateTime.message}</p>}
      </div>
      <div className="mt-2">
        <button type="submit" disabled={isSubmitting} className="inline-flex h-10 items-center justify-center rounded-2xl bg-primary px-4 text-sm font-medium text-white shadow-soft hover:bg-primary/90 disabled:opacity-50">
          {isSubmitting ? 'Sending…' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

