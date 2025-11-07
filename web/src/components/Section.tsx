import { ReactNode } from 'react';
import FadeIn from '@/components/motion/FadeIn';
import GradientBlobs from '@/components/decor/GradientBlobs';

type Props = {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  decorativeBlobs?: boolean;
  blobsVariant?: 'top-right' | 'center' | 'none';
};

export default function Section({ title, subtitle, children, className = '', containerClassName = '', decorativeBlobs = true, blobsVariant = 'top-right' }: Props) {
  return (
    <section className={`relative py-10 md:py-16 ${className}`}>
      {decorativeBlobs && <GradientBlobs variant={blobsVariant} />}
      <div className={`container max-w-6xl ${containerClassName}`}>
        {(title || subtitle) && (
          <FadeIn as="div">
            {title && <h2>{title}</h2>}
            {subtitle && <p className="mt-2 text-lg text-neutral-700">{subtitle}</p>}
          </FadeIn>
        )}
        {children && <div className={title || subtitle ? 'mt-8' : ''}>{children}</div>}
      </div>
    </section>
  );
}
