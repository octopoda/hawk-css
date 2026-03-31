import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "04-workflow-setup",
  title: "Workflow Setup",
  description: "Set up a dev server with Vite so your changes appear instantly.",
  order: 4,
  planet: "Giant's Deep",
  planetEmoji: "🌊",
  hawkBranch: "phase-4/workflow-setup",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Same Branch Workflow, New Adventure

Before we wire up fancy tools, we lock in our **branch** so everything we do this lesson stays tidy and separate from \`main\`.

Open your terminal, hop into your journal project folder, and run:

\`\`\`bash
git checkout main && git pull
git checkout -b phase-4/workflow-setup
\`\`\`

The first line switches you to \`main\` and grabs the newest stuff from GitHub. The second line creates a fresh branch called \`phase-4/workflow-setup\` and moves you onto it.

You've done this dance before — it's still the same idea: experiment here, merge when you're proud of it.

> **Hearthian Field Note**: If Git complains about uncommitted changes, finish or stash them first, or ask for a hand — switching branches is way smoother with a clean slate.`,
    },
    {
      title: "What is npm?",
      content: `## Your Project's Tool Shop

**npm** stands for **Node Package Manager**. Think of it like an app store, but for little code tools and libraries that developers share with each other. Instead of downloading games, you're grabbing helpers that make building websites easier.

Every npm-friendly project has a file called **package.json**. It's basically a **shopping list** for your project: it says what the project is called, which tools it uses, and sometimes which commands to run. When someone else clones your repo, they can run one command and npm knows exactly what to install.

Let's create that list file in your **project root** (the top folder where \`index.html\` lives):

\`\`\`bash
npm init -y
\`\`\`

The \`-y\` flag means "yes to the defaults" — npm fills in sensible placeholders so you don't have to answer twenty questions on your first try.

After that, open \`package.json\`. It'll look something like this:

\`\`\`json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
\`\`\`

Here's the quick tour:

- **name** — what npm calls your project (often matches your folder name).
- **version** — a version number; handy when your journal grows over time.
- **scripts** — shortcuts you'll soon use for commands like "start the dev server."
- The empty **description** and **keywords** are fine to leave alone for now.

You didn't "install the internet" — you just gave your project a proper label and a file npm can read. Nice.

> **Hearthian Field Note**: If \`npm\` isn't recognized, Node.js might not be installed yet. Circle back to your Setup lesson or ask for help installing Node — npm rides along with it.`,
    },
    {
      title: "Install Vite",
      content: `## Meet Vite: Your Live Preview Buddy

Right now, when you edit \`index.html\` or your CSS, you probably save the file, then **manually hit refresh** in the browser to see changes. It works! But it's a little like checking the weather by walking outside every thirty seconds.

**Vite** (say it like "veet") is a **dev server**: a small program that watches your project files. When you save, it can **reload the page for you** — sometimes so fast it feels like magic. Later lessons will lean on this workflow a lot.

Install Vite as a **development-only** tool (you need it while building, not necessarily on the public website):

\`\`\`bash
npm install --save-dev vite
\`\`\`

Peek at \`package.json\` again. You'll see a new block called **devDependencies** with \`vite\` and a version number.

**dependencies** vs **devDependencies** — simple version:

- **dependencies** — stuff your site might need when it's actually running for visitors (we'll use these in later lessons).
- **devDependencies** — tools for *you* while coding: bundlers, dev servers, linters. They don't need to ship with your journal for the world to download.

Vite lands in **devDependencies** because it's your workshop tool, not a story you're telling on the page.

> **Hearthian Field Note**: You'll also notice a \`node_modules\` folder appeared. It's huge — that's normal. We're about to tell Git to ignore it so it never floods GitHub.`,
    },
    {
      title: "Configure Vite",
      content: `## Scripts, Server, and localhost

Open \`package.json\` and find the \`"scripts"\` section. Replace the default \`test\` script (or merge carefully) so it includes these three commands:

\`\`\`json
"scripts": {
  "dev": "vite --port 3000",
  "build": "vite build",
  "preview": "vite preview"
}
\`\`\`

What they do:

- **dev** — starts the dev server with live updates (we pin **port 3000** so the address is easy to remember).
- **build** — packages your site for production (handy later when you deploy).
- **preview** — lets you preview a production-style build on your machine.

Make sure your \`index.html\` is at the **project root** — that's where Vite looks by default for a simple static site like your journal.

Start the server:

\`\`\`bash
npm run dev
\`\`\`

Your terminal will show something like **Local:** \`http://localhost:3000\`. Open that in your browser.

**localhost** means "this computer, talking to itself." Your machine is pretending to be a tiny web server just for you — nobody on the wider internet sees it unless you deliberately share (we'll get to that in the next step).

Now the fun part: with the dev server running, change something small in \`index.html\` — add a word to a heading, tweak a paragraph — and **save**. Watch the browser. Often the page refreshes on its own. That's Vite doing the boring work so you can stay in the flow.

> **Hearthian Field Note**: If the port is busy, Vite might pick another number. Read the terminal output — it always prints the real address to use.`,
    },
    {
      title: "View on Your Phone",
      content: `## Same Site, Pocket-Sized

Coding on a laptop is great, but your journal should feel good on a **phone** too. Vite helps you check that without emailing yourself links.

When \`npm run dev\` is running, look at the terminal. Besides \`localhost\`, Vite usually prints a **Network** address — something like:

\`\`\`text
http://192.168.1.42:3000
\`\`\`

(Your numbers will be different — that's OK.)

**Both your computer and your iPhone need to be on the same Wi‑Fi network.** Same home internet, same team.

On your iPhone, open **Safari**, type that Network URL carefully (including the \`:3000\` at the end), and go. You should see your exploration journal, live — edit on the computer, save, and refresh or let Vite update; you're seeing the real thing.

If it doesn't load, double-check: server still running? Correct IP? Same Wi‑Fi? Firewalls can sometimes block this — if you're stuck, that's a great "ask a grown-up or mentor" moment.

> **Hearthian Field Note**: Treat the Network URL like a backstage pass — it only works while your dev server is running and usually only on your home network. That's a feature, not a bug, while you're still building.`,
    },
    {
      title: "The .gitignore and Push",
      content: `## Keep GitHub Light and Tidy

Remember **node_modules**? After installing Vite, that folder holds **thousands** of tiny files — every dependency and its dependencies. They can be re-created anytime with \`npm install\` because \`package.json\` (and \`package-lock.json\` if you have one) lists what's needed.

We **do not** want to upload all of that to GitHub. It would slow everything down and cause weird merge headaches.

Create a new file in your **project root** named \`.gitignore\` (yes, it starts with a dot). Put exactly this inside:

\`\`\`text
node_modules/
dist/
.DS_Store
\`\`\`

Line by line:

- **node_modules/** — ignore the entire dependency folder; teammates run \`npm install\` to get their own copy.
- **dist/** — Vite's production output folder when you run \`npm run build\`; it's generated, not hand-edited, so we don't need it in Git.
- **.DS_Store** — a small macOS metadata file; harmless but cluttery in repos.

Save the file, then do your usual Git dance:

\`\`\`bash
git add .
git status
git commit -m "Add Vite dev server and gitignore"
git push -u origin phase-4/workflow-setup
\`\`\`

Check \`git status\` before committing — you should **not** see \`node_modules\` listed as a staged file. If you do, something's wrong with \`.gitignore\`; fix it before pushing.

On GitHub, open a **Pull Request** from \`phase-4/workflow-setup\` into \`main\`, review with your mentor if that's your routine, then **merge** when you're happy.

You now have a modern dev workflow: branch, install tools, live reload, phone preview, and a repo that stays clean. That's a serious explorer setup.

> **Hearthian Field Note**: If \`node_modules\` was accidentally committed earlier, don't panic — mentors can help you remove it from Git history. Prevention with \`.gitignore\` is easier, so you're ahead of the curve now.`,
    },
  ],
};

export default lessonData;
