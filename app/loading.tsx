import { Icon } from "@/components/ui/icons";

export default function Loading() {
  return (
    <div
      className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-10"
      role="status"
      aria-live="polite"
    >
      <Icon name="spark" className="size-8 animate-pulse text-brand-600" />
      <p className="text-sm font-semibold text-slate-500">Loading…</p>
    </div>
  );
}