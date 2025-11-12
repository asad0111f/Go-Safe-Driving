import { Helmet } from 'react-helmet-async';

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, any>) {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, params || {});
    }
    if (typeof window !== 'undefined' && window.fbq) {
      // Map some events to standard Pixel conversions
      if (name === 'contact_submit') {
        window.fbq('track', 'Contact');
      } else if (name === 'book_lesson_submit') {
        window.fbq('track', 'Lead');
      } else {
        window.fbq('trackCustom', name, params || {});
      }
    }
  } catch {}
}

export default function Analytics() {
  const isProd = import.meta.env.PROD;
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
  const fbPixel = import.meta.env.VITE_FB_PIXEL_ID as string | undefined;

  if (!isProd) return null;

  return (
    <>
      {plausibleDomain ? (
        <Helmet>
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js"></script>
        </Helmet>
      ) : null}

      {gaId ? (
        <Helmet>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
          <script>{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}</script>
        </Helmet>
      ) : null}

      {fbPixel ? (
        <Helmet>
          <script>{`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            window.fbq('init', '${fbPixel}');
            window.fbq('track', 'PageView');
          `}</script>
          <noscript>
            {`<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${fbPixel}&ev=PageView&noscript=1" />`}
          </noscript>
        </Helmet>
      ) : null}
    </>
  );
}
