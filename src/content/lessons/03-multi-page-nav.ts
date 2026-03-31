import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "03-multi-page-nav",
  title: "Multi-Page & Navigation",
  description:
    "Create pages for each planet and build a nav bar to link them together.",
  order: 3,
  planet: "Brittle Hollow",
  planetEmoji: "🕳️",
  hawkBranch: "phase-3/multi-page-nav",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Time to Branch Out (Literally)

You know the drill by now! Before we start building, we create a new **branch** so all our work is safely separated from the main version of the site.

Open your terminal and run these commands:

\`\`\`bash
cd ~/development/YOUR-REPO
git checkout main && git pull
git checkout -b phase-3/multi-page-nav
\`\`\`

That first line moves you into your project folder. The second line makes sure you're on \`main\` and have the latest code. The third line creates a brand-new branch called \`phase-3/multi-page-nav\` and switches to it.

Think of branches like parallel universes — you can experiment freely without messing up the "real" version. When you're happy with your changes, you merge them back in.

> **Hearthian Field Note**: If you see an error like "Your local changes would be overwritten," that means you have unsaved work on another branch. Ask for help or commit those changes first before switching!`,
    },
    {
      title: "Planning Your Pages",
      content: `## One Page Is Cool, But What About a Whole Website?

Right now your Outer Wilds exploration journal is a single page — \`index.html\`. That's like having one page in your entire ship log. Not great for organizing discoveries across an entire solar system!

A **multi-page website** is exactly what it sounds like: multiple HTML files, each one its own page. When you click a link, the browser loads a different file. Every page you've ever visited on the internet works this way (or something similar).

Here's the plan. We're going to create pages for:

| File | What It Is |
|---|---|
| \`index.html\` | Home page (you already have this!) |
| \`timer.html\` | Countdown timer (just a heading for now) |
| \`planets/timber-hearth.html\` | Timber Hearth journal page |
| \`planets/ash-twin.html\` | Ash Twin journal page |
| \`planets/ember-twin.html\` | Ember Twin journal page |
| \`planets/brittle-hollow.html\` | Brittle Hollow journal page |
| \`planets/giants-deep.html\` | Giant's Deep journal page |
| \`planets/dark-bramble.html\` | Dark Bramble journal page |
| \`planets/quantum-moon.html\` | Quantum Moon journal page |
| \`planets/the-interloper.html\` | The Interloper journal page |
| \`planets/sun-station.html\` | Sun Station journal page |

Notice that the planet pages go inside a \`planets/\` folder. This keeps things organized — just like how you'd put photos in a "photos" folder on your computer.

Let's create that folder now:

\`\`\`bash
mkdir planets
\`\`\`

That's it! \`mkdir\` stands for "make directory" (directory = folder). Now we have a place to put all our planet pages.

> **Hearthian Field Note**: Organizing files into folders isn't just for neatness — it also affects how your URLs work. A file at \`planets/timber-hearth.html\` would show up at \`yoursite.com/planets/timber-hearth.html\` in a browser. Pretty clean, right?`,
    },
    {
      title: "Build a Planet Page Template",
      content: `## Your First Planet Page

Instead of building every planet page from scratch, we'll create one really good **template** and then copy it for the rest. Smart, right? Work smarter, not harder.

Let's start with Timber Hearth since it's home. Create a new file called \`planets/timber-hearth.html\` and add this code:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timber Hearth — Exploration Journal</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>

  <h1>🌲 Timber Hearth</h1>

  <p>
    The home planet of the Hearthians. A small, forested world dotted with
    geysers and a cozy village nestled at the base of a crater. The perfect
    place to start any space adventure.
  </p>

  <h2>My Notes</h2>

  <ul class="notes-list">
    <li class="note-card">Found the village at the base of the geyser</li>
    <li class="note-card">The observatory has a cool telescope</li>
  </ul>

  <h3>Add a Note</h3>

  <form class="note-form">
    <textarea
      class="note-input"
      placeholder="Write something you discovered..."
      rows="3"
    ></textarea>
    <button type="submit" class="note-submit">Save Note</button>
  </form>
  <!-- TODO: Make this actually save notes in Lesson 6 -->

</body>
</html>
\`\`\`

Let's break down what's new here:

- **\`<link rel="stylesheet" href="../style.css">\`** — Notice the \`../\` at the start of the path! Since this file lives inside the \`planets/\` folder, we need to go "up one level" to find \`style.css\`. The \`../\` means "go to the parent folder."
- **\`<ul>\` and \`<li>\`** — An unordered list (\`<ul>\`) with list items (\`<li>\`). Each note is a list item. We gave them a class of \`note-card\` so we can style them later.
- **\`<form>\`** — A form element that wraps our input area and button. Forms are how users send information on websites.
- **\`<textarea>\`** — Like an \`<input>\`, but for longer text. The \`rows="3"\` attribute makes it 3 lines tall. The \`placeholder\` text shows up as a hint when the box is empty.
- **\`<button type="submit">\`** — A button that (eventually) will submit the form. Right now it doesn't do anything — we'll wire it up with JavaScript in a later lesson!

Try opening this file in your browser to see how it looks. It won't be pretty yet (no CSS styling), but all the pieces are there.

> **Hearthian Field Note**: The hardcoded notes ("Found the village..." and "The observatory...") are just examples for now. Eventually we'll load real notes from a database. For now they give us something to style!`,
    },
    {
      title: "Create All Planet Pages",
      content: `## Copy, Paste, Customize

Now for the slightly tedious part — we need to create a page for each planet. The good news: you already have the template! Just copy \`timber-hearth.html\` and change three things on each copy:

1. The \`<title>\` tag
2. The \`<h1>\` heading (with emoji)
3. The description paragraph

Here's what each planet page should look like. Create each file inside the \`planets/\` folder:

### \`planets/ash-twin.html\`

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ash Twin — Exploration Journal</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>

  <h1>🏜️ Ash Twin</h1>

  <p>
    A sandy, barren world covered in ancient ruins and strange towers. Its
    surface is slowly buried by sand flowing from its twin. A place full of
    mysteries waiting to be uncovered.
  </p>

  <h2>My Notes</h2>

  <ul class="notes-list">
  </ul>

  <h3>Add a Note</h3>

  <form class="note-form">
    <textarea
      class="note-input"
      placeholder="Write something you discovered..."
      rows="3"
    ></textarea>
    <button type="submit" class="note-submit">Save Note</button>
  </form>
  <!-- TODO: Make this actually save notes in Lesson 6 -->

</body>
</html>
\`\`\`

For the rest, use the same structure but swap in the right heading and description. Here are the details for each:

### \`planets/ember-twin.html\`
- Heading: \`🌋 Ember Twin\`
- Description: *A rocky desert world full of cave systems and winding tunnels. The twin of Ash Twin, connected by a mesmerizing stream of sand that flows between them through space.*

### \`planets/brittle-hollow.html\`
- Heading: \`🕳️ Brittle Hollow\`
- Description: *A fragile planet whose surface is constantly crumbling and falling inward toward a black hole at its center. Gravity works in strange ways here — and the ground beneath your feet can't always be trusted.*

### \`planets/giants-deep.html\`
- Heading: \`🌊 Giant's Deep\`
- Description: *A massive ocean planet battered by enormous cyclones and violent storms. Beneath the churning waves, who knows what might be hiding in the deep?*

### \`planets/dark-bramble.html\`
- Heading: \`🌿 Dark Bramble\`
- Description: *A thorny, fog-filled world that seems much larger on the inside than the outside. Strange lights flicker in the mist. Definitely the creepiest place in the solar system.*

### \`planets/quantum-moon.html\`
- Heading: \`🌙 Quantum Moon\`
- Description: *A mysterious moon that seems to move between planets when you're not looking at it. One moment it's orbiting one world, and the next it's somewhere else entirely. Very weird, very cool.*

### \`planets/the-interloper.html\`
- Heading: \`☄️ The Interloper\`
- Description: *An icy wandering comet that drifts through the solar system on its own path. Its frozen surface hides something beneath the ice.*

### \`planets/sun-station.html\`
- Heading: \`☀️ Sun Station\`
- Description: *An abandoned space station in a dangerously close orbit around the sun. Getting there is a challenge in itself — and it's scorching hot.*

Now let's also create the timer page. This one lives in the root folder (not inside \`planets/\`).

### \`timer.html\`

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Countdown Timer — Exploration Journal</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>⏱️ Countdown Timer</h1>

  <p>The clock is ticking...</p>

  <!-- TODO: Build the countdown timer in Lesson 5 -->

</body>
</html>
\`\`\`

Notice that \`timer.html\` uses \`href="style.css"\` (no \`../\`) because it's in the same folder as your stylesheet.

> **Hearthian Field Note**: Yes, this is a LOT of copying and pasting. In the real world, developers use tools (like templates or frameworks) to avoid repeating themselves. But doing it by hand right now helps you understand exactly how file structure and paths work. You're building the foundation!`,
    },
    {
      title: "Build the Navigation Bar",
      content: `## Connecting Your Pages Together

You've got a bunch of pages now, but no way to get between them! That's like having rooms in a spaceship with no doors. Let's fix that by building a **navigation bar** (or **nav bar** for short).

A nav bar is just a row of links that appears on every page. You see them on basically every website — usually at the top.

In HTML, we use the \`<nav>\` element to wrap navigation links. Here's the nav bar for your home page (\`index.html\`):

\`\`\`html
<nav class="site-nav">
  <a href="index.html">Home</a>
  <a href="timer.html">Timer</a>
  <a href="planets/timber-hearth.html">Timber Hearth</a>
  <a href="planets/ash-twin.html">Ash Twin</a>
  <a href="planets/ember-twin.html">Ember Twin</a>
  <a href="planets/brittle-hollow.html">Brittle Hollow</a>
  <a href="planets/giants-deep.html">Giant's Deep</a>
  <a href="planets/dark-bramble.html">Dark Bramble</a>
  <a href="planets/quantum-moon.html">Quantum Moon</a>
  <a href="planets/the-interloper.html">The Interloper</a>
  <a href="planets/sun-station.html">Sun Station</a>
</nav>
\`\`\`

Add this to \`index.html\`, right after the opening \`<body>\` tag and **before** any other content. The nav bar should be the first thing on the page.

### Understanding Relative Paths

Here's something really important: the paths in your links depend on **where the current file is**.

From \`index.html\` (which is in the root folder):
- \`timer.html\` — same folder, no prefix needed
- \`planets/timber-hearth.html\` — go into the \`planets\` folder

This is called a **relative path** — it's relative to where *you* currently are, like giving directions from your current location instead of using a full address.

From a planet page like \`planets/timber-hearth.html\`:
- \`../index.html\` — go UP one folder (back to root), then find \`index.html\`
- \`../timer.html\` — go UP one folder, then find \`timer.html\`
- \`timber-hearth.html\` — same folder, no prefix needed
- \`ash-twin.html\` — same folder, no prefix needed

The \`../\` means "go up one directory." It's like saying "go back one room" before giving the next direction.

> **Hearthian Field Note**: Relative paths trip up even experienced developers sometimes. If a link isn't working, the first thing to check is: "Am I pointing to the right place *from where this file lives*?" Draw out the folder structure on paper if it helps!`,
    },
    {
      title: "Add Nav to Every Page",
      content: `## Nav Bar Everywhere

A nav bar only on the home page isn't super useful — you need it on **every** page so visitors can always get around.

For \`timer.html\` (which is in the root folder, same as \`index.html\`), the nav is the same:

\`\`\`html
<nav class="site-nav">
  <a href="index.html">Home</a>
  <a href="timer.html">Timer</a>
  <a href="planets/timber-hearth.html">Timber Hearth</a>
  <a href="planets/ash-twin.html">Ash Twin</a>
  <a href="planets/ember-twin.html">Ember Twin</a>
  <a href="planets/brittle-hollow.html">Brittle Hollow</a>
  <a href="planets/giants-deep.html">Giant's Deep</a>
  <a href="planets/dark-bramble.html">Dark Bramble</a>
  <a href="planets/quantum-moon.html">Quantum Moon</a>
  <a href="planets/the-interloper.html">The Interloper</a>
  <a href="planets/sun-station.html">Sun Station</a>
</nav>
\`\`\`

For **every page inside the \`planets/\` folder**, the paths need to change because you're one folder deeper. Here's the version for planet pages:

\`\`\`html
<nav class="site-nav">
  <a href="../index.html">Home</a>
  <a href="../timer.html">Timer</a>
  <a href="timber-hearth.html">Timber Hearth</a>
  <a href="ash-twin.html">Ash Twin</a>
  <a href="ember-twin.html">Ember Twin</a>
  <a href="brittle-hollow.html">Brittle Hollow</a>
  <a href="giants-deep.html">Giant's Deep</a>
  <a href="dark-bramble.html">Dark Bramble</a>
  <a href="quantum-moon.html">Quantum Moon</a>
  <a href="the-interloper.html">The Interloper</a>
  <a href="sun-station.html">Sun Station</a>
</nav>
\`\`\`

See the differences? From inside \`planets/\`:
- Home and Timer need \`../\` to go up one folder
- Other planet pages are in the **same** folder, so they're just the filename

Add the right version of the nav to the top of every page's \`<body>\`, right before the \`<h1>\`.

Yes, this means copying and pasting the nav into **11 files**. Is it tedious? A little bit. Is it worth it? Absolutely — you'll understand exactly how multi-page navigation works.

> **Hearthian Field Note**: Having to copy the same HTML into every single file is kind of annoying, right? In later lessons and real-world development, you'll learn about tools like **components** and **templates** that let you write the nav once and automatically include it everywhere. But for now, copying it by hand teaches you what those tools are actually doing behind the scenes!`,
    },
    {
      title: "Style the Navigation with CSS",
      content: `## Making It Look Like a Real Nav Bar

Right now your nav is just a bunch of blue underlined links. Let's turn it into something that actually looks like a proper navigation bar.

Open your \`style.css\` file and add these styles:

### Nav Bar Layout

\`\`\`css
.site-nav {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 12px 16px;
  background-color: #1a1a2e;
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid #e2a04a;
}
\`\`\`

Let's unpack what's happening:

- **\`display: flex\`** — This is **Flexbox**, a CSS layout tool that arranges items in a row (by default). Instead of links stacking vertically, they sit side by side.
- **\`gap: 8px\`** — Adds 8 pixels of space between each link.
- **\`flex-wrap: wrap\`** — If there are too many links to fit on one line, they'll wrap to the next line instead of overflowing off the screen.
- **\`position: sticky; top: 0;\`** — This is the magic one! It makes the nav bar **stick** to the top of the screen when you scroll down. Try it out — scroll down on a page and the nav stays put.
- **\`z-index: 100\`** — Makes sure the nav bar appears on top of other content when it's sticky.
- **\`border-bottom\`** — A nice orange line under the nav to separate it from the page content.

### Nav Link Styling

\`\`\`css
.site-nav a {
  color: #e2a04a;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background-color 0.2s;
}

.site-nav a:hover {
  background-color: #e2a04a33;
}
\`\`\`

- **\`text-decoration: none\`** — Removes the default underline from links.
- **\`padding: 6px 12px\`** — Adds space inside each link so they feel like buttons (6px top/bottom, 12px left/right).
- **\`border-radius: 6px\`** — Rounds the corners slightly.
- **\`transition: background-color 0.2s\`** — Makes the hover effect animate smoothly instead of snapping instantly.
- **\`.site-nav a:hover\`** — The \`:hover\` part means "when someone moves their mouse over this." The background color (\`#e2a04a33\`) is orange with transparency (the \`33\` at the end means about 20% opacity).

### Notes Section Styling

\`\`\`css
.notes-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.note-card {
  background-color: #16213e;
  border: 1px solid #e2a04a44;
  border-radius: 8px;
  padding: 12px 16px;
  color: #cccccc;
}
\`\`\`

- **\`list-style: none\`** — Removes the default bullet points from the list.
- **\`flex-direction: column\`** — Stacks the notes vertically (Flexbox defaults to a row, so we override it).

### Note Form Styling

\`\`\`css
.note-form {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 500px;
}

.note-input {
  background-color: #16213e;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 10px;
  color: #ffffff;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
}

.note-input:focus {
  outline: none;
  border-color: #e2a04a;
}

.note-submit {
  background-color: #e2a04a;
  color: #1a1a2e;
  border: none;
  border-radius: 6px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s;
}

.note-submit:hover {
  background-color: #f0b45e;
}
\`\`\`

- **\`resize: vertical\`** — Lets the user drag to make the textarea taller, but not wider.
- **\`.note-input:focus\`** — The \`:focus\` pseudo-class applies when the user clicks into the textarea. We change the border to orange so it's clear which field is active.
- **\`cursor: pointer\`** — Changes the mouse cursor to a pointing hand when hovering over the button, so it feels clickable.
- **\`align-self: flex-start\`** — Keeps the button from stretching to fill the full width. It'll only be as wide as its text.

Save your CSS and refresh a planet page — it should look WAY better now!

> **Hearthian Field Note**: Flexbox is one of the most useful CSS tools you'll ever learn. It handles layout problems that used to take hacky workarounds. If you want to experiment, try changing \`gap\`, \`flex-direction\`, and \`flex-wrap\` to see what they do. You can't break anything!`,
    },
    {
      title: "Push and Merge",
      content: `## Ship It!

Nice work! You've gone from a single page to a full multi-page website with navigation. Let's take a look at what your project structure should look like now:

\`\`\`
your-project/
├── index.html
├── timer.html
├── style.css
└── planets/
    ├── timber-hearth.html
    ├── ash-twin.html
    ├── ember-twin.html
    ├── brittle-hollow.html
    ├── giants-deep.html
    ├── dark-bramble.html
    ├── quantum-moon.html
    ├── the-interloper.html
    └── sun-station.html
\`\`\`

That's **12 HTML files** and a stylesheet. Your exploration journal is starting to feel like a real website!

Let's save everything and push it up:

\`\`\`bash
git add .
git commit -m "Add planet pages, navigation, and notes layout"
git push origin phase-3/multi-page-nav
\`\`\`

Now go to GitHub and merge your pull request:

1. Open your repository on GitHub
2. You should see a banner saying your branch had recent pushes — click **"Compare & pull request"**
3. Give it a title like "Add planet pages and navigation"
4. Click **"Create pull request"**
5. Once it's ready, click **"Merge pull request"** and then **"Confirm merge"**

After merging, your main branch will have all your new planet pages and the nav bar.

### What You Built Today

Let's recap everything you accomplished:

- **Created a folder structure** with a \`planets/\` directory to organize your files
- **Built 9 planet pages** with descriptions and a notes section
- **Created a timer page** placeholder for a future lesson
- **Built a navigation bar** with links to every page
- **Learned about relative paths** — how \`../\` goes up a folder
- **Styled everything with CSS** — Flexbox layout, hover effects, sticky positioning, and form styling

Your site has gone from a single lonely page to an interconnected solar system of pages. Just like Brittle Hollow — everything is connected, even if the ground is a little shaky!

> **Hearthian Field Note**: Open up your site and click through every link in the nav bar. Make sure they all work! If a link is broken, double-check the \`href\` path. Most of the time it's a typo or a missing \`../\` for pages inside the \`planets/\` folder.`,
    },
  ],
};

export default lessonData;
