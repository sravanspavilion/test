/**
 * DEMO-ONLY auth helper backed by localStorage.
 * No real credentials, no tokens — this exists so the admin flow can be
 * walked through before the backend auth (JWT + RBAC) is implemented.
 */

export type DemoRole = "SUPER_ADMIN" | "ADMIN" | "EDITOR" | "SUPPORT";

export interface DemoSession {
  name: string;
  email: string;
  role: DemoRole;
  signedInAt: string;
}

const KEY = "em-demo-session";

export function getSession(): DemoSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as DemoSession) : null;
  } catch {
    return null;
  }
}

export function signIn(name: string, email: string, role: DemoRole): DemoSession {
  const session: DemoSession = {
    name,
    email,
    role,
    signedInAt: new Date().toISOString(),
  };
  window.localStorage.setItem(KEY, JSON.stringify(session));
  return session;
}

export function signOut() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}