import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/globals';
import { Provider } from 'react-redux';
import store from '@/store/store';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
