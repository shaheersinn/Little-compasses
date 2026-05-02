// Hand-drawn-style SVG illustrations.
// Wobbly strokes, irregular fills, no perfect circles. Pure CSS/SVG, no AI generation.
// Each illustration accepts a palette object so it adapts to each direction's theme.

const Illos = {};

// SUN with smiley — for hero
Illos.Sun = ({ palette, size = 140 }) => (
  <svg viewBox="0 0 140 140" width={size} height={size} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinecap="round" fill="none">
      <line x1="70" y1="10" x2="70" y2="22" />
      <line x1="70" y1="118" x2="70" y2="130" />
      <line x1="10" y1="70" x2="22" y2="70" />
      <line x1="118" y1="70" x2="130" y2="70" />
      <line x1="28" y1="28" x2="36" y2="36" />
      <line x1="104" y1="104" x2="112" y2="112" />
      <line x1="28" y1="112" x2="36" y2="104" />
      <line x1="104" y1="36" x2="112" y2="28" />
    </g>
    <path d="M70 30 C 96 30, 112 48, 110 72 C 108 96, 88 110, 68 110 C 46 110, 30 92, 32 68 C 34 46, 50 30, 70 30 Z"
      fill={palette.sun} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="56" cy="64" r="3" fill={palette.ink} />
    <circle cx="86" cy="64" r="3" fill={palette.ink} />
    <path d="M52 78 Q 70 92, 90 78" fill="none" stroke={palette.ink} strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="48" cy="76" r="3" fill={palette.cheek || '#f4a4a4'} opacity="0.6" />
    <circle cx="92" cy="76" r="3" fill={palette.cheek || '#f4a4a4'} opacity="0.6" />
  </svg>
);

