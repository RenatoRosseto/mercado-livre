import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import Header from 'components/Header';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Mercado Livre</title>
        <meta name="description" content="Teste - Mercado Livre" />
      </Head>
      <GlobalStyles />

      <Header />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
