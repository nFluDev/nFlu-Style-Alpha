# nFlu-Style-Alpha

**Vanilla HTML, CSS ve JavaScript ile oluşturulmuş modern, glassmorphic bir bileşen kütüphanesi.**

nFlu-Style-Alpha, güzel glassmorphism efektleri, yumuşak karanlık/aydınlık temalar ve erişilebilir bileşenler içeren kapsamlı, framework-bağımsız bir tasarım sistemidir. Modern web uygulamaları ve açılış sayfaları oluşturmak için mükemmeldir.

## ✨ Özellikler

- 🎨 **Güzel Tasarım** — Gradyan vurgularla glassmorphic UI
- 🌓 **Karanlık/Aydınlık Temalar** — Otomatik tema algılama ve yumuşak geçişler
- ♿ **Erişilebilir** — Uygun ARIA nitelikleriyle WCAG AA uyumlu
- 📱 **Responsive** — Akışkan tipografi ile mobile-first tasarım
- ⚡ **Hafif** — Minimal bağımlılık, vanilla JavaScript
- 🎭 **Zengin Bileşenler** — 15+ production-ready bileşen
- 🔧 **Özelleştirilebilir** — Kolay temalama için CSS özel özellikleri

## 📦 Kurulum

### Doğrudan İndirme

Repoyu klonlayın:

```bash
git clone https://github.com/yourusername/nFlu-Style-Alpha.git
```

### CDN (Yakında)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nflu-style-alpha/css/nflu.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/nflu-style-alpha/js/nflu.min.js"></script>
```

## 🚀 Hızlı Başlangıç

### Temel HTML Şablonu

```html
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#F7F9FC">
  <title>Uygulamam</title>
  
  <!-- nFlu Stilleri -->
  <link rel="stylesheet" href="path/to/css/nflu.css">
</head>
<body>
  <div class="container">
    <h1 class="text-gradient">Merhaba, nFlu!</h1>
    <button class="btn btn--gradient">Başlayın</button>
  </div>

  <!-- nFlu Script'leri -->
  <script src="path/to/js/nflu.js"></script>
</body>
</html>
```

## 🎨 Temalama

### Tema Ayarlama

Tema, kullanıcının sistem tercihlerinden otomatik olarak algılanır. Manuel olarak ayarlayabilirsiniz:

```javascript
// Tema ayarla
nflu.theme.set('dark');
nflu.theme.set('light');

// Tema değiştir
nflu.theme.toggle();

// Mevcut temayı al
const currentTheme = nflu.theme.get();
```

### Renkleri Özelleştirme

CSS değişkenlerini stil sayfanızda geçersiz kılın:

```css
:root {
  --accent: #sizin-renginiz;
  --accent-2: #ikincil-renginiz;
  --radius: 12px;
  --blur: 16px;
}
```

## 🧩 Bileşenler

### Butonlar

```html
<!-- Birincil Buton -->
<button class="btn btn--primary">Birincil</button>

<!-- Gradyan Buton -->
<button class="btn btn--gradient">Gradyan</button>

<!-- Çerçeve Buton -->
<button class="btn btn--outline">Çerçeve</button>

<!-- Hayalet Buton -->
<button class="btn btn--ghost">Hayalet</button>

<!-- Boyutlar -->
<button class="btn btn--primary btn--sm">Küçük</button>
<button class="btn btn--primary">Varsayılan</button>
<button class="btn btn--primary btn--lg">Büyük</button>

<!-- Yükleme Durumu -->
<button class="btn btn--primary is-loading">Yükleniyor...</button>
```

### Formlar

```html
<div class="field">
  <label class="label" for="email">E-posta Adresi</label>
  <input type="email" 
         id="email" 
         class="input" 
         placeholder="siz@ornek.com">
  <span class="help">E-postanızı asla paylaşmayacağız.</span>
</div>

<!-- Textarea -->
<div class="field">
  <label class="label" for="message">Mesaj</label>
  <textarea id="message" 
            class="textarea" 
            placeholder="Mesajınız..."></textarea>
</div>

<!-- Select -->
<div class="field">
  <label class="label" for="country">Ülke</label>
  <select id="country" class="select">
    <option>Türkiye</option>
    <option>Almanya</option>
    <option>Fransa</option>
  </select>
</div>

<!-- Doğrulama Durumları -->
<div class="field is-invalid">
  <label class="label" for="username">Kullanıcı Adı</label>
  <input type="text" id="username" class="input" value="ab">
  <span class="error">Kullanıcı adı en az 3 karakter olmalıdır.</span>
</div>
```

### Kartlar

```html
<!-- Temel Kart -->
<div class="card">
  <div class="card__header">
    <h3>Kart Başlığı</h3>
  </div>
  <div class="card__body">
    <p>Kart içeriği buraya gelir...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary btn--sm">İşlem</button>
  </div>
</div>

