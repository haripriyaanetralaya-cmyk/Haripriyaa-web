import { Eye } from "lucide-react";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-8 items-center justify-center rounded-full border border-secondary/40 bg-primary/20 text-secondary">
        <Eye className="size-4" aria-hidden="true" />
      </span>
      <span className="leading-none">
        <span className="block font-serif text-base font-semibold uppercase text-ice sm:text-lg">Haripriyaa</span>
        {!compact && <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.26em] text-secondary">Netralaya</span>}
      </span>
    </span>
  );
}
