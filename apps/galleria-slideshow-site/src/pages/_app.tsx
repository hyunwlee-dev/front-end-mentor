import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { DirectionContextProvider } from '@/contexts/DirectionContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DirectionContextProvider>
      <AnimatePresence
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
        mode="wait"
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </DirectionContextProvider>
  );
}
