import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import About      from '@/components/About'
import Skills     from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects   from '@/components/Projects'
import Education  from '@/components/Education'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'
import Cursor     from '@/components/Cursor'
import Background from '@/components/Background'

export default function Home() {
  return (
    <>
      {/* Global ambience */}
      <Cursor />
      <Background />
      <div className="noise-overlay" />
      <div className="scan-line" />

      {/* Navigation */}
      <Nav />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
