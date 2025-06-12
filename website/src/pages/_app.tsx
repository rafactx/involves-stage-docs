import '@/styles/globals.css';
import { IntlProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import 'prismjs/themes/prism-tomorrow.css';

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages = pageProps.messages || {};

  return (
    <IntlProvider
      locale={locale ?? 'pt'} // fallback para "pt"
      messages={messages}
    >
      <Component {...pageProps} />
    </IntlProvider>
  );
}
