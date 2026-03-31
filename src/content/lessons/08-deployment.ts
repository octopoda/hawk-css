import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "08-deployment",
  title: "Deployment",
  description: "Deploy your site to Vercel so anyone can visit it.",
  order: 8,
  planet: "Sun Station",
  planetEmoji: "☀️",
  hawkBranch: "phase-8/deployment",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Branch Before You Ship

You're about to put your exploration journal on the real internet. Before that, do the **same branch dance** you've used in every lesson: work on a fresh branch so \`main\` stays stable and your deploy experiments don't get tangled up with half-finished ideas.

### Open your terminal and go to your project

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Swap \`YOUR-REPO\` for whatever folder holds your Vite journal (the one with \`index.html\`, \`package.json\`, and your \`js/\` folder). Not sure of the name? Run \`ls ~/development\` and spot your project.

### Sync \`main\`, then create this lesson's branch

\`\`\`bash
git checkout main && git pull
git checkout -b phase-8/deployment
\`\`\`

- First line: jump to \`main\` and grab the latest from GitHub.  
- Second line: create **\`phase-8/deployment\`** and switch to it.

You should see something like \`Switched to a new branch 'phase-8/deployment'\`. That's your green light — you're ready for launch prep.

> **Hearthian Field Note**: Run \`git branch\` anytime. The line with the \`*\` is the branch you're on right now. If Git yells about uncommitted changes, save your work, commit, or ask for a hand before switching.`,
    },
    {
      title: "What is Deployment?",
      content: `## From Your Desk to the Whole World

Right now, when you run your Vite dev server and open the site in the browser, it probably says something like **localhost** in the address bar. That means: "this site only really exists **on your computer**." Friends, family, and your future self on a different machine **can't** open that link and see your journal. It's a private preview — awesome for building, not so awesome for sharing.

**Deployment** means: you take the project you've been building and put it on a **computer that's always on**, connected to the internet, so **anyone with the link** can visit your site. No USB stick, no "come look at my laptop" required.

### What's a server, in plain English?

A **server** is just a computer (often a powerful one in a data center) whose job is to **stay online** and **hand out your website** when someone types your URL. You don't have to buy that computer yourself — services like Vercel rent you the "always on" part and handle the boring plumbing.

### Why Vercel?

**Vercel** is a popular, **free tier** friendly host that plays really nicely with **static sites** (like your Vite build). You connect your GitHub repo, and when you're ready, it can **build** your project and **publish** it automatically. Think of it as a launchpad: you push code, Vercel builds \`npm run build\`, and boom — your journal has a public address.

> **Hearthian Field Note**: "Localhost" isn't broken — it's **supposed** to be private. Deployment is the step where you decide "okay, this is ready for the solar system to see."`,
    },
    {
      title: "Create a Vercel Account",
      content: `## Sign Up and Log In (the Safe Way)

### Create your Vercel account

1. Open your browser and go to **https://vercel.com**.  
2. Sign up for an account. Using your **GitHub** account is a great option — fewer passwords to juggle, and linking repos later is smoother.

**IMPORTANT:** Whatever password or login details you create, store them in your family's **1Password shared vault** (or whatever secure place Dad set up). **Never** paste secrets into random chats, school docs, or screenshots. Treat account logins like keys to your ship.

### Install the Vercel CLI

The **CLI** is a **command-line** tool so you can talk to Vercel from the terminal (useful for deploys and checks from your machine).

\`\`\`bash
npm install -g vercel
\`\`\`

The \`-g\` means "install globally" — the \`vercel\` command will work from different folders. If your computer asks for permission or the command fails, grab an adult; sometimes global installs need a quick path or permissions tweak.

### Log in from the terminal

\`\`\`bash
vercel login
\`\`\`

Follow the prompts (often it'll open the browser or show a link to click). When it says you're logged in, you're officially on Vercel's team from the terminal side too.

> **Hearthian Field Note**: **All** important passwords — Vercel, GitHub, Supabase, everything — belong in the **1Password shared vault**, not sticky notes, not Discord, not your journal's source code.`,
    },
    {
      title: "Connect Your GitHub Repo",
      content: `## Import the Project and Hit Deploy

Your journal already lives on **GitHub** (from earlier lessons). Vercel can **watch that repo** and turn it into a live website.

### Add a new project in Vercel

1. Log into the **Vercel dashboard** in your browser.  
2. Click **Add New** → **Project** (wording may be **"Add New Project"** — same idea).  
3. Find your **GitHub** account in the import list and pick the **repository** that holds your exploration journal.  
4. If Vercel asks to install the GitHub app or approve access, work through those screens with Dad if anything looks confusing — it's normal the first time.

### Configure the build (Vite-style)

Vite projects usually need these settings:

| Setting | Value |
|--------|--------|
| **Build command** | \`npm run build\` |
| **Output directory** | \`dist\` |

That's where Vite puts the finished static files. If Vercel auto-detects Vite and fills this in, double-check it matches the table above.

### Deploy!

Click **Deploy** (or equivalent) and **watch the build logs**. You'll see npm installing packages, running the build, and uploading files. First deploy might take a minute — totally normal.

When it finishes, Vercel gives you a **URL** (something like \`your-project.vercel.app\`). Open it: **your journal is on the internet.** That's a huge milestone — take a second to enjoy it.

> **Hearthian Field Note**: If the build fails, read the **red error text** in the log — it often names the exact file or command. Typos in \`package.json\` scripts or missing dependencies are common first-time gremlins.`,
    },
    {
      title: "Environment Variables",
      content: `## Secrets Shouldn't Live in Your Code

In Lesson 6 you probably dropped your **Supabase URL** and **anon key** right into \`js/supabase.js\`. That **works** while you're learning — but for a **production** site (the one strangers can visit), it's not ideal: those strings can end up **visible** in the built JavaScript anyone can download. You want a cleaner pattern.

### What are environment variables?

**Environment variables** are **named settings** your app reads when it runs — like hidden sticky notes the **server** or **build tool** knows about, but that **aren't** committed to Git as part of your source. You set them on your machine for local dev and again in Vercel for the live site. Same names, same idea: **configure without hardcoding secrets in the repo.**

### Step 1: \`.env\` locally (and keep it secret)

In your **project root** (next to \`package.json\`), create a file named \`.env\`:

\`\`\`text
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
\`\`\`

Replace \`your_url_here\` and \`your_key_here\` with your real Supabase project URL and anon key (copy from the Supabase dashboard — and yes, those belong in **1Password** too if you're saving them anywhere long-term).

**CRITICAL:** Add \`.env\` to **\`.gitignore\`** so it **never** gets pushed to GitHub. If \`.env\` slips into the repo, rotate your keys in Supabase and ask for help cleaning history — prevention is easier.

### Step 2: Read them in \`js/supabase.js\`

Vite exposes variables that start with \`VITE_\` through \`import.meta.env\`. Point your client at those instead of string literals:

\`\`\`javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
\`\`\`

Then pass \`supabaseUrl\` and \`supabaseAnonKey\` into \`createClient\` like before. After you change this, restart the dev server (\`npm run dev\`) so Vite picks up the new \`.env\` values.

### Step 3: Same variables on Vercel

1. Open your project on Vercel → **Settings** → **Environment Variables**.  
2. Add **\`VITE_SUPABASE_URL\`** and **\`VITE_SUPABASE_ANON_KEY\`** with the **same values** as in your local \`.env\`.  
3. Apply to **Production** (and **Preview** if you want previews to work too).  
4. **Redeploy** the project (Deployments tab → ⋮ on latest → **Redeploy**, or push a tiny commit) so the new vars get baked into the build.

Now your live site can talk to Supabase **without** secrets sitting as plain text in the repo.

> **Hearthian Field Note**: The \`VITE_\` prefix is a Vite rule: only variables with that prefix are exposed to **browser** code. That's a safety feature so you don't accidentally leak server-only secrets to the whole internet.`,
    },
    {
      title: "Custom Domain (with Dad)",
      content: `## A Name People Can Actually Remember

So far, Vercel probably gave you a URL like \`something-random.vercel.app\`. It works! But maybe you want something shorter or more **you** — like a name that's easy to say out loud at the dinner table.

### What's a domain?

A **domain** is the human-friendly **name** for a site — the part like \`example.com\` — instead of a long chain of numbers (**IP address**) or a default host name. DNS (Domain Name System) is the internet's phone book: when someone types your domain, DNS points them to Vercel's servers so your journal loads.

### This step is a team mission

Buying a domain, updating **DNS records**, and verifying ownership often involves **billing** and **settings at your domain registrar** (where the domain was bought). That's **Dad territory** for most families — and that's totally okay.

### What you'll do together in Vercel

1. In the Vercel dashboard, open your project → **Settings** → **Domains**.  
2. Click to **add** your custom domain and type the name you're using (Dad will know which one).  
3. Vercel will show **DNS instructions** — usually a few records to add (like **A**, **AAAA**, or **CNAME**).  
4. **Dad** logs into wherever the domain is registered and **adds or updates those DNS records** to point at Vercel.  
5. Wait a bit — DNS can take **minutes to a few hours** to update everywhere. Vercel will show **verified** when it's happy.

Once it's connected, your exploration journal loads at **your custom domain**. Same site, fancier front door.

> **Hearthian Field Note**: Don't stress if DNS feels slow — the internet is big, and "it works for me but not my cousin yet" is normal right after a change. Grab a snack, try again later.`,
    },
    {
      title: "Push and Merge",
      content: `## Ship It the Git Way

You've configured Vercel, maybe moved secrets to environment variables, and possibly hooked up a custom domain. Now lock in the **Git workflow** so every improvement can reach the live site smoothly.

### Push your branch

On \`phase-8/deployment\`, commit your changes (env-based Supabase setup, any Vercel config files if you added them, etc.):

\`\`\`bash
git add .
git status
git commit -m "Prepare for deployment (env vars, Vercel-ready)"
git push -u origin phase-8/deployment
\`\`\`

Then open **GitHub**, open a **Pull Request** from \`phase-8/deployment\` into \`main\`, review the diff with Dad if you want, and **merge** when you're happy.

\`\`\`bash
git checkout main
git pull
\`\`\`

### The magic part: auto-deploy

With Vercel connected to your repo and **production** tracking \`main\`, **every push to \`main\`** can trigger a **new deploy** automatically. You fix a typo, merge to \`main\`, and a few minutes later the live site updates. No manual upload dance.

That's the same rhythm real teams use: **branch → PR → merge → hosted site updates.**

### You did it

Your Outer Wilds exploration journal isn't trapped on localhost anymore — **it's on the internet.** Share the link with people you trust, keep iterating, and remember: **passwords and keys stay in 1Password**, not in public repos.

> **Hearthian Field Note**: If a deploy ever breaks production, \`main\` history and Vercel's **rollback** options are your safety net — another reason small, clear commits and good messages matter.`,

    },
  ],
};

export default lessonData;
