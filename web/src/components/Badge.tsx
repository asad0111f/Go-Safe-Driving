import { ReactNode } from 'react';

type Props = { children: ReactNode; className?: string };

export default function Badge({ children, className = '' }: Props) {
  return (
    <span className={`inline-flex items-center rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary ${className}`}>
      {children}
    </span>
  );
}

