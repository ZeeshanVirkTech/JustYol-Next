import '@/styles/global.scss';

import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { type AppProps } from 'next/app';
import { Almarai } from 'next/font/google';
import { useRouter } from 'next/router';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
});

const theme = createTheme({
  typography: {
    fontFamily: almarai.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 767,
      md: 1023,
      lg: 1300,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#FF6666',
    },
    secondary: {
      main: '#FEB53E',
    },
    white: {
      main: '#ffffff',
    },
    black: {
      main: '#000000',
    },
    gray: {
      main: '#84818A',
    },
  },
});

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const hideTopBarAndFooter =
    ['/404', '/505', '/comingsoon', '/languages'].includes(router.pathname) ||
    router.pathname.startsWith('/authentication');

  return (
    <CacheProvider value={cacheRtl}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <main dir="rtl" className={almarai.className + ' main-block'}>
          {!hideTopBarAndFooter && <TopBar />}
          <Component {...pageProps} />
          {!hideTopBarAndFooter && <Footer />}
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}
