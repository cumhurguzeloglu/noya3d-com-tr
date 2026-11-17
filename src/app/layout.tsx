import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NOYA3D — 3D Baskı, Tasarım ve Üretim',
  description: 'NOYA3D: 3D Baskı • Tasarım • Üretim. Figürler, Dekorlar, Eğlenceli baskılar, Özel Projeler & 3D Çözümler. İzmir.',
  keywords: ['3D baskı', '3D printing', 'tasarım', 'üretim', 'figür', 'dekor', 'İzmir', 'NOYA3D'],
  authors: [{ name: 'NOYA3D' }],
  openGraph: {
    title: 'NOYA3D — 3D Baskı, Tasarım ve Üretim',
    description: '3D Baskı • Tasarım • Üretim. Figürler, Dekorlar, Eğlenceli baskılar, Özel Projeler & 3D Çözümler.',
    type: 'website',
    locale: 'tr_TR',
    siteName: 'NOYA3D',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOYA3D',
    description: '3D Baskı • Tasarım • Üretim',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://scontent.cdninstagram.com" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
