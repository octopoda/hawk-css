"use client";

import Link from "next/link";

interface HeaderProps {
  showBack?: boolean;
}

export default function Header({ showBack }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-bg-space/90 backdrop-blur-md border-b border-border-subtle">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/dashboard"
          className="font-heading font-bold text-lg text-accent-orange hover:brightness-110 transition-all"
        >
          Outer Wilds Academy
        </Link>
        {showBack && (
          <Link
            href="/dashboard"
            className="text-text-muted text-sm hover:text-text-primary transition-colors"
          >
            &larr; Back
          </Link>
        )}
      </div>
    </header>
  );
}
