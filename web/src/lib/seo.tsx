import { Helmet } from 'react-helmet-async';

const SITE_ORIGIN = (import.meta as any)?.env?.VITE_SITE_ORIGIN || 'https://www.gosafedriving.ca';

export function Canonical() {
  const href = typeof window !== 'undefined'
    ? `${String(SITE_ORIGIN).replace(/\/$/, '')}${window.location.pathname}`
    : undefined;
  if (!href) return null;
  return (
    <Helmet>
      <link rel="canonical" href={href} />
    </Helmet>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function SocialMeta({
  title,
  description,
  imagePath,
  pageUrl,
}: {
  title: string;
  description: string;
  imagePath: string; // e.g. '/og/home.svg' or full URL like 'https://.../cover.jpg'
  pageUrl?: string; // absolute URL for og:url; defaults to current location if available
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const absoluteImageUrl = imagePath.startsWith('http')
    ? imagePath
    : origin
      ? origin + (imagePath.startsWith('/') ? imagePath : `/${imagePath}`)
      : imagePath;
  const ogUrl = pageUrl ?? (typeof window !== 'undefined' ? window.location.href : undefined);
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
    </Helmet>
  );
}
