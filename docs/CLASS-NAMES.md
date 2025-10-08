# Class Names Reference

All classes now use simple, generic names without the `nflu-` prefix for easy sharing and integration.

## Component Classes

### Buttons
- `.btn` - Base button
- `.btn--primary` - Primary button
- `.btn--secondary` - Secondary button
- `.btn--outline` - Outline button
- `.btn--ghost` - Ghost button
- `.btn--gradient` - Gradient button
- `.btn--icon` - Icon button
- `.btn--sm` - Small size
- `.btn--lg` - Large size
- `.is-loading` - Loading state

### Forms
- `.field` - Form field wrapper
- `.label` - Form label
- `.input` - Text input
- `.textarea` - Textarea
- `.select` - Select dropdown
- `.check` - Checkbox wrapper
- `.radio` - Radio button wrapper
- `.help` - Help text
- `.error` - Error message
- `.input-group` - Input with button/icon
- `.is-valid` - Valid state
- `.is-invalid` - Invalid state

### Cards
- `.card` - Base card
- `.card__header` - Card header
- `.card__body` - Card body
- `.card__footer` - Card footer
- `.card--glass` - Glass card variant
- `.card--project` - Project/YouTube-style card
- `.card__thumb` - Thumbnail area
- `.card__content` - Content area
- `.card__avatar` - Avatar
- `.card__meta` - Meta information
- `.card__title` - Title
- `.card__desc` - Description

### Panels
- `.panel` - Base panel
- `.panel--glass` - Glass panel
- `.panel--hero` - Hero panel
- `.panel__header` - Panel header
- `.panel__title` - Panel title
- `.panel__actions` - Panel actions

### Alerts
- `.alert` - Base alert
- `.alert--success` - Success alert
- `.alert--error` - Error alert
- `.alert--warning` - Warning alert
- `.alert--info` - Info alert
- `.alert__icon` - Alert icon
- `.alert__content` - Alert content
- `.alert__title` - Alert title
- `.alert__message` - Alert message
- `.alert__close` - Close button

### Badges
- `.badge` - Base badge
- `.badge--default` - Default badge
- `.badge--accent` - Accent badge
- `.badge--success` - Success badge
- `.badge--error` - Error badge
- `.badge--warning` - Warning badge
- `.badge--info` - Info badge
- `.badge--dot` - Badge with dot
- `.badge--count` - Count badge

### Avatars
- `.avatar` - Base avatar
- `.avatar--sm` - Small avatar
- `.avatar--md` - Medium avatar
- `.avatar--lg` - Large avatar
- `.avatar--ring` - Avatar with ring

### Navigation
- `.header` - Site header
- `.header__container` - Header container
- `.header__brand` - Brand/logo
- `.header__nav` - Navigation
- `.header__link` - Navigation link
- `.header__actions` - Action buttons
- `.header__toggle` - Mobile menu toggle
- `.is-scrolled` - Scrolled state
- `.is-open` - Open state

### Footer
- `.footer` - Site footer
- `.footer__container` - Footer container
- `.footer__section` - Footer section
- `.footer__title` - Section title
- `.footer__links` - Links list
- `.footer__link` - Footer link
- `.footer__copy` - Copyright text

### Modals
- `.modal` - Base modal
- `.modal__overlay` - Modal overlay
- `.modal__dialog` - Modal dialog
- `.modal__header` - Modal header
- `.modal__title` - Modal title
- `.modal__close` - Close button
- `.modal__body` - Modal body
- `.modal__footer` - Modal footer
- `.modal__dialog--sm` - Small dialog
- `.modal__dialog--lg` - Large dialog
- `.modal__dialog--xl` - Extra large dialog

### Dropdowns
- `.dropdown` - Dropdown container
- `.dropdown__menu` - Dropdown menu
- `.dropdown__item` - Menu item
- `.dropdown__divider` - Menu divider
- `.is-open` - Open state

### Theme Toggle
- `.toggle` - Toggle button
- `.toggle__icon` - Icon
- `.toggle__icon--sun` - Sun icon
- `.toggle__icon--moon` - Moon icon

### Spinners
- `.spinner` - Base spinner
- `.spinner--sm` - Small spinner
- `.spinner--lg` - Large spinner
- `.spinner--accent` - Accent color
- `.spinner--white` - White color

## Data Attributes

All data attributes now use simple names:

- `data-toggle="theme"` - Theme toggle
- `data-modal="#id"` - Modal trigger
- `data-modal-close` - Modal close
- `data-dropdown` - Dropdown toggle
- `data-dismiss="alert"` - Alert dismiss
- `data-reveal` - Reveal animation
- `data-open="true"` - Open state

## Utility Classes

All utility classes remain the same (no nflu- prefix was ever used):
- Display: `.flex`, `.grid`, `.block`, `.hidden`
- Spacing: `.m-4`, `.p-6`, `.gap-2`
- Text: `.text-center`, `.text-muted`, `.text-gradient`
- Colors: `.bg-surface`, `.bg-accent`
- Borders: `.border`, `.rounded`, `.rounded-full`
- Shadows: `.shadow-sm`, `.shadow-md`, `.shadow-lg`

## JavaScript API

The JavaScript API still uses the `nflu` namespace:

```javascript
// Theme
nflu.theme.set('dark')
nflu.theme.toggle()
nflu.theme.get()

// Alerts
nflu.alerts.show('Message', 'success')

// Modals
nflu.modal.open(element)
nflu.modal.close()

// Dropdowns
nflu.dropdown.open(element)
nflu.dropdown.close()

// Utilities
nflu.utils.$('selector')
nflu.utils.store.get('key')
```
