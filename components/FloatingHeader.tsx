'use client';

export default function FloatingHeader() {
  return (
    <div style={{
      position: 'absolute', top: 16, right: 16,
      zIndex: 200,
      display: 'flex', alignItems: 'center', gap: 8,
      background: 'rgba(10,25,32,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 999,
      padding: '6px 10px',
    }}>
      {/* Home */}
      <a href="#" aria-label="Início" style={iconBtn}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"/>
          <path d="M9 21V12h6v9"/>
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/korahealthhub" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={iconBtn}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="#fff" stroke="none"/>
        </svg>
      </a>

      {/* TikTok */}
      <a href="https://tiktok.com/@korahealthhub" target="_blank" rel="noopener noreferrer" aria-label="TikTok" style={iconBtn}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff" stroke="none">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
        </svg>
      </a>
    </div>
  );
}

const iconBtn: React.CSSProperties = {
  width: 34, height: 34,
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.08)',
  border: '1px solid rgba(255,255,255,0.10)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'background 0.2s ease',
};
