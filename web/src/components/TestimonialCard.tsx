import Card from '@/components/Card';
import FadeIn from '@/components/motion/FadeIn';
import { Star } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  name: string;
  avatarUrl?: string;
  isLocalGuide?: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  children: ReactNode;
  delay?: number;
};

export default function TestimonialCard({ name, avatarUrl, isLocalGuide = false, rating, date, children, delay = 0 }: Props) {
  return (
    <FadeIn delay={delay}>
      <Card hoverLift className="p-5">
        <div className="flex items-center gap-3">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="h-10 w-10 rounded-full object-cover" />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-700">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-neutral-900">{name}</span>
              {isLocalGuide && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                  Local Guide
                </span>
              )}
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={16} className={i < rating ? 'fill-current' : ''} />
              ))}
              <span className="ml-2 text-xs text-neutral-500">{date}</span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-neutral-700">{children}</p>
      </Card>
    </FadeIn>
  );
}
