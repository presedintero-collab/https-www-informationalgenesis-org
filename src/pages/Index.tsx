import { CosmicBackdrop } from "@/components/genesis/CosmicBackdrop";
import { PublicationCard, type Publication } from "@/components/genesis/PublicationCard";

const publications: Publication[] = [
  {
    numeral: "I",
    title: "On the Origin of Information",
    description:
      "An inquiry into the primordial substrate from which form, distinction, and meaning emerge.",
  },
  {
    numeral: "II",
    title: "The Architecture of Consciousness",
    description:
      "A meditation on awareness as the geometry through which the universe perceives itself.",
  },
  {
    numeral: "III",
    title: "Meaning and the Threshold of Being",
    description:
      "Where signal becomes significance — the quiet passage from pattern into understanding.",
  },
  {
    numeral: "IV",
    title: "Reflections on the Informational Real",
    description:
      "Essays on a reality woven not of matter alone, but of relation, memory, and form.",
  },
  {
    numeral: "V",
    title: "The Silence Between the Stars",
    description:
      "Contemplations on the unspoken — the apophatic field that gives every utterance its shape.",
  },
  {
    numeral: "VI",
    title: "Genesis: A Cosmology of Meaning",
    description:
      "Toward a unified vision of cosmos, consciousness, and the informational genesis of the world.",
  },
];

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen text-ivory">
      <CosmicBackdrop />

      {/* NAV */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:py-10">
        <a href="#top" className="font-display text-lg italic tracking-wide text-ivory">
          <span className="text-gold">✦</span> Informational Genesis
        </a>
        <nav className="hidden gap-10 font-ui text-[11px] tracking-[0.28em] text-ivory/70 md:flex">
          <button onClick={() => scrollTo("statement")} className="transition-colors hover:text-gold">PROJECT</button>
          <button onClick={() => scrollTo("library")} className="transition-colors hover:text-gold">LIBRARY</button>
          <button onClick={() => scrollTo("reflection")} className="transition-colors hover:text-gold">REFLECTION</button>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-5xl px-6 pb-28 pt-16 text-center md:pb-40 md:pt-28">
          <div className="animate-fade-up">
            <div className="mb-8 inline-flex items-center gap-4 font-ui text-[10px] tracking-[0.45em] text-gold/80">
              <span className="h-px w-10 bg-gold/40" />
              A CELESTIAL ARCHIVE
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <h1 className="font-display text-5xl leading-[1.05] text-ivory md:text-7xl lg:text-[5.5rem]">
              Informational
              <br />
              <span className="italic text-gradient-gold">Genesis</span>
            </h1>
            <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic leading-relaxed text-ivory/85 md:text-2xl">
              Where information becomes light, and meaning becomes world.
            </p>
            <p className="mx-auto mt-8 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
              An independent body of work tracing the contours of information,
              consciousness, and the quiet origin of meaning — gathered into a
              library of volumes for the patient reader.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => scrollTo("library")}
                className="group inline-flex items-center gap-3 rounded-sm border border-gold/60 bg-gradient-to-b from-gold/20 to-gold/5 px-8 py-3.5 font-ui text-[11px] tracking-[0.32em] text-gold transition-all duration-500 hover:border-gold hover:from-gold/30 hover:to-gold/10 hover:text-ivory hover:shadow-[0_15px_40px_-15px_hsl(42_58%_62%_/_0.7)]"
              >
                EXPLORE THE LIBRARY
                <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => scrollTo("library")}
                className="font-ui text-[11px] tracking-[0.32em] text-ivory/70 transition-colors hover:text-gold"
              >
                READ THE VOLUMES
              </button>
            </div>
          </div>

          {/* faint orbital line */}
          <svg
            aria-hidden
            viewBox="0 0 600 200"
            className="mx-auto mt-24 w-full max-w-3xl opacity-40"
          >
            <ellipse cx="300" cy="100" rx="280" ry="40" fill="none" stroke="hsl(42 58% 62% / 0.4)" strokeWidth="0.5" />
            <ellipse cx="300" cy="100" rx="220" ry="20" fill="none" stroke="hsl(42 58% 62% / 0.3)" strokeWidth="0.5" />
            <circle cx="300" cy="100" r="3" fill="hsl(42 70% 75%)" />
          </svg>
        </div>
      </section>

      {/* STATEMENT */}
      <section id="statement" className="relative">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
          <div className="divider-gold mx-auto mb-12 w-48" />
          <div className="text-center font-ui text-[10px] tracking-[0.45em] text-gold/80">
            ON THE PROJECT
          </div>
          <h2 className="mt-8 text-center font-display text-4xl leading-tight text-ivory md:text-5xl">
            A long contemplation of <span className="italic text-gradient-gold">what is</span>
          </h2>
          <div className="mt-10 space-y-6 font-serif text-lg leading-[1.85] text-ivory/85 md:text-xl">
            <p>
              <span className="font-display text-3xl italic text-gold">I</span>nformational Genesis
              gathers writings that move between philosophy and science, between
              the language of the cosmos and the silent grammar of the mind.
            </p>
            <p>
              It asks an old question with renewed care:{" "}
              <em className="text-ivory">how does meaning come to be?</em> How
              does the bare fact of information — distinction, relation,
              pattern — give rise to consciousness, to world, to the inward
              experience of significance?
            </p>
            <p>
              The volumes here are not answers, but disciplined acts of
              attention. They are offered to readers who suspect, as we do,
              that the cosmos is luminous through and through.
            </p>
          </div>
          <div className="divider-gold mx-auto mt-14 w-48" />
        </div>
      </section>

      {/* LIBRARY */}
      <section id="library" className="relative">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mb-20 text-center">
            <div className="font-ui text-[10px] tracking-[0.45em] text-gold/80">
              THE LIBRARY
            </div>
            <h2 className="mt-6 font-display text-4xl leading-tight text-ivory md:text-6xl">
              Six <span className="italic text-gradient-gold">Volumes</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
              A curated cosmic archive — each volume an illuminated meditation
              on a single facet of the informational real.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {publications.map((pub, i) => (
              <PublicationCard key={pub.numeral} pub={pub} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="relative">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40">
          <div className="divider-gold mx-auto mb-14 w-32" />
          <svg
            aria-hidden
            viewBox="0 0 100 100"
            className="mx-auto mb-10 h-16 w-16 animate-float-slow text-gold/70"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.6"
          >
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="10" />
            <circle cx="50" cy="50" r="2" fill="currentColor" />
          </svg>

          <h2 className="font-display text-4xl italic leading-tight text-ivory md:text-5xl">
            The library is unfinished — <br className="hidden md:block" />
            <span className="text-gradient-gold">as it should be.</span>
          </h2>

          <p className="mx-auto mt-10 max-w-2xl font-serif text-lg leading-[1.85] text-ivory/80 md:text-xl">
            What you find here is one passage in a longer journey. New volumes
            will appear as the inquiry deepens; older ones may be revised, as
            thought has the right to return to itself.
          </p>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-base leading-relaxed text-muted-foreground">
            Informational Genesis remains an open exploration of the
            informational reality we inhabit — and the consciousness through
            which it becomes visible to itself.
          </p>

          <div className="divider-gold mx-auto mt-16 w-32" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 border-t border-gold/15 px-6 py-10 md:flex-row">
          <div className="font-display text-sm italic text-ivory/70">
            <span className="text-gold">✦</span> Informational Genesis
          </div>
          <div className="font-ui text-[10px] tracking-[0.35em] text-muted-foreground">
            AN INDEPENDENT ARCHIVE · {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
