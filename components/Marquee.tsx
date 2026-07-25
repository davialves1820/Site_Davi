export default function Marquee({ text, speed = 32 }: { text: string; speed?: number }) {
  return (
    <div className="marquee-wrap" style={{ position: 'relative', zIndex: 1 }} aria-hidden>
      <div className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        <span className="marquee-item">{text}</span>
        <span className="marquee-item">{text}</span>
      </div>
    </div>
  )
}
