"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report the error in non-production builds / demo console
    console.error("[Energy Mobility] page error:", error);
  }, [error]);

  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <span className="grid size-16 place-items-center rounded-2xl bg-red-50 text-red-600">
        <Icon name="alert" className="size-8" />
      </span>
      <h1 className="mt-6 text-2xl font-extrabold text-slate-900">
        Something went wrong
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
        An unexpected error occurred while loading this page. Please try again — or
        head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={reset} variant="primary">
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Go home
        </Button>
      </div>
    </div>
  );
}