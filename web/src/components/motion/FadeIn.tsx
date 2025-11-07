import { motion, type MotionProps, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
} & Omit<MotionProps, 'initial' | 'whileInView' | 'viewport' | 'transition' | 'variants'>;

export default function FadeIn({ children, delay = 0, as = 'div', ...rest }: Props) {
  const reduce = useReducedMotion();
  const M = motion[as as keyof typeof motion] as typeof motion.div;
  return (
    <M
      initial={{ opacity: 0, y: reduce ? 0 : 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px' }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </M>
  );
}
