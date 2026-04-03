import { PERSONAL } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(0,198,255,0.08)] py-8 px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="font-mono text-[0.65rem] tracking-[0.12em] text-[rgba(0,198,255,0.35)]">
          © {new Date().getFullYear()} Davi Alves Rodrigues · {PERSONAL.location}
        </p>
        <div className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.12em] text-[rgba(0,198,255,0.35)]">
          <span>Built with</span>
          <span className="text-[--blue-neon]">Next.js</span>
          <span>·</span>
          <span className="text-[--blue-neon]">TypeScript</span>
          <span>·</span>
          <span className="text-[--blue-neon]">Tailwind</span>
          <span>·</span>
          <span>muito café ☕</span>
        </div>
      </div>
    </footer>
  )
}
