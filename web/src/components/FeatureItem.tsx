import { ReactNode } from 'react';
import FadeIn from '@/components/motion/FadeIn';

type Props = React.HTMLAttributes<HTMLDivElement> & {
  icon: ReactNode;
  title: string;
  text: string;
  delay?: number;
  className?: string;
};

export default function FeatureItem({ icon, title, text, delay = 0, className, ...divProps }: Props) {
  return (
    <FadeIn delay={delay} as="div">
      <div className={`flex items-start gap-4 ${className ?? ''}`} {...divProps}>
        <div className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <h3 className="text-xl">{title}</h3>
          <p className="mt-1 text-neutral-700">{text}</p>
        </div>
      </div>
    </FadeIn>
  );
}
