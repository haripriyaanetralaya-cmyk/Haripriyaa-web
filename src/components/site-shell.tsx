import { Link } from "@tanstack/react-router";
import { Clock3, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Brand } from "./brand";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Treatments", "/treatments"],
  ["Technology", "/technology"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"],
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="glass-panel mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full px-4 sm:px-5">
          <Link to="/" aria-label="Haripriyaa Netralaya home"><Brand /></Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, to]) => (
              <Link key={to} to={to} activeProps={{ className: "bg-primary/20 text-ice" }} className="rounded-full px-4 py-2 text-xs font-semibold text-muted-foreground transition hover:text-ice">{label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-accent sm:inline-flex">Book Appointment</Link>
            <button onClick={() => setOpen((value) => !value)} className="flex size-10 items-center justify-center rounded-full border border-border bg-muted text-ice lg:hidden" aria-label="Toggle menu">{open ? <X className="size-4" /> : <Menu className="size-4" />}</button>
          </div>
        </div>
        {open && (
          <nav className="glass-panel mx-auto mt-2 grid max-w-md rounded-lg p-3 lg:hidden" aria-label="Mobile navigation">
            {nav.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)} className="rounded-md px-4 py-3 text-sm text-ice hover:bg-muted">{label}</Link>)}
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-md bg-primary px-4 py-3 text-center text-sm font-bold text-primary-foreground">Book Appointment</Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border bg-panel">
        <div className="page-shell py-16">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 border-b border-border pb-12 md:flex-row md:items-end">
            <h2 className="display-serif max-w-2xl text-5xl text-ice md:text-7xl">Transform your vision with Dr. Neeta Ramesh Patil.</h2>
            <Link to="/contact" className="rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-accent">Book an appointment</Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div><Brand /><p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">Advanced ophthalmology delivered with precision, empathy and transparent guidance.</p></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">Visit</p><p className="flex gap-2 text-sm leading-6 text-muted-foreground"><MapPin className="mt-1 size-4 shrink-0" />Near Shivparvati Theatre,<br />Peth–Sangli Road, Islampur</p></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">Contact</p><a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-ice"><Phone className="size-4" />+91 98765 43210</a><a href="https://wa.me/919876543210" className="mt-3 block text-sm text-muted-foreground hover:text-ice">WhatsApp consultation</a></div>
            <div><p className="mb-4 text-xs font-bold uppercase text-secondary">OPD Hours</p><p className="flex gap-2 text-sm leading-6 text-muted-foreground"><Clock3 className="mt-1 size-4 shrink-0" />Mon–Sat<br />10:00–1:30 & 5:00–8:30</p></div>
          </div>
          <p className="mt-14 border-t border-border pt-6 text-xs text-muted-foreground">© 2026 Haripriyaa Netralaya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
