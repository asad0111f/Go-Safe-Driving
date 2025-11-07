import { Helmet } from 'react-helmet-async';

export function Canonical() {
  const href = typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}` : undefined;
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
  url,
}: {
  title: string;
  description: string;
  imagePath: string; // e.g. '/og/home.svg' or '/og/home.png'
  url?: string;
}) {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const absoluteUrl = url ?? (origin ? origin + (imagePath.startsWith('/') ? imagePath : `/${imagePath}`) : imagePath);
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteUrl} />
    </Helmet>
  );
}
