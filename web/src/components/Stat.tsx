import FadeIn from '@/components/motion/FadeIn';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  value: string | number;
  label: string;
  delay?: number;
  className?: string;
};

export default function Stat({ value, label, delay = 0, className, ...divProps }: Props) {
  return (
    <FadeIn delay={delay} as="div">
      <div className={`text-center ${className ?? ''}`} {...divProps}>
        <div className="text-3xl font-semibold tracking-tight text-neutral-900">{value}</div>
        <div className="mt-1 text-sm text-neutral-600">{label}</div>
      </div>
    </FadeIn>
  );
}
