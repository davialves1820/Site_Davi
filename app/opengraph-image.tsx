import { ImageResponse } from 'next/og'
import { PERSONAL } from '@/lib/data'

export const runtime = 'edge'
export const alt = 'Davi Alves — Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#F7F4EF',
          color: '#0D0D0D',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, letterSpacing: 4, color: '#6B6760', textTransform: 'uppercase' }}>
          {PERSONAL.role}
        </div>
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 900, lineHeight: 1 }}>
          Davi <span style={{ color: '#6C5CE7', marginLeft: 24 }}>Alves</span>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#6B6760', marginTop: 24 }}>
          João Pessoa, Paraíba · CODATA · LAVID · UFPB
        </div>
      </div>
    ),
    { ...size }
  )
}
