import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import Background from '@/components/Background'
import SmoothScroll from '@/components/SmoothScroll'
import Marquee from '@/components/Marquee'

const TICKER = 'FULL STACK DEVELOPER — JOÃO PESSOA, PB — CODATA — LAVID — UFPB — CONNECTA CI —  '

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Background />
      <Nav />
      <main>
        <Hero />
        <Marquee text={TICKER} />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}