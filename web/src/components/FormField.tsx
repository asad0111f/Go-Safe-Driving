import { ReactNode } from 'react';

type Props = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  as?: 'input' | 'textarea';
  type?: string;
  registerReturn?: any; // pass react-hook-form register(name)
  children?: ReactNode; // for custom controls
};

export default function FormField({ id, label, error, hint, as = 'input', type = 'text', registerReturn, children }: Props) {
  const InputTag: any = as;
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-neutral-800">
        {label}
      </label>
      {children ? (
        children
      ) : (
        <InputTag
          id={id}
          type={type}
          className={`mt-1 w-full rounded-2xl border bg-white px-3 py-2 shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
            error ? 'border-red-300' : 'border-neutral-300'
          }`}
          {...registerReturn}
        />
      )}
      {hint && !error && <p className="mt-1 text-xs text-neutral-500">{hint}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

