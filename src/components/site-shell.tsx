import { Link } from "@tanstack/react-router";
import { Clock3, Languages, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Brand } from "./brand";
import { LanguageProvider, useLang } from "@/lib/i18n";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Treatments", "/treatments"],
  ["Technology", "/technology"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
] as const;

function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "mr" : "en")}
      className={`flex items-center gap-1.5 rounded-full border border-border bg-muted px-3 py-2 text-xs font-bold text-ice transition hover:bg-primary hover:text-primary-foreground ${className}`}
      aria-label={lang === "en" ? "मराठीत पहा" : "View in English"}
    >
      <Languages className="size-4" />
      {lang === "en" ? "मराठी" : "English"}
    </button>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Shell>{children}</Shell>
    </LanguageProvider>
  );
}

function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 sm:px-5">
          <Link to="/" aria-label="Haripriyaa Netralaya home"><Brand /></Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} activeProps={{ className: "bg-primary/20 text-ice" }} className="rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:text-ice">{t(label)}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-accent sm:inline-flex">{t("Book Appointment")}</Link>
            <button onClick={() => setOpen((value) => !value)} className="flex size-10 items-center justify-center rounded-full border border-border bg-muted text-ice lg:hidden" aria-label={t("Toggle menu")}>{open ? <X className="size-4" /> : <Menu className="size-4" />}</button>
          </div>
        </div>
        {open && (
          <nav className="glass-panel mx-auto mt-2 grid max-w-md rounded-lg p-3 lg:hidden" aria-label="Mobile navigation">
            {nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm text-ice hover:bg-muted">{t(label)}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground">{t("Book Appointment")}</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-panel">
        <div className="page-shell py-16">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-border pb-12 md:flex-row md:items-end">
            <h2 className="display-serif max-w-2xl text-5xl text-ice md:text-7xl">{t("Transform your vision with Dr. Neeta Ramesh Patil.")}</h2>
            <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-accent">{t("Book an appointment")}</Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div><Brand /><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">{t("Advanced ophthalmology delivered with precision, empathy and transparent guidance.")}</p></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">{t("Visit")}</p><p className="flex gap-2 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0" />Haripriyaa Netralaya, Near Shivparvati Theatre,<br />Infront of Sushrusha Hospital, Peth–Sangli Road,<br />Islampur, Tal. Walwa, Urun-Ishwarpur,<br />Dist. Sangli, Maharashtra 415409</p></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">{t("Contact")}</p><a href="tel:+919173159195" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-ice"><Phone className="size-4" />+91 91731 59195</a><a href="https://wa.me/919173159195" className="mt-3 block text-sm text-muted-foreground hover:text-ice">{t("WhatsApp consultation")}</a></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">{t("OPD Hours")}</p><p className="flex gap-2 text-sm leading-6 text-muted-foreground"><Clock3 className="mt-1 size-4 shrink-0" />{t("Mon–Sat")}<br />10:00–1:30 & 5:00–8:30</p></div>
          </div>
          <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">{t("© 2026 Haripriyaa Netralaya. All rights reserved.")}</p>
        </div>
      </footer>
    </div>
  );
}
