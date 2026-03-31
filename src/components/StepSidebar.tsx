"use client";

import { CheckCircle2, Circle, ChevronRight } from "lucide-react";

interface StepSidebarProps {
  steps: { title: string }[];
  currentStep: number;
  completedSteps: number[];
  onStepClick: (index: number) => void;
}

export default function StepSidebar({
  steps,
  currentStep,
  completedSteps,
  onStepClick,
}: StepSidebarProps) {
  return (
    <nav className="space-y-1" aria-label="Lesson steps">
      <h2 className="font-heading font-bold text-xs uppercase tracking-wider text-text-muted mb-3 px-2">
        Steps
      </h2>
      {steps.map((step, i) => {
        const isComplete = completedSteps.includes(i);
        const isCurrent = i === currentStep;

        return (
          <button
            key={i}
            onClick={() => onStepClick(i)}
            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left text-sm transition-all ${
              isCurrent
                ? "bg-accent-orange/10 text-accent-orange"
                : isComplete
                ? "text-success hover:bg-bg-surface-hover"
                : "text-text-muted hover:bg-bg-surface-hover hover:text-text-primary"
            }`}
          >
            {isComplete ? (
              <CheckCircle2 size={16} className="shrink-0 text-success" />
            ) : isCurrent ? (
              <ChevronRight size={16} className="shrink-0" />
            ) : (
              <Circle size={16} className="shrink-0" />
            )}
            <span className="truncate">{step.title}</span>
          </button>
        );
      })}
    </nav>
  );
}
