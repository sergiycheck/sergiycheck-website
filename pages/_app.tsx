import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat } from '@next/font/google';

const font = Montserrat({
  weight: '300',
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${font.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
