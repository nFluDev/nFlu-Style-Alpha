/*!
 * nFlu-Style-Alpha v0.1.0
 * A modern, glassmorphic component library
 * Built with love by Naer
 * Licensed under MIT
 */

(function() {
  'use strict';

  // ========================================
  // HELPERS & UTILITIES
  // ========================================

  const $ = (selector, context = document) => context.querySelector(selector);
  const $all = (selector, context = document) => Array.from(context.querySelectorAll(selector));

  const on = (element, event, handler, options = {}) => {
    if (!element) return;
    element.addEventListener(event, handler, options);
  };

  const delegate = (selector, event, handler) => {
    on(document, event, (e) => {
      const target = e.target.closest(selector);
      if (target) handler.call(target, e);
    });
  };

  // Storage helpers with try-catch
  const store = {
    get: (key) => {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set: (key, value) => {
      try {
        localStorage.setItem(key, value);
        return true;
      } catch {
        return false;
      }
    },
    remove: (key) => {
      try {
        localStorage.removeItem(key);
        return true;
      } catch {
        return false;
      }
    }
  };

  // Media query helpers
  const media = {
    prefersReducedMotion: () => {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    },
    prefersDark: () => {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  };

  // DOM utilities
  const dom = {
    lockScroll: () => {
      document.body.style.overflow = 'hidden';
    },
    unlockScroll: () => {
      document.body.style.overflow = '';
    },
    clickOutside: (element, callback) => {
      const handler = (e) => {
        if (element && !element.contains(e.target)) {
          callback(e);
        }
      };
      on(document, 'click', handler);
      return () => document.removeEventListener('click', handler);
    },
    trapFocus: (element) => {
      const focusableEls = $all(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        element
      );
      const firstFocusable = focusableEls[0];
      const lastFocusable = focusableEls[focusableEls.length - 1];

      const handler = (e) => {
        if (e.key !== 'Tab') return;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            lastFocusable.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            firstFocusable.focus();
            e.preventDefault();
          }
        }
      };

      on(element, 'keydown', handler);
      if (firstFocusable) firstFocusable.focus();
      
      return () => element.removeEventListener('keydown', handler);
    }
  };

  // ========================================
  // THEME MANAGER
  // ========================================

  const theme = {
    STORAGE_KEY: 'theme',
    root: document.documentElement,
    metaTheme: $('meta[name="theme-color"]'),

    init() {
      const stored = store.get(this.STORAGE_KEY);
      const initial = stored || (media.prefersDark() ? 'dark' : 'light');
      this.set(initial, false);

      // Listen to system theme changes
      if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
          if (!store.get(this.STORAGE_KEY)) {
            this.set(e.matches ? 'dark' : 'light', true);
          }
        });
      }
    },

    set(value, withTransition = true) {
      if (withTransition) {
        this.root.classList.add('theme-transition');
        setTimeout(() => this.root.classList.remove('theme-transition'), 350);
      }

      this.root.setAttribute('data-theme', value);
      
      // Update meta theme-color
      if (this.metaTheme) {
        const colors = {
          light: '#F7F9FC',
          dark: '#0E1117'
        };
        this.metaTheme.setAttribute('content', colors[value] || colors.light);
      }

      store.set(this.STORAGE_KEY, value);
    },

    get() {
      return this.root.getAttribute('data-theme') || 'light';
    },

    toggle() {
      const current = this.get();
      const next = current === 'dark' ? 'light' : 'dark';
      this.set(next, true);
    }
  };

  // ========================================
  // THEME TOGGLE COMPONENT
  // ========================================

  const toggle = {
    init() {
      delegate('[data-toggle="theme"]', 'click', function(e) {
        e.preventDefault();
        theme.toggle();
        
        // Update aria attributes
        const pressed = theme.get() === 'dark';
        this.setAttribute('aria-pressed', pressed);
        this.setAttribute('aria-label', pressed ? 'Switch to light mode' : 'Switch to dark mode');
      });

      // Initialize aria attributes
      $all('[data-toggle="theme"]').forEach(el => {
        const pressed = theme.get() === 'dark';
        el.setAttribute('aria-pressed', pressed);
        el.setAttribute('aria-label', pressed ? 'Switch to light mode' : 'Switch to dark mode');
      });
    }
  };

  // ========================================
  // ALERTS
  // ========================================

  const alerts = {
    init() {
      delegate('[data-dismiss="alert"]', 'click', function(e) {
        e.preventDefault();
        const alert = this.closest('.alert');
        if (alert) {
          alert.style.opacity = '0';
          alert.style.transform = 'translateY(-10px)';
          setTimeout(() => alert.remove(), 300);
        }
      });
    },

    show(message, type = 'info', duration = 5000) {
      const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
      };

      const alert = document.createElement('div');
      alert.className = `nflu-alert nflu-alert--${type}`;
      alert.innerHTML = `
        <span class="alert__icon">${icons[type]}</span>
        <div class="alert__content">
          <p class="alert__message">${message}</p>
        </div>
        <button class="alert__close" data-dismiss="alert" aria-label="Close">&times;</button>
      `;

      document.body.appendChild(alert);

      if (duration > 0) {
        setTimeout(() => {
          alert.style.opacity = '0';
          setTimeout(() => alert.remove(), 300);
        }, duration);
      }

      return alert;
    }
  };

  // ========================================
  // MODALS
  // ========================================

  const modal = {
    current: null,
    cleanupFn: null,

    init() {
      delegate('[data-modal]', 'click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-modal');
        const modalEl = $(target);
        if (modalEl) modal.open(modalEl);
      });

      delegate('[data-modal-close]', 'click', function(e) {
        e.preventDefault();
        modal.close();
      });

      // Close on overlay click
      delegate('.modal__overlay', 'click', function(e) {
        if (e.target === this) modal.close();
      });

      // Close on Escape
      on(document, 'keydown', (e) => {
        if (e.key === 'Escape' && modal.current) {
          modal.close();
        }
      });
    },

    open(element) {
      if (this.current) this.close();

      this.current = element;
      element.setAttribute('data-open', 'true');
      dom.lockScroll();

      // Trap focus
      const dialog = $('.modal__dialog', element);
      if (dialog) {
        this.cleanupFn = dom.trapFocus(dialog);
      }
    },

    close() {
      if (!this.current) return;

      this.current.setAttribute('data-open', 'false');
      dom.unlockScroll();

      if (this.cleanupFn) {
        this.cleanupFn();
        this.cleanupFn = null;
      }

      this.current = null;
    }
  };

  // ========================================
  // DROPDOWNS
  // ========================================

  const dropdown = {
    current: null,
    cleanupFn: null,

    init() {
      delegate('[data-dropdown]', 'click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const parent = this.closest('.dropdown');
        
        if (dropdown.current === parent) {
          dropdown.close();
        } else {
          dropdown.open(parent);
        }
      });

      // Close on item click
      delegate('.dropdown__item', 'click', function(e) {
        dropdown.close();
      });
    },

    open(element) {
      if (this.current) this.close();

      this.current = element;
      element.classList.add('is-open');

      // Click outside to close
      setTimeout(() => {
        this.cleanupFn = dom.clickOutside(element, () => dropdown.close());
      }, 10);
    },

    close() {
      if (!this.current) return;

      this.current.classList.remove('is-open');
      
      if (this.cleanupFn) {
        this.cleanupFn();
        this.cleanupFn = null;
      }

      this.current = null;
    }
  };

  // ========================================
  // NAVIGATION
  // ========================================

  const nav = {
    init() {
      // Mobile menu toggle
      delegate('.header__toggle', 'click', function(e) {
        e.preventDefault();
        const header = this.closest('.header');
        const isOpen = header.classList.toggle('is-open');
        this.setAttribute('aria-expanded', isOpen);

        if (isOpen) {
          dom.lockScroll();
        } else {
          dom.unlockScroll();
        }
      });

      // Scroll effect
      let lastY = 0;
      on(window, 'scroll', () => {
        const y = window.scrollY || window.pageYOffset;
        const headers = $all('.header');
        
        headers.forEach(header => {
          if (y > 8) {
            header.classList.add('is-scrolled');
          } else {
            header.classList.remove('is-scrolled');
          }
        });

        lastY = y;
      }, { passive: true });
    }
  };

  // ========================================
  // REVEAL ANIMATIONS
  // ========================================

  const reveal = {
    init() {
      if (media.prefersReducedMotion() || !('IntersectionObserver' in window)) {
        // Fallback: show all immediately
        $all('[data-reveal]').forEach(el => el.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
      });

      $all('[data-reveal]').forEach(el => observer.observe(el));
    }
  };

  // ========================================
  // PUBLIC API
  // ========================================

  const nflu = {
    version: '0.1.0',
    theme,
    toggle,
    alerts,
    modal,
    dropdown,
    nav,
    reveal,
    utils: {
      $,
      $all,
      on,
      delegate,
      store,
      media,
      dom
    }
  };

  // Expose to window
  window.nflu = nflu;

  // Auto-initialize on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      theme.init();
      toggle.init();
      alerts.init();
      modal.init();
      dropdown.init();
      nav.init();
      reveal.init();
    });
  } else {
    // DOM already loaded
    theme.init();
    toggle.init();
    alerts.init();
    modal.init();
    dropdown.init();
    nav.init();
    reveal.init();
  }

})();
