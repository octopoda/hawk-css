import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "06-database",
  title: "Database Integration",
  description: "Connect to Supabase so your notes save and persist.",
  order: 6,
  planet: "Dark Bramble",
  planetEmoji: "🌿",
  hawkBranch: "phase-6/database",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Same Branch Workflow, Bramble Edition

Before we plug your journal into a real database, spin up a **branch** so all of this lesson's experiments stay separate from \`main\`.

In your terminal, from your journal project folder:

\`\`\`bash
git checkout main && git pull
git checkout -b phase-6/database
\`\`\`

First line: jump to \`main\` and grab the latest from GitHub. Second line: create \`phase-6/database\` and hop onto it.

You're not lost in the fog — you're just building on a side path until you're ready to merge the good stuff back in.

> **Hearthian Field Note**: If Git yells about uncommitted changes, stash or commit them first. Clean trees make branch switches painless.`,
    },
    {
      title: "What is a Database?",
      content: `## From Hardcoded Notes to a Living Journal

Imagine a **super-organized spreadsheet** that doesn't live in Excel on your laptop — it lives on the **internet**, ready whenever your website asks for data. That's basically a **database**.

Right now, your planet pages probably show notes that are **hardcoded** in the HTML: paragraphs or list items you typed straight into the file. That works for demos! But every time you want to change a note, you have to **edit the code** and save the file again.

A database flips that around:

- Your HTML holds the **structure** (headings, layout, a spot where notes should appear).
- The database holds the **actual note text** — add, edit, or remove rows, and the page can show what's current **without** you rewriting HTML by hand.

**Tables, rows, columns** — same idea as a spreadsheet:

- A **table** is like one sheet tab (e.g. "Notes").
- Each **row** is one note (one record).
- Each **column** is one kind of info (which planet, what the note says, when it was written).

**Supabase** is a free-tier friendly service that gives you a real database plus a dashboard to manage it. Think of it as the launchpad for your journal's memory — we'll connect your site to it with a little JavaScript.

> **Hearthian Field Note**: You don't need to memorize jargon. If "row" and "record" get mixed up in your head, both just mean "one note's worth of data."`,
    },
    {
      title: "Create a Supabase Account",
      content: `## Sign Up, Project, Keys — The Boring Part That Powers Everything

1. Open **[supabase.com](https://supabase.com)** in your browser and **sign up** for an account (the free tier is plenty for your journal).

2. **IMPORTANT**: Use a strong password and store it in your **1Password shared vault** — not sticky notes, not a text file in the project, not a group chat. Same rule for **every** password this lesson creates.

3. In the dashboard, create a **new project**. Name it something clear, like \`outer-wilds-journal\` (dashes or underscores are fine).

4. Supabase will ask for a **database password** for the project. Pick a strong one — **save it in the 1Password shared vault** too. You'll rarely type it day-to-day, but you'll want it if you ever need full database access.

5. Pick a region close to you if it asks, then **wait** while the project spins up. Grab a snack; first-time setup can take a minute or two.

6. When it's ready, go to **Settings → API**. You'll see:

   - **Project URL** — your site's address for talking to Supabase.
   - **anon public** key — a key your **frontend** JavaScript can use (with rules you'll set in the dashboard).

Copy both somewhere safe for this lesson (your password manager notes field is perfect). You'll paste them into code soon.

> **Hearthian Field Note**: Treat the **anon** key like a house key with training wheels — still secret enough that you don't post it on social media or commit it to a **public** GitHub repo without extra setup. Your mentor can show you environment variables when you're ready for the next level.`,
    },
    {
      title: "Design Your Database Schema",
      content: `## Blueprint First, Data Second

A **schema** is the **blueprint** for your data: which table exists, what columns it has, and what type each column stores. Get the blueprint right once; then you can add hundreds of notes without redesigning everything.

In Supabase, open **Table Editor** (left sidebar). Create a new table named \`notes\`.

Add these columns (names and types matter for the code later):

| Column | Type | Details |
|--------|------|---------|
| \`id\` | \`uuid\` | Set as **primary key**. Enable **default** so Supabase auto-generates each ID (often \`gen_random_uuid()\`). |
| \`planet_slug\` | \`text\` | **Not null**. Which planet the note belongs to, e.g. \`timber-hearth\` — matches the "slug" you use in your site URLs or filenames. |
| \`content\` | \`text\` | **Not null**. The actual note body the explorer typed. |
| \`created_at\` | \`timestamptz\` | Default **now()** so every new row automatically gets a "when was this written?" timestamp. |

**Quick type tour:**

- **uuid** — a unique ID string computers generate so two notes never accidentally share the same ID.
- **text** — plain string data (short or long).
- **timestamptz** — date and time with timezone awareness — great for sorting "newest first."

Save the table. You now have an empty \`notes\` table waiting for your journal.

Here's the same structure expressed as SQL (you don't have to run this if you already built the table in the UI — it's just a map of what you made):

\`\`\`sql
create table notes (
  id uuid primary key default gen_random_uuid(),
  planet_slug text not null,
  content text not null,
  created_at timestamptz not null default now()
);
\`\`\`

> **Hearthian Field Note**: If inserting or reading notes later fails with a "policy" or "RLS" error, Supabase's **Row Level Security** is doing its job. Ask your mentor to add a simple policy for your \`notes\` table for learning, or walk through the Supabase docs on policies — it's a one-time setup step many beginners bump into.`,
    },
    {
      title: "What is a Library?",
      content: `## Borrow Superpowers Someone Else Wrote

A **library** (in coding) is **code someone else wrote** that you **import** and use — like grabbing a well-made tool from the workshop instead of forging your own hammer from scratch.

Supabase ships an official **JavaScript client** that knows how to talk to your project: run queries, insert rows, handle errors — all with functions instead of you crafting raw network requests by hand.

**Install it** from your project root (same folder as \`package.json\`):

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

Create a new file \`js/supabase.js\` (or adjust the path to match your project — keep it next to your other scripts if that's how you're organized). Put this inside:

\`\`\`javascript
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)
\`\`\`

Replace \`YOUR_SUPABASE_URL\` and \`YOUR_SUPABASE_ANON_KEY\` with the real values from **Settings → API** (still: no screenshots in public places, and prefer storing secrets in 1Password, not random docs).

**What this does:** \`createClient\` builds a **connection object** (\`supabase\`) your other files can import. Every time you call methods on it, you're sending requests to **your** project's database through Supabase's API.

> **Hearthian Field Note**: If your mentor sets up **env variables** (\`.env\`) for URLs and keys, that's even better for sharing repos safely. The idea stays the same: one small file creates \`supabase\`, everyone else imports it.`,
    },
    {
      title: "Load Notes from the Database",
      content: `## Goodbye Static Paragraphs, Hello Live List

Right now, notes might be **baked into the HTML**. We're going to **replace** those hardcoded blocks with an **empty container** — a \`div\` (or similar) with an \`id\` like \`notes-list\` — and let JavaScript **fill** it after the page talks to Supabase.

**Example** — your planet HTML might include:

\`\`\`html
<section id="notes-section">
  <h2>Field notes</h2>
  <div id="notes-list"></div>
</section>
\`\`\`

Remove the old static note elements; the list will be generated in code.

In your main script (e.g. \`js/main.js\`), **import** the client:

\`\`\`javascript
import { supabase } from './supabase.js'
\`\`\`

Then write a function that loads notes for **one** planet (pass the slug that matches \`planet_slug\` in the database):

\`\`\`javascript
async function loadNotes(planetSlug) {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('planet_slug', planetSlug)
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return
  }

  const container = document.getElementById('notes-list')
  container.innerHTML = ''

  for (const note of data) {
    const el = document.createElement('p')
    el.textContent = note.content
    container.appendChild(el)
  }
}
\`\`\`

**async / await** in kid-friendly terms: some work takes time (the internet round-trip). \`async\` marks a function that can **wait**. \`await\` means "pause **this** function until Supabase answers, then keep going." The rest of your page doesn't have to freeze — you're just structuring the flow clearly.

**Method cheat sheet:**

- \`.from('notes')\` — use the \`notes\` table.
- \`.select('*')\` — give me all columns for matching rows.
- \`.eq('planet_slug', planetSlug)\` — only rows where \`planet_slug\` equals this planet.
- \`.order('created_at', { ascending: false })\` — newest notes first.

When the page loads, call \`loadNotes('timber-hearth')\` (or whatever slug matches **this** planet page). Each planet page passes **its own** slug.

> **Hearthian Field Note**: Using \`textContent\` when you put note text into the DOM helps avoid accidentally treating user input as HTML. Good habit from day one.`,
    },
    {
      title: "Save New Notes",
      content: `## Make the Form Actually Do Something

You already have (or will add) a **form** with a **textarea** and a **submit** button. Right now it might not **submit** anywhere — time to wire it to Supabase.

Add a function that **inserts** one row:

\`\`\`javascript
async function saveNote(planetSlug, content) {
  const { error } = await supabase
    .from('notes')
    .insert({ planet_slug: planetSlug, content: content })

  if (error) {
    alert('Error saving note!')
    return
  }

  loadNotes(planetSlug)
}
\`\`\`

**Hook up the form** with an event listener (adjust IDs to match your HTML):

\`\`\`javascript
const form = document.getElementById('note-form')
const textarea = document.getElementById('note-content')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const text = textarea.value.trim()
  if (!text) return

  await saveNote('timber-hearth', text) // use this page's planet slug
  textarea.value = ''
})
\`\`\`

\`preventDefault()\` stops the browser from doing its old-school "reload the page" submit. You handle everything in JavaScript instead.

After a successful save, **clear the textarea** so the next note feels fresh. \`loadNotes\` at the end of \`saveNote\` refreshes the list so the new note shows up right away.

**Test like a scientist:** add a note, watch it appear, then **refresh the page**. If it's still there, your database is doing its job — the note lived on the server, not just in the browser's short-term memory.

> **Hearthian Field Note**: If \`insert\` fails silently except in the console, open DevTools → Console and read the error message — it often points straight at a typo in the table name or a security policy waiting to be configured.`,
    },
    {
      title: "Update Vite Config and Push",
      content: `## Modules, One Last Wiring Check, Then Ship It

You're using \`import\` and \`export\` now — that means the browser should treat your script as a **module**. In \`index.html\`, point your main script at something like \`js/main.js\` **with** \`type="module"\`:

\`\`\`html
<script type="module" src="js/main.js"></script>
\`\`\`

**Why:** plain scripts can't use \`import\` from other files. \`type="module"\` tells the browser "this file is allowed to pull in \`supabase.js\` and packages like \`@supabase/supabase-js\`."

**Vite** (from your Workflow lesson) already knows how to bundle and serve modules during \`npm run dev\`. Keep running the dev server while you test: fix any import paths (**\`./supabase.js\`** must match the real file location and name).

**Sanity checklist:**

- Load a planet page → notes from Supabase appear (or the list is empty but not broken).
- Submit a new note → it shows up and survives a full page refresh.
- No red errors in the terminal or browser console.

When it all works, do your Git ritual:

\`\`\`bash
git add .
git status
git commit -m "Add Supabase: load and save planet notes"
git push -u origin phase-6/database
\`\`\`

Open a **Pull Request** into \`main\`, review with your mentor if that's your flow, then **merge**.

Your notes aren't trapped in old HTML anymore — they're **stored in the database**, ready for the next loop, the next planet, and the next idea you bolt on. That's persistence. That's progress.

> **Hearthian Field Note**: Passwords and keys stay in **1Password shared vault** — not committed to the repo, not pasted into Discord. Future-you (and your crew) will thank you.`,
    },
  ],
};

export default lessonData;
