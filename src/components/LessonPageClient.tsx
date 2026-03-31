"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { AUTH_STORAGE_KEY, type Lesson } from "@/lib/constants";
import {
  getCompletedSteps,
  toggleStepComplete,
  completeLesson,
  isLessonCompleted,
  isLessonUnlocked,
} from "@/lib/progress";
import Header from "./Header";
import StepSidebar from "./StepSidebar";
import MdxContent from "./MdxContent";
import { CheckCircle2, Menu, X, ChevronLeft, ChevronRight } from "lucide-react";

interface LessonPageClientProps {
  lesson: Lesson;
}

export default function LessonPageClient({ lesson }: LessonPageClientProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [lessonDone, setLessonDone] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (auth !== "true") {
      router.replace("/");
      return;
    }
    if (!isLessonUnlocked(lesson.slug)) {
      router.replace("/dashboard");
      return;
    }
    setCompletedSteps(getCompletedSteps(lesson.slug));
    setLessonDone(isLessonCompleted(lesson.slug));
    setReady(true);
  }, [lesson.slug, router]);

  const handleToggleStep = useCallback(
    (index: number) => {
      const isNowComplete = toggleStepComplete(lesson.slug, index);
      setCompletedSteps((prev) =>
        isNowComplete ? [...prev, index] : prev.filter((s) => s !== index)
      );
    },
    [lesson.slug]
  );

  const handleCompleteLesson = useCallback(() => {
    completeLesson(lesson.slug);
    setLessonDone(true);
    setTimeout(() => router.push("/dashboard"), 1200);
  }, [lesson.slug, router]);

  const allStepsComplete = lesson.steps.every((_, i) =>
    completedSteps.includes(i)
  );

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-accent-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const step = lesson.steps[currentStep];

  return (
    <div className="min-h-screen bg-bg-space flex flex-col">
      <Header showBack />

      <div className="flex-1 flex max-w-6xl mx-auto w-full">
        {/* Desktop sidebar */}
        <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-border-subtle p-4 overflow-y-auto">
          <StepSidebar
            steps={lesson.steps}
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={(i) => setCurrentStep(i)}
          />
        </aside>

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <div
              className="absolute inset-0 bg-black/60"
              onClick={() => setSidebarOpen(false)}
            />
            <aside className="absolute left-0 top-0 bottom-0 w-64 bg-bg-surface border-r border-border-subtle p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="font-heading font-bold text-sm text-text-primary">
                  Steps
                </span>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="text-text-muted hover:text-text-primary"
                >
                  <X size={20} />
                </button>
              </div>
              <StepSidebar
                steps={lesson.steps}
                currentStep={currentStep}
                completedSteps={completedSteps}
                onStepClick={(i) => {
                  setCurrentStep(i);
                  setSidebarOpen(false);
                }}
              />
            </aside>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
          {/* Lesson header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{lesson.planetEmoji}</span>
              <span className="text-text-muted text-xs uppercase tracking-wider">
                Lesson {lesson.order} &middot; {lesson.planet}
              </span>
            </div>
            <h1 className="font-heading text-2xl font-bold text-text-primary">
              {lesson.title}
            </h1>
            {lesson.hawkBranch && (
              <p className="text-text-muted text-xs mt-1 font-mono">
                Branch: {lesson.hawkBranch}
              </p>
            )}
          </div>

          {/* Mobile step indicator */}
          <div className="md:hidden flex items-center justify-between mb-4 p-3 rounded-lg bg-bg-surface border border-border-subtle">
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 text-text-muted text-sm hover:text-text-primary"
            >
              <Menu size={16} />
              Steps
            </button>
            <span className="text-text-muted text-sm">
              Step {currentStep + 1} of {lesson.steps.length}
            </span>
          </div>

          {/* Step content */}
          <div className="bg-bg-surface rounded-xl border border-border-subtle p-5 sm:p-6 mb-6">
            <h2 className="font-heading font-bold text-lg text-accent-orange mb-4">
              {step.title}
            </h2>
            <MdxContent content={step.content} />
          </div>

          {/* Step completion + navigation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
            <button
              onClick={() => handleToggleStep(currentStep)}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all ${
                completedSteps.includes(currentStep)
                  ? "bg-success/10 border-success/30 text-success"
                  : "bg-bg-surface border-border-subtle text-text-muted hover:text-text-primary hover:border-text-muted"
              }`}
            >
              <CheckCircle2 size={16} />
              {completedSteps.includes(currentStep)
                ? "Step Complete"
                : "Mark Step Complete"}
            </button>

            <div className="flex gap-2 sm:ml-auto">
              <button
                onClick={() => setCurrentStep((s) => Math.max(0, s - 1))}
                disabled={currentStep === 0}
                className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border-subtle text-text-muted text-sm hover:text-text-primary hover:border-text-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                <ChevronLeft size={16} />
                Prev
              </button>
              <button
                onClick={() =>
                  setCurrentStep((s) =>
                    Math.min(lesson.steps.length - 1, s + 1)
                  )
                }
                disabled={currentStep === lesson.steps.length - 1}
                className="flex items-center gap-1 px-4 py-2.5 rounded-lg border border-border-subtle text-text-muted text-sm hover:text-text-primary hover:border-text-muted disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Complete lesson */}
          {currentStep === lesson.steps.length - 1 && (
            <div className="text-center py-6">
              {lessonDone ? (
                <div className="inline-flex items-center gap-2 text-success font-heading font-bold text-lg">
                  <CheckCircle2 size={24} />
                  Lesson Complete!
                </div>
              ) : (
                <button
                  onClick={handleCompleteLesson}
                  disabled={!allStepsComplete}
                  className="px-8 py-3 rounded-lg bg-accent-orange text-bg-space font-heading font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all glow-orange disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                >
                  Complete Lesson
                </button>
              )}
              {!allStepsComplete && !lessonDone && (
                <p className="text-text-muted text-xs mt-2">
                  Mark all steps complete to finish this lesson.
                </p>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
