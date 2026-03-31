"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AUTH_STORAGE_KEY, LESSON_META } from "@/lib/constants";
import {
  isLessonCompleted,
  getOverallProgress,
  getCurrentLessonOrder,
} from "@/lib/progress";
import Header from "@/components/Header";
import ProgressBar from "@/components/ProgressBar";
import LessonCard from "@/components/LessonCard";

export default function DashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState({ completed: 0, total: LESSON_META.length });
  const [currentOrder, setCurrentOrder] = useState(0);

  useEffect(() => {
    const auth = localStorage.getItem(AUTH_STORAGE_KEY);
    if (auth !== "true") {
      router.replace("/");
      return;
    }
    setProgress(getOverallProgress());
    setCurrentOrder(getCurrentLessonOrder());
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-accent-orange border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-space">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-text-primary mb-1">
            Welcome back, Hawk.
          </h1>
          <p className="text-text-muted text-sm mb-4">
            {progress.completed === progress.total
              ? "You've completed all lessons. Amazing work, explorer!"
              : `You're on Lesson ${currentOrder} of ${progress.total - 1}.`}
          </p>
          <ProgressBar completed={progress.completed} total={progress.total} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LESSON_META.map((lesson) => {
            let status: "completed" | "current" | "locked";
            if (isLessonCompleted(lesson.slug)) {
              status = "completed";
            } else if (lesson.order === currentOrder) {
              status = "current";
            } else if (lesson.order < currentOrder) {
              status = "current";
            } else {
              status = "locked";
            }
            return (
              <LessonCard key={lesson.slug} lesson={lesson} status={status} />
            );
          })}
        </div>
      </main>
    </div>
  );
}
