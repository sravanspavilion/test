import Link from "next/link";
import { Icon } from "@/components/ui/icons";

export function Breadcrumb({
  items,
}: {
  items: Array<{ label: string; href?: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-slate-500">
        <li>
          <Link
            href="/"
            className="inline-flex items-center gap-1 transition-colors hover:text-brand-700"
          >
            <Icon name="home" className="size-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            <Icon name="chevron-right" className="size-3.5 text-slate-300" />
            {item.href && i < items.length - 1 ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-brand-700"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-slate-800">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}