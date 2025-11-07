import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default function MicroBounce({ children, className }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: -2, scale: 1.02 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
    >
      {children}
    </motion.div>
  );
}

