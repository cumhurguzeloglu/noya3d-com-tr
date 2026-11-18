'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string)

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

function Nav() {
  return (
    <nav className="navbar">
      <div className="max-w">
        <div className="navbar-inner">
          <div className="desktop-links">
            <a
              href="https://www.shopier.com/noya3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              {/* Shopier - shopping cart */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h-2v8h2V5zm0 10h-2v2h2v-2z" />
              </svg>
              <span className="desktop-only">Mağaza</span>
            </a>
            <a
              href="https://instagram.com/noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              {/* Instagram - official logo */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.947 0 3.259.014 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.947.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.98-6.98-.059-1.28-.073-1.689-.073-4.947 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-.2-.4.358-.4-.6.354-.2-.3-.4-.6-.7-.8z" />
              </svg>
              <span className="desktop-only">Instagram</span>
            </a>
            <a
              href="https://youtube.com/@noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              {/* YouTube - official logo */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M23.498 6.186a3.174 3.174 0 0 0-2.122-2.136C19.505 3.545 12 3.506 12 3.506s-7.505.039-9.497.55c-.92.166-1.646.53-2.122 2.136C.88 7.304 0 10.152 0 12s.88 4.701 2.122 2.136c.92.166 1.646.53 2.122 2.136C4.495 20.455 12 20.494 12 20.494s7.505-.039 9.497-.55c.92-.166 1.646-.53 2.122-2.136C23.12 16.699 24 13.848 24 12s-.88-4.701-2.122-2.136zM10 15.5V8.5l5.5 3.5-5.5 3.5z" />
              </svg>
              <span className="desktop-only">YouTube</span>
            </a>
            <a
              href="https://www.tiktok.com/@noya_3d"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              {/* TikTok - official logo */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
                <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              <span className="desktop-only">TikTok</span>
            </a>
          </div>
        </div>
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
              className="w-full h-full object-contain"
              priority
            />
          </div>


          <p className="section-heading font-medium mb-8 md:mb-14">
            3D Baskı • Tasarım • Üretim
          </p>

          <p className="body-text mb-12 md:mb-16 mx-auto max-w-lg">
            NOYA3D | 3D yazıcılar, baskı teknolojileri, filamentler ve yeni nesil üretim dünyasını keşfediyoruz. Test ediyoruz. Üretiyoruz. Geliştiriyoruz. Gerçek deneyimler, gerçek sonuçlar.
          </p>

        </div>
      </section>
      <section id="categories" className="section-pad border-top">
        <div className="container">
          <div className="cards-grid">
            {categories.map((cat) => {
              const post = posts.find((p) => p.category === cat)
              if (!post) return null
              if (cat === 'Özel Tasarım') {
                return (
                  <a
                    key={cat}
                    href="https://www.shopier.com/noya3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <article className="card">
                      <div className="card-media carousel-wrap">
                        <div className="carousel-track">
                          {slides.map((s, i) => (
                            <div key={i} className="carousel-slide">
                              <Image
                                src={s.image}
                                alt={s.title}
                                width={900}
                                height={700}
                                className="w-full h-full object-contain"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                              />
                              
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="card-body">
                        <span className="category-pill category-tag">{cat}</span>
                        <h3 className="card-title">{post.title}</h3>
                        <p className="card-excerpt">{post.excerpt}</p>
                      </div>
                    </article>
                  </a>
                )
              }
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
                        className="w-full h-full object-contain"
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
                className="w-full h-full object-contain"
              />
              
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

function SpecialCheckout() {
  const [paymentIntent, setPaymentIntent] = useState<string | null>(null)
  const [paymentStatus, setPaymentStatus] = useState<string | null>('')

  const stripe = useStripe()
  const elements = useElements()

  if (!stripe || !elements) {
    return null;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://noya3d.com.tr/success',
      },
    }) as any

    if (result.error) {
      setPaymentStatus(`Hata: ${result.error.message}`)
    } else if (result.paymentIntent?.status === 'succeeded') {
      setPaymentStatus('Ödeme başarıyla tamamlandı!')
      setPaymentIntent(result.paymentIntent.id)
    }
  }

  return (
    <div className="bg-white/10 p-6 rounded-lg border border-gray-700/30">
      <h3 className="text-lg font-bold mb-4 text-white">Kredi Kartı ile Öde</h3>
      <Elements stripe={stripe}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-200">Kart Numarası</label>
            <CardElement />
          </div>
          <button
            type="submit"
            disabled={!stripe}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
          >
            {stripe ? 'Öde' : 'Yükleniyor...'}
          </button>
          {paymentStatus && (
            <p className={`mt-2 text-sm ${paymentStatus.includes('başarıyla') ? 'text-green-400' : 'text-red-400'}`}>
              {paymentStatus}
            </p>
          )}
          {paymentIntent && (
            <p className="text-sm text-green-400">Ödeme ID: {paymentIntent}</p>
          )}
        </form>
      </Elements>
    </div>
  )
}
