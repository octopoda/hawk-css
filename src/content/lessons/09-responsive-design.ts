import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "09-responsive-design",
  title: "Responsive Design",
  description:
    "Make your site look great on phones, tablets, and desktops.",
  order: 9,
  planet: "Ash Twin",
  planetEmoji: "🏜️",
  hawkBranch: "phase-9/responsive-design",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Time to Branch Out (Literally)

Before we tweak layout and CSS, create a new **branch** so your experiments stay separate from \`main\`.

Open your terminal and run:

\`\`\`bash
cd ~/development/YOUR-REPO
git checkout main && git pull
git checkout -b phase-9/responsive-design
\`\`\`

Line 1: jump into your project folder (use your real path if it's different).  
Line 2: land on \`main\` and grab the latest code from GitHub.  
Line 3: create and switch to \`phase-9/responsive-design\`.

Branches are like a sandbox: you can break things, undo, and merge only when you're proud of the result.

> **Hearthian Field Note**: If Git complains about uncommitted changes, either commit them on your current branch or stash them before switching — ask a grown-up or your teacher if you're not sure which to do.`,
    },
    {
      title: "What is Responsive Design?",
      content: `## One Site, Many Screens

**Responsive design** means your journal looks intentional on a tiny phone, a tablet, and a big desktop — not like someone squished a desktop site with a steamroller.

Rough widths people use:

| Kind of device | Typical width (approx.) |
|----------------|-------------------------|
| Phone | ~375px wide |
| Tablet | ~768px wide |
| Desktop | 1200px and up |

You don't have to memorize numbers. What matters is: **narrow** vs **medium** vs **wide**.

### Peek at your site like a phone

Chrome can pretend to be different devices:

1. Open your site (local Vite URL or your deployed link).
2. Open **Developer Tools** (right-click → Inspect, or the menu).
3. Toggle the **device toolbar**: **Cmd+Shift+M** on Mac (Ctrl+Shift+M on Windows/Linux).

Pick a phone model from the dropdown or type a width like \`375\`. Drag the edge to resize. Watch what breaks: tiny text, nav spilling off the side, images or forms wider than the screen — all totally normal before you add responsive CSS.

> **Hearthian Field Note**: DevTools is a simulator — great for quick checks. Always do a real test on your actual phone later (we'll cover that).`,
    },
    {
      title: "The Viewport Meta Tag",
      content: `## Tell the Phone "Use My Real Width"

Phones can do something sneaky: they pretend the page is ~980px wide, then shrink it down so everything looks tiny. That's the opposite of what we want.

The fix is a single line in the \`<head>\` of **every** HTML page:

\`\`\`html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
\`\`\`

- \`width=device-width\` — "match the actual screen width."
- \`initial-scale=1.0\` — "don't zoom weirdly on load."

You probably added this back in Lesson 1. **Double-check** \`index.html\`, your planet pages, and any other HTML files so they all have it.

**Without** this tag: mobile browsers may show a mini desktop layout.  
**With** it: your CSS can respond to the real narrow width — which is what responsive design needs.

> **Hearthian Field Note**: If one page looks "wrong" on mobile while others look fine, search that file for \`viewport\` — a missing tag is a common culprit.`,
    },
    {
      title: "Media Queries",
      content: `## CSS That Only Fires at Certain Widths

A **media query** is a gate: "only apply these rules when the screen matches."

### Max-width (great for tweaks)

Styles inside this block apply when the viewport is **768px wide or smaller**:

\`\`\`css
@media (max-width: 768px) {
  /* rules here only run on small screens */
}
\`\`\`

### Nav bar: stack on small screens

Say your nav uses flexbox in a row. On a phone, that's cramped. Inside a max-width query, flip it to a column:

\`\`\`css
.site-nav {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .site-nav {
    flex-direction: column;
    align-items: flex-start;
  }
}
\`\`\`

Now links stack vertically on narrow screens but stay in a row on wider ones.

> **Hearthian Field Note**: Pick **one** breakpoint to start (768px is a popular default). Add more later if you want finer control — don't boil the ocean on day one.`,
    },
    {
      title: "Mobile-First Approach",
      content: `## Small Screen First, Then Level Up

**Mobile-first** means: write your base CSS for the phone (simple, full-width, readable). Then use \`min-width\` media queries to **add** layout for bigger screens.

- \`@media (min-width: 768px) { ... }\` — tablet and up  
- \`@media (min-width: 1200px) { ... }\` — desktop and up  

### Planet page: notes area

On mobile, let the main content breathe edge-to-edge (with a little padding). On desktop, cap the width and center it:

\`\`\`css
.notes-section {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

@media (min-width: 1200px) {
  .notes-section {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}
\`\`\`

### Form textarea: full width on mobile

Inputs should never feel narrower than the screen for no reason:

\`\`\`css
.note-input,
textarea {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
\`\`\`

\`box-sizing: border-box\` keeps padding from making the element wider than 100% (a classic gotcha).

> **Hearthian Field Note**: Mobile-first keeps your default CSS simple. Bigger screens get the fancy stuff; small screens stay fast and readable.`,
    },
    {
      title: "Responsive Navigation",
      content: `## When the Nav Bar Is Wider Than the Universe

On desktop, a horizontal row of links is cozy. On mobile, it overflows or squishes. Common patterns: **hamburger menu**, collapsible panel, or fewer links. We'll build a **simple hamburger**: a ☰ button on small screens, links hidden until you tap.

### HTML sketch

Put a button next to your nav. Use classes that match your project (rename if yours differ):

\`\`\`html
<button type="button" class="nav-toggle" aria-label="Open menu">
  ☰
</button>
<nav class="site-nav" id="main-nav">
  <a href="index.html">Home</a>
  <a href="planets/timber-hearth.html">Timber Hearth</a>
  <!-- your other links -->
</nav>
\`\`\`

\`aria-label\` helps screen readers understand the button.

### CSS: hide the button on big screens; hide links on small until open

\`\`\`css
.nav-toggle {
  display: none;
}

@media (max-width: 768px) {
  .nav-toggle {
    display: inline-block;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .site-nav {
    display: none;
    flex-direction: column;
    gap: 0.5rem;
  }

  .site-nav.nav-open {
    display: flex;
  }
}
\`\`\`

On desktop, the nav stays visible (adjust your existing rules so \`.site-nav\` is \`display: flex\` above 768px). On mobile, links are \`display: none\` until \`.nav-open\` is added.

### JavaScript: toggle the class

\`\`\`javascript
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
  });
}
\`\`\`

Run this after the DOM exists (e.g. at the end of \`<body>\` or inside \`DOMContentLoaded\`). If your nav markup lives on many pages, put the script in a shared \`main.js\` you already load everywhere.

> **Hearthian Field Note**: This is the minimal version — no fancy animation yet. Once it works, you can polish with transitions or an "X" icon when open.`,
    },
    {
      title: "Test and Push",
      content: `## Measure Twice, Push Once

### DevTools widths

With the device toolbar on, sanity-check at roughly:

- **375px** — common phone  
- **768px** — tablet-ish  
- **1200px** — desktop  

Scroll each page. Click your hamburger. Make sure forms and nav don't overflow.

### Real iPhone test

On your Mac, run the dev server so it's reachable on your Wi‑Fi (Vite shows a **Network** URL). On your iPhone, open Safari and go to that address (something like \`http://192.168.x.x:5173\`). Same Wi‑Fi is required.

### Deploy timing

While you're on the branch, changes are **local** (and on GitHub only after you push the branch). The **live** site most people see usually updates when you merge to \`main\` and Vercel deploys — so don't stress: you're not accidentally shipping half-finished CSS until you merge.

### Git: save, push, merge

When you're happy:

\`\`\`bash
git add .
git status
git commit -m "Add responsive layout and mobile nav"
git push -u origin phase-9/responsive-design
\`\`\`

Open a **Pull Request** on GitHub, review the diff, merge to \`main\`. After merge, **Vercel** can auto-deploy — and your journal will look sharp on phones, tablets, and desktops.

> **Hearthian Field Note**: If something looks wrong only on a real phone, check the viewport tag, \`width: 100%\` on inputs, and any fixed pixel widths that are too large — those three fix a surprising number of "but it worked in DevTools!" moments.`,
    },
  ],
};

export default lessonData;
