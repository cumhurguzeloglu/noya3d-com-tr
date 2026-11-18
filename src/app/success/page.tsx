import Link from 'next/link'

export default function SuccessPage() {
  return (
    <main className="min-h-screen py-16 md:py-28 px-4">
      <div className="max-w-lg w-full mx-auto text-center">
        <div className="bg-white/10 p-8 rounded-lg border border-gray-700/30 inline-block">
          <h1 className="text-2xl font-bold text-white mb-4">Ödeme Başarılı</h1>
          <p className="text-gray-200 mb-6">
            Siparişiniz başarıyla tamamlandı. Teşekkür ederiz.
          </p>
          <Link
            href="/"
            className="btn-primary flex items-center gap-2 inline-flex mx-auto"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  )
}
