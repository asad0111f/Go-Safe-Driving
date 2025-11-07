import { http } from '@/lib/http';

export type BookLessonPayload = {
  name: string;
  phone: string;
  serviceType: string;
  preferredDateTime: string; // ISO or datetime-local string
};

// Future-ready API call; currently simulates a network request
export async function submitLessonBooking(payload: BookLessonPayload) {
  // Uncomment when backend is ready:
  // return http.post('/api/book-lesson', payload);

  await new Promise((r) => setTimeout(r, 700));
  return { ok: true } as const;
}

export const SERVICE_TYPES = [
  'G2 Road-Test Prep',
  'G Road-Test Prep',
  'Refresher Lessons',
  'Parking Intensive',
  'Highway Confidence',
] as const;

