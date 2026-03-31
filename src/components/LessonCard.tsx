"use client";

import Link from "next/link";
import { Lock, CheckCircle2, ArrowRight } from "lucide-react";
import type { LessonMeta } from "@/lib/constants";

interface LessonCardProps {
  lesson: LessonMeta;
  status: "completed" | "current" | "locked";
}

export default function LessonCard({ lesson, status }: LessonCardProps) {
  const isClickable = status !== "locked";

  const card = (
    <div
      className={`relative rounded-xl border p-5 transition-all duration-200 ${
        status === "locked"
          ? "bg-bg-surface/40 border-border-subtle opacity-50 cursor-not-allowed"
          : status === "current"
          ? "bg-bg-surface border-accent-orange glow-orange cursor-pointer hover:bg-bg-surface-hover"
          : "bg-bg-surface border-border-subtle cursor-pointer hover:bg-bg-surface-hover hover:border-success/50"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-bg-space text-accent-orange font-heading font-bold text-sm border border-border-subtle">
          {lesson.order}
        </span>
        <span className="text-2xl" role="img" aria-label={lesson.planet}>
          {lesson.planetEmoji}
        </span>
      </div>

      <h3 className="font-heading font-bold text-lg text-text-primary mb-1">
        {lesson.title}
      </h3>
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {lesson.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-text-muted text-xs">{lesson.planet}</span>
        {status === "completed" && (
          <span className="inline-flex items-center gap-1.5 text-success text-xs font-medium">
            <CheckCircle2 size={14} />
            Done
          </span>
        )}
        {status === "current" && (
          <span className="inline-flex items-center gap-1.5 text-accent-orange text-xs font-medium">
            <ArrowRight size={14} />
            Continue
          </span>
        )}
        {status === "locked" && (
          <span className="inline-flex items-center gap-1.5 text-locked text-xs font-medium">
            <Lock size={14} />
            Locked
          </span>
        )}
      </div>
    </div>
  );

  if (isClickable) {
    return (
      <Link href={`/lessons/${lesson.slug}`} className="block">
        {card}
      </Link>
    );
  }

  return card;
}
