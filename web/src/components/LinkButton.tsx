import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const linkButtonStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
        secondary: 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50',
        ghost: 'text-neutral-900 hover:bg-neutral-100',
        solid: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
        outline: 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
);

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export interface LinkButtonProps extends VariantProps<typeof linkButtonStyles>, Omit<AnchorProps, 'color'> {}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <a ref={ref} className={linkButtonStyles({ variant, size, className })} {...props} />;
  },
);
LinkButton.displayName = 'LinkButton';

