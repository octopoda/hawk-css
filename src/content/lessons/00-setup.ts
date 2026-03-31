import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "00-setup",
  title: "Setup",
  description:
    "Install your tools, create accounts, and get your coding environment ready.",
  order: 0,
  planet: "Mission Control",
  planetEmoji: "🚀",
  hawkBranch: null,
  steps: [
    {
      title: "Welcome, Explorer!",
      content: `## Welcome to the Outer Wilds Academy 🚀

Hey Hawk! Welcome to **Mission Control**. You're about to do something seriously cool — you're going to **build your own website from scratch**.

Not just any website either. You're going to build an **Outer Wilds Exploration Journal** — a real, working web app where you can take notes on every planet you visit, track your discoveries, snap photos of clues, and even run a 22-minute countdown timer to keep track of the time loop.

By the end, your site will be live on the internet with its own URL that you can pull up on your phone while you play.

### The Journey Ahead

There are **10 lessons** in this academy, and each one is tied to a location from the game:

| Lesson | Planet | What You'll Learn |
|--------|--------|-------------------|
| 0 | 🚀 Mission Control | Setup (you are here!) |
| 1 | 🌲 Timber Hearth | HTML — building your first web page |
| 2 | ⏳ Hourglass Twins | CSS — making it look awesome |
| 3 | 🕳️ Brittle Hollow | Multi-page sites & navigation |
| 4 | 🌊 Giant's Deep | Dev tools & workflow |
| 5 | ☄️ The Interloper | JavaScript & the countdown timer |
| 6 | 🌿 Dark Bramble | Databases — saving your notes |
| 7 | 🌙 Quantum Moon | Editing, deleting & live updates |
| 8 | ☀️ Sun Station | Deploying to the internet |
| 9 | 🏜️ Ash Twin | Responsive design (phone + desktop) |
| 10 | 📷 The Attlerock | Adding photo uploads |

### What You'll Learn Along the Way

By the time you finish, you'll know:

- **HTML** — the skeleton of every website
- **CSS** — the style, colors, and layout
- **JavaScript** — making things interactive (like that timer!)
- **Databases** — saving your notes so they don't disappear
- **Deployment** — putting your site on the real internet

You don't need to know any of this stuff yet. That's the whole point — we're starting from zero.

Think of this like the first time you wake up in the village on Timber Hearth. You don't know what's out there yet, but you've got a ship, a translator, and curiosity. That's all you need.

Let's get your ship ready. 🛸

> **Hearthian Field Note**: Every great explorer started by getting their gear ready. That's what this lesson is all about — no code yet, just setting up your tools so everything works when you're ready to launch.`,
    },
    {
      title: "Download Cursor IDE",
      content: `## Your Code Editor — Cursor IDE

Before you can write any code, you need a place to write it. That's where an **IDE** comes in.

### What's an IDE?

**IDE** stands for **Integrated Development Environment**. That's a fancy way of saying "a text editor built for coding."

You know how Microsoft Word is built for writing essays — it has spell check, formatting tools, page breaks, all that stuff? An IDE is like that, but for code. It highlights different parts of your code in colors so you can read it easily, it catches mistakes, and it even has an AI built in that can help you when you're stuck.

We're going to use one called **Cursor**. It's free and it's awesome — it has an AI assistant built right in that you can ask questions to while you code.

### Download & Install

1. Open Safari and go to **[cursor.com](https://cursor.com)**
2. Click the **Download** button — it should automatically detect that you're on a Mac
3. Once the file downloads, open it
4. **Drag the Cursor icon into your Applications folder** (a window should pop up showing you where to drag it)
5. Open **Applications** in Finder and double-click **Cursor** to launch it
6. If your Mac asks "Are you sure you want to open this?" — click **Open**

When Cursor opens for the first time, it might ask you to sign in or create an account. Go ahead and do that.

> **Hearthian Field Note**: 🔐 **Important!** If you create an account for Cursor, make sure you save the email and password in our **1Password shared vault**. Every account you create during these lessons needs to go in there — that way you'll never lose a password and Dad can help if you get locked out.

### What You Should See

Once Cursor is open, you'll see a dark screen with a sidebar on the left. It might look a little intimidating right now, but don't worry — we'll learn our way around it step by step. For now, just make sure it opens without any errors.

You've got your code editor. That's like picking up your translator tool before heading out — essential equipment. ✅`,
    },
    {
      title: "Download iTerm",
      content: `## Your Terminal — iTerm2

Next up, you need a **terminal**. This is one of the most important tools a developer has.

### What's a Terminal?

A **terminal** is a way to talk to your computer using text commands instead of clicking on things.

Right now, when you want to open a folder, you double-click it in Finder. When you want to delete a file, you drag it to the trash. In a terminal, you do all of that by typing commands instead. It feels weird at first, but once you get used to it, it's actually way faster.

Think of it like this: clicking around in Finder is like walking everywhere on a planet. Using the terminal is like using your jetpack — it gets you where you need to go way quicker once you know how.

Your Mac actually has a built-in terminal app, but we're going to use a better one called **iTerm2**.

### Download & Install

1. Open Safari and go to **[iterm2.com](https://iterm2.com)**
2. Click the big **Download** button
3. Once the file downloads, open it
4. **Drag iTerm into your Applications folder**
5. Open it from Applications

### Your First Command

With iTerm open, you should see a window with a blinking cursor (called a **prompt**). This is where you type commands.

Let's try your first one. Type this exactly and press **Enter**:

\`\`\`bash
echo "Hello, Outer Wilds!"
\`\`\`

You should see it print back:

\`\`\`
Hello, Outer Wilds!
\`\`\`

🎉 You just ran your first terminal command! The \`echo\` command tells your computer to print out whatever text you give it.

Try a few more just for fun:

\`\`\`bash
echo "I am Hawk, explorer of the solar system"
\`\`\`

\`\`\`bash
date
\`\`\`

That last one, \`date\`, prints the current date and time. No quotes needed for that one since it's a built-in command, not a message.

> **Hearthian Field Note**: The terminal might feel like learning an alien language right now — kind of like reading Nomai text for the first time. But just like the translator, it'll start making sense fast. Every developer in the world uses a terminal every day.

You've got your terminal ready. Two tools down! 🛠️`,
    },
    {
      title: "Create a GitHub Account",
      content: `## Your Code Vault — GitHub

Time to create your **GitHub** account. This is a big one.

### What's GitHub?

**GitHub** is like Google Drive, but built specifically for code. Here's why it's awesome:

- It **stores your code online** so you'll never lose it (even if something happens to your computer)
- It **tracks every single change** you make — so if you mess something up, you can always go back to a version that worked
- It's where **every developer in the world** shares and collaborates on code

That version-tracking thing is called **Git**, and it's basically a time machine for your code. GitHub is the website that makes Git easy to use. Almost every app and website you've ever used — their code lives on GitHub.

### Create Your Account

1. Open Safari and go to **[github.com](https://github.com)**
2. Click **Sign up**
3. Enter your email address
4. Create a **password**

> **Hearthian Field Note**: 🔐 **Stop right here!** Before you go any further, open **1Password** and save this password in the **shared vault**. Seriously — do it now before you forget. Every account you create in this academy goes in 1Password. Future you will thank present you.

5. Pick a **username** — this is your developer identity! It'll show up on your profile and in your code. Pick something you'd be proud to show off but that's also appropriate. Some ideas:
   - \`hawk-codes\`
   - \`hawkdev\`
   - Something related to your name or interests
   - Avoid anything too silly — you might want to use this account for years

6. Complete the verification puzzle (the "prove you're a human" thing)
7. Choose the **Free** plan — that's all you need
8. You might get asked some setup questions — you can skip those for now

### Verify Your Email

GitHub will send a verification email. Go check your inbox, find the email from GitHub, and click the verification link. If you don't see it, check your spam folder.

Once you're verified and logged in, you should see your GitHub dashboard. It'll be pretty empty right now — but not for long.

> **Hearthian Field Note**: Your GitHub profile is like your Hearthian museum — it starts empty, but by the end of this journey it'll be full of cool stuff you've built. Every lesson will add to it.

GitHub account: done. ✅`,
    },
    {
      title: "Set Up Your Mac for Coding",
      content: `## Preparing Your Ship

Alright, now we need to set up your Mac so it's ready for real coding. We're going to do a few things in iTerm:

1. Make sure some important tools are installed
2. Create a folder where all your code will live
3. Set up a secure connection between your computer and GitHub

Open up **iTerm** and let's go.

---

### Step 1: Check for Homebrew

**Homebrew** is a tool that lets you install other tools on your Mac using the terminal. Think of it like an app store, but for developer tools. Let's check if you already have it:

\`\`\`bash
brew --version
\`\`\`

**If you see a version number** (like \`Homebrew 4.x.x\`) — great, skip to Step 2!

**If you see "command not found"** — you need to install it. Paste this entire command into iTerm and press Enter:

\`\`\`bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
\`\`\`

It might ask for your Mac's password (the one you use to log in to your computer). When you type the password, **you won't see any characters appear** — that's normal and a security thing. Just type it and press Enter.

This might take a few minutes. Let it finish.

**Important:** After Homebrew installs, it might show you some commands at the end under a section that says "Next steps." If it does, copy and paste those commands into iTerm and run them. This makes sure your terminal knows where to find Homebrew.

---

### Step 2: Install Node.js

**Node.js** is what lets you run JavaScript outside of a web browser. You'll need it later for building your site. Let's check if it's already installed:

\`\`\`bash
node --version
\`\`\`

**If you see a version number** (like \`v20.x.x\` or higher) — you're good, skip to Step 3!

**If you see "command not found"** — install it with Homebrew:

\`\`\`bash
brew install node
\`\`\`

This might take a minute or two. Once it's done, verify it worked:

\`\`\`bash
node --version
\`\`\`

You should now see a version number. 👍

---

### Step 3: Create Your Development Folder

Every developer has a folder where they keep all their projects. Let's make yours:

\`\`\`bash
mkdir -p ~/development
\`\`\`

This creates a folder called \`development\` in your home directory. The \`-p\` flag means "create it if it doesn't exist, and don't complain if it already does."

You can verify it's there:

\`\`\`bash
ls ~/development
\`\`\`

It should be empty for now — that's fine. This is where all your projects will live.

---

### Step 4: Set Up SSH Key for GitHub

Right now, your computer and GitHub don't know each other. We need to create a secure connection between them so you can send your code to GitHub without typing your password every time.

This uses something called an **SSH key** — it's like a secret handshake between your computer and GitHub.

**Generate your SSH key:**

\`\`\`bash
ssh-keygen -t ed25519 -C "your-email@example.com"
\`\`\`

Replace \`your-email@example.com\` with the email you used to sign up for GitHub.

It will ask you a few questions:
- **"Enter file in which to save the key"** — just press **Enter** to use the default
- **"Enter passphrase"** — just press **Enter** for no passphrase (it's fine for now)
- **"Enter same passphrase again"** — press **Enter** again

**Copy your public key:**

\`\`\`bash
cat ~/.ssh/id_ed25519.pub
\`\`\`

This will print out a long string that starts with \`ssh-ed25519\`. **Select the entire thing and copy it** (Cmd+C).

**Add it to GitHub:**

1. Go to **[github.com](https://github.com)** and make sure you're logged in
2. Click your **profile picture** in the top-right corner
3. Click **Settings**
4. In the left sidebar, click **SSH and GPG keys**
5. Click the green **New SSH key** button
6. Give it a **Title** like "My Mac" or "Hawk's MacBook"
7. Paste the key you copied into the **Key** field
8. Click **Add SSH key**

**Test the connection:**

\`\`\`bash
ssh -T git@github.com
\`\`\`

You might see a message asking "Are you sure you want to continue connecting?" — type \`yes\` and press Enter.

If everything worked, you'll see a message like:

\`\`\`
Hi YOUR-USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
\`\`\`

That means your computer and GitHub can now talk to each other. 🤝

> **Hearthian Field Note**: Setting up SSH is like establishing a communication link with your ship's computer. It feels like a lot of steps, but you only have to do it once — after this, your computer and GitHub will recognize each other automatically.`,
    },
    {
      title: "Create Your First Repo",
      content: `## Launch Day — Your First Repository

This is it — the last step before you're officially ready to code. You're going to create your first **repository** (or **repo** for short) on GitHub and get it onto your computer.

A **repo** is just a project folder that GitHub tracks. Every change you make gets saved in the repo's history, like a logbook for your code.

---

### Step 1: Create the Repo on GitHub

1. Go to **[github.com](https://github.com)** and make sure you're logged in
2. Click the **+** icon in the top-right corner and choose **New repository**
3. **Repository name** — this is YOUR project, so you pick the name! Some ideas:
   - \`outer-wilds-journal\`
   - \`exploration-log\`
   - \`hawk-outer-wilds\`
   - Or whatever feels right to you
4. **Description** — write a short description like "My Outer Wilds exploration journal"
5. Set it to **Public** (this means anyone can see your code — that's a good thing! Developers share their work)
6. ✅ Check the box that says **Add a README file**
7. Click **Create repository**

You now have a repo on GitHub! You should see a page with your repo name and a \`README.md\` file in it.

---

### Step 2: Clone It to Your Computer

Right now, your repo only exists on GitHub's servers. You need to **clone** it — which means download a copy to your computer that stays linked to the GitHub version.

Open **iTerm** and navigate to your development folder:

\`\`\`bash
cd ~/development
\`\`\`

Now clone your repo. Replace \`YOUR-USERNAME\` with your GitHub username and \`REPO-NAME\` with whatever you named your repo:

\`\`\`bash
git clone git@github.com:YOUR-USERNAME/REPO-NAME.git
\`\`\`

For example, if your username is \`hawk-codes\` and your repo is called \`outer-wilds-journal\`, the command would be:

\`\`\`bash
git clone git@github.com:hawk-codes/outer-wilds-journal.git
\`\`\`

You should see some output about "Cloning into..." — that means it's working.

---

### Step 3: Navigate Into Your Project

\`\`\`bash
cd REPO-NAME
\`\`\`

Replace \`REPO-NAME\` with your actual repo name. For example:

\`\`\`bash
cd outer-wilds-journal
\`\`\`

You can check what's inside:

\`\`\`bash
ls
\`\`\`

You should see your \`README.md\` file. That's the one GitHub created when you made the repo.

---

### Step 4: Open It in Cursor

Here's the magic moment. Type this:

\`\`\`bash
cursor .
\`\`\`

That \`.\` means "this folder" — so you're telling Cursor to open the folder you're currently in.

Cursor should launch and open your project! You'll see the file explorer on the left with your \`README.md\` file. Click on it and you'll see its contents.

**If \`cursor .\` doesn't work**, it means the Cursor command-line tool isn't set up yet. Open Cursor manually, then:
1. Press **Cmd + Shift + P** (this opens the command palette)
2. Type **"install command"**
3. Click **"Shell Command: Install 'cursor' command in PATH"**
4. Close and reopen iTerm, then try \`cursor .\` again

---

### 🎉 You Did It!

You now have:

- ✅ **Cursor** — your code editor
- ✅ **iTerm** — your terminal
- ✅ **GitHub** — your code vault
- ✅ **Node.js** — for running JavaScript tools later
- ✅ **SSH** — secure connection to GitHub
- ✅ **Your first repo** — cloned and open in Cursor

You're sitting in your ship, systems are green, and the launch codes are in. Next lesson, we head to **Timber Hearth** and start building your first web page with HTML.

> **Hearthian Field Note**: 🏆 Take a second to appreciate what you just did. You set up a real professional development environment — the same kind of setup that developers at companies like Apple, Google, and game studios use every day. You're not playing pretend here, you're doing the real thing. See you on Timber Hearth, explorer! 🌲`,
    },
  ],
};

export default lessonData;
