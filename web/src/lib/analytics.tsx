import { Helmet } from 'react-helmet-async';

export default function Analytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

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
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}</script>
        </Helmet>
      ) : null}
    </>
  );
}

