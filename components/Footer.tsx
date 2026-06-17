import { PERSONAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="py-12" style={{ position: "relative", zIndex: 1 }}>
      <div className="container-editorial">
        <div className="divider mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="display-italic" style={{ fontSize: '1.1rem', color: 'var(--text-dim)' }}>
            Davi Alves
          </span>
          <p className="label" style={{ color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} · {PERSONAL.location} · Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}