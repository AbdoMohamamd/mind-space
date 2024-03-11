import '@/styles/globals.css';
import localFont from 'next/font/local';
import { Metadata } from 'next'

const georama = localFont ({
  src: [
    {
      path: '../../public/fonts/Georama-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/Georama-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/Georama-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/Georama-Regular.ttf',
      weight: '400',
    },

    {
      path: '../../public/fonts/Georama-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Georama-SemiBold.ttf',
      weight: '600',
    },

    {
      path: '../../public/fonts/Georama-Bold.ttf',
      weight: '700',
    },

    {
      path: '../../public/fonts/Georama-ExtraBold.ttf',
      weight: '800',
    },

    {
      path: '../../public/fonts/Georama-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-georama',
});


export default function App({Component, pageProps}) {
  return (
    <main className={`${georama.variable}  `}>

      <Component {...pageProps} />

    </main>
  );
}
