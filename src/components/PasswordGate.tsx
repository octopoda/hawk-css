"use client";

import { useRouter } from "next/navigation";
import { AUTH_STORAGE_KEY } from "@/lib/constants";
import StarField from "./StarField";

export default function PasswordGate() {
  const router = useRouter();

  function handleEnter() {
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    router.replace("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-space relative">
      <StarField />
      <div className="relative z-10 w-full max-w-sm mx-4 p-8 rounded-2xl bg-bg-surface/80 backdrop-blur-md border border-border-subtle">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-accent-orange mb-2">
            Outer Wilds Academy
          </h1>
          <p className="text-text-muted text-sm">Welcome, Explorer</p>
        </div>

        <button
          onClick={handleEnter}
          autoFocus
          className="w-full py-3 rounded-lg bg-accent-orange text-bg-space font-heading font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all glow-orange"
        >
          Launch
        </button>
      </div>
    </div>
  );
}
