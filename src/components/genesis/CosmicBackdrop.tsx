import cosmicHero from "@/assets/cosmic-hero.jpg";

/**
 * Fixed, full-viewport cosmic atmosphere layered behind every section.
 * Combines a generated nebula image, a starfield, a soft nebula glow,
 * and a dark vignette so content stays readable.
 */
export const CosmicBackdrop = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-midnight">
    <div
      className="absolute inset-0 opacity-[0.55]"
      style={{
        backgroundImage: `url(${cosmicHero})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        filter: "saturate(0.9)",
      }}
    />
    <div className="absolute inset-0 starfield animate-twinkle opacity-80" />
    <div className="absolute inset-0 nebula-glow" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, transparent, hsl(var(--midnight) / 0.5) 55%, hsl(var(--midnight)) 90%)",
      }}
    />
  </div>
);