'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function IdentSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.ident-text', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      style={{
        padding: '32px 24px',
        background: 'var(--kora-cream-100)',
        borderTop: '1px solid var(--kora-cream-300)',
        borderBottom: '1px solid var(--kora-cream-300)',
        color: 'var(--kora-ink-900)',
      }}
    >
      <div className="ident-inner">
      <p
        className="ident-text"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 22,
          fontWeight: 800,
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          margin: 0,
          textWrap: 'balance',
        } as React.CSSProperties}
      >
        Para quem já não aguenta mais recomeçar toda segunda.
      </p>
      </div>
    </section>
  );
}
