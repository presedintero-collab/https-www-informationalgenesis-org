interface VolumeCoverProps {
  index: number;
  title: string;
  numeral: string;
}

/**
 * Symbolic illuminated-volume cover rendered in pure SVG.
 * Each cover varies its sacred-geometry sigil based on `index`,
 * so the six publications feel like part of one archive but distinct.
 */
export const VolumeCover = ({ index, title, numeral }: VolumeCoverProps) => {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-volume">
      {/* faint starfield within cover */}
      <div className="absolute inset-0 starfield opacity-40" />
      {/* gold inner frame */}
      <div className="absolute inset-3 rounded-sm border border-gold/30" />
      <div className="absolute inset-[14px] rounded-sm border border-gold/15" />

      {/* sigil */}
      <svg
        viewBox="0 0 200 200"
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-[58%] text-gold/70"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.7"
      >
        <defs>
          <radialGradient id={`glow-${index}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(42 70% 75%)" stopOpacity="0.45" />
            <stop offset="70%" stopColor="hsl(42 60% 60%)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="80" fill={`url(#glow-${index})`} stroke="none" />

        {index === 0 && (
          <>
            <circle cx="100" cy="100" r="60" />
            <circle cx="100" cy="100" r="40" />
            <circle cx="100" cy="100" r="20" />
            <line x1="20" y1="100" x2="180" y2="100" />
            <line x1="100" y1="20" x2="100" y2="180" />
          </>
        )}
        {index === 1 && (
          <>
            <polygon points="100,25 170,140 30,140" />
            <polygon points="100,175 30,60 170,60" />
            <circle cx="100" cy="100" r="55" />
          </>
        )}
        {index === 2 && (
          <>
            {[0, 60, 120, 180, 240, 300].map((a) => {
              const r = 35;
              const rad = (a * Math.PI) / 180;
              return (
                <circle key={a} cx={100 + r * Math.cos(rad)} cy={100 + r * Math.sin(rad)} r={35} />
              );
            })}
            <circle cx="100" cy="100" r="35" />
          </>
        )}
        {index === 3 && (
          <>
            <circle cx="100" cy="100" r="70" />
            <ellipse cx="100" cy="100" rx="70" ry="28" />
            <ellipse cx="100" cy="100" rx="70" ry="28" transform="rotate(60 100 100)" />
            <ellipse cx="100" cy="100" rx="70" ry="28" transform="rotate(120 100 100)" />
          </>
        )}
        {index === 4 && (
          <>
            <polygon points="100,30 160,70 160,130 100,170 40,130 40,70" />
            <polygon points="100,55 140,80 140,120 100,145 60,120 60,80" />
            <line x1="100" y1="30" x2="100" y2="170" />
            <line x1="40" y1="70" x2="160" y2="130" />
            <line x1="160" y1="70" x2="40" y2="130" />
          </>
        )}
        {index === 5 && (
          <>
            <circle cx="100" cy="100" r="65" />
            {Array.from({ length: 12 }).map((_, i) => {
              const a = (i * 30 * Math.PI) / 180;
              return (
                <line
                  key={i}
                  x1={100 + 35 * Math.cos(a)}
                  y1={100 + 35 * Math.sin(a)}
                  x2={100 + 65 * Math.cos(a)}
                  y2={100 + 65 * Math.sin(a)}
                />
              );
            })}
            <circle cx="100" cy="100" r="12" fill="hsl(42 70% 70% / 0.4)" stroke="none" />
          </>
        )}
      </svg>

      {/* numeral */}
      <div className="absolute left-0 right-0 top-6 text-center font-ui text-[10px] tracking-[0.4em] text-gold/70">
        VOLUME {numeral}
      </div>
      {/* title */}
      <div className="absolute bottom-7 left-5 right-5 text-center">
        <div className="font-display text-base italic text-ivory/90 leading-snug">
          {title}
        </div>
      </div>

      {/* subtle top light */}
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, hsl(42 60% 60% / 0.18), transparent 70%)",
        }}
      />
    </div>
  );
};