import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, MessageCircle, Star } from "lucide-react";

const reviews = [
  ["Meera Patil", "Islampur", "The cataract procedure was comfortable and every step was explained clearly. My vision felt brighter the very next morning."],
  ["Vijay Jadhav", "Sangli", "From the first scan to follow-up, everything felt organised. Dr. Neeta Ramesh Patil’s calm guidance gave our family complete confidence."],
  ["Anjali Kulkarni", "Islampur", "The staff were warm, waiting time was minimal, and my new lenses are exceptionally clear. Truly attentive care."],
  ["Sunita Shinde", "Walwa", "A clean clinic, thoughtful consultation and a treatment plan that was easy for our family to understand."],
];

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Patient Reviews | Haripriyaa Netralaya" },
      { name: "description", content: "Read verified patient experiences from Haripriyaa Netralaya in Islampur." },
      { property: "og:title", content: "Patient Reviews — Haripriyaa Netralaya" },
      { property: "og:description", content: "Patient stories about clear guidance, comfortable treatment and attentive eye care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="border-b border-border bg-panel pt-36">
        <div className="page-shell pb-20 pt-12 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-secondary">
            <Star className="size-3 fill-gold text-gold" /> 4.9 rated in Islampur
          </div>
          <h1 className="display-serif mx-auto mt-6 max-w-4xl text-6xl text-ice sm:text-8xl">Care remembered for the right reasons.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Real experiences from patients and families who trusted Dr. Neeta Ramesh Patil with their vision.</p>
        </div>
      </section>
      <section className="py-24">
        <div className="page-shell grid gap-5 md:grid-cols-2">
          {reviews.map(([name, locality, quote]) => (
            <article key={name} className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-center justify-between gap-4"><div className="flex gap-1 text-gold" aria-label="5 stars">★★★★★</div><BadgeCheck className="size-5 text-secondary" /></div>
              <MessageCircle className="mt-10 size-7 text-secondary" />
              <blockquote className="mt-5 font-serif text-3xl leading-snug text-ice">“{quote}”</blockquote>
              <p className="mt-8 text-sm font-bold text-ice">{name} <span className="font-normal text-muted-foreground">— {locality}</span></p>
            </article>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-panel py-20 text-center"><div className="page-shell"><h2 className="display-serif text-5xl text-ice">Begin your own clearer-vision story.</h2><Link to="/contact" className="mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground">Book an appointment</Link></div></section>
    </>
  );
}