import { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Props = {
  className?: string;
  children: ReactNode;
  hoverLift?: boolean;
};

export default function Card({ className = '', children, hoverLift = false }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      whileHover={hoverLift && !reduce ? { y: -3, scale: 1.005 } : undefined}
      transition={{ type: 'spring', stiffness: 260, damping: 28 }}
      className={`card ${className}`}
    >
      {children}
    </motion.div>
  );
}
