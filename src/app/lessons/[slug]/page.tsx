import { notFound } from "next/navigation";
import { getLesson, getAllLessonSlugs } from "@/lib/lessons";
import LessonPageClient from "@/components/LessonPageClient";

export async function generateStaticParams() {
  return getAllLessonSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LessonPage({ params }: Props) {
  const { slug } = await params;
  const lesson = await getLesson(slug);

  if (!lesson) {
    notFound();
  }

  return <LessonPageClient lesson={lesson} />;
}