<!-- Cam Kart -->
<div class="card card--glass">
  <div class="card__body">
    <p>Bulanıklık efektli glassmorphic kart</p>
  </div>
</div>

<!-- Proje Kartı (YouTube-tarzı) -->
<div class="card card--project">
  <div class="card__thumb">
    <!-- Resminizi buraya ekleyin -->
    <img src="resim.jpg" alt="Proje">
    <!-- Veya boş bırakın, otomatik gradient arka plan ve ikon gösterir -->
  </div>
  <div class="card__content">
    <div class="card__avatar">N</div>
    <div class="card__meta">
      <h3 class="card__title">Proje Başlığı</h3>
      <p class="card__desc">Proje açıklaması</p>
    </div>
  </div>
</div>
```

### Uyarılar

```html
<!-- Başarı Uyarısı -->
<div class="alert alert--success">
  <span class="alert__icon">✅</span>
  <div class="alert__content">
    <h4 class="alert__title">Başarılı!</h4>
    <p class="alert__message">Değişiklikleriniz kaydedildi.</p>
  </div>
  <button class="alert__close" data-dismiss="alert" aria-label="Kapat">&times;</button>
</div>

<!-- JavaScript API -->
<script>
  nflu.alerts.show('İşlem başarılı!', 'success');
  nflu.alerts.show('Bir şeyler yanlış gitti', 'error');
  nflu.alerts.show('Lütfen dikkat...', 'warning');
  nflu.alerts.show('Biliyor musunuz?', 'info');
</script>
```

### Modallar

```html
<!-- Tetikleme Butonu -->
<button class="btn btn--primary" data-modal="#myModal">
  Modal Aç
</button>

<!-- Modal Yapısı -->
<div class="modal" id="myModal">
  <div class="modal__overlay"></div>
  <div class="modal__dialog">
    <div class="modal__header">
      <h3 class="modal__title">Modal Başlığı</h3>
      <button class="modal__close" 
              data-modal-close 
              aria-label="Kapat">&times;</button>
    </div>
    <div class="modal__body">
      <p>Modal içeriği buraya gelir...</p>
    </div>
    <div class="modal__footer">
      <button class="btn btn--ghost" data-modal-close>İptal</button>
      <button class="btn btn--primary">Onayla</button>
    </div>
  </div>
</div>
```

### Daha Fazla Bileşen

Şunların eksiksiz gösterimleri için `/examples` dizinine bakın:
- Paneller (Cam ve Hero varyantları)
- Rozetler
- Avatarlar
- Navigasyon (Header ve Footer)
- Açılır Menüler
- Yükleyiciler
- Tipografi yardımcıları
- Grid sistemi
- Ve daha fazlası!

## ♿ Erişilebilirlik

nFlu-Style-Alpha, erişilebilirlik düşünülerek oluşturulmuştur:

- ✅ **WCAG AA** renk kontrast oranları
- ✅ **Klavye navigasyonu** tüm etkileşimli öğeler için
- ✅ **ARIA özellikleri** ekran okuyucular için
- ✅ **Odak göstergeleri** klavye kullanıcıları için
- ✅ **Azaltılmış hareket** desteği
- ✅ **Anlamsal HTML** yapısı

## 🌐 Tarayıcı Desteği

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Eski tarayıcılar için şunlar için zarif geri dönüşlerle aşamalı geliştirme:
- `backdrop-filter` (glassmorphism)
- CSS `color-mix()`
- CSS Grid ve Flexbox

## 📁 Dizin Yapısı

```
nFlu-Style-Alpha/
├── css/
│   └── nflu.css          # Ana stil sayfası
├── js/
│   └── nflu.js           # Ana JavaScript
├── components/           # Bireysel bileşen CSS (opsiyonel)
├── examples/             # Demo sayfaları
│   ├── index.html
│   ├── components.html
│   ├── landing.html
│   └── forms.html
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
├── docs/                 # Belgeler
├── README.md            # İngilizce belgeler
├── OKUBENI.md           # Türkçe belgeler
├── LICENSE              # MIT Lisansı
└── package.json         # Paket yapılandırması
```

## 🛠️ Geliştirme

```bash
# Bağımlılıkları yükle
npm install

# CSS oluştur
npm run build:css

# JS oluştur
npm run build:js

# Hepsini oluştur
npm run build

# Değişiklikleri izle
npm run watch
```

## 📄 Lisans

MIT Lisansı - detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

❤️ ile [Naer](https://nflu.com) tarafından oluşturuldu

Modern tasarım sistemlerinden ve glassmorphism trendlerinden ilham alındı.

## 🔗 Bağlantılar

- [Belgeler](./docs/)
- [Örnekler](./examples/)
- [İngilizce README](./README.md)
- [GitHub Issues](https://github.com/yourusername/nFlu-Style-Alpha/issues)

---

**Güzel, erişilebilir tasarımı takdir eden geliştiriciler için yapıldı.**
