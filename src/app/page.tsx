'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const instagramLogo =
  'https://scontent.cdninstagram.com/v/t51.82787-19/629690042_17847503964679349_5284510444223812348_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=109&ig_cache_key=GLpOiCW1LPHVNWg-APxSzR9AWlZJbmNDAQAB1501500j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW...zIn0%3D&_nc_ohc=MbKX2nqbmakQ7kNvwEhrbjH&_nc_oc=AdpdQaMEwyYbXJ6d1gnOKfyLUnL9A2NpoiLb02RAFu7GmQ7BPigwBRa7bSD8d33Eig0&_nc_zt=24&_nc_ht=scontent.cdninstagram.com&_nc_gid=7CnVz6pCQanIDZh-LrIsxA&_nc_ss=7f689&_nc_ct=RQosPBUCFQIAAAA&oh=00_AQSTmBnzcXw_RSX0mLJYX3efQVdgi0rcra_oolrZtb7Imw&oe=6B0255FB'

const categories = [
  'Boyama Figürleri',
  'Dekorasyon',
  'Destek 🙏🏻',
  'Automotive',
  'Aydınlatma',
  'Çizgi Karakteri',
  'Halloween',
  'Özel Tasarım'
]

const descriptionItems = [
  { icon: '🎨', text: 'Figürler • Dekorlar • Eğlenceli baskılar' },
  { icon: '💡', text: 'Özel Projeler & 3D Çözümler' },
  { icon: '✨', text: '3D baskı dünyasından kesitler' },
  { icon: '📍', text: 'İZMİR', highlight: true }
]

const posts = [
  {
    id: 'boyama-figurleri',
    category: 'Boyama Figürleri',
    title: 'El Boyalı 3D Baskı Figürleri',
    excerpt: 'Amaçlar, fırçalar ve tek katmanlık tekniklerle figürlerinize canlılık kazandıran el boyama serileri.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_9da6dae374d73dddc30413382c254be7.jpg'
  },
  {
    id: 'dekorasyon',
    category: 'Dekorasyon',
    title: 'Karakterli Mekanlar İçin Dekorasyon',
    excerpt: 'Masaüstü ve raf düzeninize karakter katan 3D baskı dekorasyon parçaları.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_3947a9a7212284fb5b8c461d6ba2cecd.jpeg'
  },
  {
    id: 'destek',
    category: 'Destek 🙏🏻',
    title: 'Projeye Destek Olun',
    excerpt: 'Atölyeyi yaşatmak ve yeni 3D baskı projelerini gerçekleştirmek için destek bekliyoruz.',
    image: instagramLogo
  },
  {
    id: 'automotive',
    category: 'Automotive',
    title: 'Oto & Motor Tasarım Parçaları',
    excerpt: 'Araçlar için spesifik prototipler, kapaklar ve içerişim parçaları.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_0969e897bcc9d73f867d45e56dd07837.jpeg'
  },
  {
    id: 'aydinlatma',
    category: 'Aydınlatma',
    title: '3D Baskı Lambalar ve Işık',
    excerpt: 'Difüzör, gölge ve ışık yaratan masa lambaları ile aydınlatma nesneleri.',
    image: instagramLogo
  },
  {
    id: 'cizgi-karakteri',
    category: 'Çizgi Karakteri',
    title: 'Seçkin Çizgi Karakteri Koleksiyonu',
    excerpt: 'Animasyon ve çizgi roman dünyasından inspirayona dayalı figürler.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_38a254de6e3dc9ee79fe7b7751b20446.jpeg'
  },
  {
    id: 'halloween',
    category: 'Halloween',
    title: 'Korkunç Eğlenceli Halloween Tasarımları',
    excerpt: 'Temalı dekorasyon ve figürlerle korkunç eğlenceli anlar.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_d7079035d0d4ecd6fb0e0d447b11d969.jpeg'
  },
  {
    id: 'ozel-tasarim',
    category: 'Özel Tasarım',
    title: 'Sizin İçin Özel Üretilen Baskılar',
    excerpt: 'Fikrinizi 3D model haline getirip, İzmir’den size teslim ediyoruz.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_707eb35e305427921102ba675ed3ac47.jpeg'
  }
]

