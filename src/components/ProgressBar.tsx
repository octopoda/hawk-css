"use client";

interface ProgressBarProps {
  completed: number;
  total: number;
}

export default function ProgressBar({ completed, total }: ProgressBarProps) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-text-muted text-sm">
          Lesson {completed} of {total}
        </span>
        <span className="text-accent-orange font-heading font-bold text-sm">
          {pct}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-bg-space rounded-full overflow-hidden border border-border-subtle">
        <div
          className="h-full bg-accent-orange rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
