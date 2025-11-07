import FadeIn from '@/components/motion/FadeIn';

type Props = { value: string | number; label: string; delay?: number };

export default function Stat({ value, label, delay = 0 }: Props) {
  return (
    <FadeIn delay={delay} as="div" className="text-center">
      <div className="text-3xl font-semibold tracking-tight text-neutral-900">{value}</div>
      <div className="mt-1 text-sm text-neutral-600">{label}</div>
    </FadeIn>
  );
}

