'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const problems = [
  {
    title: 'Tudo espalhado',
    desc: 'Plano do personal num app, dieta em outro, sono em mais um. Impossível ver o quadro completo.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  {
    title: 'Sem direção',
    desc: 'Você sabe que deveria treinar e comer bem. Mas o que fazer hoje, agora? Fica em branco.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'Ninguém olha o todo',
    desc: 'Dormiu mal, treinou pesado, comeu pouco, e acha que o problema é falta de força de vontade.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
        <line x1="2" y1="2" x2="22" y2="22"/>
      </svg>
    ),
  },
];

export default function ProblemaSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.prob-title', {
      opacity: 0, y: 28, duration: 0.65, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
    });
    document.querySelectorAll('.prob-card').forEach((item) => {
      gsap.from(item, {
        opacity: 0, x: -20, duration: 0.5, ease: 'power2.out',
        scrollTrigger: { trigger: item, start: 'top 90%', once: true },
      });
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="theme-dark"
      style={{ padding: '52px 24px 60px', background: 'var(--bg)', color: '#fff' }}
    >
      <div className="prob-inner">
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', color: 'var(--kora-teal-300)', textTransform: 'uppercase', margin: '0 0 14px' }}>
        O problema
      </p>
      <h2
        className="prob-title"
        style={{ fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.05, fontWeight: 800, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 32px', color: '#fff', textWrap: 'balance' } as React.CSSProperties}
      >
        Por que você trava sempre no mesmo ponto
      </h2>

      <div className="prob-cards" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {problems.map((p, i) => (
          <div
            key={p.title}
            className="prob-card"
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: 16,
              padding: '20px 0',
              borderBottom: i < problems.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              {p.icon}
            </div>

            {/* Text */}
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: '#fff', marginBottom: 5, letterSpacing: '-0.01em' }}>
                {p.title}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.52)', lineHeight: 1.6, margin: 0 }}>
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
