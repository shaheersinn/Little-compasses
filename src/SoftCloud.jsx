import { useEffect, Fragment } from 'react';
import { SITE } from './siteContent.js';
import { Illos } from './illustrations.jsx';
import { SOFT_CLOUD_THEMES } from './themes.js';
import { useMediaQuery } from './useMediaQuery.js';

// DIRECTION 4 · Soft Cloud — whimsical pastels (from design handoff).

const SoftCloud = ({ theme = 'peachBlossom' }) => {
  const narrow = useMediaQuery('(max-width: 960px)');
  const t = SOFT_CLOUD_THEMES[theme] || SOFT_CLOUD_THEMES.peachBlossom;

  useEffect(() => {
    document.body.style.background = t.bg;
    return () => {
      document.body.style.background = '';
    };
  }, [t.bg]);

  // build full palette from theme tokens (illustrations need lots of slots)
  const palette = {
    bg: t.bg, paper: t.paper, ink: t.ink, inkSoft: t.inkSoft,
    accent: t.accent, accent2: t.accent2, accent3: t.accent3, accent4: t.accent4,
    sun: t.accent3, cloud: t.paper,
    house: t.accent, door: t.accent2, window: t.accent4,
    mountain: t.accent2, snow: t.paper,
    block1: t.accent, block2: t.accent2, block3: t.accent3, block4: t.accent4,
    trunk: t.trunk, leaf: t.leaf,
    apple: t.accent, star: t.accent3, heart: t.accent, shirt: t.accent2,
    cheek: t.cheek,
  };

  const f = { display: '"Caveat", "Patrick Hand", cursive', body: '"Quicksand", system-ui, sans-serif', alt: '"Fraunces", Georgia, serif' };

  const wrap = {
    width: '100%',
    minWidth: 0,
    background: palette.bg,
    color: palette.ink,
    fontFamily: f.body,
    fontSize: 16,
    lineHeight: 1.6,
    position: 'relative',
    overflow: 'hidden',
  };
  const sectionPad = { padding: narrow ? '48px 24px' : '88px 72px' };

  // soft cloudy bubble
  const Bubble = ({ children, bg = palette.paper, style }) => (
    <div style={{ background: bg, borderRadius: 32, padding: 40, ...style }}>{children}</div>
  );

  const H = ({ children, size = 60, style }) => (
    <h2 style={{ fontFamily: f.alt, fontSize: size, fontWeight: 400, lineHeight: 1.05, margin: 0, letterSpacing: -0.8, ...style }}>{children}</h2>
  );

  const Hand = ({ children, size = 36, color, style }) => (
    <span style={{ fontFamily: f.display, fontSize: size, color: color || palette.accent, fontWeight: 600, lineHeight: 1, ...style }}>{children}</span>
  );

  // floating cloud bg shape
  const CloudBg = ({ x, y, size, op = 0.4 }) => (
    <div style={{ position: 'absolute', top: y, left: x, opacity: op, pointerEvents: 'none' }}>
      <Illos.Cloud palette={{ ...palette, cloud: palette.paper, ink: palette.accent2 }} size={size} />
    </div>
  );

  // tiny inline svg badge icons
  const BadgeIcon = ({ kind, color }) => {
    const c = color || palette.accent;
    if (kind === 'shield') return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 L20 5 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V5 Z" fill={c}/><path d="M8 12 L11 15 L16 9" stroke={palette.paper} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>;
    if (kind === 'check') return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill={c}/><path d="M7 12 L11 16 L17 9" stroke={palette.paper} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/></svg>;
    if (kind === 'heart') return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 21 C 4 14, 4 7, 8 6 C 10 5.5, 12 7, 12 9 C 12 7, 14 5.5, 16 6 C 20 7, 20 14, 12 21 Z" fill={c}/></svg>;
    if (kind === 'badge') return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2 L14 6 L19 6 L15.5 9 L17 14 L12 11 L7 14 L8.5 9 L5 6 L10 6 Z" fill={c}/></svg>;
    if (kind === 'leaf') return <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20 C 4 10, 12 4, 20 4 C 20 12, 14 20, 4 20 Z" fill={c}/><path d="M5 19 L13 11" stroke={palette.paper} strokeWidth="1.5" strokeLinecap="round"/></svg>;
    return null;
  };

  return (
    <div style={wrap}>
      {/* ENROLLMENT BANNER — sticky, top of page */}
      <div style={{ position: 'sticky', top: 0, zIndex: 50, background: `linear-gradient(90deg, ${palette.accent} 0%, ${palette.accent2} 100%)`, color: '#fff', padding: narrow ? '12px 16px' : '12px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, fontSize: narrow ? 13 : 14, fontWeight: 600, boxShadow: `0 4px 20px ${palette.accent}40`, flexWrap: 'wrap' }}>
        <style>{`@keyframes lp-pulse { 0%,100% { transform: scale(1); opacity: 1 } 50% { transform: scale(1.15); opacity: 0.85 } }`}</style>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: 5, background: palette.accent3, animation: 'lp-pulse 1.6s ease-in-out infinite', boxShadow: `0 0 0 4px ${palette.accent3}40` }} />
          <span style={{ fontFamily: f.display, fontSize: 22, color: palette.accent3, fontWeight: 700 }}>Now enrolling</span>
          <span style={{ opacity: 0.95 }}>· immediate openings ·</span>
        </span>
        <a href={`tel:${SITE.contact.phoneTel}`} style={{ color: '#fff', textDecoration: 'none', fontWeight: 700, background: 'rgba(255,255,255,0.18)', padding: '4px 12px', borderRadius: 999 }}>☎ {SITE.contact.phone}</a>
        <a href="#tour" style={{ background: palette.paper, color: palette.accent, border: 'none', padding: '8px 18px', borderRadius: 999, fontWeight: 700, fontSize: 13, fontFamily: f.body, cursor: 'pointer', boxShadow: `0 2px 8px rgba(0,0,0,0.15)`, textDecoration: 'none' }}>Book a tour →</a>
      </div>

      <CloudBg x={80} y={400} size={140} op={0.5} />
      <CloudBg x={1000} y={800} size={180} op={0.4} />
      <CloudBg x={50} y={1900} size={160} op={0.4} />
      <CloudBg x={950} y={2600} size={140} op={0.5} />

      {/* NAV */}
      <nav style={{ display: 'flex', flexDirection: narrow ? 'column' : 'row', alignItems: narrow ? 'stretch' : 'center', justifyContent: narrow ? 'flex-start' : 'space-between', padding: narrow ? '24px 24px' : '28px 72px', gap: narrow ? 20 : 0, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Illos.Cloud palette={palette} size={50} />
          <div>
            <Hand size={32}>Little Compasses</Hand>
            <div style={{ fontSize: 11, letterSpacing: 1.5, color: palette.inkSoft, marginTop: -2 }}>licensed dayhome · livingston nw</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: narrow ? 14 : 28, fontSize: 14, fontWeight: 500, color: palette.inkSoft, flexWrap: 'wrap', justifyContent: narrow ? 'center' : 'flex-start' }}>
          {[['About','about'],['Programs','programs'],['Day','day'],['Pricing','rates'],['Tour','tour'],['FAQ','faq']].map(([label, id]) => (
            <a key={id} href={`#${id}`} style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.15s' }} onMouseEnter={e => e.currentTarget.style.color = palette.accent} onMouseLeave={e => e.currentTarget.style.color = palette.inkSoft}>{label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap', justifyContent: narrow ? 'center' : 'flex-end' }}>
          <a href={`tel:${SITE.contact.phoneTel}`} style={{ color: palette.ink, textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>☎ {SITE.contact.phone}</a>
          <a href="#tour" style={{ background: palette.accent, color: '#fff', border: 'none', padding: '12px 22px', borderRadius: 999, fontWeight: 600, fontSize: 14, fontFamily: f.body, cursor: 'pointer', boxShadow: `0 4px 16px ${palette.accent}50`, textDecoration: 'none', display: 'inline-block' }}>Book a tour ✿</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ ...sectionPad, paddingTop: 40, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1.1fr 1fr', gap: 40, alignItems: 'center' }}>
          <div>
            <Hand size={32} color={palette.accent2}>~ now enrolling · immediate openings ~</Hand>
            <h1 style={{ fontFamily: f.alt, fontSize: narrow ? 46 : 96, fontWeight: 300, lineHeight: 0.95, margin: '12px 0 20px', letterSpacing: -2 }}>
              A soft place<br />to be{' '}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ fontStyle: 'italic', color: palette.accent }}>little.</span>
                <svg style={{ position: 'absolute', left: -10, right: -10, bottom: -12, width: 'calc(100% + 20px)' }} viewBox="0 0 200 20" preserveAspectRatio="none" height="14">
                  <path d="M2 14 Q 50 4, 100 12 T 198 10" fill="none" stroke={palette.accent3} strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <div style={{ fontFamily: f.alt, fontSize: 17, fontStyle: 'italic', color: palette.ink, marginBottom: 16, fontWeight: 500 }}>
              Licensed family dayhome in Livingston NW Calgary
            </div>
            <p style={{ fontSize: 17, color: palette.inkSoft, maxWidth: 500, lineHeight: 1.55, margin: 0 }}>
              Approved family dayhome serving <strong style={{ color: palette.ink, fontWeight: 600 }}>Livingston, Carrington, Evanston, Ambleton, Sage Hill, Panorama Hills &amp; Coventry Hills.</strong> For tiny humans aged 0–5.
            </p>
            <div style={{ display: 'flex', gap: 14, marginTop: 32, alignItems: 'center', flexWrap: 'wrap' }}>
              <a href="#tour" style={{ background: palette.accent, color: '#fff', border: 'none', padding: '16px 30px', borderRadius: 999, fontWeight: 600, fontSize: 15, fontFamily: f.body, cursor: 'pointer', boxShadow: `0 6px 20px ${palette.accent}50`, textDecoration: 'none', display: 'inline-block' }}>Book a tour ✿</a>
            </div>
          </div>

          <div style={{ position: 'relative', height: narrow ? 320 : 460 }}>
            <div style={{ position: 'absolute', inset: 0, borderRadius: 32, background: `linear-gradient(180deg, ${palette.accent3}30 0%, ${palette.accent}25 60%, ${palette.leaf}30 100%)`, overflow: 'hidden', boxShadow: `0 12px 40px rgba(61,46,58,0.10)` }}>
              <div style={{ position: 'absolute', top: 30, right: 40, opacity: 0.95 }}><Illos.Sun palette={palette} size={110} /></div>
              <div style={{ position: 'absolute', top: 70, left: 30 }}><Illos.Cloud palette={palette} size={90} /></div>
              <div style={{ position: 'absolute', bottom: 80, left: 20 }}><Illos.Tree palette={palette} size={140} /></div>
              <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)' }}><Illos.House palette={palette} size={220} /></div>
              <div style={{ position: 'absolute', bottom: 60, right: 10 }}><Illos.Tree palette={palette} size={110} /></div>
              <div style={{ position: 'absolute', top: 180, right: 60, transform: 'rotate(20deg)' }}><Illos.Bird palette={palette} size={60} /></div>
            </div>
          </div>
        </div>

        {/* TRUST BADGES ROW */}
        <div style={{ marginTop: 56, padding: '24px 32px', background: palette.paper, borderRadius: 28, boxShadow: `0 8px 30px rgba(61,46,58,0.06)` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <Hand size={22} color={palette.accent2}>~ approved &amp; trusted ~</Hand>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? 'repeat(2, minmax(0, 1fr))' : 'repeat(5, 1fr)', gap: 12 }}>
            {SITE.trustBadges.map((b, i) => {
              const colors = [palette.accent, palette.accent2, palette.accent3, palette.accent4, palette.leaf];
              return (
                <div key={b.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, padding: '14px 14px', background: colors[i] + '20', borderRadius: 18 }}>
                  <BadgeIcon kind={b.icon} color={colors[i]} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: palette.ink, lineHeight: 1.35 }}>{b.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* gentle stat row */}
        <div style={{ marginTop: 24, padding: narrow ? '20px 16px' : '24px 40px', background: palette.paper, borderRadius: narrow ? 28 : 999, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: narrow ? 16 : 0, boxShadow: `0 8px 30px rgba(61,46,58,0.06)` }}>
          {[['9', 'years caring'], ['6', 'tiny humans'], ['$326', '/month flat'], ['∞', 'cuddles']].map(([n, l], i) => (
            <Fragment key={l}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: f.alt, fontSize: 32, fontStyle: 'italic', color: palette.accent }}>{n}</div>
                <div style={{ fontSize: 12, color: palette.inkSoft, marginTop: 2, letterSpacing: 0.5 }}>{l}</div>
              </div>
              {i < 3 && !narrow && <span style={{ width: 6, height: 6, borderRadius: 3, background: palette.accent3 }} />}
            </Fragment>
          ))}
        </div>

        {/* NEIGHBOURHOODS SERVED */}
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <div style={{ fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', color: palette.inkSoft, marginBottom: 12 }}>Serving northwest Calgary</div>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8 }}>
            {SITE.neighbourhoods.map((n, i) => (
              <span key={n} style={{ fontFamily: f.display, fontSize: 24, color: i === 0 ? palette.accent : palette.ink, fontWeight: i === 0 ? 700 : 600 }}>
                {n}{i < SITE.neighbourhoods.length - 1 && <span style={{ color: palette.accent2, margin: '0 12px' }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / EDUCATOR */}
      <section id="about" style={{ ...sectionPad, position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1.2fr', gap: narrow ? 40 : 64, alignItems: 'flex-start' }}>
          <div style={{ position: 'relative' }}>
            <Bubble bg={palette.accent4} style={{ borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%', padding: 40, position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Illos.Child palette={palette} size={180} hair="#5a3a2a" shirt={palette.accent} />
              </div>
              <Hand size={40} style={{ display: 'block', textAlign: 'center', marginTop: 8, color: palette.ink }}>~ Robin Cruz ~</Hand>
              <div style={{ textAlign: 'center', fontSize: 11, color: palette.inkSoft, marginTop: 4, letterSpacing: 1 }}>OWNER · LICENSED EDUCATOR</div>
            </Bubble>
            <div style={{ position: 'absolute', top: -20, right: -10, transform: 'rotate(15deg)' }}><Illos.Heart palette={palette} size={50} /></div>

            {/* educator quick-facts */}
            <div style={{ marginTop: 24, background: palette.paper, borderRadius: 24, padding: 24, boxShadow: `0 6px 20px rgba(61,46,58,0.05)` }}>
              {[
                ['Certification', SITE.about.eceLevel],
                ['Experience', SITE.about.yearsExperience],
                ['Languages', SITE.about.languages.join(' · ')],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '8px 0', borderBottom: `1.5px dotted ${palette.accent2}50`, gap: 16 }}>
                  <span style={{ fontFamily: f.display, fontSize: 18, color: palette.accent }}>{k}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, textAlign: 'right', maxWidth: 220 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Hand size={32} color={palette.accent2}>about your educator</Hand>
            <H size={56} style={{ marginTop: 8 }}>Hi, I'm <span style={{ fontStyle: 'italic', color: palette.accent }}>Robin.</span></H>
            <p style={{ fontSize: 17, marginTop: 24, color: palette.inkSoft, lineHeight: 1.65 }}>{SITE.about.body}</p>

            {/* philosophy quote */}
            <div style={{ marginTop: 28, padding: '24px 28px', background: palette.accent3 + '30', borderRadius: 24, position: 'relative' }}>
              <Hand size={56} color={palette.accent} style={{ position: 'absolute', top: 4, left: 16 }}>"</Hand>
              <p style={{ fontFamily: f.alt, fontSize: 19, fontStyle: 'italic', lineHeight: 1.5, margin: 0, paddingLeft: 28, color: palette.ink }}>
                {SITE.about.philosophy.replace(/^"|"$/g, '').replace(/^“|”$/g, '')}
              </p>
            </div>

            {/* family background removed */}

            {/* certifications list */}
            <div style={{ marginTop: 28 }}>
              <Hand size={26} color={palette.accent2}>~ certifications &amp; checks ~</Hand>
              <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 8, marginTop: 12 }}>
                {SITE.about.certifications.map((c, i) => (
                  <div key={c} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: palette.ink }}>
                    <span style={{ width: 18, height: 18, borderRadius: 9, background: [palette.accent, palette.accent2, palette.accent3, palette.accent4][i % 4], color: palette.paper, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM / FLIGHT FRAMEWORK */}
      <section id="programs" style={{ ...sectionPad, background: palette.paper, borderRadius: '64px 64px 0 0', position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1.4fr', gap: narrow ? 36 : 56, alignItems: 'flex-start' }}>
          <div>
            <Hand size={32} color={palette.accent}>~ curriculum ~</Hand>
            <H size={52} style={{ marginTop: 8 }}>Built on <span style={{ fontStyle: 'italic', color: palette.accent }}>Flight</span> — Alberta's early-learning framework.</H>
            <p style={{ fontSize: 16, marginTop: 20, color: palette.inkSoft, lineHeight: 1.6 }}>{SITE.curriculum.intro}</p>

            {/* program structure */}
            <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(2, 1fr)', gap: 12 }}>
              {SITE.curriculum.structure.map((s, i) => (
                <div key={s.label} style={{ background: [palette.accent + '25', palette.accent2 + '25', palette.accent3 + '35', palette.accent4 + '35'][i], borderRadius: 18, padding: '18px 20px' }}>
                  <div style={{ fontFamily: f.alt, fontSize: 28, fontStyle: 'italic', color: palette.ink, lineHeight: 1 }}>{s.count}</div>
                  <div style={{ fontSize: 12, color: palette.inkSoft, marginTop: 4, letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* four pillars */}
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 16 }}>
            {SITE.curriculum.pillars.map((p, i) => {
              const bgs = [palette.accent + '25', palette.accent2 + '30', palette.accent3 + '35', palette.accent4 + '40'];
              const radii = ['60% 40% 55% 45%', '45% 55% 40% 60%', '55% 45% 60% 40%', '40% 60% 45% 55%'];
              return (
                <div key={p.title} style={{ background: bgs[i], borderRadius: radii[i] + ' / 50% 50% 50% 50%', padding: 28, minHeight: 200 }}>
                  <div style={{ fontFamily: f.display, fontSize: 32, color: palette.accent, fontWeight: 700, lineHeight: 1 }}>{i + 1}</div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginTop: 10, color: palette.ink }}>{p.title}</div>
                  <p style={{ marginTop: 8, fontSize: 13.5, color: palette.inkSoft, lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* age groupings */}
        <div style={{ marginTop: 64 }}>
          <Hand size={28} color={palette.accent2}>~ three little gardens ~</Hand>
          <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : 'repeat(3, 1fr)', gap: 24, marginTop: 16 }}>
            {SITE.programs.map((p, i) => {
              const Icon = Illos[p.icon];
              const bgs = [palette.accent + '30', palette.accent2 + '35', palette.accent3 + '40'];
              const radii = ['60% 40% 55% 45%', '45% 55% 40% 60%', '55% 45% 60% 40%'];
              return (
                <div key={p.title} style={{ background: bgs[i], borderRadius: radii[i] + ' / 50% 50% 50% 50%', padding: 32, minHeight: 280 }}>
                  <Icon palette={palette} size={56} />
                  <Hand size={36} style={{ display: 'block', marginTop: 16, color: palette.ink }}>{p.title}</Hand>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 4, color: palette.inkSoft }}>{p.age}</div>
                  <p style={{ marginTop: 14, fontSize: 14.5, color: palette.ink, lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DAY */}
      <section id="day" style={{ ...sectionPad, background: palette.paper, position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <Hand size={32} color={palette.accent}>~ a typical day ~</Hand>
        <H size={56} style={{ marginTop: 8, marginBottom: 48 }}>From morning <span style={{ fontStyle: 'italic' }}>tea</span><br />to afternoon <span style={{ fontStyle: 'italic' }}>tales.</span></H>
        <div style={{ position: 'relative', paddingLeft: narrow ? 44 : 60 }}>
          {/* squiggly timeline */}
          <svg style={{ position: 'absolute', left: 18, top: 0, bottom: 0, width: 24, height: '100%' }} preserveAspectRatio="none" viewBox="0 0 24 1000">
            <path d="M12 0 Q 24 50, 12 100 T 12 200 T 12 300 T 12 400 T 12 500 T 12 600 T 12 700 T 12 800 T 12 900 T 12 1000" fill="none" stroke={palette.accent2} strokeWidth="3" strokeDasharray="6 6" />
          </svg>
          {SITE.schedule.map((s, i) => (
            <div key={s.time} style={{ display: 'grid', gridTemplateColumns: narrow ? '72px 1fr' : '120px 1fr', gap: narrow ? 12 : 24, padding: '18px 0', alignItems: narrow ? 'start' : 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', left: -54, top: 22, width: 24, height: 24, borderRadius: 12, background: [palette.accent, palette.accent2, palette.accent3, palette.accent4][i % 4], border: `3px solid ${palette.paper}`, boxShadow: `0 0 0 2px ${[palette.accent, palette.accent2, palette.accent3, palette.accent4][i % 4]}` }} />
              <Hand size={36} color={palette.accent}>{s.time}</Hand>
              <div>
                <div style={{ fontSize: 17, fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 14, color: palette.inkSoft, marginTop: 2 }}>{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEALS */}
      <section style={{ ...sectionPad, position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 56, alignItems: 'flex-start' }}>
          <div>
            <Hand size={32} color={palette.accent}>~ meals ~</Hand>
            <p style={{ fontSize: 16, marginTop: 24, color: palette.inkSoft, lineHeight: 1.6 }}>{SITE.meals.intro}</p>
            <div style={{ marginTop: 24, padding: '14px 20px', background: palette.accent3 + '40', borderRadius: 16, fontSize: 14, color: palette.ink }}>
              ✿ {SITE.meals.notes}
            </div>
          </div>
        </div>
      </section>

      {/* RATES + SUBSIDY */}
      <section id="rates" style={{ ...sectionPad, position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <Hand size={32} color={palette.accent}>~ pricing &amp; subsidy ~</Hand>
        <H size={56} style={{ marginTop: 8, marginBottom: 16 }}>{SITE.rates.headline}</H>
        <p style={{ fontSize: 16, color: palette.inkSoft, maxWidth: 700, marginBottom: 32, lineHeight: 1.6 }}>{SITE.rates.sub}</p>

        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1.2fr 1fr', gap: 32 }}>
          {/* pricing table */}
          <Bubble bg={palette.accent + '20'} style={{ borderRadius: 32, padding: 36 }}>
            <div style={{ background: palette.paper, borderRadius: 20, padding: 28, boxShadow: `0 6px 20px rgba(61,46,58,0.04)` }}>
              {SITE.rates.rows.map((r, i) => (
                <div key={r.age} style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1.6fr 1fr 1fr', padding: '18px 0', borderBottom: i < SITE.rates.rows.length - 1 ? `1.5px dotted ${palette.accent2}60` : 'none', alignItems: narrow ? 'start' : 'center', gap: narrow ? 8 : 12 }}>
                  <Hand size={24} color={palette.ink}>{r.age}</Hand>
                  <div style={{ textAlign: 'right', fontSize: 13, color: palette.inkSoft, textDecoration: r.list ? 'line-through' : 'none' }}>{r.list || '—'}</div>
                  <div style={{ textAlign: 'right', fontFamily: f.alt, fontSize: 22, fontStyle: 'italic', color: palette.accent }}>{r.after}</div>
                </div>
              ))}
              <p style={{ marginTop: 16, fontSize: 13, color: palette.inkSoft, fontStyle: 'italic', lineHeight: 1.5 }}>{SITE.rates.foot}</p>
            </div>
          </Bubble>

          {/* grant explainer */}
          <Bubble bg={palette.accent3 + '30'} style={{ borderRadius: 32, padding: 36 }}>
            <Hand size={28} color={palette.accent}>~ how the grant works ~</Hand>
            <p style={{ fontSize: 14.5, marginTop: 12, color: palette.ink, lineHeight: 1.65 }}>{SITE.rates.grantExplainer}</p>
            <div style={{ marginTop: 20, padding: '14px 18px', background: palette.paper, borderRadius: 14, fontSize: 13, color: palette.inkSoft, lineHeight: 1.6 }}>
              <strong style={{ color: palette.ink }}>You qualify if:</strong> child is under kindergarten age, attending a licensed Alberta program. That's it.
            </div>
            <div style={{ marginTop: 12, fontSize: 12, color: palette.inkSoft, fontStyle: 'italic' }}>Sunshine Family Day Home Agency files paperwork on your behalf at enrollment.</div>
          </Bubble>
        </div>
      </section>

      {/* TOURS & BOOKING */}
      <section id="tour" style={{ ...sectionPad, background: palette.paper, position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <Hand size={32} color={palette.accent}>~ tours &amp; booking ~</Hand>
        <H size={56} style={{ marginTop: 8 }}>Come for tea<br /><span style={{ fontStyle: 'italic', color: palette.accent }}>and a tour.</span></H>
        <p style={{ fontSize: 16, color: palette.inkSoft, marginTop: 16, marginBottom: 32, maxWidth: 600 }}>{SITE.tour.intro}</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 48 }}>
          <a href={`mailto:${SITE.contact.email}?subject=Tour%20request`} style={{ background: palette.accent, color: '#fff', padding: '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none', boxShadow: `0 4px 14px ${palette.accent}40` }}>Email to schedule</a>
          <a href={`tel:${SITE.contact.phoneTel}`} style={{ background: palette.paper, color: palette.ink, padding: '14px 28px', borderRadius: 999, fontWeight: 600, fontSize: 14, textDecoration: 'none', border: `1.5px solid ${palette.accent2}50` }}>☎ Call {SITE.contact.phone}</a>
          <span style={{ fontSize: 13, color: palette.inkSoft, fontStyle: 'italic' }}>Tours: Tues &amp; Thurs · 1:00 pm</span>
        </div>

        {/* inquiry form — primary action */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 720px)', justifyContent: 'center', marginBottom: 48 }}>
          <div id="waitlist" style={{ background: palette.bg, borderRadius: 28, padding: 32, boxShadow: `0 8px 30px rgba(61,46,58,0.06)`, scrollMarginTop: 80 }}>
          <Hand size={28} color={palette.accent2}>send an inquiry</Hand>
            <div style={{ marginTop: 8, fontSize: 13, color: palette.inkSoft }}>For waitlist + general questions. We reply within 24 hours.</div>
            <form style={{ marginTop: 20, display: 'grid', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 10 }}>
                <Field label="Child's name" placeholder="Ari" palette={palette} f={f} />
                <Field label="Date of birth" placeholder="2023-08-14" palette={palette} f={f} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 10 }}>
                <Field label="Requested start" placeholder="as soon as possible" palette={palette} f={f} />
                <Field label="Neighbourhood" placeholder="Livingston" palette={palette} f={f} />
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: palette.inkSoft, marginBottom: 6 }}>Schedule</div>
                <div style={{ display: 'flex', gap: 8, flexDirection: narrow ? 'column' : 'row', flexWrap: 'wrap' }}>
                  {['Full-time (5 days)', 'Part-time (3 days)', 'Flexible'].map((s, i) => (
                    <label key={s} style={{ flex: narrow ? 'none' : 1, background: palette.paper, padding: '10px 12px', borderRadius: 12, fontSize: 12, cursor: 'pointer', border: `1.5px solid ${i === 0 ? palette.accent : palette.accent2 + '40'}`, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <input type="radio" name="sched" defaultChecked={i === 0} style={{ accentColor: palette.accent }} />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <Field label="Special considerations" placeholder="Allergies, accommodations, anything else…" palette={palette} f={f} multiline />
              <button type="button" style={{ marginTop: 4, background: palette.accent2, color: '#fff', border: 'none', padding: '14px', borderRadius: 999, fontWeight: 600, fontSize: 14, fontFamily: f.body, cursor: 'pointer', boxShadow: `0 4px 14px ${palette.accent2}40` }}>Send inquiry ✿</button>
            </form>
          </div>
        </div>

        {/* process steps */}
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? 'repeat(2, minmax(0, 1fr))' : 'repeat(4, 1fr)', gap: 16 }}>
          {SITE.tour.process.map((s, i) => {
            const colors = [palette.accent, palette.accent2, palette.accent3, palette.accent4];
            return (
              <div key={s.step} style={{ background: colors[i] + '25', borderRadius: 24, padding: 24, position: 'relative' }}>
                <div style={{ width: 36, height: 36, borderRadius: 18, background: colors[i], color: palette.paper, fontFamily: f.alt, fontSize: 20, fontStyle: 'italic', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>{s.step}</div>
                <Hand size={24} style={{ display: 'block', marginTop: 14, color: palette.ink }}>{s.label}</Hand>
                <div style={{ fontSize: 13, color: palette.inkSoft, marginTop: 6, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ ...sectionPad, background: palette.paper, position: 'relative', zIndex: 2, scrollMarginTop: 80 }}>
        <Hand size={32} color={palette.accent2}>~ questions ~</Hand>
        <H size={56} style={{ marginTop: 8, marginBottom: 32 }}>Things parents ask.</H>
        <div style={{ display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 32 }}>
          {SITE.faq.map((q, i) => (
            <div key={q.q} style={{ paddingBottom: 20, borderBottom: `2px dotted ${palette.accent2}80` }}>
              <Hand size={24} style={{ display: 'block', color: palette.ink, marginBottom: 8 }}>{q.q}</Hand>
              <p style={{ fontSize: 14, color: palette.inkSoft, lineHeight: 1.6, margin: 0 }}>{q.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="contact" style={{ ...sectionPad, position: 'relative', zIndex: 2, background: `linear-gradient(180deg, ${palette.bg} 0%, ${palette.accent2}30 100%)`, scrollMarginTop: 80 }}>
        <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
          <Illos.Cloud palette={palette} size={120} />
          <Hand size={32} color={palette.accent} style={{ display: 'block', marginTop: 16 }}>~ visit us ~</Hand>
          <H size={narrow ? 44 : 72} style={{ marginTop: 8 }}>Find us in <span style={{ fontStyle: 'italic', color: palette.accent }}>Livingston.</span></H>
        </div>

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: narrow ? '1fr' : '1fr 1fr', gap: 24 }}>
          {/* contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['Where', SITE.contact.address],
              ['Hours', SITE.contact.hours],
              ['Phone', SITE.contact.phone, `tel:${SITE.contact.phoneTel}`],
              ['Email', SITE.contact.email, `mailto:${SITE.contact.email}`],
              ['Agency', SITE.contact.agency],
            ].map(([l, v, href]) => {
              const inner = (
                <>
                  <span style={{ fontFamily: f.display, fontSize: 22, color: palette.accent }}>{l}</span>
                  <span style={{ fontSize: 14, fontWeight: 500, color: palette.ink }}>{v}</span>
                </>
              );
              const sty = { background: palette.paper, padding: '20px 28px', borderRadius: 999, display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: `0 4px 16px rgba(61,46,58,0.05)`, textDecoration: 'none' };
              return href
                ? <a key={l} href={href} style={sty}>{inner}</a>
                : <div key={l} style={sty}>{inner}</div>;
            })}
          </div>

          {/* embedded map — centered on Livingston, NOT exact address */}
          <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: `0 8px 30px rgba(61,46,58,0.10)`, minHeight: 320, position: 'relative', background: palette.paper }}>
            <iframe
              title="Livingston, Calgary map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-114.10,51.18,-114.04,51.22&layer=mapnik&marker=51.20,-114.07"
              style={{ border: 0, width: '100%', height: 360, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{ position: 'absolute', top: 14, left: 14, background: palette.paper, padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 600, color: palette.ink, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <Hand size={18} color={palette.accent}>Livingston</Hand>
              <span style={{ color: palette.inkSoft, marginLeft: 6, fontFamily: f.body, fontWeight: 500 }}>NW Calgary</span>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="#tour" style={{ background: palette.accent, color: '#fff', border: 'none', padding: '18px 40px', borderRadius: 999, fontWeight: 600, fontSize: 17, fontFamily: f.body, cursor: 'pointer', boxShadow: `0 8px 24px ${palette.accent}50`, textDecoration: 'none', display: 'inline-block' }}>Book a tour ✿</a>
        </div>
      </section>

      <footer style={{ padding: narrow ? '24px 24px' : '24px 72px', background: palette.paper, borderTop: `1px solid ${palette.accent2}40`, display: 'flex', flexDirection: narrow ? 'column' : 'row', justifyContent: 'space-between', fontSize: 12, color: palette.inkSoft, position: 'relative', zIndex: 2, flexWrap: 'wrap', gap: 12 }}>
        <div>© 2026 Little Compasses · {SITE.contact.agency} · Treaty 7</div>
        <div>Licensed under the Alberta ELCC Act · made with ✿ in Calgary</div>
      </footer>
    </div>
  );
};

// small text-field helper for inquiry form
const Field = ({ label, placeholder, palette, f, multiline }) => (
  <label style={{ display: 'block' }}>
    <div style={{ fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: palette.inkSoft, marginBottom: 6 }}>{label}</div>
    {multiline
      ? <textarea placeholder={placeholder} rows={3} style={{ width: '100%', background: palette.paper, border: `1.5px solid ${palette.accent2}40`, borderRadius: 14, padding: '12px 14px', fontFamily: f.body, fontSize: 13, color: palette.ink, resize: 'vertical', outline: 'none' }} />
      : <input placeholder={placeholder} style={{ width: '100%', background: palette.paper, border: `1.5px solid ${palette.accent2}40`, borderRadius: 14, padding: '12px 14px', fontFamily: f.body, fontSize: 13, color: palette.ink, outline: 'none' }} />}
  </label>
);

export default SoftCloud;
