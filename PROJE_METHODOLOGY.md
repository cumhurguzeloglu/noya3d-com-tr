# NOYA3D Proje Metodolojisi — GitHub Workflow

## 1. Kanban Tabanlı İş Akışı
Her iş için Kanban kartı oluşturulur.
Kart durumları: `todo` → `in progress` → `review` → `done`
Her kart için: assignee, skills, acceptance criteria tanımlanır.
Alt ajanlara görev dağıtılır, sonuç kanban'a yazılır.

## 2. Git / GitHub Workflow
Her anlamlı değişiklik için commit atılır.
Commit mesajı: `<type>: <kısa açıklama>` formatında.
Örnek: `feat: kullanıcı girişi sayfası eklendi`
`main` branch'e doğrudan push yapılmaz.

### Branching Stratejisi
- `main` (eski master): Sadece production-ready kod içerir.
- `develop`: Geliştirme ortamı, tüm feature branch'leri buradan çıkarılır.
- `feature/<özellik-adı>`: Yeni özellik için ayrı branch.
- `bugfix/<hata-adı>`: Hata düzeltme için ayrı branch.
- `hotfix/<acil-düzeltme>`: Acil düzeltme için ayrı branch.

## 3. Pull Request (PR) — En kritik adım
Kod değişikliği bitince GitHub'da bir **Pull Request** açılır.
Bu sayede:
- Diğer ekip üyeleri kodu inceleyebilir (**Code Review**).
- Hata, iyileştirme önerisi eklenebilir.
- Onaylandıktan sonra `develop` branch'e birleştirilir (merge).
- `develop` test edildikten sonra `main`'a merge edilir.

## 4. Issue (İş Takibi)
Proje sırasında çıkan hatalar, özellik istekleri, geliştirme notları için **Issues** açılır.
Her issue:
- Başlık ve açıklama içerebilir.
- Etiketle (label) sınıflandırılabilir (bug, enhancement, documentation).
- Bir kişiye atanabilir ve süre takibi yapılabilir.

## 5. Proje Yönetimi (Kanban / Project Board)
GitHub Projects ile kart tabanlı takip yapılabilir:
- To Do
- In Progress
- In Review
- Done

## 6. Dokümantasyon (README.md)
Projenin kökünde bir `README.md` dosyası bulunur. İçerisinde:
- Proje hakkında bilgi
- Kurulum talimatları
- Kullanım örnekleri
- Katkıda bulunma kılavuzu (CONTRIBUTING.md)

## 7. Sürüm Yönetimi (Releases & Tags)
Yayınlanan sürümler etiketlenir (tag):
- `v1.0.0`, `v1.1.0`, vb.
- Yayın notları (release notes) yazılır.

## 8. CI/CD (Otomatik Test ve Dağıtım)
GitHub Actions gibi araçlarla:
- Her push'ta otomatik testler çalıştırılır.
- Kod kalitesi kontrol edilir (linting).
- Kod tekrar publish edilebilir.

## 9. Stripe Test Entegrasyonu
Test modunda Stripe entegrasyonu yapılır:
- `STRIPE_PUBLIC_KEY` ve `STRIPE_SECRET_KEY` test anahtarları kullanılır.
- Test kartı numaraları kullanılır (örn: 4242 4242 4242 4242).
- `STRIPE_TEST_MODE=true` ortam değişkeni eklenir.
- Test sepeti ve ödeme sayfası oluşturulur.

## 10. Hata Yönetimi
- Build hatası → log analizi → fix → rebuild
- Deploy hatası → Vercel logları → fix → redeploy
- Runtime hatası → browser console → fix → rebuild

## 11. Comit / Commit Standartları
- Commit: `feat: <açıklama>`, `fix: <açıklama>`, `style: <açıklama>`, `refactor: <açıklama>`
- Push: `git push origin <branch>`

## 12. Deploy Sonrası Kontrol Listesi
- [ ] `curl -I https://noya3d.com.tr` → 200 OK
- [ ] HTML'de `carousel-caption`, `carousel-slide` classları var mı?
- [ ] Döküman dosyaları Shopier CDN'inden geliyor mu?
- [ ] "Keşfet" yazısı YOK mu?
- ✅ Newsletter BÖLÜMÜ YOK mu?
- ✅ Hero'da "NOYA3D" büyük başlığı YOK mu?
- ✅ Navbar brand "NOYA3D" YOK mu?
- ✅ Footer copyright var mı?

## 13. Süreç Kontrol Noktaları

| Aşama | Aksiyon | Onay |
|-------|---------|------|
| Kod değişikliği | Patch/apply → LSP hatası kontrolü | ✅ |
| Build | `npm run build` → success | ✅ |
| Deploy | `vercel --prod --yes` → success | ✅ |
| Doğrulama | `curl` + HTML parse | ✅ |
| Git | `git add . && git commit && git push` | ✅ |
| Kanban | Kart `done` olarak işaretlendi | ✅ |
| Memory | Karar kaydedildi | ✅ |

*Son güncelleme: 2026-11-17*