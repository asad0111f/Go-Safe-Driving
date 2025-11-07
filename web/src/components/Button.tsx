import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonStyles = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      // Support requested names and legacy aliases
      variant: {
        primary: 'bg-primary text-white hover:bg-primary/90 shadow-soft',
        secondary: 'border border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50',
        ghost: 'text-neutral-900 hover:bg-neutral-100',
        // aliases
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
type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps
  extends VariantProps<typeof buttonStyles>,
    Omit<NativeButtonProps, 'color'>,
    Omit<AnchorProps, 'color'> {
  as?: 'button' | 'a';
  href?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, as = 'button', href, ...props }, ref) => {
    const Comp: any = as === 'a' ? 'a' : 'button';
    const compProps: any = { ...props };
    if (as === 'a') compProps.href = href;
    return <Comp ref={ref as any} className={buttonStyles({ variant, size, className })} {...compProps} />;
  },
);
Button.displayName = 'Button';
