import { Inter, Economica, Zen_Dots } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const economica = Zen_Dots({ weight: ['400'] });
export const myFont = localFont({
    src: './dodo.ttf',
    display: 'swap',
  })
