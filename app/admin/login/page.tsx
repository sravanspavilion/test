"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import {
  Checkbox,
  Field,
  Input,
  Select,
} from "@/components/ui/form";
import { Icon } from "@/components/ui/icons";
import { signIn, type DemoRole } from "@/lib/demoAuth";
import { BrandMark } from "@/components/layout/Brand";

export default function AdminLoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<DemoRole>("ADMIN");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) return setError("Enter your name to build a demo session.");
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError("Enter a valid email address.");
    if (password.length < 8)
      return setError("Password must be at least 8 characters (demo validation only).");

    setBusy(true);
    // Simulate an auth round-trip
    window.setTimeout(() => {
      signIn(name.trim(), email.trim().toLowerCase(), role);
      router.push("/admin");
    }, 500);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4 py-14">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
          <div className="flex flex-col items-center text-center">
            <BrandMark className="size-12 rounded-2xl" />
            <h1 className="mt-4 text-xl font-extrabold text-slate-900">
              Admin sign in
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Demo login — no real credentials exist. Any values pass client-side
              validation.
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
            <Field label="Display name" htmlFor="demo-name" required>
              <Input
                id="demo-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Carter"
                autoComplete="name"
              />
            </Field>
            <Field label="Email" htmlFor="demo-email" required>
              <Input
                id="demo-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@energymobility.example"
                autoComplete="email"
              />
            </Field>
            <Field label="Password" htmlFor="demo-password" required hint="8+ characters — demo validation only.">
              <Input
                id="demo-password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="current-password"
              />
            </Field>
            <Field label="Role (demo)" htmlFor="demo-role">
              <Select
                id="demo-role"
                value={role}
                onChange={(e) => setRole(e.target.value as DemoRole)}
              >
                <option value="SUPER_ADMIN">Super Admin</option>
                <option value="ADMIN">Admin</option>
                <option value="EDITOR">Editor</option>
                <option value="SUPPORT">Support</option>
              </Select>
            </Field>

            <Checkbox
              label="Keep me signed in on this device (demo localStorage session)"
              defaultChecked
              onChange={() => {}}
            />

            {error ? (
              <p
                className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700"
                role="alert"
              >
                <Icon name="alert" className="size-4" />
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              size="lg"
              fullWidth
              disabled={busy}
              iconRight={busy ? undefined : "arrow-right"}
            >
              {busy ? "Signing in…" : "Sign in to dashboard"}
            </Button>
          </form>

          <p className="mt-6 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-800">
            <strong>Security note:</strong> this screen simulates authentication only.
            Production sign-in will use the backend JWT + RBAC flow. Never reuse real
            credentials here.
          </p>
        </div>
      </div>
    </div>
  );
}