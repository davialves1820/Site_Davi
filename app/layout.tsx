import type { Metadata } from 'next'
import { Space_Mono, Syne } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Davi Alves — Full Stack Developer',
  description:
    'Portfólio de Davi Alves Rodrigues, Desenvolvedor Full Stack especializado em React, Next.js, Node.js e IoT. Estudante de Ciência da Computação na UFPB.',
  keywords: ['Full Stack', 'React', 'Next.js', 'Node.js', 'UFPB', 'João Pessoa', 'Paraíba'],
  authors: [{ name: 'Davi Alves Rodrigues' }],
  openGraph: {
    title: 'Davi Alves — Full Stack Developer',
    description: 'Developer · Researcher · Builder',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${syne.variable} ${spaceMono.variable}`}>
      <body className="bg-blue-deep text-white antialiased overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}
