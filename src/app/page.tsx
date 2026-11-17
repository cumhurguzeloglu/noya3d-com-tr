'use client'

import Image from 'next/image'
import { useState } from 'react'

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
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Boyama+Figurleri'
  },
  {
    id: 'dekorasyon',
    category: 'Dekorasyon',
    title: 'Karakterli Mekanlar İçin Dekorasyon',
    excerpt: 'Masaüstü ve raf düzeninize karakter katan 3D baskı dekorasyon parçaları.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Dekorasyon'
  },
  {
    id: 'destek',
    category: 'Destek 🙏🏻',
    title: 'Projeye Destek Olun',
    excerpt: 'Atölyeyi yaşatmak ve yeni 3D baskı projelerini gerçekleştirmek için destek bekliyoruz.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Destek'
  },
  {
    id: 'automotive',
    category: 'Automotive',
    title: 'Oto & Motor Tasarım Parçaları',
    excerpt: 'Araçlar için spesifik prototipler, kapaklar ve içerişim parçaları.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Automotive'
  },
  {
    id: 'aydinlatma',
    category: 'Aydınlatma',
    title: '3D Baskı Lambalar ve Işık',
    excerpt: 'Difüzör, gölge ve ışık yaratan masa lambaları ile aydınlatma nesneleri.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Aydinlatma'
  },
  {
    id: 'cizgi-karakteri',
    category: 'Çizgi Karakteri',
    title: 'Seçkin Çizgi Karakteri Koleksiyonu',
    excerpt: 'Animasyon ve çizgi roman dünyasından inspirayona dayalı figürler.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Cizgi+Karakteri'
  },
  {
    id: 'halloween',
    category: 'Halloween',
    title: 'Korkunç Eğlenceli Halloween Tasarımları',
    excerpt: 'Temalı dekorasyon ve figürlerle korkunç eğlenceli anlar.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Halloween'
  },
  {
    id: 'ozel-tasarim',
    category: 'Özel Tasarım',
    title: 'Sizin İçin Özel Üretilen Baskılar',
    excerpt: 'Fikrinizi 3D model haline getirip, İzmir’den size teslim ediyoruz.',
    image: 'https://placehold.co/900x700/e7e0d6/2a2421?text=Ozel+Tasarim'
  }
]

const featured = posts[posts.length - 1]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="max-w">
        <div className="navbar-inner">
          <div className="brand-link">
            <span className="brand-text">NOYA3D</span>
          </div>
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
          </div>
        )}
      </div>
    </nav>
  )
}

export default function Home() {
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'sending' | 'ok'>('idle')

  const handleNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setNewsletterStatus('sending')
    setTimeout(() => setNewsletterStatus('ok'), 800)
  }

  return (
    <main className="min-h-screen">
      <Nav />
      {/* Hero */}
      <section className="py-16 md:py-28 px-4">
        <div className="center-container text-center">
          <div className="logo-wrapper mx-auto mb-10 md:mb-14">
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

          <h1 className="display-heading mb-6 md:mb-10">NOYA3D</h1>

          <p className="section-heading font-medium mb-12 md:mb-16">
            3D Baskı • Tasarım • Üretim
          </p>

          <div className="space-y-5 text-left max-w-xl mx-auto mb-18 md:mb-22">
            {descriptionItems.map((item, index) => (
              <p key={index} className="body-text">
                <span aria-hidden="true" className="mr-3">{item.icon}</span>
                {item.text}
              </p>
            ))}
          </div>

          <div className="cta-group">
            <a
              href="https://www.shopier.com/noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mağazamı Ziyaret Et
            </a>
            <a
              href="https://instagram.com/noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Instagram’da Takip Et
            </a>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="section-pad">
        <div className="max-w-4xl w-full mx-auto px-4">
          <div className="featured-grid">
            <div>
              <span className="category-heading mb-4 block serif">Öne Çıkan — {featured.category}</span>
              <h2 className="display-heading mb-6 md:mb-8">{featured.title}</h2>
              <p className="body-text mb-10 md:mb-12">{featured.excerpt}</p>
              <a
                href="https://www.shopier.com/noya3d"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Koleksiyonu Görüntüle
              </a>
            </div>
            <div className="card">
              <div className="featured-media">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={720}
                  height={560}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories / content cards */}
      <section id="categories" className="section-pad border-top">
        <div className="max-w-4xl w-full mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 md:mb-18 gap-4">
            <div>
              <h2 className="section-heading mb-2">Tüm Kategoriler</h2>
              <p className="body-text-sm">3D baskı dünyasından kesitler ve özel eserler</p>
            </div>
          </div>
          <div className="cards-grid">
            {categories.map((cat) => {
              const post = posts.find((p) => p.category === cat)
              if (!post) return null
              return (
                <article key={cat} className="card">
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
                    <a
                      href="https://www.shopier.com/noya3d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover underline-offset-4 hover:underline transition-colors"
                    >
                      Keşfet →
                    </a>
                    <style jsx>{`
                      .underline-offset-4 { text-underline-offset: 4px; }
                    `}</style>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-pad">
        <div className="max-w-xl w-full mx-auto px-4">
          <div className="newsletter">
            <h2 className="section-heading serif mb-3">Newsletter</h2>
            <p className="body-text">
              Haftalık 3D baskı ilhamları, yeni ürünler ve özel teklifler için abone olun.
            </p>
            {newsletterStatus === 'ok' ? (
              <div className="newsletter-success">Teşekkürler! Listeye eklendiniz.</div>
            ) : (
              <form onSubmit={handleNewsletter} className="newsletter-form" noValidate>
                <input type="email" placeholder="E-posta adresiniz" required />
                <button type="submit" className="btn-primary" disabled={newsletterStatus === 'sending'}>
                  {newsletterStatus === 'sending' ? 'Gönderiliyor…' : 'Abone Ol'}
                </button>
              </form>
            )}
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
