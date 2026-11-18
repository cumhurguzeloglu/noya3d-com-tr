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
  'Automotive',
  'Çizgi Karakteri',
  'Halloween'
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
    title: 'Atatürk Büstü',
    excerpt: 'Atatürk\'ün detaylı büstü, ofis ve ev dekorasyonu için ideal.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_9da6dae374d73dddc30413382c254be7.jpg',
    shopierUrl: 'https://www.shopier.com/noya3d/52446986'
  },
  {
    id: 'dekorasyon',
    category: 'Dekorasyon',
    title: 'PS5 Kontrolcü Askısı',
    excerpt: 'PS5 kontrolcünüzü şık ve düzenli bir şekilde saklamak için tasarlanmış askı.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_3947a9a7212284fb5b8c461d6ba2cecd.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51977924'
  },
  {
    id: 'automotive-ecu',
    category: 'Automotive',
    title: 'ECU Master Black Connector Backshell Kit',
    excerpt: 'ECU Master Black konektör için backshell kiti, profesyonel otomotiv uygulamalar için.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_0969e897bcc9d73f867d45e56dd07837.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/52457673'
  },
  {
    id: 'cizgi-karakteri',
    category: 'Çizgi Karakteri',
    title: 'Peter Griffin - Family Guy',
    excerpt: 'Family Guy\'dan Peter Griffin karakteri, hayranlar için koleksiyonluk figür.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_38a254de6e3dc9ee79fe7b7751b20446.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51796776'
  },
  {
    id: 'halloween',
    category: 'Halloween',
    title: 'Kuru Kafa - Renk Geçişli',
    excerpt: 'Halloween için özel tasarlanmış, renk geçişli kuru kafa tasarımı.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_d7079035d0d4ecd6fb0e0d447b11d969.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51983389'
  },
  {
    id: 'automotive-ecu',
    category: 'Automotive',
    title: 'ECU Master Black Connector Backshell Kit',
    excerpt: 'ECU Master Black konektör için backshell kiti, profesyonel otomotiv uygulamalar için.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_0969e897bcc9d73f867d45e56dd07837.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/52457673'
  },
  {
    id: 'automotive-spark',
    category: 'Automotive',
    title: 'Spark Ems Core-8 Connector Backshell Kit',
    excerpt: 'Spark EMS Core-8 konektör için backshell kiti.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_707eb35e305427921102ba675ed3ac47.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/52457563'
  },
  {
    id: 'automotive-emu',
    category: 'Automotive',
    title: 'EMU Pro-8 Connector Backshell Kit',
    excerpt: 'EMU Pro-8 konektör için backshell kiti, profesyonel otomotiv uygulamalar için.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_1b7b0b0b0d0279a9853337301fe8ca33.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/52456131'
  },
  {
    id: 'halloween',
    category: 'Halloween',
    title: 'Kuru Kafa - Renk Geçişli',
    excerpt: 'Halloween için özel tasarlanmış, renk geçişli kuru kafa tasarımı.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_d7079035d0d4ecd6fb0e0d447b11d969.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51983389'
  },
  {
    id: 'dekorasyon',
    category: 'Dekorasyon',
    title: 'PS5 Kontrolcü Askısı',
    excerpt: 'PS5 kontrolcünüzü şık ve düzenli bir şekilde saklamak için tasarlanmış askı.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_3947a9a7212284fb5b8c461d6ba2cecd.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51977924'
  },
  {
    id: 'cizgi-karakteri',
    category: 'Çizgi Karakteri',
    title: 'Peter Griffin - Family Guy',
    excerpt: 'Family Guy\'dan Peter Griffin karakteri, hayranlar için koleksiyonluk figür.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_38a254de6e3dc9ee79fe7b7751b20446.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51796776'
  },
  {
    id: 'halloween-kuru',
    category: 'Halloween',
    title: 'Kuru Kafa - Renk Geçişli',
    excerpt: 'Halloween için özel tasarlanmış, renk geçişli kuru kafa tasarımı.',
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_d7079035d0d4ecd6fb0e0d447b11d969.jpeg',
    shopierUrl: 'https://www.shopier.com/noya3d/51983389'
  }
]

const featured = posts[posts.length - 1]

