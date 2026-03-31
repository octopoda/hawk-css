import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "05-interactivity",
  title: "JavaScript & Timer",
  description:
    "Learn JavaScript basics and build the 22-minute countdown timer.",
  order: 5,
  planet: "The Interloper",
  planetEmoji: "☄️",
  hawkBranch: "phase-5/interactivity",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Branch First, Code Second

Before you add JavaScript to your journal, spin up a **Git branch** for this lesson. It's like docking at a new moon — you're parking your work in its own spot so \`main\` stays tidy.

### Open iTerm

Open **iTerm** and go to your project:

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Swap \`YOUR-REPO\` for your real folder name. Not sure? Run \`ls ~/development\` and look for your repo.

### Create and switch to your branch

\`\`\`bash
git checkout -b phase-5/interactivity
\`\`\`

- **\`git checkout\`** — move to another branch  
- **\`-b\`** — "make a new one"  
- **\`phase-5/interactivity\`** — the name for this lesson  

You should see something like:

\`\`\`
Switched to a new branch 'phase-5/interactivity'
\`\`\`

You're set. Everything you do here stays on this branch until you merge at the end.

> **Hearthian Field Note**: Run \`git branch\` anytime. The branch with a \`*\` is the one you're on right now.`,
    },
    {
      title: "What is JavaScript?",
      content: `## The Brain and Muscles of the Web

You've already met two building blocks:

- **HTML** — the **skeleton**. It structures the page: headings, paragraphs, links, images.
- **CSS** — the **skin and clothes**. It makes things look good: colors, fonts, layout.

**JavaScript** is the **brain and muscles**. It makes the page *do* things: react when you click, change text on the fly, run clocks and timers, and way more. Without JavaScript, pages mostly just sit there looking pretty. With it, they feel alive.

For your exploration journal, JavaScript will power buttons, updates, and the countdown timer you're about to build.

### Wire up your first script

1. In your project, create a folder called \`js\` if you don't have one yet.
2. Inside it, create \`js/main.js\`.
3. Open \`index.html\` and add **one line** right before the closing \`</body>\` tag:

\`\`\`html
  <script src="js/main.js"></script>
</body>
\`\`\`

The browser loads your HTML, then runs \`main.js\` — order matters, so keep the \`<script>\` near the bottom so your HTML exists before your code runs.

4. In \`main.js\`, type:

\`\`\`javascript
console.log("JavaScript is working!");
\`\`\`

Save the file. If **Vite** is running, it'll hot-reload — refresh the page if needed.

### Peek at the Console

Developers use the **Console** to see messages and debug.

1. **Right-click** the page → **Inspect** (or **Inspect Element**).
2. Click the **Console** tab.

You should see: \`JavaScript is working!\`

That's your proof the browser found your file and ran your code. Huge win for lesson one of JS.

> **Hearthian Field Note**: If you don't see the message, double-check the \`src\` path (\`js/main.js\` vs where the file really lives) and that you saved both files. Typos in filenames are super common — you're not alone.`,
    },
    {
      title: "Variables and Data Types",
      content: `## Labeled Boxes for Your Data

A **variable** is like a **labeled box** that holds a value. You pick the label; JavaScript remembers what's inside.

### \`let\` vs \`const\`

- **\`const\`** — "this label points to *this* value and I'm not reassigning it." Use it for things that shouldn't change, like a planet name.
- **\`let\`** — "I might put a different value in this box later." Use it for counters, timers, scores — anything that updates.

\`\`\`javascript
const planetName = "Timber Hearth";
let timeRemaining = 1320;
\`\`\`

If you tried \`planetName = "Giant's Deep";\` later, JavaScript would complain — \`const\` is strict. \`timeRemaining\` can go down every second because it's \`let\`.

### Common data types

- **String** — text in quotes: \`"hello"\`, \`'Outer Wilds'\`
- **Number** — math-friendly: \`42\`, \`3.14\`, \`1320\`
- **Boolean** — either \`true\` or \`false\` (great for "is the timer running?")

### Outer Wilds–flavored examples

\`\`\`javascript
const shipName = "Little Scout"; // string — won't change in this snippet
let fuelPercent = 100;           // number — could go down later
let timerRunning = false;        // boolean — flip to true when you start the clock
\`\`\`

For your 22-minute timer, **22 minutes = 1,320 seconds**. That's why you'll see:

\`\`\`javascript
let totalSeconds = 22 * 60; // 1320
\`\`\`

\`*\` means multiply. JavaScript figures out \`22 * 60\` for you.

> **Hearthian Field Note**: There's also \`var\`, an older way to declare variables. New projects stick to \`const\` and \`let\` — clearer rules, fewer surprises.`,
    },
    {
      title: "Functions",
      content: `## Reusable Recipes

A **function** is a **recipe** you write once and run whenever you want. Instead of copying the same steps all over your file, you give them a name and **call** that name.

### Classic function syntax

\`\`\`javascript
function greet(name) {
  console.log("Welcome, " + name + "!");
}

greet("Hawk");
\`\`\`

- **\`function greet(name)\`** — defines a function called \`greet\` with one **parameter**, \`name\`.
- **\`{ ... }\`** — the **body**: what runs when you call it.
- **\`greet("Hawk");\`** — a **call**: runs the recipe with \`name\` set to \`"Hawk"\`.

\`+\` **joins** strings together. That's called **concatenation**.

### Arrow functions (modern style)

Lots of developers use **arrow functions**. They do the same job with a shorter look:

\`\`\`javascript
const greet = (name) => {
  console.log("Welcome, " + name + "!");
};

greet("Hawk");
\`\`\`

You'll see both styles in tutorials — either is fine. Pick one, stay consistent, and you're golden.

### Why functions matter for your timer

You'll write little recipes like "turn seconds into MM:SS text" or "tick the clock down by one." Call them from a button click or from \`setInterval\` — next steps build on exactly that idea.

> **Hearthian Field Note**: Functions can **return** a value with \`return\`. If you don't use \`return\`, the function still runs, but it doesn't hand a result back — perfect for \`console.log\` side effects.`,
    },
    {
      title: "The DOM — Talking to Your HTML",
      content: `## What Is the DOM?

**DOM** stands for **Document Object Model**. Fancy name, simple idea: the browser builds a **tree** of your HTML in memory, and JavaScript can **reach into that tree** — find elements, read them, change them.

### Grab an element

\`document.querySelector()\` finds the **first** element that matches a **CSS selector** (same idea as in your stylesheet):

\`\`\`javascript
const title = document.querySelector("h1");
\`\`\`

### Change the text

\`textContent\` is the plain text inside an element:

\`\`\`javascript
title.textContent = "Hawk's Exploration Journal";
\`\`\`

Save, refresh — your heading updates without touching the HTML file. That's the DOM in action.

### Tweak classes (and your CSS)

Classes hook into your styles. JavaScript can add, remove, or flip them:

\`\`\`javascript
title.classList.add("glow");
title.classList.remove("glow");
title.classList.toggle("dark-mode"); // on if off, off if on
\`\`\`

Your CSS might say \`.glow { text-shadow: ... }\` — adding the class **turns the effect on**.

### Mini practice

1. Make sure your page has an \`<h1>\`.
2. In \`main.js\`, select it and set \`textContent\` to something new.
3. Optional: add a class in CSS, then \`classList.add\` it from JS.

Once that works, you've officially **talked to your HTML from code**.

> **Hearthian Field Note**: \`querySelector\` returns \`null\` if nothing matches — then \`.textContent\` would crash. For small personal projects it's okay to stay simple; later you'll learn guards like \`if (title) { ... }\`.`,
    },
    {
      title: "Event Listeners — Responding to Clicks",
      content: `## When the User Does Something…

Websites feel interactive when they **listen** for events: clicks, keys, scrolls, and more. The workhorse for "when someone clicks this" is **\`addEventListener\`**.

### Pattern

\`\`\`javascript
element.addEventListener("click", function () {
  console.log("Clicked!");
});
\`\`\`

- First argument: the **event name** (here, \`"click"\`).
- Second argument: a **function** that runs **each time** the event fires. That function is often called a **callback**.

You can use an arrow function too:

\`\`\`javascript
element.addEventListener("click", () => {
  document.body.classList.toggle("party-mode");
});
\`\`\`

### Button + class toggle practice

**HTML** — add a button somewhere in \`<body>\`:

\`\`\`html
<button type="button" id="theme-toggle">Toggle vibe</button>
\`\`\`

**CSS** — optional second look for the page:

\`\`\`css
body.party-mode {
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #eee;
}
\`\`\`

**JavaScript**:

\`\`\`javascript
const toggleBtn = document.querySelector("#theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("party-mode");
});
\`\`\`

Click the button — the background swaps. That's **events + DOM + CSS** working together.

> **Hearthian Field Note**: \`#theme-toggle\` means "the element with \`id=\"theme-toggle\"\`." IDs should be unique on the page — one button, one \`id\`.`,
    },
    {
      title: "Build the Countdown Timer",
      content: `## A 22-Minute Display (Just for Fun)

You're building a **countdown** that starts at **22:00** and ticks down to **00:00**. Think of it as a cool utility for your journal — like a ship's clock. Keep the vibe light and avoid tying it to story beats; it's your project timer.

### Update \`timer.html\`

Open (or create) \`timer.html\` with the usual HTML shell. Add:

- A **big area** for the time, e.g. \`<div id="display">22:00</div>\`
- **Start** and **Reset** buttons with clear \`id\`s

Example structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Timer</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body class="timer-page">
  <main class="timer-wrap">
    <h1>Countdown</h1>
    <div id="display" class="timer-display" aria-live="polite">22:00</div>
    <p id="message" class="timer-message"></p>
    <div class="timer-controls">
      <button type="button" id="start-btn">Start</button>
      <button type="button" id="reset-btn">Reset</button>
    </div>
  </main>
  <script src="js/timer.js"></script>
</body>
</html>
\`\`\`

Adjust paths (\`css/style.css\`, \`js/timer.js\`) to match your project.

### JavaScript logic (\`js/timer.js\`)

Core ideas:

- \`let totalSeconds = 22 * 60;\` → **1320** seconds.
- \`setInterval(fn, 1000)\` runs \`fn\` **every 1000 ms** (once per second).
- Each tick: if the timer is running and \`totalSeconds > 0\`, subtract 1, then **format** minutes and seconds as **MM:SS**.
- When \`totalSeconds\` hits **0**, **clear** the interval, show a short end message, and stop ticking.
- **Start** begins the interval (only if not already running — your choice of rules).
- **Reset** clears the interval, sets \`totalSeconds\` back to \`22 * 60\`, clears the message, and shows \`22:00\` again.

Formatting helper (one way to do it):

\`\`\`javascript
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const mm = String(m).padStart(2, "0");
  const ss = String(s).padStart(2, "0");
  return mm + ":" + ss;
}
\`\`\`

Use \`display.textContent = formatTime(totalSeconds);\` after each update.

Store the interval id when you start:

\`\`\`javascript
let tickId = null;

function stopTicking() {
  if (tickId !== null) {
    clearInterval(tickId);
    tickId = null;
  }
}
\`\`\`

End message example (customize your own text):

\`\`\`javascript
message.textContent = "Time's up! Hit Reset whenever you're ready for another 22 minutes.";
\`\`\`

> **Hearthian Field Note**: \`padStart(2, "0")\` pads with zeros so you get \`09\` instead of \`9\` — much nicer for a clock display.

### Style it (\`css/style.css\` or a timer-specific sheet)

Go big and centered — make it feel like a readout:

\`\`\`css
.timer-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #0b0f1a;
  color: #e8eef7;
}

.timer-wrap {
  text-align: center;
}

.timer-display {
  font-size: clamp(3rem, 12vw, 6rem);
  font-weight: 700;
  letter-spacing: 0.05em;
  text-shadow: 0 0 20px rgba(100, 200, 255, 0.45),
    0 0 40px rgba(80, 160, 255, 0.25);
  margin: 1rem 0;
}

.timer-controls button {
  margin: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  cursor: pointer;
}
\`\`\`

Tweak colors to match your journal. When Start, Reset, and the tick all behave, you've built a **real** interactive feature.

> **Hearthian Field Note**: \`aria-live="polite"\` on the display helps screen readers announce time changes — a small accessibility win.`,
    },
    {
      title: "Push and Merge",
      content: `## Ship It Back to \`main\`

You added JavaScript, DOM practice, events, and a timer. That's a **big** milestone — your site doesn't just sit there anymore.

### Stage and commit

From your project folder (still on \`phase-5/interactivity\`):

\`\`\`bash
git status
git add .
git commit -m "Add JavaScript basics and countdown timer"
\`\`\`

Write a commit message that makes sense to *you*; the important part is describing what you did.

### Push your branch

\`\`\`bash
git push -u origin phase-5/interactivity
\`\`\`

First push of this branch? Git might ask you to set \`-u origin ...\` — that's normal.

### Merge into \`main\`

On **GitHub** (or your host), open a **Pull Request** from \`phase-5/interactivity\` into \`main\`, review the diff, then **Merge**. Or, if your workflow is local:

\`\`\`bash
git checkout main
git pull
git merge phase-5/interactivity
git push
\`\`\`

(Use whatever flow your mentor or Lesson 0 set up — the goal is: **main** has your new JS and timer.)

### Celebrate

You just:

- Hooked up a real **\`.js\`** file
- Used **variables**, **functions**, and the **DOM**
- Listened for **clicks**
- Ran code on a **timer** with \`setInterval\`

That's your **first interactive feature**. Take a breath — then open the journal and click your buttons again. You earned it.

> **Hearthian Field Note**: If a merge feels scary, remember: branches exist so you can always compare files and undo. Saving often and pushing your branch means your work has a backup on the server, too.`,
    },
  ],
};

export default lessonData;
