import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "01-html-foundations",
  title: "HTML Foundations",
  description:
    "Build your first web page with headings, paragraphs, lists, images, and links.",
  order: 1,
  planet: "Timber Hearth",
  planetEmoji: "🌲",
  hawkBranch: "phase-1/html-foundations",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Time to Branch Out

Before you write any code, you need to create a **Git branch**. Think of a branch like a **save file** in a video game — you can experiment, try stuff, and even break things without messing up your main version. If it all goes sideways, your \`main\` branch is still safe and untouched.

Every lesson in this course will have its own branch. That way, each chunk of work is organized and you can always go back and see what you did.

### Open iTerm

Fire up **iTerm** (your terminal app) and navigate to your project folder:

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Replace \`YOUR-REPO\` with whatever you named your repository in Lesson 0. If you forgot, you can type \`ls ~/development\` to see what's in there.

### Create Your Branch

Now run this command:

\`\`\`bash
git checkout -b phase-1/html-foundations
\`\`\`

Let's break that down:

- **\`git checkout\`** — this tells Git you want to switch to a different branch
- **\`-b\`** — this flag means "create a brand new branch"
- **\`phase-1/html-foundations\`** — this is the name of your new branch

You should see a message like:

\`\`\`
Switched to a new branch 'phase-1/html-foundations'
\`\`\`

You're now working on your own branch. Everything you do here stays separate from \`main\` until you decide to merge it back. We'll do that at the end of this lesson.

> **Hearthian Field Note**: You can always check which branch you're on by running \`git branch\`. The one with the little star next to it is your current branch.`,
    },
    {
      title: "What is HTML?",
      content: `## The Skeleton of the Web

**HTML** stands for **HyperText Markup Language**. That sounds fancy, but here's what it really means: HTML is the **skeleton** of every website. It tells your browser what things *are* — what's a heading, what's a paragraph, what's an image, what's a link.

Every single website you've ever visited — YouTube, Reddit, the Outer Wilds wiki, all of them — is built with HTML at its core.

### Tags: The Building Blocks

HTML uses **tags** to label content. Think of tags like putting stickers on boxes to tell people what's inside. Most tags come in pairs — an **opening tag** and a **closing tag**:

\`\`\`html
<h1>Hello!</h1>
\`\`\`

Here's what's happening:

- \`<h1>\` is the **opening tag** — it says "hey, a big heading starts here"
- \`Hello!\` is the **content** — the actual text that shows up on the page
- \`</h1>\` is the **closing tag** — notice the \`/\` slash, which says "the heading ends here"

The tag name (\`h1\`) tells the browser *what kind of thing* it is. The content between the tags is *what it says*.

Here are a few more examples:

\`\`\`html
<p>This is a paragraph of text.</p>
<h2>This is a smaller heading.</h2>
<strong>This text is bold.</strong>
\`\`\`

That's basically it. HTML is just content wrapped in tags. You'll learn a bunch of different tags in this lesson, but they all follow this same pattern.

> **Hearthian Field Note**: Some tags don't have a closing tag because they don't wrap around content. You'll see one of these later when we get to images. They're called **self-closing tags**.`,
    },
    {
      title: "The HTML Boilerplate",
      content: `## Every Web Page Starts Here

Every HTML page needs some standard setup code before you can add your own content. This is called the **boilerplate** — it's like the launch checklist before your ship takes off from Timber Hearth.

### Create Your File

In your project folder, create a new file called \`index.html\`. You can do this in **Cursor** by right-clicking in the file explorer and choosing "New File", or from iTerm:

\`\`\`bash
touch index.html
\`\`\`

Now open it in Cursor (if it's not already open) and type this code:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outer Wilds Explorer</title>
</head>
<body>
  <h1>Outer Wilds Explorer</h1>
  <p>Welcome to my exploration journal!</p>
</body>
</html>
\`\`\`

### What Does All This Mean?

Let's walk through it piece by piece:

- **\`<!DOCTYPE html>\`** — This tells the browser "this is a modern HTML page." Every HTML file starts with this. It's not really a tag, it's a declaration.

- **\`<html lang="en">\`** — This is the root of your entire page. Everything goes inside it. The \`lang="en"\` part tells the browser the page is in English.

- **\`<head>\`** — This section contains **metadata** — info about your page that doesn't show up on screen. Think of it as the backstage area.

- **\`<meta charset="UTF-8">\`** — This tells the browser which character set to use. UTF-8 supports basically every language and symbol, so you always want this.

- **\`<meta name="viewport" ...>\`** — This makes your page work properly on phones and tablets. Without it, mobile browsers might zoom way out and make everything tiny.

- **\`<title>\`** — This sets the text that appears in the browser tab. Try changing it and see!

- **\`<body>\`** — This is where all the **visible content** goes. Everything the user actually sees on the page lives inside \`<body>\`.

### See It in Your Browser

Save the file, then find \`index.html\` in Finder and double-click it (or right-click > Open With > Chrome/Safari). You should see your heading and paragraph on the page.

It won't look fancy yet — no colors, no cool fonts. That's totally fine. Right now we're just building the skeleton. We'll make it look awesome in the CSS lesson.

> **Hearthian Field Note**: Try changing the text inside the \`<h1>\` and \`<p>\` tags, save the file, and refresh your browser. See how it updates? That's the fastest feedback loop in web development.`,
    },
    {
      title: "Headings and Paragraphs",
      content: `## Organizing Your Page

Now that you have your boilerplate set up, let's add some real content. The two most basic HTML elements are **headings** and **paragraphs**.

### Headings: h1 through h6

HTML gives you six levels of headings, from \`<h1>\` (the biggest and most important) down to \`<h6>\` (the smallest):

\`\`\`html
<h1>This is an h1 — the main title</h1>
<h2>This is an h2 — a section title</h2>
<h3>This is an h3 — a sub-section</h3>
<h4>This is an h4</h4>
<h5>This is an h5</h5>
<h6>This is an h6 — the smallest heading</h6>
\`\`\`

Think of it like an outline:
- **h1** is the chapter title (you usually only have one per page)
- **h2** is a major section
- **h3** is a sub-section inside an h2
- And so on...

### Paragraphs

The \`<p>\` tag wraps around a block of text. Each paragraph gets its own \`<p>\` tag:

\`\`\`html
<p>This is one paragraph. It can be as long as you want.</p>
<p>This is a second paragraph. The browser adds space between them automatically.</p>
\`\`\`

### Update Your Page

Replace everything inside your \`<body>\` tag with this:

\`\`\`html
<body>
  <h1>Outer Wilds Explorer</h1>
  <p>Welcome to my exploration journal! This site tracks everything I discover across the solar system.</p>

  <h2>Planets</h2>
  <p>The solar system is full of strange and wonderful places. Each planet has its own mysteries waiting to be uncovered.</p>
</body>
\`\`\`

Save and refresh your browser. You should see a clear structure — a big title at the top, some welcome text, and a section heading for "Planets."

> **Hearthian Field Note**: Try adding an \`<h3>\` under the "Planets" heading for "Timber Hearth" with a \`<p>\` describing it. The more you experiment, the faster you'll learn!`,
    },
    {
      title: "Lists",
      content: `## Making Lists

Lists are one of the most useful things in HTML. There are two types:

### Unordered Lists (Bullet Points)

An **unordered list** uses \`<ul>\` and shows bullet points. Each item in the list uses \`<li>\` (list item):

\`\`\`html
<ul>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</ul>
\`\`\`

### Ordered Lists (Numbered)

An **ordered list** uses \`<ol>\` and automatically numbers each item:

\`\`\`html
<ol>
  <li>First thing</li>
  <li>Second thing</li>
  <li>Third thing</li>
</ol>
\`\`\`

### Add a Planet List to Your Page

Let's add a list of all the places you can explore in Outer Wilds. Add this inside your \`<body>\`, right after your "Planets" paragraph:

\`\`\`html
<h2>Planets</h2>
<p>The solar system is full of strange and wonderful places. Each planet has its own mysteries waiting to be uncovered.</p>

<ul>
  <li>Timber Hearth</li>
  <li>Ash Twin</li>
  <li>Ember Twin</li>
  <li>Brittle Hollow</li>
  <li>Giant's Deep</li>
  <li>Dark Bramble</li>
  <li>Quantum Moon</li>
  <li>The Interloper</li>
  <li>Sun Station</li>
</ul>

<!-- TODO: These will become links to individual planet pages later -->
\`\`\`

### What's That Last Line?

That line starting with \`<!--\` is an **HTML comment**. It doesn't show up on the page at all — it's just a note to yourself (or other developers) in the code.

\`\`\`html
<!-- This is a comment. The browser completely ignores it. -->
\`\`\`

Comments are super useful for leaving reminders. The one we added is a **TODO** — a note about something we plan to do later. Cursor even highlights TODOs for you, so they're easy to spot.

Save and refresh. You should see a nice bullet-point list of every place in the solar system.

> **Hearthian Field Note**: Try changing the \`<ul>\` to an \`<ol>\` and see what happens. Then change it back. Experimenting is the best way to understand what each tag does.`,
    },
    {
      title: "Images",
      content: `## Adding Images

Time to make your page more visual. The \`<img>\` tag lets you add images to your page. It's one of those **self-closing tags** we mentioned earlier — it doesn't need a closing tag because it doesn't wrap around text content.

\`\`\`html
<img src="images/my-image.jpg" alt="Description of the image">
\`\`\`

An \`<img>\` tag has two important **attributes**:

- **\`src\`** (source) — This tells the browser *where* to find the image file. It's a path to the file, like a file address.
- **\`alt\`** (alternative text) — This is a text description of the image. It's used by screen readers for people who can't see the image, and it shows up if the image fails to load. **Always include an alt attribute** — it makes your site accessible to everyone.

### Create an Images Folder

First, let's create a folder to keep your images organized. In iTerm, make sure you're in your project folder, then run:

\`\`\`bash
mkdir images
\`\`\`

Now find an image to use. Some ideas:
- Take a screenshot from the Outer Wilds main menu
- Download an image from the [official Outer Wilds site](https://www.mobiusdigitalgames.com/outer-wilds.html)
- Use any image you want as a placeholder for now

Save the image into your \`images/\` folder and name it something simple like \`timber-hearth.jpg\`.

### Add the Image to Your Page

Add this somewhere in your \`<body>\`, maybe right after the \`<h1>\`:

\`\`\`html
<img src="images/timber-hearth.jpg" alt="The forested planet Timber Hearth, home of the Hearthians">
\`\`\`

Save and refresh. If you see the image, awesome! If you see a broken image icon, double-check:
1. Is the file actually in the \`images/\` folder?
2. Does the filename in your \`src\` match exactly? (capitalization matters!)

### A Note on File Paths

The \`src\` attribute is a **relative path** — it describes where the image is *relative to your HTML file*. Since \`index.html\` is in your project root and the image is in the \`images/\` folder inside that same root, the path is \`images/filename.jpg\`.

> **Hearthian Field Note**: Try adding a second image somewhere on the page. Write a good \`alt\` description — imagine you're describing the image to someone who can't see it. What would they need to know?`,
    },
    {
      title: "Links",
      content: `## Connecting Pages Together

Links are what make the web a *web* — they let you click on text and jump to another page. The tag for creating a link is \`<a>\`, which stands for **anchor**.

\`\`\`html
<a href="https://www.mobiusdigitalgames.com/outer-wilds.html">Outer Wilds Official Site</a>
\`\`\`

Let's break it down:

- **\`<a>\`** — the anchor tag, which creates a link
- **\`href\`** — stands for "hypertext reference." This is the URL (web address) that the link goes to when you click it
- **The text between the tags** — this is what people actually see and click on. In this case, "Outer Wilds Official Site"

### Add a Link to Your Page

Add this below your planet list:

\`\`\`html
<h2>Resources</h2>
<p>Check out the <a href="https://www.mobiusdigitalgames.com/outer-wilds.html">Outer Wilds Official Site</a> for more about the game.</p>
\`\`\`

Save and refresh. You should see a clickable link. Click it and it should take you to the official Outer Wilds site.

### Links to Your Own Pages

Right now we only have one page, but later in Lesson 3 you'll create separate pages for each planet. When you do, you'll link to them like this:

\`\`\`html
<a href="planets/timber-hearth.html">Timber Hearth</a>
\`\`\`

Notice there's no \`https://\` — that's because it's a **relative link** (pointing to a file in your own project) instead of an **absolute link** (pointing to a full web address somewhere else on the internet).

### Opening Links in a New Tab

If you want a link to open in a new browser tab instead of replacing your current page, add the \`target\` attribute:

\`\`\`html
<a href="https://www.mobiusdigitalgames.com/outer-wilds.html" target="_blank">Outer Wilds Official Site</a>
\`\`\`

The \`target="_blank"\` part tells the browser "open this in a new tab."

> **Hearthian Field Note**: Go back to your planet list and try wrapping one of the planet names in an \`<a>\` tag. It won't link anywhere real yet, but you can set the \`href\` to \`"#"\` as a placeholder: \`<a href="#">Timber Hearth</a>\``,
    },
    {
      title: "Save and Push to GitHub",
      content: `## Ship It!

You've built your first real web page. Before we wrap up, let's look at the complete \`index.html\` and then push everything to GitHub.

### Your Complete File

Your \`index.html\` should look something like this (your image filename and descriptions might be different, and that's totally fine):

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outer Wilds Explorer</title>
</head>
<body>
  <h1>Outer Wilds Explorer</h1>
  <img src="images/timber-hearth.jpg" alt="The forested planet Timber Hearth, home of the Hearthians">
  <p>Welcome to my exploration journal! This site tracks everything I discover across the solar system.</p>

  <h2>Planets</h2>
  <p>The solar system is full of strange and wonderful places. Each planet has its own mysteries waiting to be uncovered.</p>

  <ul>
    <li>Timber Hearth</li>
    <li>Ash Twin</li>
    <li>Ember Twin</li>
    <li>Brittle Hollow</li>
    <li>Giant's Deep</li>
    <li>Dark Bramble</li>
    <li>Quantum Moon</li>
    <li>The Interloper</li>
    <li>Sun Station</li>
  </ul>

  <!-- TODO: These will become links to individual planet pages later -->

  <h2>Resources</h2>
  <p>Check out the <a href="https://www.mobiusdigitalgames.com/outer-wilds.html">Outer Wilds Official Site</a> for more about the game.</p>
</body>
</html>
\`\`\`

### Push to GitHub

Now let's save your work to GitHub. Open iTerm and make sure you're in your project folder, then run these commands one at a time:

**1. Check what changed:**

\`\`\`bash
git status
\`\`\`

This shows you all the files that have been created or modified. You should see \`index.html\` and your \`images/\` folder listed.

**2. Stage your changes:**

\`\`\`bash
git add .
\`\`\`

The \`.\` means "add everything." This tells Git "I want to include all of these changes in my next save."

**3. Commit (save) your changes:**

\`\`\`bash
git commit -m "Add HTML foundations for Outer Wilds Explorer"
\`\`\`

A **commit** is like a snapshot of your code at this moment. The \`-m\` flag lets you add a message describing what you did. Always write something useful — future-you will thank present-you.

**4. Push to GitHub:**

\`\`\`bash
git push origin phase-1/html-foundations
\`\`\`

This sends your branch up to GitHub so it's saved in the cloud. If this is your first push on this branch, Git might ask you to set up tracking — just follow whatever it suggests.

### Merge Into Main

Now let's bring your work into the \`main\` branch. You can do this on GitHub by creating a **Pull Request** (go to your repo on github.com and you'll see a prompt to create one), or you can do it right from iTerm:

\`\`\`bash
git checkout main
git merge phase-1/html-foundations
git push origin main
\`\`\`

Here's what those do:
- **\`git checkout main\`** — switch back to the main branch
- **\`git merge phase-1/html-foundations\`** — pull all the work from your lesson branch into main
- **\`git push origin main\`** — push the updated main branch to GitHub

### You Did It!

Seriously — you just built a web page from scratch using HTML. You learned about tags, headings, paragraphs, lists, images, links, and how to push your code to GitHub. That's a LOT for one lesson.

Open your \`index.html\` in the browser one more time and look at what you made. That's a real web page. You wrote every line of it.

Next up: **Lesson 2 — CSS Basics**, where you'll learn how to make your page actually look awesome with colors, fonts, and layout. We're heading to the Hourglass Twins!

> **Hearthian Field Note**: Before you move on, try adding one more thing to your page — anything you want. Maybe another heading, a second list, or a paragraph about your favorite planet so far. Make it yours, commit it, and push. The more you practice, the more natural this will feel.`,
    },
  ],
};

export default lessonData;
