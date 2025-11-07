import Card from '@/components/Card';
import Badge from '@/components/Badge';
import FadeIn from '@/components/motion/FadeIn';
import { Check } from 'lucide-react';
import { Button } from '@/components/Button';

type Props = {
  name: string;
  price: string;
  features: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  popular?: boolean;
  delay?: number;
};

export default function PricingCard({ name, price, features, ctaLabel = 'Choose', onCtaClick, popular = false, delay = 0 }: Props) {
  return (
    <FadeIn delay={delay}>
      <Card hoverLift className={`p-6 ${popular ? 'ring-1 ring-primary/20' : ''}`}>
        <div className="flex items-center justify-between">
          <h3>{name}</h3>
          {popular && <Badge>Most Popular</Badge>}
        </div>
        <p className="mt-2 text-3xl font-semibold tracking-tight">{price}</p>
        <ul className="mt-4 space-y-2 text-neutral-700">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <Check size={18} className="mt-0.5 text-primary" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <Button className="mt-6 w-full" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      </Card>
    </FadeIn>
  );
}

