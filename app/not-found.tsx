import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.3em] text-accent-600">
        Error 404
      </p>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
        The page you were looking for doesn&apos;t exist or has moved. Check the
        address, or start from the homepage.
      </p>
      <span className="mt-8 grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon name="map-pin" className="size-7" />
      </span>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" icon="home">
          Back to home
        </Button>
        <Button href="/locate" variant="secondary" icon="search">
          Find a station
        </Button>
      </div>
    </div>
  );
}