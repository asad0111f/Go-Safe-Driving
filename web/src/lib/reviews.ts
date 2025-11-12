export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string; // display label, e.g., 'Sep 2024'
  dateIso: string; // ISO date for JSON-LD, e.g., '2024-09-01'
  text: string;
  isLocalGuide?: boolean;
  avatarUrl?: string;
  featured?: boolean;
};

export const AGGREGATE = {
  avg: 4.9,
  total: 120,
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Ava C.',
    rating: 5,
    date: 'Sep 2024',
    dateIso: '2024-09-01',
    text: 'Super patient and clear instruction. Practiced the exact test routes and felt calm on test day. Passed first try!',
    isLocalGuide: true,
    featured: true,
  },
  {
    id: 'r2',
    name: 'Jasmin K.',
    rating: 5,
    date: 'Aug 2024',
    dateIso: '2024-08-01',
    text: 'Great coaching style. Parking finally clicked for me after struggling for months. Highly recommend!',
  },
  {
    id: 'r3',
    name: 'Marco T.',
    rating: 5,
    date: 'Aug 2024',
    dateIso: '2024-08-01',
    text: 'Very helpful lessons on highway merging and lane changes. I feel way more confident now.',
  },
  {
    id: 'r4',
    name: 'Priya R.',
    rating: 4,
    date: 'Jul 2024',
    dateIso: '2024-07-01',
    text: 'Flexible scheduling and calm feedback every lesson. Awesome experience overall!',
  },
  {
    id: 'r5',
    name: 'Samir A.',
    rating: 5,
    date: 'Jul 2024',
    dateIso: '2024-07-01',
    text: 'Test prep was spot-on. Practiced maneuvers and observation. The mock test helped a lot.',
    isLocalGuide: true,
  },
];

