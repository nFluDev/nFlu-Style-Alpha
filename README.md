# nFlu-Style-Alpha

**A modern, glassmorphic component library built with vanilla HTML, CSS, and JavaScript.**

nFlu-Style-Alpha is a comprehensive, framework-agnostic design system featuring beautiful glassmorphism effects, smooth dark/light themes, and accessible components. Perfect for building modern web applications and landing pages.

## ✨ Features

- 🎨 **Beautiful Design** — Glassmorphic UI with gradient accents
- 🌓 **Dark/Light Themes** — Automatic theme detection with smooth transitions
- ♿ **Accessible** — WCAG AA compliant with proper ARIA attributes
- 📱 **Responsive** — Mobile-first design with fluid typography
- ⚡ **Lightweight** — Minimal dependencies, vanilla JavaScript
- 🎭 **Rich Components** — 15+ production-ready components
- 🔧 **Customizable** — CSS custom properties for easy theming

## 📦 Installation

### Direct Download

Clone the repository:

```bash
git clone https://github.com/yourusername/nFlu-Style-Alpha.git
```

### CDN (Coming Soon)

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/nflu-style-alpha/css/nflu.min.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/nflu-style-alpha/js/nflu.min.js"></script>
```

## 🚀 Quick Start

### Basic HTML Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#F7F9FC">
  <title>My App</title>
  
  <!-- nFlu Styles -->
  <link rel="stylesheet" href="path/to/css/nflu.css">
</head>
<body>
  <div class="container">
    <h1 class="text-gradient">Hello, nFlu!</h1>
    <button class="btn btn--gradient">Get Started</button>
  </div>

  <!-- nFlu Scripts -->
  <script src="path/to/js/nflu.js"></script>
</body>
</html>
```

## 🎨 Theming

### Setting Theme

The theme is automatically detected from user's system preferences. You can manually set it:

```javascript
// Set theme
nflu.theme.set('dark');
nflu.theme.set('light');

// Toggle theme
nflu.theme.toggle();

// Get current theme
const currentTheme = nflu.theme.get();
```

### Theme Toggle Button

```html
<button class="toggle" 
        data-toggle="theme" 
        aria-label="Toggle theme">
  <svg class="toggle__icon toggle__icon--sun" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       stroke-width="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <!-- Add more sun rays -->
  </svg>
  <svg class="toggle__icon toggle__icon--moon" 
       viewBox="0 0 24 24" 
       fill="none" 
       stroke="currentColor" 
       stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</button>
```

### Customizing Colors

Override CSS variables in your stylesheet:

```css
:root {
  --accent: #your-color;
  --accent-2: #your-secondary-color;
  --radius: 12px;
  --blur: 16px;
}
```

## 🧩 Components

### Buttons

```html
<!-- Primary Button -->
<button class="btn btn--primary">Primary</button>

<!-- Gradient Button -->
<button class="btn btn--gradient">Gradient</button>

<!-- Outline Button -->
<button class="btn btn--outline">Outline</button>

<!-- Ghost Button -->
<button class="btn btn--ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn--primary btn--sm">Small</button>
<button class="btn btn--primary">Default</button>
<button class="btn btn--primary btn--lg">Large</button>

<!-- Icon Button -->
<button class="btn btn--primary btn--icon" aria-label="Menu">
  ☰
</button>

<!-- Loading State -->
<button class="btn btn--primary is-loading">Loading...</button>
```

### Forms

```html
<div class="field">
  <label class="label" for="email">Email Address</label>
  <input type="email" 
         id="email" 
         class="input" 
         placeholder="you@example.com">
  <span class="help">We'll never share your email.</span>
</div>

<!-- Textarea -->
<div class="field">
  <label class="label" for="message">Message</label>
  <textarea id="message" 
            class="textarea" 
            placeholder="Your message..."></textarea>
</div>

<!-- Select -->
<div class="field">
  <label class="label" for="country">Country</label>
  <select id="country" class="select">
    <option>United States</option>
    <option>Canada</option>
    <option>Mexico</option>
  </select>
</div>

<!-- Validation States -->
<div class="field is-invalid">
  <label class="label" for="username">Username</label>
  <input type="text" id="username" class="input" value="ab">
  <span class="error">Username must be at least 3 characters.</span>
</div>
```

### Cards

