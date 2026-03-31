import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "07-crud",
  title: "CRUD & Live Updates",
  description:
    "Add edit, delete, and real-time page updates without refreshing.",
  order: 7,
  planet: "Quantum Moon",
  planetEmoji: "🌙",
  hawkBranch: "phase-7/crud",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Branch Before You Build

You're about to add edit, delete, and snappy updates to your exploration journal. Same deal as every lesson: start on a **fresh Git branch** so your experiments stay tidy and \`main\` stays calm.

### Open iTerm and go to your project

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Swap \`YOUR-REPO\` for whatever you named your folder in Lesson 0. Not sure? Run \`ls ~/development\` and look for your journal project.

### Create and switch to this lesson's branch

\`\`\`bash
git checkout -b phase-7/crud
\`\`\`

- **\`git checkout\`** — move to another branch  
- **\`-b\`** — "make a new one"  
- **\`phase-7/crud\`** — the name for this lesson's work  

You should see something like \`Switched to a new branch 'phase-7/crud'\`. You're good to code.

> **Hearthian Field Note**: Run \`git branch\` anytime. The branch with a \`*\` is the one you're on right now.`,
    },
    {
      title: "What is CRUD?",
      content: `## The Four Moves Every App Knows

**CRUD** is a nerdy acronym that actually makes life easier once you know it:

- **C**reate — add new data  
- **R**ead — load and show data  
- **U**pdate — change existing data  
- **D**elete — remove data  

You already nailed half of this in Lesson 6. **Create** was saving a new note to Supabase. **Read** was loading your notes and showing them on each planet page.

This lesson is about the other two: **Update** (edit a note) and **Delete** (trash a note you don't need anymore).

Here's a secret that's not really a secret: tons of apps — social feeds, to-do lists, shop carts, games with inventories — are basically **CRUD with a cool interface** on top. You're learning the same playbook the pros use.

> **Hearthian Field Note**: If you can say "I'm adding Create, Read, Update, Delete" out loud without tripping, you've already won half the vocabulary battle.`,
    },
    {
      title: "Delete a Note",
      content: `## Make Mistakes Disappear (On Purpose)

Sometimes a note is wrong, duplicated, or you just want it gone. Let's add a **Delete** control next to each note — a little **X** or trash icon is perfect.

### The delete function

This talks to Supabase, deletes **one** row that matches the note's \`id\`, then refreshes what you see on the page:

\`\`\`javascript
async function deleteNote(noteId, planetSlug) {
  const { error } = await supabase
    .from('notes')
    .delete()
    .eq('id', noteId)
  if (error) { alert('Error!'); return; }
  loadNotes(planetSlug)
}
\`\`\`

### Wire it up

1. Put a delete button in the HTML you generate for each note (or next to each note in your list).  
2. When someone clicks it, call \`deleteNote\` and pass **that note's id** — plus whatever you use for the current planet (here it's \`planetSlug\`).  
3. After Supabase deletes the row, \`loadNotes(planetSlug)\` runs again and rebuilds the list. The note vanishes **without** refreshing the whole browser tab.

> **Hearthian Field Note**: \`.eq('id', noteId)\` is your safety belt: it tells Supabase "only delete the row with this exact id" — not every note in the universe.`,
    },
    {
      title: "Edit a Note",
      content: `## Notes Change. Your App Should Too.

Add an **Edit** button beside each note. When Hawk clicks it, swap the plain text for a **textarea** already filled with what's there now. Below that, add **Save** and **Cancel**.

### Update in the database

\`\`\`javascript
async function updateNote(noteId, newContent, planetSlug) {
  const { error } = await supabase
    .from('notes')
    .update({ content: newContent })
    .eq('id', noteId)
  if (error) { alert('Error!'); return; }
  loadNotes(planetSlug)
}
\`\`\`

### What each button should do

- **Save** — read the textarea value, call \`updateNote(noteId, newContent, planetSlug)\`, then let \`loadNotes\` redraw the list so you see the updated text in normal view.  
- **Cancel** — don't save to Supabase. Call \`loadNotes(planetSlug)\` anyway so the UI snaps back to how it looked before edit mode (old text, no textarea).

> **Hearthian Field Note**: Reusing \`loadNotes\` after Save *and* Cancel keeps your UI simple: one function rebuilds the truth from the database (or drops the edit UI) so you don't have to micromanage every pixel by hand.`,
    },
    {
      title: "Live DOM Updates (No Refresh Needed)",
      content: `## The Page Is a Living Document

Right now, when \`loadNotes()\` runs, you're probably **asking Supabase for fresh data** and then **building HTML again** for your notes container. That totally counts as updating the page without a full refresh — and it's a legit pattern when you're learning.

### What's the DOM?

**DOM** means **Document Object Model**. Fancy name, simple idea: it's the browser's **live tree** of everything on the page — headings, divs, buttons, your notes list. When you change the DOM (add nodes, remove them, change text), the screen updates.

### The pattern to remember

After **any** CRUD action (create, update, delete), make what’s on screen match reality:

1. Change the database (or know it already changed).  
2. Update the DOM so the user sees it — often by **clearing** the notes container and **rebuilding** it from the latest data.

Example idea: grab your notes wrapper element, set \`innerHTML = ''\` (or remove children), then loop your notes and append new elements — same as you did after fetching in Lesson 6.

That's the heartbeat of a lot of modern web apps: **data changes → DOM reflects it** — without hammering the browser's refresh button.

> **Hearthian Field Note**: Later you might use frameworks that handle some of this for you. Understanding "clear and rebuild" or "change this one element" now makes every future tool way less mysterious.`,
    },
    {
      title: "Recent Notes on the Homepage",
      content: `## A Telescope for Your Latest Ideas

Your planet pages are awesome for deep dives. The **homepage** (\`index.html\`) is the perfect place for a **Recent Notes** section — a quick scan of what you've written lately, no matter which world it was about.

### Fetch the latest five notes (all planets)

\`\`\`javascript
const { data } = await supabase
  .from('notes')
  .select('*')
  .order('created_at', { ascending: false })
  .limit(5)
\`\`\`

- **\`.order('created_at', { ascending: false })\`** — newest first  
- **\`.limit(5)\`** — only five rows  

### A home for the list

In \`index.html\`, add a section with an empty container your script can fill:

\`\`\`html
<section id="recent-notes">
  <h2>Recent Notes</h2>
  <div id="recent-notes-list"></div>
</section>
\`\`\`

### Show them nicely

Loop through \`data\` (watch out for \`null\` if something goes wrong) and render each item into \`#recent-notes-list\` with:

- the **planet** name (or slug) so you know where it came from  
- the **content** snippet  

Put that block wherever it fits your layout — under your hero title, above the nav, wherever feels like *home*.

> **Hearthian Field Note**: If a note is super long, you can show the first line or first 100 characters plus "…" so your homepage stays clean. That's a small touch that makes the page feel pro.`,
    },
    {
      title: "Push and Merge",
      content: `## Land the Ship on \`main\`

Take a breath — you just shipped the big stuff:

- **Full CRUD** on your notes (create and read from before, plus update and delete now)  
- **Live-style updates** by refreshing the list after each action  
- A **Recent Notes** strip on \`index.html\` for a quick look at your latest entries  

### Save it in Git and share

When you're happy with how it behaves:

\`\`\`bash
git add .
git commit -m "Add CRUD, live list updates, and recent notes on homepage"
git push -u origin phase-7/crud
\`\`\`

Then merge into \`main\` the way you've been doing (GitHub pull request or local merge — whatever your workflow is).

You now have a **real note-taking app**: data in the cloud, edits, deletes, and a dashboard-style peek at recent thoughts. That's a huge level-up. Seriously — celebrate that.

> **Hearthian Field Note**: Next time you use any app with lists and edits, you'll recognize the pattern: CRUD in the background, DOM (or something like it) up front. You're not guessing anymore — you're in the club.`,
    },
  ],
};

export default lessonData;
