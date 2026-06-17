import type { Metadata } from 'next'
import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Davi Alves — Full Stack Developer',
  description:
    'Portfólio de Davi Alves Rodrigues, Desenvolvedor Full Stack. CODATA · LAVID · UFPB.',
  keywords: ['Full Stack', 'React', 'Next.js', 'Python', 'UFPB', 'João Pessoa'],
  authors: [{ name: 'Davi Alves Rodrigues' }],
  openGraph: {
    title: 'Davi Alves — Full Stack Developer',
    description: 'Developer · Researcher · Builder',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-[--bg] text-[--text] antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}