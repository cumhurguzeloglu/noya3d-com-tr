# NOYA3D — noya3d.com.tr

NOYA3D — 3D Baskı, Tasarım ve Üretim çözümleri. Figürler, dekorlar, oto ve motor parçaları, aydınlatma ve özel tasarım ürünleri.  
Canlı site: https://noya3d.com.tr (Vercel, HTTP 200)

## Teknoloji Yığını

- Next.js 14.2.0 (`output: 'export'`, statik export)
- React 18.3.0
- TypeScript ^5
- Stripe test modu (`@stripe/stripe-js`, `@stripe/react-stripe-js`, `stripe`)
- Dağıtım: Vercel Production

## Ortam Değişkenleri

Aşağıdaki değişkenler gereklidir. **Gerçek değerler asla bu depoya yazılmaz ve `.env` dosyası `.gitignore` ile korumalıdır.**

| Değişken | Açıklama | Örnek (değer yazılmaz) |
|---|---|---|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe test yayınabilir anahtarı | `pk_test_...` |
| `STRIPE_SECRET_KEY` | Stripe test gizli anahtarı | `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook imza gizli anahtarı | `whsec_...` |

Kullanım: proje kökünde `.env.local` oluşturun (yerel geliştirme için). CI/CD tarafında bu değerler GitHub Secrets / Vercel Environment Variables olarak saklanır.

## Kurulum

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # statik export -> out/
npm run start    # production sunucu
npm run lint     # Next.js Lint
npx tsc --noEmit # TypeScript denetimi
```

## GitHub Flow ve Dallanma

- `master` (eski `main`): Sadece production-ready kod. Doğrudan push yok.
- `develop`: Geliştirme dalı; feature branch'leri buradan çıkarılır.
- `feat/<özellik-adı>`: Yeni özellik (ör. `feat/stripe-integration`)
- `fix/<hata-adı>`: Hata düzeltme (ör. `fix/image-object-fit`)
- `hotfix/<acil-düzeltme>`: Acil production düzeltmesi

Kural: `master`'a doğrudan push yapılmaz. Değişiklikler `feat/` veya `fix/` dalları üzerinden Pull Request ile `develop`'a, test sonrası `master`'a merge edilir.

## Commit ve Sürüm Standardı

- Commit mesajları: Conventional Commits (`feat:`, `fix:`, `style:`, `refactor:`, `docs:`, `chore:`)
  - Örnek: `feat: Stripe webhook endpoint eklendi`
- Sürümler: SemVer (`v1.0.0`, `v1.1.0`, vb.); etiketleme ve release notları ile.

## CI/CD (GitHub Actions)

| Dosya | Amaç |
|---|---|
| `.github/workflows/ci.yml` | Her push/PR'de: lint → TypeScript denetimi → production build |
| `.github/workflows/deploy.yml` | `master` push'ında: build → Vercel production deploy → smoke testi (`curl https://noya3d.com.tr`) |
| `.github/dependabot.yml` | Haftalık npm güvenlik ve bağımlılık güncellemeleri |

Gerekli GitHub Secret'leri (repo Settings → Secrets and variables → Actions):
- `VERCEL_TOKEN` — Vercel erişim tokenı
- `VERCEL_ORG_ID` — Vercel organization ID (`.vercel/project.json`)
- `VERCEL_PROJECT_ID` — Vercel project ID (`prj_...`)

## TestSprite (E2E)

- Yapılandırma: `testsprite.config.yaml` (alan isimleri Resmi TestSprite CLI dokümanında doğrulanmalı)
- E2E planlar: `testsprite-plans/*.plan.json` (düz metin adımları, tarayıcı kodu yok)
- Senaryolar: ana sayfa, kategori kartları, slayt, Stripe test ödeme akışı, `/success` sayfası, mobil menü
- `TESTSPRITE_API_KEY` asla kod içinde yazılmaz; sadece GitHub Secret olarak saklanır
- TestSprite CLI komutları ve bayrakları çalıştırılmadan önce Resmi TestSprite dokümanında doğrulanmalı

## Bilinen Sorunlar ve Yol Haritası

- `object-cover` → `object-contain` (görseller kırpılmamalı)
- "İZMİR" metni hâlâ var (kaldırılacak)
- Mobil pill butonları eksik
- `/success` sayfası eksik
- Stripe webhook endpoint eksik
- SEO: `sitemap.xml`, `robots.txt` eksik

Detaylı durum analizi, öncelikli yol haritası ve issue listesi proje dokümantasyonunda (Bu README'nin aşağı bölümlerinde) sunulmuştur.

## Lisans

Özel — NOYA3D
