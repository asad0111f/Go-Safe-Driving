import React from 'react';

type Width = 480 | 768 | 1024 | 1440 | 1920;
const DEFAULT_WIDTHS: Width[] = [480, 768, 1024, 1440, 1920];

type Props = {
  basePath: string; // e.g. /src/assets/images/hero/car
  alt: string;
  widths?: Width[];
  sizes?: string; // e.g. (min-width: 768px) 50vw, 100vw
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  fallbackSrc?: string; // data URI or static fallback
  fetchPriority?: 'high' | 'low' | 'auto';
};

export default function ResponsiveImage({
  basePath,
  alt,
  widths = DEFAULT_WIDTHS,
  sizes = '(min-width: 768px) 50vw, 100vw',
  className,
  imgClassName,
  loading = 'lazy',
  decoding = 'async',
  fallbackSrc,
  fetchPriority = 'auto',
}: Props) {
  const avifSet = widths.map((w) => `${basePath}-${w}.avif ${w}w`).join(', ');
  const webpSet = widths.map((w) => `${basePath}-${w}.webp ${w}w`).join(', ');
  const jpgSet = widths.map((w) => `${basePath}-${w}.jpg ${w}w`).join(', ');
  const fallback = fallbackSrc ?? `${basePath}-${widths[0]}.jpg`;

  // If a fallback is provided, prefer rendering only the fallback image.
  // This avoids 404s for non-existent srcSet candidates preventing the
  // fallback from displaying (common during development before assets exist).
  if (fallbackSrc) {
    return (
      <img
        src={fallback}
        alt={alt}
        className={imgClassName}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    );
  }

  return (
    <picture className={className}>
      <source type="image/avif" srcSet={avifSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSet} sizes={sizes} />
      <img
        src={fallback}
        srcSet={jpgSet}
        sizes={sizes}
        alt={alt}
        className={imgClassName}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
