// FAQ Accordion
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  for (const item of faqItems) {
    const question = item.querySelector('.faq-question');

    question?.addEventListener('click', () => {
      // Close other items
      for (const otherItem of faqItems) {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      }

      // Toggle current item
      item.classList.toggle('active');
    });
  }

  // Platform Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const screenshot = document.querySelector('.screenshot') as HTMLImageElement;

  const screenshots: Record<string, string> = {
    windows: 'https://ext.same-assets.com/1622186989/3291082425.png',
    mobile: 'https://ext.same-assets.com/1622186989/3707962693.png'
  };

  for (const btn of tabButtons) {
    btn.addEventListener('click', () => {
      // Update active state
      for (const b of tabButtons) {
        b.classList.remove('active');
      }
      btn.classList.add('active');

      // Update screenshot
      const platform = btn.getAttribute('data-platform');
      if (platform && screenshot && screenshots[platform]) {
        screenshot.src = screenshots[platform];
      }

      // Update window title
      const windowTitle = document.querySelector('.window-title');
      if (windowTitle && platform) {
        windowTitle.textContent = `Cryptic - ${platform.charAt(0).toUpperCase() + platform.slice(1)}`;
      }
    });
  }

  // Smooth scroll for anchor links
  const anchors = document.querySelectorAll('a[href^="#"]');
  for (const anchor of anchors) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        const target = document.querySelector(href);
        target?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Add subtle parallax effect to stars
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        const stars = document.querySelector('.stars') as HTMLElement;
        const stars2 = document.querySelector('.stars2') as HTMLElement;
        const stars3 = document.querySelector('.stars3') as HTMLElement;

        if (stars) stars.style.transform = `translateY(${scrolled * 0.1}px)`;
        if (stars2) stars2.style.transform = `translateY(${scrolled * 0.15}px)`;
        if (stars3) stars3.style.transform = `translateY(${scrolled * 0.2}px)`;

        ticking = false;
      });
      ticking = true;
    }
  });
});
