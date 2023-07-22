import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store/store';
import { GlobalStyle } from '@/styles/globals';

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
