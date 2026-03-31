import type { Lesson } from "./constants";
import { LESSON_META } from "./constants";

const lessonModules: Record<string, () => Promise<{ default: Lesson }>> = {
  "00-setup": () => import("@/content/lessons/00-setup"),
  "01-html-foundations": () => import("@/content/lessons/01-html-foundations"),
  "02-css-basics": () => import("@/content/lessons/02-css-basics"),
  "03-multi-page-nav": () => import("@/content/lessons/03-multi-page-nav"),
  "04-workflow-setup": () => import("@/content/lessons/04-workflow-setup"),
  "05-interactivity": () => import("@/content/lessons/05-interactivity"),
  "06-database": () => import("@/content/lessons/06-database"),
  "07-crud": () => import("@/content/lessons/07-crud"),
  "08-deployment": () => import("@/content/lessons/08-deployment"),
  "09-responsive-design": () => import("@/content/lessons/09-responsive-design"),
  "10-photos": () => import("@/content/lessons/10-photos"),
};

export async function getLesson(slug: string): Promise<Lesson | null> {
  const loader = lessonModules[slug];
  if (!loader) return null;
  try {
    const mod = await loader();
    return mod.default;
  } catch {
    return null;
  }
}

export function getAllLessonSlugs(): string[] {
  return LESSON_META.map((l) => l.slug);
}

export function getLessonMeta(slug: string) {
  return LESSON_META.find((l) => l.slug === slug) ?? null;
}