const featured = posts[posts.length - 1]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="max-w">
        <div className="navbar-inner">
          <div className="desktop-links">
            <a href="#categories" className="hover:text-accent transition-colors">
              Kategoriler
            </a>
            <a
              href="https://www.shopier.com/noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mağaza
            </a>
            <a
              href="https://instagram.com/noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              TikTok
            </a>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="mobile-toggle"
            aria-label="Menü"
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
        {open && (
          <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`}>
            <a href="#categories" onClick={() => setOpen(false)}>
              Kategoriler
            </a>
            <a
              href="https://www.shopier.com/noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full"
            >
              Mağazamı Ziyaret Et
            </a>
            <a
              href="https://instagram.com/noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              Instagram’da Takip Et
            </a>
            <a
              href="https://youtube.com/@noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              YouTube’da Abone Ol
            </a>
            <a
              href="https://tiktok.com/@noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full"
            >
              TikTok’da Takip Et
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      {/* Hero */}
      <section className="py-16 md:py-28 px-4">
        <div className="center-container text-center">
          <div className="logo-wrapper mx-auto mb-14 md:mb-20">
            <style jsx>{`
              .logo-wrapper { width: 108px; height: 108px; border-radius: 50%; border: 1px solid var(--color-border); overflow: hidden; background-color: var(--color-surface); box-shadow: var(--shadow-card); }
              .logo-wrapper img { width: 100%; height: 100%; object-fit: cover; display: block; }
            `}</style>
            <Image
              src={instagramLogo}
              alt="NOYA3D Logo"
              width={108}
              height={108}
              className="w-full h-full object-cover"
              priority
            />
          </div>


          <p className="section-heading font-medium mb-8 md:mb-14">
            3D Baskı • Tasarım • Üretim
          </p>

          <p className="body-text mb-12 md:mb-16 mx-auto max-w-lg">
            NOYA3D | 3D yazıcılar, baskı teknolojileri, filamentler ve yeni nesil üretim dünyasını keşfediyoruz. Test ediyoruz. Üretiyoruz. Geliştiriyoruz. Gerçek deneyimler, gerçek sonuçlar.
          </p>

          <div className="cta-group">
            <a
              href="https://www.shopier.com/noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              Mağaza
            </a>
            <a
              href="https://instagram.com/noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Instagram
            </a>
            <a
              href="https://youtube.com/@noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.44 22.17 22.17 0 0 1 2.5-.39 3 3 0 0 1 2.88 0 22.08 22.08 0 0 1 1.52-.02 2 2 0 0 1 1.4 1.44 23 23 0 0 1-.03 2.4 2 2 0 0 1-1.4 1.44 3 3 0 0 1-2.88 0 22.08 22.08 0 0 1-1.52.02 2 2 0 0 1-1.4-1.44 23.47 23.47 0 0 1 .03-2.31 2 2 0 0 1 1.4-1.44z"></path>
              </svg>
              YouTube
            </a>
            <a
              href="https://tiktok.com/@noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></path>
                <path d="M8 22a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2"></path>
                <path d="M12 16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></path>
                <path d="M18 16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></path>
                <path d="M6 8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></path>
                <path d="M12 22a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></path>
                <path d="M2 18a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"></path>
                <path d="M18 2a2 2 0 0 0-2 2h-4a2 2 0 0 0-2-2"></path>
              </svg>
              TikTok
            </a>
          </div>
        </div>
      </section>

      {/* Sizin İçin Özel Üretilen Baskılar - Slayt */}
      <section id="featured" className="section-pad border-top">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h2 className="section-heading serif">Sizin İçin Özel Üretilen Baskılar</h2>
            <p className="body-text text-accent whitespace-nowrap">İzmir'den teslim ediyoruz</p>
          </div>
          <div className="max-w-4xl w-full mx-auto">
            <SpecialCarousel />
          </div>
        </div>
      </section>

      {/* Categories / content cards */}
      <section id="categories" className="section-pad border-top">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 md:mb-18 gap-4">
            <div>
              <h2 className="section-heading mb-2">Tüm Kategoriler</h2>
              <p className="body-text-sm">3D baskı dünyasından kesitler ve özel eserler</p>
            </div>
          </div>
          <div className="cards-grid">
            {categories.map((cat) => {
              if (cat === 'Özel Tasarım') {
                return null; // Already shown as carousel above
              }
              const post = posts.find((p) => p.category === cat)
              if (!post) return null
              return (
                <a
                  key={cat}
                  href="https://www.shopier.com/noya3d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                >
                  <article className="card">
                    <div className="card-media">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={900}
                        height={700}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                      />
                    </div>
                    <div className="card-body">
                      <span className="category-pill category-tag">{cat}</span>
                      <h3 className="card-title">{post.title}</h3>
                      <p className="card-excerpt">{post.excerpt}</p>
                    </div>
                  </article>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-top">
        <div className="max-w-4xl w-full mx-auto text-center">
          <p className="body-text-sm">© 2026 NOYA3D — 3D Baskı, Tasarım ve Üretim Çözümleri</p>
        </div>
      </footer>
    </main>
  )
}

function SpecialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAuto, setIsAuto] = useState(true)
  const slides = [
    {
      image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_0969e897bcc9d73f867d45e56dd07837.jpeg',
      title: 'ECU Master Black Connector Backshell Kit'
    },
    {
      image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_707eb35e305427921102ba675ed3ac47.jpeg',
      title: 'Spark Ems Core-8 Connector Backsell Kit'
    },
    {
      image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_1b7b0b0b0d0279a9853337301fe8ca33.jpeg',
      title: 'EMU Pro-8 Connector Backshell Kit'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <article key="ozel-tasarim-carousel" className="card">
      <div className="carousel-wrap">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div key={i} className="carousel-slide">
              <Image
                src={s.image}
                alt={s.title}
                width={900}
                height={700}
                className="w-full h-full object-cover"
              />
              <div className="carousel-caption">{s.title}</div>
            </div>
          ))}
        </div>
        <button
          className="carousel-btn prev"
          onClick={() =>
            setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1))
          }
          aria-label="Önceki slayt"
        >
          ‹
        </button>
        <button
          className="carousel-btn next"
          onClick={() =>
            setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1))
          }
          aria-label="Sonraki slayt"
        >
          ›
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
