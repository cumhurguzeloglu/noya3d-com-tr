import Image from 'next/image'

const instagramLogo = "https://scontent.cdninstagram.com/v/t51.82787-19/629690042_17847503964679349_5284510444223812348_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ig_cache_key=GLpOiCW1LPHVNWg-APxSzR9AWlZJbmNDAQAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW...zIn0%3D&_nc_ohc=MbKX2nqbmakQ7kNvwEhrbjH&_nc_oc=AdpdQaMEwyYbXJ6d1gnOKfyLUnL9A2NpoiLb02RAFu7GmQ7BPigwBRa7bSD8d33Eig0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=7CnVz6pCQanIDZh-LrIsxA&_nc_ss=7f689&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQSTmBnzcXw_RSX0mLJYX3efQVdgi0rcra_oolrZtb7Imw&oe=6B0255FB"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src={instagramLogo}
            alt="NOYA3D Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full ring-4 ring-gray-200 shadow-lg"
            priority
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          NOYA3D
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium">
          🖨️ 3D Baskı • Tasarım • Üretim
        </p>

        {/* Description */}
        <div className="space-y-3 text-gray-700 mb-10 max-w-md mx-auto text-left">
          <p className="text-lg">🎨 Figürler • Dekorlar • Eğlenceli baskılar</p>
          <p className="text-lg">💡 Özel Projeler & 3D Çözümler</p>
          <p className="text-lg">✨ 3D baskı dünyasından kesitler</p>
          <p className="text-lg font-medium">📍 İZMİR</p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            'Boyama Figürleri',
            'Dekorasyon',
            'Destek 🙏🏻',
            'Automotive',
            'Aydınlatma',
            'Çizgi Karakteri',
            'Halloween',
            'Özel Tasarım'
          ].map((cat) => (
            <span
              key={cat}
              className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-700 border border-gray-200 shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* CTA Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.shopier.com/noya3d"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Mağazamı Ziyaret Et
          </a>
          <a
            href="https://instagram.com/noya_3d"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Instagram'da Takip Et
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-sm text-gray-500">
          <p>© 2026 NOYA3D — 3D Baskı, Tasarım ve Üretim Çözümleri</p>
        </footer>
      </div>
    </main>
  )
}
