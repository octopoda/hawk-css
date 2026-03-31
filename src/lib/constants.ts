export const SITE_PASSWORD = "Outerwilds26!";
export const AUTH_STORAGE_KEY = "ow-academy-auth";
export const PROGRESS_STORAGE_KEY = "ow-academy-progress";

export interface LessonMeta {
  slug: string;
  title: string;
  description: string;
  order: number;
  planet: string;
  planetEmoji: string;
  hawkBranch: string | null;
}

export interface LessonStep {
  title: string;
  content: string;
}

export interface Lesson extends LessonMeta {
  steps: LessonStep[];
}

export const LESSON_META: LessonMeta[] = [
  {
    slug: "00-setup",
    title: "Setup",
    description: "Install your tools, create accounts, and get your coding environment ready.",
    order: 0,
    planet: "Mission Control",
    planetEmoji: "🚀",
    hawkBranch: null,
  },
  {
    slug: "01-html-foundations",
    title: "HTML Foundations",
    description: "Build your first web page with headings, paragraphs, lists, images, and links.",
    order: 1,
    planet: "Timber Hearth",
    planetEmoji: "🌲",
    hawkBranch: "phase-1/html-foundations",
  },
  {
    slug: "02-css-basics",
    title: "CSS Basics",
    description: "Add colors, fonts, and style to your page with CSS.",
    order: 2,
    planet: "Hourglass Twins",
    planetEmoji: "⏳",
    hawkBranch: "phase-2/css-basics",
  },
  {
    slug: "03-multi-page-nav",
    title: "Multi-Page & Navigation",
    description: "Create pages for each planet and build a nav bar to link them together.",
    order: 3,
    planet: "Brittle Hollow",
    planetEmoji: "🕳️",
    hawkBranch: "phase-3/multi-page-nav",
  },
  {
    slug: "04-workflow-setup",
    title: "Workflow Setup",
    description: "Set up a dev server with Vite so your changes appear instantly.",
    order: 4,
    planet: "Giant's Deep",
    planetEmoji: "🌊",
    hawkBranch: "phase-4/workflow-setup",
  },
  {
    slug: "05-interactivity",
    title: "JavaScript & Timer",
    description: "Learn JavaScript basics and build the 22-minute countdown timer.",
    order: 5,
    planet: "The Interloper",
    planetEmoji: "☄️",
    hawkBranch: "phase-5/interactivity",
  },
  {
    slug: "06-database",
    title: "Database Integration",
    description: "Connect to Supabase so your notes save and persist.",
    order: 6,
    planet: "Dark Bramble",
    planetEmoji: "🌿",
    hawkBranch: "phase-6/database",
  },
  {
    slug: "07-crud",
    title: "CRUD & Live Updates",
    description: "Add edit, delete, and real-time page updates without refreshing.",
    order: 7,
    planet: "Quantum Moon",
    planetEmoji: "🌙",
    hawkBranch: "phase-7/crud",
  },
  {
    slug: "08-deployment",
    title: "Deployment",
    description: "Deploy your site to Vercel so anyone can visit it.",
    order: 8,
    planet: "Sun Station",
    planetEmoji: "☀️",
    hawkBranch: "phase-8/deployment",
  },
  {
    slug: "09-responsive-design",
    title: "Responsive Design",
    description: "Make your site look great on phones, tablets, and desktops.",
    order: 9,
    planet: "Ash Twin",
    planetEmoji: "🏜️",
    hawkBranch: "phase-9/responsive-design",
  },
  {
    slug: "10-photos",
    title: "Photos",
    description: "Add photo uploads so you can snap pictures from your phone.",
    order: 10,
    planet: "The Attlerock",
    planetEmoji: "📷",
    hawkBranch: "phase-10/photos",
  },
];
