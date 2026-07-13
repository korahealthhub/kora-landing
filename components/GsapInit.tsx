'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* Roda no módulo — antes de qualquer componente montar */
ScrollTrigger.config({ ignoreMobileResize: true });

export default function GsapInit() {
  useEffect(() => {
    ScrollTrigger.normalizeScroll(true);

    /* Refresh após tudo carregar */
    const refresh = () => ScrollTrigger.refresh();

    if (document.readyState === 'complete') {
      refresh();
      setTimeout(refresh, 300);
    } else {
      window.addEventListener('load', () => {
        refresh();
        setTimeout(refresh, 300);
      }, { once: true });
    }

    /* Re-refresh quando o app volta do background (iOS) */
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') setTimeout(refresh, 100);
    });
  }, []);

  return null;
}