const slides = [
  {
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_0969e897bcc9d73f867d45e56dd07837.jpeg',
    title: 'ECU Master Black Connector Backshell Kit',
    shopierUrl: 'https://www.shopier.com/noya3d/52457673'
  },
  {
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_707eb35e305427921102ba675ed3ac47.jpeg',
    title: 'Spark Ems Core-8 Connector Backsell Kit',
    shopierUrl: 'https://www.shopier.com/noya3d/52457563'
  },
  {
    image: 'https://cdn.shopier.app/pictures_mid/NOYA3D_1b7b0b0b0d0279a9853337301fe8ca33.jpeg',
    title: 'EMU Pro-8 Connector Backshell Kit',
    shopierUrl: 'https://www.shopier.com/noya3d/52456131'
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                              <path d="M5 3C3.89543 3 3 3.89543 3 5V6.83772L1.49006 11.3675C1.10052 12.5362 1.8474 13.7393 3 13.963V20C3 21.1046 3.89543 22 5 22H9H10H14H15H19C20.1046 22 21 21.1046 21 20V13.963C22.1526 13.7393 22.8995 12.5362 22.5099 11.3675L21 6.83772V5C21 3.89543 20.1046 3 19 3H5ZM15 20H19V14H17.5H12H6.5H5V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20ZM11 20H13V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20ZM3.38743 12L4.72076 8H6.31954L5.65287 12H4H3.38743ZM7.68046 12L8.34713 8H11V12H7.68046ZM13 12V8H15.6529L16.3195 12H13ZM18.3471 12L17.6805 8H19.2792L20.6126 12H20H18.3471ZM19 5V6H16.5H12H7.5H5V5H19Z" fill="currentColor" />
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                              <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5ZM1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="currentColor" />
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                              <path d="M9.49614 7.13176C9.18664 6.9549 8.80639 6.95617 8.49807 7.13509C8.18976 7.31401 8 7.64353 8 8V16C8 16.3565 8.18976 16.686 8.49807 16.8649C8.80639 17.0438 9.18664 17.0451 9.49614 16.8682L16.4961 12.8682C16.8077 12.6902 17 12.3589 17 12C17 11.6411 16.8077 11.3098 16.4961 11.1318L9.49614 7.13176ZM13.9844 12L10 14.2768V9.72318L13.9844 12ZM0 12C0 8.25027 0 6.3754 0.954915 5.06107C1.26331 4.6366 1.6366 4.26331 2.06107 3.95491C3.3754 3 5.25027 3 9 3H15C18.7497 3 20.6246 3 21.9389 3.95491C22.3634 4.26331 22.7367 4.6366 23.0451 5.06107C24 6.3754 24 8.25027 24 12C24 15.7497 24 17.6246 23.0451 18.9389C22.7367 19.3634 22.3634 19.7367 21.9389 20.0451C20.6246 21 18.7497 21 15 21H9C5.25027 21 3.3754 21 2.06107 20.0451C1.6366 19.7367 1.26331 19.3634 0.954915 18.9389C0 17.6246 0 15.7497 0 12Z" fill="currentColor" />
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                              <path d="M16.8217 5.1344C16.0886 4.29394 15.6479 3.19805 15.6479 2H14.7293M16.8217 5.1344C17.4898 5.90063 18.3944 6.45788 19.4245 6.67608C19.7446 6.74574 20.0786 6.78293 20.4266 6.78293V10.2191C18.645 10.2191 16.9932 9.64801 15.6477 8.68211V15.6707C15.6477 19.1627 12.8082 22 9.32386 22C7.50043 22 5.85334 21.2198 4.69806 19.98C3.64486 18.847 2.99994 17.3331 2.99994 15.6707C2.99994 12.2298 5.75592 9.42509 9.17073 9.35079M16.8217 5.1344C16.8039 5.12276 16.7861 5.11101 16.7684 5.09914M6.9855 17.3517C6.64217 16.8781 6.43802 16.2977 6.43802 15.6661C6.43802 14.0734 7.73249 12.7778 9.32394 12.7778C9.62087 12.7778 9.9085 12.8288 10.1776 12.9124V9.40192C9.89921 9.36473 9.61622 9.34149 9.32394 9.34149C9.27287 9.34149 8.86177 9.36884 8.81073 9.36884M14.7244 2H12.2097L12.2051 15.7775C12.1494 17.3192 10.8781 18.5591 9.32386 18.5591C8.35878 18.5591 7.50971 18.0808 6.98079 17.3564" fill="currentColor" />
                              <circle cx="12" cy="12" r="3" fill="currentColor" />
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


          <p className="hero-title font-medium mb-8 md:mb-14">
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
                                  href={post.shopierUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block hover:opacity-90 transition-opacity"
                                >
                    <article className="card">
                      <div className="card-media carousel-wrap">
                        <div className="carousel-track">
                          {slides.map((s, i) => (
                                                      <a key={i} href={s.shopierUrl} target="_blank" rel="noopener noreferrer" className="block">
                                                        <div className="carousel-slide">
                                                          <Image
                                                            src={s.image}
                                                            alt={s.title}
                                                            width={900}
                                                            height={700}
                                                            className="w-full h-full object-contain"
                                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                                                          />
                                                        </div>
                                                      </a>
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
                                href={post.shopierUrl}
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
