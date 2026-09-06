import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import heroImageAsset from "@/assets/doctor-consultation.png.asset.json";
import doctorImageAsset from "@/assets/doctor-seated-portrait.jpg.asset.json";
const heroImage = heroImageAsset.url;
const doctorImage = doctorImageAsset.url;
import clinicImage from "@/assets/clinic-gallery.jpg";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About Our Eye Hospital | Haripriyaa Netralaya" }, { name: "description", content: "Meet our ophthalmologist and explore Haripriyaa Netralaya's advanced eye care infrastructure in Islampur." },
  { property: "og:title", content: "About Haripriyaa Netralaya" }, { property: "og:description", content: "Clinical excellence and compassionate eye care in Islampur." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AboutPage });

function AboutPage() { return <>
  <PageHero eyebrow="About Haripriyaa Netralaya" title="Excellence in eye care for Uran Islampur." description="A modern ophthalmology practice where surgical precision meets calm, personal attention." image={clinicImage} />
  <section className="py-24"><div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center"><img src={doctorImage} loading="lazy" width={1000} height={1250} alt="Dr. Neeta Ramesh Patil, eye surgeon and specialist" className="h-[680px] w-full rounded-lg object-cover" /><div><p className="text-xs font-bold uppercase text-secondary">Your ophthalmologist</p><h2 className="display-serif mt-5 text-6xl text-ice">Dr. Neeta Ramesh Patil</h2><p className="mt-2 text-sm font-bold uppercase text-secondary">MBBS · MS Ophthalmology</p><p className="mt-7 text-base leading-8 text-muted-foreground">With over nine years dedicated to medical and surgical ophthalmology, Dr. Neeta Ramesh Patil brings precise, compassionate eye care to patients across Islampur and Walwa taluka. Her philosophy is simple: explain clearly, recommend honestly, and treat gently.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{["Phaco & MICS cataract surgery","Retinal diagnostics","Glaucoma screening","Customized lens planning"].map((item) => <p key={item} className="flex gap-3 rounded-md border border-border bg-card p-4 text-sm text-ice"><CheckCircle2 className="size-4 shrink-0 text-secondary" />{item}</p>)}</div><Link to="/contact" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">Consult Dr. Neeta Patil</Link></div></div></section>
  <section className="border-y border-border bg-panel py-24"><div className="page-shell"><p className="text-xs font-bold uppercase text-secondary">Inside the clinic</p><h2 className="display-serif mt-4 text-5xl text-ice sm:text-7xl">Designed around safety and ease.</h2><div className="mt-12 grid gap-4 md:grid-cols-2">{["Operation theatre","OPD consultation room","Diagnostic laboratory","Optical display counter"].map((name, i) => <figure key={name} className="relative overflow-hidden rounded-lg border border-border"><img src={i % 2 ? heroImage : clinicImage} loading="lazy" width={1600} height={1200} alt={name} className="h-80 w-full object-cover opacity-75" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background p-6 pt-16 font-serif text-2xl text-ice">{name}</figcaption></figure>)}</div></div></section>
  </>; }
