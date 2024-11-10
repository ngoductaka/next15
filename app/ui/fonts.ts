import { Inter, Zen_Dots, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'] });
export const economica = Zen_Dots({ weight: ['400'], subsets: ['latin'] });
export const lusitana = Lusitana({ weight: ['400'], subsets: ['latin'] });
export const myFont = localFont({
  src: './dodo.ttf',
  display: 'swap',
});
