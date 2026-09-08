import { createFileRoute, Link } from "@tanstack/react-router";
import { ScanEye, ShieldCheck, Sparkles } from "lucide-react";
import technologyImage from "@/assets/technology-phaco.jpg";
import clinicImage from "@/assets/clinic-gallery.jpg";
import { PageHero } from "@/components/page-hero";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/technology")({ head: () => ({ meta: [
  { title: "Eye Care Technology | Haripriyaa Netralaya" }, { name: "description", content: "See the advanced diagnostic and cataract surgery technology used at Haripriyaa Netralaya." },
  { property: "og:title", content: "Our Technology — Haripriyaa Netralaya" }, { property: "og:description", content: "Modern eye diagnostics and surgical precision, explained through patient benefits." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: TechnologyPage });

const machines = [
  ["Advanced Phaco System","Micro-incision cataract removal with stable surgical control and a faster, more comfortable recovery.",technologyImage],
  ["Non-contact Tonometer","Accurate eye-pressure screening with a gentle air pulse—no instrument touches the eye.",clinicImage],
  ["Automated Visual Field Analyzer","Maps peripheral vision precisely to detect and monitor subtle glaucoma changes.",technologyImage],
];

const safetyItems = [
  { Icon: ShieldCheck, title: "Sterile OT protocols" },
  { Icon: Sparkles, title: "Instrument traceability" },
  { Icon: ScanEye, title: "Contact-free testing" },
];

function TechnologyPage() { const { t } = useLang(); return <><PageHero eyebrow={t("Technology & equipment")} title={t("Technology that serves the patient.")} description={t("Every machine in our clinic is chosen for what it changes: more precise answers, gentler procedures and confident decisions.")} image={technologyImage} /><section className="py-24"><div className="page-shell"><div className="space-y-5">{machines.map(([name, benefit, image], i) => <article key={name} className="grid overflow-hidden rounded-lg border border-border bg-card lg:grid-cols-2"><img src={image} loading="lazy" width={1400} height={1100} alt={t(name)} className={`h-80 w-full object-cover ${i % 2 ? "lg:order-2" : ""}`} /><div className="flex flex-col justify-center p-8 sm:p-12"><p className="text-xs font-bold uppercase text-secondary">0{i + 1} · {t("Patient benefit")}</p><h2 className="mt-4 font-serif text-4xl text-ice">{t(name)}</h2><p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">{t(benefit)}</p></div></article>)}</div></div></section><section className="border-y border-border bg-panel py-24"><div className="page-shell grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-bold uppercase text-secondary">{t("Sterilization & safety")}</p><h2 className="display-serif mt-5 text-6xl text-ice">{t("Clean by protocol. Safe by design.")}</h2></div><div className="grid gap-4 sm:grid-cols-3">{safetyItems.map(({ Icon, title }) => <div key={title} className="rounded-lg border border-border bg-card p-6"><Icon className="size-6 text-secondary" /><h3 className="mt-8 font-serif text-2xl text-ice">{t(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{t("Documented clinical checks support every patient visit.")}</p></div>)}</div></div></section><section className="py-20 text-center"><h2 className="font-serif text-4xl text-ice">{t("See our clinical setup in person.")}</h2><Link to="/contact" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">{t("Plan your visit")}</Link></section></>; }
