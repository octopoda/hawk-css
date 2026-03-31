"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_PASSWORD, AUTH_STORAGE_KEY } from "@/lib/constants";
import StarField from "./StarField";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored === "true") {
      router.replace("/dashboard");
    } else {
      setChecking(false);
    }
  }, [router]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (password === SITE_PASSWORD) {
      localStorage.setItem(AUTH_STORAGE_KEY, "true");
      router.replace("/dashboard");
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  }

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-space">
        <div className="w-6 h-6 border-2 border-accent-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-space relative">
      <StarField />
      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm mx-4 p-8 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle"
      >
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-accent-orange mb-2">
            Outer Wilds Academy
          </h1>
          <p className="text-text-muted text-sm">Welcome, Explorer</p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              autoFocus
              className={`w-full px-4 py-3 rounded-lg bg-bg-space border text-text-primary placeholder:text-text-muted/50 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange/50 transition-all ${
                error
                  ? "border-danger shake"
                  : "border-border-subtle"
              }`}
            />
            {error && (
              <p className="text-danger text-xs mt-2 text-center">
                Wrong password. Try again, explorer.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-accent-orange text-bg-space font-heading font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all glow-orange"
          >
            Launch
          </button>
        </div>
      </form>
    </div>
  );
}
