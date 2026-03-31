"use client";

import { PROGRESS_STORAGE_KEY, LESSON_META } from "./constants";

interface ProgressData {
  completedLessons: string[];
  completedSteps: Record<string, number[]>;
}

function getProgressData(): ProgressData {
  if (typeof window === "undefined") {
    return { completedLessons: [], completedSteps: {} };
  }
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return { completedLessons: [], completedSteps: {} };
    return JSON.parse(raw);
  } catch {
    return { completedLessons: [], completedSteps: {} };
  }
}

function saveProgressData(data: ProgressData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(data));
}

export function isLessonCompleted(slug: string): boolean {
  return getProgressData().completedLessons.includes(slug);
}

export function isStepCompleted(lessonSlug: string, stepIndex: number): boolean {
  const data = getProgressData();
  return data.completedSteps[lessonSlug]?.includes(stepIndex) ?? false;
}

export function getCompletedSteps(lessonSlug: string): number[] {
  return getProgressData().completedSteps[lessonSlug] ?? [];
}

export function toggleStepComplete(lessonSlug: string, stepIndex: number): boolean {
  const data = getProgressData();
  if (!data.completedSteps[lessonSlug]) {
    data.completedSteps[lessonSlug] = [];
  }
  const idx = data.completedSteps[lessonSlug].indexOf(stepIndex);
  if (idx >= 0) {
    data.completedSteps[lessonSlug].splice(idx, 1);
    saveProgressData(data);
    return false;
  } else {
    data.completedSteps[lessonSlug].push(stepIndex);
    saveProgressData(data);
    return true;
  }
}

export function completeLesson(slug: string): void {
  const data = getProgressData();
  if (!data.completedLessons.includes(slug)) {
    data.completedLessons.push(slug);
    saveProgressData(data);
  }
}

export function uncompleteLesson(slug: string): void {
  const data = getProgressData();
  data.completedLessons = data.completedLessons.filter((s) => s !== slug);
  saveProgressData(data);
}

export function isLessonUnlocked(slug: string): boolean {
  const meta = LESSON_META.find((l) => l.slug === slug);
  if (!meta) return false;
  if (meta.order === 0) return true;
  const prevLesson = LESSON_META.find((l) => l.order === meta.order - 1);
  if (!prevLesson) return true;
  return isLessonCompleted(prevLesson.slug);
}

export function getOverallProgress(): { completed: number; total: number } {
  const data = getProgressData();
  return {
    completed: data.completedLessons.length,
    total: LESSON_META.length,
  };
}

export function getCurrentLessonOrder(): number {
  const data = getProgressData();
  for (const lesson of LESSON_META) {
    if (!data.completedLessons.includes(lesson.slug)) {
      return lesson.order;
    }
  }
  return LESSON_META.length;
}