```html
<!-- Basic Card -->
<div class="card">
  <div class="card__header">
    <h3>Card Title</h3>
  </div>
  <div class="card__body">
    <p>Card content goes here...</p>
  </div>
  <div class="card__footer">
    <button class="btn btn--primary btn--sm">Action</button>
  </div>
</div>

<!-- Glass Card -->
<div class="card card--glass">
  <div class="card__body">
    <p>Glassmorphic card with blur effect</p>
  </div>
</div>

<!-- Project Card (YouTube-style) -->
<div class="card card--project">
  <div class="card__thumb">
    <!-- Add your image here -->
    <img src="your-image.jpg" alt="Project">
    <!-- Or leave empty for default gradient background with placeholder icon -->
  </div>
  <div class="card__content">
    <div class="card__avatar">N</div>
    <div class="card__meta">
      <h3 class="card__title">Project Title</h3>
      <p class="card__desc">Project description</p>
    </div>
  </div>
</div>
```

### Alerts

```html
<!-- Success Alert -->
<div class="alert alert--success">
  <span class="alert__icon">✅</span>
  <div class="alert__content">
    <h4 class="alert__title">Success!</h4>
    <p class="alert__message">Your changes have been saved.</p>
  </div>
  <button class="alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
</div>

<!-- JavaScript API -->
<script>
  nflu.alerts.show('Operation successful!', 'success');
  nflu.alerts.show('Something went wrong', 'error');
  nflu.alerts.show('Please note...', 'warning');
  nflu.alerts.show('Did you know?', 'info');
</script>
```

### Modals

```html
<!-- Trigger Button -->
<button class="btn btn--primary" data-modal="#myModal">
  Open Modal
</button>

<!-- Modal Structure -->
<div class="modal" id="myModal">
  <div class="modal__overlay"></div>
  <div class="modal__dialog">
    <div class="modal__header">
      <h3 class="modal__title">Modal Title</h3>
      <button class="modal__close" 
              data-modal-close 
              aria-label="Close">&times;</button>
    </div>
    <div class="modal__body">
      <p>Modal content goes here...</p>
    </div>
    <div class="modal__footer">
      <button class="btn btn--ghost" data-modal-close>Cancel</button>
      <button class="btn btn--primary">Confirm</button>
    </div>
  </div>
</div>
```

### More Components

See the `/examples` directory for complete demonstrations of:
- Panels (Glass & Hero variants)
- Badges
- Avatars
- Navigation (Header & Footer)
- Dropdowns
- Spinners
- Typography utilities
- Grid system
- And more!

## ♿ Accessibility

nFlu-Style-Alpha is built with accessibility in mind:

- ✅ **WCAG AA** color contrast ratios
- ✅ **Keyboard navigation** for all interactive elements
- ✅ **ARIA attributes** for screen readers
- ✅ **Focus indicators** for keyboard users
- ✅ **Reduced motion** support
- ✅ **Semantic HTML** structure

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Progressive enhancement for older browsers with graceful fallbacks for:
- `backdrop-filter` (glassmorphism)
- CSS `color-mix()`
- CSS Grid and Flexbox

## 📁 Directory Structure

```
nFlu-Style-Alpha/
├── css/
│   └── nflu.css          # Main stylesheet
├── js/
│   └── nflu.js           # Main JavaScript
├── components/           # Individual component CSS (optional)
├── examples/             # Demo pages
│   ├── index.html
│   ├── components.html
│   ├── landing.html
│   └── forms.html
├── assets/
│   ├── icons/
│   ├── images/
│   └── fonts/
├── docs/                 # Documentation
├── README.md            # English documentation
├── OKUBENI.md           # Turkish documentation
├── LICENSE              # MIT License
└── package.json         # Package configuration
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build CSS
npm run build:css

# Build JS
npm run build:js

# Build all
npm run build

# Watch for changes
npm run watch
```

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Credits

Built with ❤️ by [Naer](https://nflu.com)

Inspired by modern design systems and glassmorphism trends.

## 🔗 Links

- [Documentation](./docs/)
- [Examples](./examples/)
- [Turkish README](./OKUBENI.md)
- [GitHub Issues](https://github.com/yourusername/nFlu-Style-Alpha/issues)

---

**Made for developers who appreciate beautiful, accessible design.**
