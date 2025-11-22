import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: './fonts/inter/Inter-Variable.ttf',
      style: 'normal',
    },
    {
      path: './fonts/inter/Inter-Variable-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const playfair = localFont({
  src: [
    {
      path: './fonts/playfair/PlayfairDisplay-Variable.ttf',
      style: 'normal',
    },
    {
      path: './fonts/playfair/PlayfairDisplay-Variable-Italic.ttf',
      style: 'italic',
    },
  ],
  variable: '--font-playfair',
  display: 'swap',
})
