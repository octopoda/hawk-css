import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "02-css-basics",
  title: "CSS Basics",
  description: "Add colors, fonts, and style to your page with CSS.",
  order: 2,
  planet: "Hourglass Twins",
  planetEmoji: "⏳",
  hawkBranch: "phase-2/css-basics",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Time to Branch Out (Again)

You know the drill from Lesson 1 — before we start making changes, we create a new branch. Think of it like opening a fresh page in your exploration journal. You don't want to scribble experiments all over your clean copy.

Open your terminal and run these commands one at a time:

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Replace \`YOUR-REPO\` with whatever you named your project folder. Then pull down the latest version of \`main\` so you're starting from the most up-to-date code:

\`\`\`bash
git checkout main && git pull
\`\`\`

Now create your new branch for this lesson:

\`\`\`bash
git checkout -b phase-2/css-basics
\`\`\`

That \`-b\` flag means "create a **new** branch." You're now on a branch called \`phase-2/css-basics\`. Any changes you make here won't touch \`main\` until you're ready to merge.

> **Hearthian Field Note**: Run \`git branch\` to see all your branches. The one with the \`*\` next to it is the one you're currently on. You should see \`* phase-2/css-basics\`.

Alright — branch created, let's make this site look awesome.`,
    },
    {
      title: "What is CSS?",
      content: `## Making Things Look Good

Right now your website works, but let's be honest — it looks like a plain text document from the 1990s. That's because HTML only handles the **structure** and **content** of a page. It's the skeleton.

**CSS** (Cascading Style Sheets) is what makes it look good. CSS is the skin, the clothes, the hairstyle — everything visual. It controls:

- **Colors** — background colors, text colors, link colors
- **Fonts** — what typeface the text uses, how big it is, how spaced out
- **Spacing** — how much room is between things
- **Layout** — where things sit on the page
- **Borders, shadows, rounded corners** — the fun decorative stuff

Without CSS, *every single website* would look the same — just black text on a white background with blue underlined links. Seriously, that's it.

### Before & After

Imagine your Outer Wilds journal page right now:

**Without CSS:**
- White background, black text
- Default Times New Roman font
- Everything smashed together
- Links are blue and underlined
- Looks like a homework assignment from 2003

**With CSS:**
- Deep space dark background
- Clean, modern fonts
- Nicely spaced-out sections
- Your favorite colors as accents
- Looks like an actual exploration journal

Same HTML. Same content. CSS is the *only* difference.

### How CSS Works

CSS is made up of **rules**. Each rule says "find this thing on the page, and make it look like this." Here's the basic structure:

\`\`\`css
selector {
  property: value;
}
\`\`\`

- **Selector** — tells CSS *what* to style (like \`h1\`, \`p\`, \`body\`)
- **Property** — tells CSS *what aspect* to change (like \`color\`, \`font-size\`)
- **Value** — tells CSS *how* to change it (like \`blue\`, \`24px\`)

For example:

\`\`\`css
h1 {
  color: orange;
  font-size: 32px;
}
\`\`\`

This says: "Find every \`<h1>\` on the page, make the text orange, and set the size to 32 pixels."

> **Hearthian Field Note**: The word "Cascading" in CSS means that styles can layer on top of each other. If you set the body text to white, every element inside the body inherits that — unless you override it with a more specific rule. It flows downward, like a cascade.`,
    },
    {
      title: "Create and Link a Stylesheet",
      content: `## Your First CSS File

You *could* write CSS directly inside your HTML file, but that gets messy fast. The pro move is to keep your CSS in its own separate file and link it to your HTML. This keeps things organized — structure in one file, style in another.

### Step 1: Create the CSS Folder and File

In your terminal, make sure you're in your project folder, then create a \`css\` directory:

\`\`\`bash
mkdir css
\`\`\`

Now create a file called \`style.css\` inside that folder. You can do this in VS Code — just right-click the \`css\` folder in the sidebar and select "New File", then name it \`style.css\`.

Your project structure should now look something like this:

\`\`\`
your-project/
├── index.html
├── images/
│   └── (your images)
└── css/
    └── style.css
\`\`\`

### Step 2: Link the Stylesheet

Open \`index.html\` and find the \`<head>\` section. Add this line inside it (after the \`<title>\` tag is a good spot):

\`\`\`html
<link rel="stylesheet" href="css/style.css">
\`\`\`

This tells the browser: "Hey, go load the styles from this file and apply them to the page." The \`rel="stylesheet"\` part means "this linked file is a stylesheet," and \`href\` is the path to the file.

Your \`<head>\` should now look something like:

\`\`\`html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Outer Wilds Exploration Journal</title>
  <link rel="stylesheet" href="css/style.css">
</head>
\`\`\`

### Step 3: Test It

Let's make sure the link is working. Open \`css/style.css\` and add this:

\`\`\`css
body {
  background-color: navy;
  color: white;
}
\`\`\`

Save both files, then open \`index.html\` in your browser (or refresh if it's already open).

If everything went right, your page should now have a **dark navy background** with **white text**. If it still looks the same as before, double-check:
- Did you save both files?
- Is the \`<link>\` tag inside \`<head>\`, not \`<body>\`?
- Is the path \`css/style.css\` correct? (It's case-sensitive!)

> **Hearthian Field Note**: The browser reads your HTML from top to bottom. When it hits the \`<link>\` tag, it pauses, downloads the CSS file, and applies the styles before continuing. That's why the \`<link>\` goes in the \`<head>\` — you want styles loaded before the content appears.`,
    },
    {
      title: "Colors",
      content: `## Painting Your Journal

Okay, let's ditch that test navy background and build a real color palette for your Outer Wilds exploration journal. There are a few ways to write colors in CSS.

### Named Colors

The simplest way — just type the color name:

\`\`\`css
color: white;
color: orange;
color: navy;
\`\`\`

CSS has about 140 named colors built in. They're easy to remember, but you can't get very specific with them.

### Hex Codes

This is what most developers use. A hex code is a 6-character code that starts with \`#\` and represents a precise color:

\`\`\`css
color: #FF7D25;   /* a specific orange */
color: #0B1E26;   /* deep dark navy */
color: #FFFFFF;   /* pure white */
color: #000000;   /* pure black */
\`\`\`

The 6 characters are actually 3 pairs: the first pair controls **red**, the second controls **green**, the third controls **blue**. Each pair goes from \`00\` (none) to \`FF\` (maximum). So \`#FF0000\` is pure red, \`#00FF00\` is pure green, and \`#0000FF\` is pure blue.

You don't need to memorize hex codes — you can use a color picker. In VS Code, if you hover over a hex code in your CSS file, a color picker pops up!

### Your Outer Wilds Color Palette

Here are four colors that'll make your journal look like it belongs in the Outer Wilds universe:

| Color | Hex Code | What It's For |
|-------|----------|---------------|
| Deep Space | \`#0B1E26\` | Page background — dark like outer space |
| Warm White | \`#E8DFD0\` | Body text — easy to read on dark backgrounds |
| Hawk's Blue | \`#1A6FB5\` | Accent color — for links and highlights |
| Outer Wilds Orange | \`#FF7D25\` | Pop of color — for headings and borders |

### Why These Colors?

This isn't random. Good design uses **contrast** — light text on a dark background (or dark text on a light background) makes things easy to read. \`#E8DFD0\` on \`#0B1E26\` has excellent contrast. And the orange and blue stand out clearly against the dark background without blending into each other.

### Apply the Palette

Replace everything in your \`css/style.css\` with this:

\`\`\`css
body {
  background-color: #0B1E26;
  color: #E8DFD0;
}

h1, h2, h3 {
  color: #FF7D25;
}

a {
  color: #1A6FB5;
}

a:hover {
  color: #FF7D25;
}
\`\`\`

Let's break this down:

- \`body\` — sets the page background to deep space and default text to warm white
- \`h1, h2, h3\` — makes all headings orange (the comma means "apply to all of these")
- \`a\` — styles all links in blue
- \`a:hover\` — when you hover your mouse over a link, it turns orange. That \`:hover\` part is called a **pseudo-class** — it targets a specific *state* of the element

Save and refresh. Your journal should now feel like it's floating in space.

> **Hearthian Field Note**: Try adding \`color: #FF7D25;\` to just your \`h1\` rule and a different color to \`h2\`. You can make each heading level its own color. Experiment!`,
    },
    {
      title: "Fonts and Typography",
      content: `## Choosing Your Typeface

Default browser fonts are... fine. But "fine" isn't what we're going for. Let's pick some fonts that match the vibe of a space exploration journal.

### How Fonts Work in CSS

The \`font-family\` property sets the typeface:

\`\`\`css
body {
  font-family: Arial, sans-serif;
}
\`\`\`

That second value (\`sans-serif\`) is a **fallback** — if the browser can't find Arial, it uses whatever default sans-serif font is available. Always include a fallback.

**Serif** fonts have little decorative strokes on the letters (like Times New Roman). **Sans-serif** means "without serifs" — clean, modern-looking fonts (like Arial).

### Google Fonts

Google Fonts is a free library of hundreds of fonts you can use on any website. Here's how:

**1.** Go to [fonts.google.com](https://fonts.google.com)

**2.** We're going to use two fonts:
- **Space Grotesk** — for headings (it's bold, modern, and has a slightly techy feel)
- **Inter** — for body text (super clean and readable at any size)

**3.** Add these two \`<link>\` tags in your \`index.html\` \`<head>\` section, **above** your stylesheet link:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
\`\`\`

The \`preconnect\` lines tell the browser to start connecting to Google's font servers early, so the fonts load faster.

**4.** Now use them in your CSS. Update your \`style.css\`:

\`\`\`css
body {
  background-color: #0B1E26;
  color: #E8DFD0;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

h1, h2, h3 {
  color: #FF7D25;
  font-family: "Space Grotesk", sans-serif;
}
\`\`\`

### Font Size: px vs em

You'll see two common units for font sizes:

- **\`px\`** (pixels) — an exact size. \`16px\` is always 16 pixels.
- **\`em\`** — relative to the parent element's font size. \`2em\` means "twice the parent's font size."

For example, if the body is \`16px\`:
- \`1em\` = 16px
- \`1.5em\` = 24px
- \`2em\` = 32px

Using \`em\` is flexible — if you change the base font size, everything scales proportionally.

### Style Your Headings

Add these rules to your CSS:

\`\`\`css
h1 {
  font-size: 2.5em;
  font-weight: 700;
}

h2 {
  font-size: 1.75em;
  font-weight: 500;
}

p {
  font-size: 1em;
  line-height: 1.6;
}
\`\`\`

### What's line-height?

\`line-height\` controls the spacing between lines of text. A value of \`1.6\` means the space between lines is 1.6 times the font size. Without it, lines of text get crammed together and become hard to read. \`1.6\` is the sweet spot for body text.

> **Hearthian Field Note**: \`font-weight\` controls how bold text is. \`400\` is normal, \`700\` is bold, and there are values in between like \`500\` (medium) and \`600\` (semi-bold). Try changing \`font-weight\` on your headings and see the difference.`,
    },
    {
      title: "The Box Model",
      content: `## Everything is a Box

Here's one of the most important things to understand about CSS: **every single HTML element is a rectangular box.** Headings? Boxes. Paragraphs? Boxes. Images? Boxes. Links? Boxes.

Each box has four layers, from inside to outside:

\`\`\`
┌────────────────────────────────────────────┐
│                 MARGIN                     │
│   ┌────────────────────────────────────┐   │
│   │             BORDER                 │   │
│   │   ┌────────────────────────────┐   │   │
│   │   │          PADDING           │   │   │
│   │   │   ┌────────────────────┐   │   │   │
│   │   │   │                    │   │   │   │
│   │   │   │     CONTENT        │   │   │   │
│   │   │   │   (your text,      │   │   │   │
│   │   │   │    images, etc.)   │   │   │   │
│   │   │   │                    │   │   │   │
│   │   │   └────────────────────┘   │   │   │
│   │   │                            │   │   │
│   │   └────────────────────────────┘   │   │
│   │                                    │   │
│   └────────────────────────────────────┘   │
│                                            │
└────────────────────────────────────────────┘
\`\`\`

- **Content** — the actual stuff inside (text, images)
- **Padding** — breathing room *inside* the box, between the content and the border
- **Border** — the visible edge of the box
- **Margin** — space *outside* the box, pushing other elements away

### Padding

Padding adds space **inside** the element. It's the cushion between your content and the edge of the box:

\`\`\`css
padding: 20px;           /* same padding on all 4 sides */
padding: 10px 20px;      /* 10px top/bottom, 20px left/right */
padding-top: 10px;       /* just the top */
padding-left: 20px;      /* just the left side */
\`\`\`

### Margin

Margin adds space **outside** the element. It pushes other elements away:

\`\`\`css
margin: 16px;            /* same margin on all 4 sides */
margin: 0 auto;          /* 0 top/bottom, auto left/right (centers the element!) */
margin-bottom: 24px;     /* just add space below */
\`\`\`

That \`margin: 0 auto;\` trick is super useful — it horizontally centers a block element on the page.

### Border

The border goes around the padding. You set three things: width, style, and color:

\`\`\`css
border: 2px solid #FF7D25;        /* 2px orange solid line */
border: 1px dashed #1A6FB5;       /* 1px blue dashed line */
border-bottom: 3px solid #FF7D25; /* only on the bottom */
\`\`\`

### Rounded Corners

\`border-radius\` rounds off the corners of a box:

\`\`\`css
border-radius: 8px;     /* slightly rounded */
border-radius: 20px;    /* very rounded */
border-radius: 50%;     /* perfect circle (if the element is square) */
\`\`\`

### Make Planet Cards

Let's use the box model to turn your planet list items into nice-looking cards. If your HTML has a list of planets like \`<li>Timber Hearth</li>\`, add this CSS:

\`\`\`css
li {
  background-color: #112B36;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-left: 4px solid #FF7D25;
  border-radius: 6px;
  list-style: none;
}
\`\`\`

And remove the default list styling on the parent:

\`\`\`css
ul {
  padding: 0;
}
\`\`\`

This gives each list item:
- A slightly lighter background than the page (\`#112B36\`)
- Comfortable inner spacing with \`padding\`
- Space between items with \`margin-bottom\`
- A bold orange left border as an accent
- Gently rounded corners

Save and refresh — your planet list should look like a set of sleek cards now.

> **Hearthian Field Note**: Try changing \`padding: 16px 20px;\` to \`padding: 40px;\` and see how much bigger the cards get. Then try \`border-left: 4px solid #1A6FB5;\` to swap the accent to blue. The box model is all about experimenting until it feels right.

### One More Thing: box-sizing

By default, \`padding\` and \`border\` are **added** to an element's width. So a box that's \`200px\` wide with \`20px\` of padding is actually \`240px\` total. That's confusing.

Add this to the very top of your CSS file to fix it:

\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}
\`\`\`

Now \`200px\` means \`200px\` total, including padding and border. Every professional project uses this. Trust me, it saves headaches.`,
    },
    {
      title: "Classes, IDs, and Push",
      content: `## Getting Specific with Selectors

So far we've been styling elements by their tag name — \`body\`, \`h1\`, \`li\`, etc. That works great when you want *all* headings or *all* list items to look the same. But what if you want to style just *one specific* heading differently? Or give *some* list items a different color?

That's where **classes** and **IDs** come in.

### Element Selectors

You already know these:

\`\`\`css
h1 {
  color: #FF7D25;
}
\`\`\`

This styles **every** \`<h1>\` on the page. Simple but broad.

### Class Selectors

A **class** is a label you can attach to any HTML element. In CSS, you target it with a dot (\`.\`):

In your HTML:
\`\`\`html
<h1 class="page-title">Outer Wilds Exploration Journal</h1>
<p class="intro-text">A record of my travels through the solar system.</p>
<li class="planet-card">Timber Hearth</li>
<li class="planet-card">Brittle Hollow</li>
\`\`\`

In your CSS:
\`\`\`css
.page-title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 8px;
}

.intro-text {
  text-align: center;
  font-size: 1.2em;
  color: #1A6FB5;
  margin-bottom: 32px;
}

.planet-card {
  background-color: #112B36;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-left: 4px solid #FF7D25;
  border-radius: 6px;
  list-style: none;
}
\`\`\`

Notice how both \`<li>\` elements share the \`planet-card\` class. **Classes are reusable** — you can put the same class on as many elements as you want. This is the selector you'll use most often.

### ID Selectors

An **ID** is like a class, but it should only be used **once per page.** In CSS, you target it with a hash (\`#\`):

\`\`\`html
<header id="site-header">
  <h1 class="page-title">Outer Wilds Exploration Journal</h1>
</header>
\`\`\`

\`\`\`css
#site-header {
  padding: 40px 20px;
  border-bottom: 2px solid #FF7D25;
  text-align: center;
}
\`\`\`

**Rule of thumb:** use classes for almost everything. Use IDs only when something truly appears once on the page (like a site header or main content area) and you need to target it specifically.

### Updating Your HTML

Go through your \`index.html\` and add some classes. Here's a rough idea:

\`\`\`html
<body>
  <header id="site-header">
    <h1 class="page-title">Outer Wilds Exploration Journal</h1>
    <p class="intro-text">A record of my travels through the solar system.</p>
  </header>

  <main>
    <h2 class="section-heading">Planets Visited</h2>
    <ul class="planet-list">
      <li class="planet-card">Timber Hearth — Home. Where it all started.</li>
      <li class="planet-card">Brittle Hollow — A planet crumbling into a black hole.</li>
      <li class="planet-card">Giant's Deep — Massive ocean world with raging storms.</li>
    </ul>
  </main>
</body>
\`\`\`

### Your Full CSS

Here's what your complete \`css/style.css\` should look like at this point:

\`\`\`css
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  background-color: #0B1E26;
  color: #E8DFD0;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

h1, h2, h3 {
  font-family: "Space Grotesk", sans-serif;
  color: #FF7D25;
}

a {
  color: #1A6FB5;
}

a:hover {
  color: #FF7D25;
}

#site-header {
  padding: 40px 20px;
  border-bottom: 2px solid #FF7D25;
  text-align: center;
}

.page-title {
  font-size: 3em;
  font-weight: 700;
  margin-bottom: 8px;
}

.intro-text {
  font-size: 1.2em;
  color: #1A6FB5;
}

.section-heading {
  font-size: 1.75em;
  font-weight: 500;
  margin-top: 32px;
  margin-bottom: 16px;
  padding-left: 20px;
}

.planet-list {
  padding: 0 20px;
}

.planet-card {
  background-color: #112B36;
  padding: 16px 20px;
  margin-bottom: 12px;
  border-left: 4px solid #FF7D25;
  border-radius: 6px;
  list-style: none;
}

h1 {
  font-size: 2.5em;
  font-weight: 700;
}

h2 {
  font-size: 1.75em;
  font-weight: 500;
}

p {
  font-size: 1em;
  line-height: 1.6;
}
\`\`\`

Looking good! Now let's save this to Git.

---

## Push Your Work

You've styled your journal — time to save your progress. Run these commands in your terminal:

\`\`\`bash
git add .
\`\`\`

This stages all your changes (the new \`css/\` folder, updated \`index.html\`, and \`style.css\`).

\`\`\`bash
git commit -m "Add CSS styling with Outer Wilds theme"
\`\`\`

This saves a snapshot with a message describing what you did.

\`\`\`bash
git push origin phase-2/css-basics
\`\`\`

This pushes your branch to GitHub. Now go to your repository on GitHub — you should see a banner saying your branch was recently pushed, with a green **"Compare & pull request"** button.

### Merge to Main

Just like in Lesson 1:

1. Click **"Compare & pull request"**
2. Add a title like "Add CSS styling with Outer Wilds theme"
3. Click **"Create pull request"**
4. Once it's created, click **"Merge pull request"**
5. Click **"Confirm merge"**
6. Optionally delete the branch on GitHub when prompted

Back in your terminal, switch to main and pull the merged code:

\`\`\`bash
git checkout main
git pull
\`\`\`

Your \`main\` branch now has all your CSS work. Your journal has gone from plain text to a space-themed exploration log. That's a huge upgrade.

> **Hearthian Field Note**: Open your page in the browser one more time and just appreciate it. You built that. Every color, every font, every card — that's all you. Next lesson, we'll add more pages and a navigation bar so you can jump between planets. See you on Brittle Hollow. ⏳`,
    },
  ],
};

export default lessonData;
