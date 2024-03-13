import localFont from 'next/font/local';

export const basis = localFont({
 src: [
  {
   path: './Basis-Light.ttf',
   weight: '300',
   style: 'normal',
  },
  {
    path: './Basis-Regular.ttf',
    weight: '400',
    style: 'normal',
  },
  {
   path: './Basis-Medium.ttf',
   weight: '500',
   style: 'normal',
  },
  {
   path: './Basis-Bold.ttf',
   weight: '700',
   style: 'normal',
  },
  {
   path: './Basis-Black.ttf',
   weight: '900',
   style: 'normal',
  },
 ],
 variable: '--font-basis',
})