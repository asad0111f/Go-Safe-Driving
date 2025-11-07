type Props = {
  variant?: 'top-right' | 'center' | 'none';
  className?: string;
};

export default function GradientBlobs({ variant = 'top-right', className = '' }: Props) {
  if (variant === 'none') return null;
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`} aria-hidden>
      {/* blob A */}
      <div
        className="absolute h-56 w-56 -translate-y-10 translate-x-10 rounded-full bg-primary/20 blur-3xl sm:h-72 sm:w-72"
        style={{ right: variant === 'top-right' ? '10%' : 'auto', top: 0 }}
      />
      {/* blob B */}
      <div
        className="absolute bottom-0 left-0 h-56 w-56 translate-y-10 -translate-x-10 rounded-full bg-accent/20 blur-3xl sm:h-72 sm:w-72"
      />
    </div>
  );
}