// CLOUD — soft, lopsided
Illos.Cloud = ({ palette, size = 120 }) => (
  <svg viewBox="0 0 160 100" width={size} height={size * 0.625} style={{ display: 'block' }}>
    <path d="M30 70 C 14 70, 12 50, 28 46 C 26 28, 50 22, 58 36 C 66 22, 92 24, 96 42 C 116 38, 134 50, 128 68 C 138 76, 132 92, 116 90 L 38 90 C 22 90, 18 78, 30 70 Z"
      fill={palette.cloud} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// HOUSE — wobbly little dayhome
Illos.House = ({ palette, size = 160 }) => (
  <svg viewBox="0 0 180 160" width={size} height={size * 0.89} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M30 80 L 90 28 L 152 80 L 152 140 L 30 142 Z" fill={palette.house} />
      <path d="M22 84 L 90 24 L 158 82" fill="none" />
      <path d="M62 142 L 62 100 L 96 100 L 96 142" fill={palette.door} />
      <circle cx="90" cy="121" r="2" fill={palette.ink} />
      <rect x="112" y="92" width="24" height="24" fill={palette.window} />
      <line x1="124" y1="92" x2="124" y2="116" />
      <line x1="112" y1="104" x2="136" y2="104" />
      <path d="M118 56 L 118 38 L 132 38 L 132 70" fill={palette.house} />
    </g>
  </svg>
);

// MOUNTAINS — Rockies silhouette
Illos.Mountains = ({ palette, size = 200 }) => (
  <svg viewBox="0 0 220 100" width={size} height={size * 0.45} style={{ display: 'block' }}>
    <path d="M0 90 L 38 38 L 64 64 L 96 22 L 132 70 L 158 44 L 188 70 L 220 50 L 220 100 L 0 100 Z"
      fill={palette.mountain} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M30 46 L 38 38 L 46 46 M 88 30 L 96 22 L 104 30 M 152 52 L 158 44 L 164 52"
      fill={palette.snow} stroke={palette.ink} strokeWidth="2" strokeLinejoin="round" />
  </svg>
);

// BLOCK STACK — toy blocks
Illos.Blocks = ({ palette, size = 120 }) => (
  <svg viewBox="0 0 120 140" width={size} height={size * 1.17} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round">
      <rect x="14" y="92" width="40" height="40" fill={palette.block1} transform="rotate(-3 34 112)" />
      <rect x="58" y="94" width="40" height="40" fill={palette.block2} transform="rotate(2 78 114)" />
      <rect x="34" y="50" width="40" height="40" fill={palette.block3} transform="rotate(-1 54 70)" />
      <rect x="40" y="10" width="36" height="36" fill={palette.block4} transform="rotate(4 58 28)" />
    </g>
    <text x="34" y="118" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill={palette.ink} transform="rotate(-3 34 112)">A</text>
    <text x="78" y="120" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill={palette.ink} transform="rotate(2 78 114)">B</text>
    <text x="54" y="76" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="18" fill={palette.ink} transform="rotate(-1 54 70)">C</text>
    <text x="58" y="34" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="16" fill={palette.ink} transform="rotate(4 58 28)">★</text>
  </svg>
);

// TREE — squiggly evergreen
Illos.Tree = ({ palette, size = 100 }) => (
  <svg viewBox="0 0 100 140" width={size} height={size * 1.4} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round">
      <rect x="42" y="100" width="16" height="32" fill={palette.trunk} />
      <path d="M50 8 L 22 50 L 36 50 L 16 80 L 34 80 L 18 108 L 82 108 L 66 80 L 84 80 L 64 50 L 78 50 Z"
        fill={palette.leaf} />
    </g>
  </svg>
);

// APPLE — for meals
Illos.Apple = ({ palette, size = 80 }) => (
  <svg viewBox="0 0 100 110" width={size} height={size * 1.1} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M50 22 C 30 18, 14 30, 14 56 C 14 84, 32 100, 50 100 C 68 100, 86 84, 86 56 C 86 30, 70 18, 50 22 Z"
        fill={palette.apple} />
      <path d="M50 22 C 50 12, 58 6, 68 6" fill="none" />
      <ellipse cx="64" cy="14" rx="8" ry="5" fill={palette.leaf} transform="rotate(-20 64 14)" />
    </g>
  </svg>
);

// STAR — 5-pointed wobbly
Illos.Star = ({ palette, size = 60 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} style={{ display: 'block' }}>
    <path d="M40 6 L 50 30 L 76 32 L 56 50 L 62 76 L 40 62 L 18 76 L 24 50 L 4 32 L 30 30 Z"
      fill={palette.star} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// HEART
Illos.Heart = ({ palette, size = 60 }) => (
  <svg viewBox="0 0 80 80" width={size} height={size} style={{ display: 'block' }}>
    <path d="M40 70 C 16 54, 6 40, 10 26 C 14 10, 32 8, 40 24 C 48 8, 66 10, 70 26 C 74 40, 64 54, 40 70 Z"
      fill={palette.heart} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
  </svg>
);

// CHILD figure — simple stick-style
Illos.Child = ({ palette, size = 100, hair = '#3a2e22', shirt }) => (
  <svg viewBox="0 0 80 140" width={size * 0.57} height={size * 1} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <circle cx="40" cy="28" r="18" fill={palette.skin || '#f4d4b0'} />
      <path d="M22 24 C 22 12, 58 12, 58 24 L 58 18 L 22 18 Z" fill={hair} />
      <circle cx="34" cy="28" r="1.5" fill={palette.ink} stroke="none" />
      <circle cx="46" cy="28" r="1.5" fill={palette.ink} stroke="none" />
      <path d="M34 36 Q 40 40, 46 36" fill="none" />
      <path d="M22 50 L 58 50 L 64 96 L 50 96 L 50 130 L 30 130 L 30 96 L 16 96 Z" fill={shirt || palette.shirt} />
    </g>
  </svg>
);

// PAINT PALETTE
Illos.Palette = ({ palette, size = 120 }) => (
  <svg viewBox="0 0 140 120" width={size} height={size * 0.857} style={{ display: 'block' }}>
    <path d="M70 10 C 30 10, 8 38, 14 70 C 20 100, 60 110, 70 92 C 76 80, 86 84, 96 80 C 116 72, 132 50, 124 30 C 116 10, 96 10, 70 10 Z"
      fill={palette.house || '#f5e6c8'} stroke={palette.ink} strokeWidth="2.5" />
    <circle cx="42" cy="40" r="8" fill={palette.block1} />
    <circle cx="68" cy="32" r="8" fill={palette.block2} />
    <circle cx="94" cy="44" r="8" fill={palette.block3} />
    <circle cx="50" cy="68" r="8" fill={palette.block4} />
  </svg>
);

// SQUIGGLE divider
Illos.Squiggle = ({ palette, width = 200, height = 16 }) => (
  <svg viewBox="0 0 200 16" width={width} height={height} style={{ display: 'block' }}>
    <path d="M0 8 Q 20 0, 40 8 T 80 8 T 120 8 T 160 8 T 200 8" fill="none" stroke={palette.ink} strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// LEAF — for nature/outdoor
Illos.Leaf = ({ palette, size = 60 }) => (
  <svg viewBox="0 0 60 80" width={size} height={size * 1.33} style={{ display: 'block' }}>
    <path d="M30 6 C 8 16, 6 50, 30 76 C 54 50, 52 16, 30 6 Z" fill={palette.leaf} stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M30 12 L 30 72" fill="none" stroke={palette.ink} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// BIRD — tiny chickadee
Illos.Bird = ({ palette, size = 80 }) => (
  <svg viewBox="0 0 100 80" width={size} height={size * 0.8} style={{ display: 'block' }}>
    <g stroke={palette.ink} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M20 50 C 10 40, 14 22, 30 18 C 50 14, 76 22, 84 38 C 88 46, 84 56, 74 60 L 30 60 C 22 60, 18 56, 20 50 Z" fill={palette.block2 || '#a8c8e8'} />
      <path d="M50 36 L 70 30 L 64 42 Z" fill={palette.house || '#fff'} />
      <circle cx="36" cy="34" r="2" fill={palette.ink} stroke="none" />
      <path d="M82 36 L 92 32 L 86 42" fill={palette.block3 || '#f4b860'} />
    </g>
  </svg>
);

export { Illos };
