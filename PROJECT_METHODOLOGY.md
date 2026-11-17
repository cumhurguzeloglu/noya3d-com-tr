# NOYA3D Proje Metodolojisi

## Proje Yönetim Metodolojisi

### 1. Kanban Tabanlı İş Akışı
- Her iş için kanban kartı oluşturulur
- Kart durumları: `ready` → `in_progress` → `review` → `done`
- Her kart için: assignee, skills, acceptance criteria tanımlanır
- Alt ajanlara görev dağıtılır, sonuç kanban'a yazılır

### 2. Git/GitHub Workflow
- Her anlamlı değişiklik için commit atılır
- Commit mesajı: `<type>: <kısa açıklama>` formatında
- `main` branch'e doğrudan push (tek geliştirici için)
- Deploy öncesi `git push origin master` zorunlu

### 3. Deploy Süreci
- Local build: `npm run build` (başarılı olmalı)
- Production deploy: `vercel --prod --yes`
- Deploy sonrası `curl` ile doğrulama
- GitHub'a push sonrası Vercel otomatik deploy (webhook ile)

### 4. Modül / Bileşen Mimarisi
- Sayfa bileşenleri: `src/app/page.tsx`
- Stil dosyaları: `src/app/globals.css`
- Layout: `src/app/layout.tsx`
- Her bileşen tek sorumluluk prensibiyle yazılır
- Yeniden kullanılabilir bileşenler (SpecialCarousel, Nav) ayrı fonksiyon olarak tanımlanır

### 5. Alt Ajan Kullanımı
- Karmaşık görevler için `delegate_task` ile alt ajan spawn edilir
- Her alt ajan için: `goal`, `context`, `output_schema` tanımlanır
- Alt ajan sonuçları kanban kartına yazılır
- Hata durumunda `steer` ile yönlendirme yapılır

### 6. Kanban Kullanım Kuralları
- `kanban_create` ile kart oluştur
- `kanban_show` ile detay gör
- İş bitince `kanban_complete` ile kapat
- Bloker varsa `kanban_block` ile bildir
- Review gerekiyorsa `kanban_request_review`

### 6. Memory Kayıtları
- Önemli kararlar `memory` tool ile kaydedilir
- `target: "memory"` ile projeye özel notlar
- `target: "user"` ile kullanıcı tercihleri

### 8. Cross-Check / Doğrulama
- Deploy sonrası `curl` ile endpoint kontrolü
- HTML'de beklenen class/id/tag'ler aranır
- Screenshot ile görsel doğrulama (mümkünse)
- Kanban kartı `done` olmadan deploy yapılmaz

### 9. Hata Yönetimi
- Build hatası → log analizi → fix → rebuild
- Deploy hatası → Vercel logları → fix → redeploy
- Runtime hatası → browser console → fix → rebuild

---

## NOYA3D Projesi İçin Özel Kurallar

### Site Yapısı (Güncel)
```
- Navbar: Kategoriler, Mağaza, Instagram, YouTube, TikTok
- Hero: Logo + "3D Baskı • Tasarım • Üretim" + YouTube açıklaması + 4 CTA
- Slayt (Sizin İçin Özel Üretilen Baskılar): 3 ürün, auto-slide, yazılar ALTTA
- Kategoriler: 7 kart, görsel tıklayınca Shopier, "Keşfet" yazısı yok
- Footer: Copyright
```

### Yasaklılar
- ❌ Newsletter bölümü
- ❌ Navbar'da brand (NOYA3D yazısı)
- ❌ Hero'da "NOYA3D" büyük başlığı
- ❌ "Keşfet →" yazısı
- ❌ placehold.co placeholder görseller
- ❌ `object-cover` (görseller kırpılmamalı)

### Zorunlular
- ✅ Shopier'dan gerçek ürün fotoğrafları
- ✅ YouTube kanal açıklaması hero'da
- ✅ Slayt yazıları resmin ALTINDA
- ✅ Slayt otomatik geçiş (4 sn)
- ✅ Görseller `object-contain`, padding 16px, height 360px
- ✅ Görsel tıklayınca Shopier'a gider
- ✅ Slayt başlığı "Sizin İçin Özel Üretilen Baskılar"
- ✅ Footer copyright

### Branch / Commit Standartları
- Commit: `feat: <açıklama>`, `fix: <açıklama>`, `style: <açıklama>`, `refactor: <açıklama>`
- Push: `git push origin master`

### Deploy Sonrası Kontrol Listesi
- [ ] `curl -I https://noya3d.com.tr` → 200 OK
- [ ] HTML'de `carousel-caption`, `carousel-slide` classları var mı?
- [ ] Slayt fotoğrafları Shopier CDN'inden mi geliyor?
- [ ] "Keşfet" yazısı YOK mu?
- [ ] Newsletter BÖLÜMÜ YOK mu?
- [ ] Hero'da "NOYA3D" büyük başlığı YOK mu?
- [ ] Navbar'da "NOYA3D" brand YOK mu?
- [ ] Footer copyright var mı?

---

## Süreç Kontrol Noktaları

| Aşama | Aksiyon | Onay |
|-------|---------|------|
| Kod değişikliği | Patch/apply → LSP hatası kontrolü | ✅ |
| Build | `npm run build` → success | ✅ |
| Deploy | `vercel --prod --yes` → success | ✅ |
| Doğrulama | `curl` + HTML parse | ✅ |
| Git | `git add . && git commit && git push` | ✅ |
| Kanban | Kart `done` olarak işaretlendi | ✅ |
| Memory | Karar kaydedildi | ✅ |

---

*Son güncelleme: 2026-11-17*