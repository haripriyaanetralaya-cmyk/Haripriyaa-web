import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, image, children }: { eyebrow: string; title: string; description: string; image?: string; children?: ReactNode }) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden border-b border-border pt-36">
      {image && <img src={image} alt="" className="absolute inset-0 size-full object-cover opacity-35" />}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="fine-grid absolute inset-0 opacity-40" />
      <div className="page-shell relative z-10 flex min-h-[55vh] flex-col justify-end pb-16">
        <p className="mb-5 text-xs font-bold uppercase text-secondary">{eyebrow}</p>
        <h1 className="display-serif max-w-4xl text-6xl text-ice sm:text-7xl lg:text-8xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
        {children}
      </div>
    </section>
  );
}
