import { Poppins } from 'next/font/google'

// Google Fonts: Poppins
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

// Degular (Adobe Fonts via Typekit)
// ⚠️ Degular non può essere caricato da `next/font`, 
// quindi lo includiamo via <link> in layout.tsx
// e qui gli assegniamo una CSS variable per Tailwind
const degular = {
  variable: '--font-degular',
  className: 'font-degular tracking-[0.021em]',
}

export { poppins, degular }

