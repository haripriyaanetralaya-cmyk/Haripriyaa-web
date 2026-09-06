import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, BadgeCheck, Check, MessageCircle, ShieldCheck, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import heroImageAsset from "@/assets/doctor-examining-patient.png.asset.json";
import doctorImageAsset from "@/assets/doctor-seated-portrait.jpg.asset.json";
const heroImage = heroImageAsset.url;
const doctorImage = doctorImageAsset.url;
import clinicImage from "@/assets/clinic-gallery.jpg";
import technologyImage from "@/assets/technology-phaco.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Eye Hospital in Islampur | Haripriyaa Netralaya" },
    { name: "description", content: "Advanced cataract surgery, retina, glaucoma care and precision eye diagnostics in Islampur." },
    { property: "og:title", content: "Haripriyaa Netralaya — Clear Vision Starts Here" },
    { property: "og:description", content: "Compassionate, technology-led ophthalmology in Islampur." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

const treatments = [
  { n: "01", title: "Painless cataract surgery", mr: "बिना इंजेक्शन, बिना टाक्यांचे मोतीबिंदू ऑपरेशन", text: "Stitchless, injection-free, bandage-free Phaco and MICS techniques designed for clarity and rapid recovery.", image: heroImage },
  { n: "02", title: "Eye wart (मोस) removal", mr: "डोळ्यांवरील मोस काढणे", text: "Safe, precise removal of eye warts and lid growths performed without injections or stitches.", image: clinicImage },
  { n: "03", title: "Stitchless laser surgery", mr: "लेसर ऑपरेशन — बिना टाक्यांचे", text: "Laser procedures completed without sutures, keeping the eye comfortable and healing time short.", image: technologyImage },
  { n: "04", title: "Computerized spectacle power", mr: "Computer ने अचूक चष्म्याचा नंबर", text: "Computer-assisted refraction for an accurate spectacle number, measured to fine precision.", image: clinicImage },
  { n: "05", title: "Eye injury & trauma care", mr: "डोळ्यांवरील आघातांवर उपचार", text: "Prompt assessment and treatment for eye injuries, foreign bodies and accidental trauma.", image: heroImage },
  { n: "06", title: "Ayurvedic eye therapies", mr: "तर्पण, शिरोधारा व इतर आयुर्वेदिक चिकित्सा", text: "Tarpana, Shirodhara and allied therapies for Diabetic Retinopathy and digital eye strain.", image: technologyImage },
  { n: "07", title: "Retina & diabetic eye care", mr: "पडदा व मधुमेह नेत्रतपासणी", text: "Detailed retinal imaging, laser diagnostics and ongoing monitoring that protects long-term vision.", image: clinicImage },
  { n: "08", title: "Glaucoma & vision screening", mr: "काचबिंदू व दृष्टी तपासणी", text: "Pressure checks and automated visual field testing for early, evidence-led intervention.", image: heroImage },
  { n: "09", title: "Affordable, attractive spectacles", mr: "परवडणारे व आकर्षक चष्मे", text: "Anti-glare, blue-filter and premium lenses in stylish frames—quality eyewear at fair prices.", image: technologyImage },
];

const facilities = [
  { title: "Discharge within half an hour after surgery", mr: "ऑपरेशन नंतर अर्ध्या तासात डिस्चार्ज" },
  { title: "Vehicle facility for outstation patients", mr: "परगावच्या रुग्णांसाठी वाहनाची सोय" },
  { title: "Injection-free, bandage-free, stitchless surgery", mr: "बिना इंजेक्शन, बिना पट्टी, बिना टाक्यांचे ऑपरेशन" },
];


const reviews = [
  ["Meera Patil", "Islampur", "The cataract procedure was comfortable and the team explained every step. My vision was brighter the very next morning."],
  ["Vijay Jadhav", "Sangli", "From the first scan to follow-up, everything felt organised. Dr. Neeta Ramesh Patil’s calm guidance gave our family complete confidence."],
  ["Anjali Kulkarni", "Islampur", "The staff were warm, waiting time was minimal, and my new lenses are exceptionally clear. Truly attentive care."],
];

function HomePage() {
  const [review, setReview] = useState(0);
  const active = reviews[review];
  return <>
    <section className="relative min-h-[940px] overflow-hidden pb-12 pt-32 lg:min-h-[900px]">
      <div className="fine-grid absolute inset-0 opacity-50" />
      <div className="page-shell relative z-10 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-panel/70 px-4 py-2 text-xs font-semibold text-secondary backdrop-blur"><Star className="size-3 fill-gold text-gold" /> 4.9 rated ophthalmology center in Islampur</div>
        <h1 className="display-serif mx-auto mt-8 max-w-5xl text-7xl text-ice sm:text-8xl lg:text-[7.5rem]">Clear, healthy vision <span className="italic text-secondary">starts here.</span></h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">Advanced stitchless cataract surgery and comprehensive eye diagnostics tailored for precision by Dr. Neeta Ramesh Patil.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-xl shadow-primary/30 transition hover:bg-accent">Book appointment</Link>
          <Link to="/treatments" className="rounded-full border border-border bg-panel/60 px-7 py-3.5 text-sm font-bold text-ice backdrop-blur transition hover:bg-muted">Explore treatments</Link>
        </div>
      </div>
      <div className="page-shell relative z-10 mt-14">
        <div className="relative mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-panel shadow-2xl shadow-primary/15 sm:rounded-[5rem]">
            <img src={heroImage} alt="Ophthalmologist performing a precise slit-lamp eye examination" width={1600} height={1050} className="h-[430px] w-full object-cover sm:h-[520px]" />
          </div>
          <div className="float-soft glass-panel absolute -left-2 top-8 hidden rounded-full px-5 py-3 text-xs font-bold text-ice md:block"><ShieldCheck className="mr-2 inline size-4 text-secondary" />Dr. Neeta Ramesh Patil · Eye Surgeon & Specialist</div>
          <div className="glass-panel absolute -bottom-8 right-0 max-w-xs rounded-lg p-5 text-left sm:right-5"><div className="flex gap-1 text-gold">★★★★★</div><p className="mt-2 text-sm leading-6 text-ice">“Precise care, a painless experience, and exceptional clarity.”</p><p className="mt-2 text-xs text-muted-foreground">Verified patient review</p></div>
        </div>
      </div>
    </section>

    <section className="border-y border-border bg-panel py-24">
      <div className="page-shell">
        <p className="text-xs font-bold uppercase text-secondary">Expert eye care for every age</p>
        <h2 className="display-serif mt-6 max-w-5xl text-5xl text-ice sm:text-7xl">We unite advanced surgical ophthalmology with deeply <span className="italic text-secondary">compassionate care.</span></h2>
        <div className="mt-14 grid gap-4 md:grid-cols-[1.25fr_.75fr]">
          <img src={clinicImage} loading="lazy" width={1600} height={1200} alt="Modern ophthalmology consultation suite" className="h-80 w-full rounded-lg object-cover" />
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-border bg-card p-6"><p className="display-serif text-5xl text-ice">4.9<span className="text-gold">★</span></p><p className="mt-3 text-sm text-muted-foreground">34+ Google reviews</p></div>
            <div className="rounded-lg border border-border bg-primary p-6 text-primary-foreground"><Sparkles className="size-6" /><p className="mt-8 text-sm font-bold">One hospital.<br />Complete eye care.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="page-shell">
        <div className="flex items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase text-secondary">Signature treatments</p><h2 className="display-serif mt-4 text-5xl text-ice sm:text-7xl">Precision at every step.</h2></div><Link to="/treatments" className="hidden text-sm font-bold text-secondary sm:block">View all treatments <ArrowUpRight className="ml-1 inline size-4" /></Link></div>
        <div className="mt-14 divide-y divide-border border-y border-border">
          {treatments.map((item) => <article key={item.n} className="group grid gap-5 py-8 md:grid-cols-[3rem_9rem_1fr_1fr_auto] md:items-center md:gap-6"><span className="font-serif text-2xl text-secondary">{item.n}</span><img src={item.image} loading="lazy" width={400} height={300} alt={item.title} className="h-24 w-full rounded-md object-cover md:h-20" /><div><h3 className="font-serif text-2xl text-ice transition group-hover:text-secondary">{item.title}</h3><p className="mt-1 text-sm text-secondary">{item.mr}</p></div><p className="text-sm leading-6 text-muted-foreground">{item.text}</p><Link to="/treatments" className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-ice transition hover:bg-primary hover:text-primary-foreground" aria-label={`View ${item.title}`}><ArrowUpRight className="size-4" /></Link></article>)}
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {facilities.map((item) => <div key={item.title} className="rounded-lg border border-border bg-card p-6"><Check className="size-5 text-secondary" /><p className="mt-4 font-serif text-xl text-ice">{item.title}</p><p className="mt-2 text-sm text-secondary">{item.mr}</p></div>)}
        </div>

      </div>
    </section>

    <section className="border-y border-border bg-panel py-24">
      <div className="page-shell"><p className="text-xs font-bold uppercase text-secondary">Care that puts you first</p><h2 className="display-serif mt-4 max-w-3xl text-5xl text-ice sm:text-7xl">Clinical excellence, built around you.</h2>
        <div className="mt-12 grid auto-rows-[190px] gap-4 md:grid-cols-3">
          <div className="relative row-span-2 overflow-hidden rounded-lg border border-border"><img src={heroImage} loading="lazy" width={1600} height={1050} alt="Detailed eye examination" className="size-full object-cover opacity-60" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background p-6 pt-20"><p className="text-xs font-bold uppercase text-secondary">Clarity simulation</p><h3 className="mt-2 font-serif text-3xl text-ice">From clouded to crystal clear.</h3></div></div>
          <div className="rounded-lg border border-border bg-card p-6"><BadgeCheck className="size-6 text-secondary" /><h3 className="mt-6 font-serif text-2xl text-ice">Seamless hospital experience</h3><p className="mt-2 text-sm text-muted-foreground">Thoughtful OPD workflows with less waiting.</p></div>
          <div className="rounded-lg border border-border bg-primary p-6"><p className="display-serif text-5xl text-primary-foreground">9+</p><p className="mt-3 text-sm font-bold text-primary-foreground">Years of clinical dedication</p><p className="mt-1 text-xs text-primary-foreground/70">2,000+ screenings</p></div>
          <div className="rounded-lg border border-border bg-card p-6"><p className="display-serif text-5xl text-ice">99%</p><p className="mt-3 text-sm text-muted-foreground">Patient satisfaction, built one conversation at a time.</p></div>
          <div className="rounded-lg border border-border bg-card p-6"><h3 className="font-serif text-2xl text-ice">Your lens, personalized.</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Monofocal or multifocal—explained in clear, practical terms.</p></div>
          <div className="relative col-span-full overflow-hidden rounded-lg border border-border md:col-span-2"><img src={technologyImage} loading="lazy" width={1400} height={1100} alt="Advanced cataract surgery technology" className="size-full object-cover opacity-45" /><div className="absolute inset-0 flex items-end bg-gradient-to-r from-background/90 to-transparent p-6"><div><p className="text-xs font-bold uppercase text-secondary">Technology spotlight</p><h3 className="mt-2 font-serif text-3xl text-ice">Advanced Phaco precision.</h3></div></div></div>
        </div>
      </div>
    </section>

    <section className="py-24"><div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center"><div className="relative"><img src={doctorImage} loading="lazy" width={1000} height={1250} alt="Dr. Neeta Ramesh Patil, eye surgeon" className="h-[620px] w-full rounded-lg object-cover" /><div className="glass-panel absolute bottom-5 left-5 right-5 rounded-lg p-5"><p className="font-serif text-2xl text-ice">Dr. Neeta Ramesh Patil</p><p className="mt-1 text-xs font-bold uppercase text-secondary">MBBS, MS Ophthalmology</p></div></div><div><p className="text-xs font-bold uppercase text-secondary">Doctor spotlight</p><h2 className="display-serif mt-5 text-6xl text-ice">Expert hands. A reassuring presence.</h2><p className="mt-7 text-base leading-7 text-muted-foreground">Every diagnosis is explained, every choice is transparent, and every treatment plan is shaped around the person—not just the condition.</p><div className="mt-8 space-y-3">{["Painless, patient-first methods", "Certified surgical technology", "Transparent guidance at every stage"].map((value) => <p key={value} className="flex items-center gap-3 border-b border-border pb-3 text-sm text-ice"><Check className="size-4 text-secondary" />{value}</p>)}</div><Link to="/about" className="mt-8 inline-flex rounded-full border border-border px-6 py-3 text-sm font-bold text-ice hover:bg-muted">Our approach</Link></div></div></section>

    <section className="border-y border-border bg-panel py-24"><div className="page-shell"><div className="flex items-end justify-between"><div><p className="text-xs font-bold uppercase text-secondary">Patient stories</p><h2 className="display-serif mt-4 text-5xl text-ice sm:text-7xl">What our patients say.</h2></div><div className="flex gap-2"><button onClick={() => setReview((review + reviews.length - 1) % reviews.length)} className="flex size-11 items-center justify-center rounded-full border border-border text-ice hover:bg-muted" aria-label="Previous review"><ArrowLeft className="size-4" /></button><button onClick={() => setReview((review + 1) % reviews.length)} className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-accent" aria-label="Next review"><ArrowRight className="size-4" /></button></div></div><div className="mt-12 grid gap-4 lg:grid-cols-[1fr_2fr]"><div className="rounded-lg bg-primary p-8"><p className="display-serif text-7xl text-primary-foreground">4.9</p><div className="mt-4 text-gold">★★★★★</div><p className="mt-4 flex items-center gap-2 text-sm font-bold text-primary-foreground"><BadgeCheck className="size-4" /> Verified client rating</p></div><div className="glass-panel min-h-72 rounded-lg p-8 sm:p-10"><MessageCircle className="size-7 text-secondary" /><blockquote className="mt-8 font-serif text-3xl leading-snug text-ice sm:text-4xl">“{active?.[2]}”</blockquote><p className="mt-8 text-sm font-bold text-ice">{active?.[0]} <span className="font-normal text-muted-foreground">— {active?.[1]}</span></p><Link to="/reviews" className="mt-6 inline-flex text-sm font-bold text-secondary">Read all reviews <ArrowUpRight className="ml-1 size-4" /></Link></div></div></div></section>

    <section className="py-24"><div className="page-shell grid gap-10 lg:grid-cols-[1.4fr_.6fr]"><div><p className="text-xs font-bold uppercase text-secondary">Answers before your visit</p><h2 className="display-serif mt-4 text-5xl text-ice">Frequently asked questions.</h2><div className="mt-10 divide-y divide-border border-y border-border">{[["Is cataract surgery painful?","Modern Phaco surgery is designed to be comfortable, stitchless and typically performed with topical anaesthesia."],["How long does recovery take?","Most patients resume light activities within a few days. Your exact recovery plan is personalized after examination."],["Do you accept health insurance?","Our team helps you understand available cashless and reimbursement options before scheduling."]].map(([q,a]) => <details key={q} className="group py-5"><summary className="cursor-pointer list-none font-serif text-2xl text-ice">{q}<span className="float-right text-secondary group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div><div className="rounded-lg border border-border bg-card p-8"><MessageCircle className="size-8 text-secondary" /><h3 className="mt-8 font-serif text-3xl text-ice">Still have questions?</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">Speak directly with our care coordinator.</p><a href="https://wa.me/919876543210" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Chat on WhatsApp</a></div></div></section>
  </>;
}
