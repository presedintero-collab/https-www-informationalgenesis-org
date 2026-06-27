import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { VolumeCover } from "./VolumeCover";

export interface Publication {
  numeral: string;
  title: string;
  description: string;
  pdfUrl?: string;
}

interface Props {
  pub: Publication;
  index: number;
}

export const PublicationCard = ({ pub, index }: Props) => {
  const [open, setOpen] = useState(false);

  const handlePdf = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pub.pdfUrl) {
      window.open(pub.pdfUrl, "_blank", "noopener,noreferrer");
      return;
    }
    toast({
      title: "Volume forthcoming",
      description: "This publication will be available for download soon.",
    });
  };

  return (
    <>
      <article className="group relative flex flex-col">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Preview cover of ${pub.title}`}
          className="relative block overflow-hidden rounded-sm shadow-volume transition-all duration-700 ease-out group-hover:-translate-y-1 group-hover:shadow-glow"
        >
          <VolumeCover index={index} title={pub.title} numeral={pub.numeral} />
          <span
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(42 60% 70% / 0.15), transparent 70%)",
            }}
          />
        </button>

        <div className="mt-7 space-y-3 px-1">
          <div className="font-ui text-[10px] tracking-[0.4em] text-gold/70">
            VOLUME {pub.numeral}
          </div>
          <h3 className="font-display text-2xl leading-tight text-ivory">
            {pub.title}
          </h3>
          <p className="font-serif text-[15px] leading-relaxed text-muted-foreground">
            {pub.description}
          </p>

          <div className="pt-3">
            <button
              type="button"
              onClick={handlePdf}
              className="group/btn relative inline-flex items-center gap-3 rounded-sm border border-gold/40 bg-gradient-to-b from-gold/15 to-gold/5 px-5 py-2.5 font-ui text-[11px] tracking-[0.28em] text-gold transition-all duration-500 hover:border-gold hover:from-gold/25 hover:to-gold/10 hover:text-ivory hover:shadow-[0_10px_30px_-12px_hsl(42_58%_62%_/_0.6)]"
            >
              <span>READ THE PDF</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-500 group-hover/btn:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </article>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl border-gold/20 bg-midnight p-0">
          <div className="p-8">
            <VolumeCover index={index} title={pub.title} numeral={pub.numeral} />
            <div className="mt-6 text-center">
              <div className="font-ui text-[10px] tracking-[0.4em] text-gold/70">
                VOLUME {pub.numeral}
              </div>
              <h3 className="mt-2 font-display text-3xl text-ivory">{pub.title}</h3>
              <p className="mx-auto mt-3 max-w-md font-serif text-sm leading-relaxed text-muted-foreground">
                {pub.description}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};