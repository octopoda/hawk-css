import type { Lesson } from "@/lib/constants";

const lessonData: Lesson = {
  slug: "10-photos",
  title: "Photos",
  description: "Add photo uploads so you can snap pictures from your phone.",
  order: 10,
  planet: "The Attlerock",
  planetEmoji: "📷",
  hawkBranch: "phase-10/photos",
  steps: [
    {
      title: "Create Your Branch",
      content: `## Branch Before You Snap

You're about to wire up **real photo uploads** — including straight from your phone camera. Same rhythm as every lesson: start on a **fresh Git branch** so your experiments stay organized and \`main\` stays clean.

### Open your terminal and go to your project

\`\`\`bash
cd ~/development/YOUR-REPO
\`\`\`

Swap \`YOUR-REPO\` for whatever you named your journal folder in Lesson 0. If you're not sure, run \`ls ~/development\` and spot your project.

### Create and switch to this lesson's branch

\`\`\`bash
git checkout -b phase-10/photos
\`\`\`

- **\`git checkout\`** — hop to another branch  
- **\`-b\`** — "create a new one while you're at it"  
- **\`phase-10/photos\`** — the name for *this* lesson's work  

You should see something like \`Switched to a new branch 'phase-10/photos'\`. That's your green light to build.

> **Hearthian Field Note**: Run \`git branch\` anytime. The branch with a \`*\` is the one you're standing on right now.`,
    },
    {
      title: "Supabase Storage",
      content: `## A File Cabinet in the Cloud

So far your notes live in **database tables** — great for text. Photos and videos are **files**, and Supabase has a whole feature built for that: **Storage**.

Think of Storage as a **file cabinet** in the sky. You create **buckets** (like labeled drawers) for different kinds of stuff: profile pics, attachments, lesson screenshots — whatever you want.

### Open the dashboard

1. Go to your project in the [Supabase dashboard](https://supabase.com/dashboard).  
2. In the sidebar, click **Storage**.  

### Create the \`photos\` bucket

1. Click **New bucket** (or equivalent — the UI might say "Create bucket").  
2. Name it **\`photos\`** (lowercase keeps life simple).  
3. Set it to **public** so your site can show images with a normal URL (no secret keys in the browser for every picture).  

Save it. You now have a place to **upload** image files and **read** them back with a link.

> **Hearthian Field Note**: Buckets are just a tidy way to separate file types. Later you could add another bucket for something totally different — same idea, different label.`,
    },
    {
      title: "Add a Photo Schema",
      content: `## Link Photos to Notes

Each photo should belong to **one** note — the note it was attached to when you saved. In the database world we use a **foreign key** to say: "this row points at *that* row over there."

Plain English: **\`note_id\`** on a photo row means *this photo goes with this specific note*.

### Create the \`photos\` table

In Supabase, open **Table Editor** → **New table**. Name it **\`photos\`**, then add these columns:

| Column | Type | Details |
|--------|------|---------|
| \`id\` | \`uuid\` | Primary key, default **gen_random_uuid()** (or let Supabase auto-generate UUIDs) |
| \`note_id\` | \`uuid\` | **Not null** — add a **foreign key** to \`notes.id\` |
| \`image_url\` | \`text\` | **Not null** — the public URL from Storage |
| \`created_at\` | \`timestamptz\` | Default **now()** |

When you set up the foreign key on \`note_id\`, point it at **\`public.notes\`** and column **\`id\`**. That way Supabase knows: every photo must hook onto a real note.

> **Hearthian Field Note**: If you delete a note later, you might want **ON DELETE CASCADE** on that relationship so orphan photos don't hang around — optional polish you can add when you're feeling fancy.`,
    },
    {
      title: "Add File Input to the Form",
      content: `## Let Hawk Pick a Picture

Your planet page already has a form for saving notes. Add a **file input** so you can choose an image — or on a phone, **open the camera**.

### The HTML

Drop something like this into your form (same general area as your text field and submit button):

\`\`\`html
<input type="file" accept="image/*" capture="environment" id="photo-input">
\`\`\`

What that does:

- **\`type="file"\`** — opens the file picker (or camera flow on mobile).  
- **\`accept="image/*"\`** — only image types, not random downloads.  
- **\`capture="environment"\`** — on many phones, this nudges the OS toward the **back camera** so it feels like "take a photo" instead of only browsing old files.  
- **\`id="photo-input"\`** — so your JavaScript can grab it with \`document.getElementById('photo-input')\`.

### Make it not ugly

Default file inputs are… a vibe nobody asked for. Wrap yours in a **label**, hide the raw input with CSS (\`opacity: 0\` + positioning, or \`display: none\` with a styled \`<label for="photo-input">\`), or use a button that triggers \`.click()\` on the hidden input — whatever matches your journal's look.

Keep it **big enough to tap on a phone** and **visually clear** ("Add photo" or a camera icon helps).

> **Hearthian Field Note**: \`capture\` behavior can vary a bit by browser and OS — that's normal. If one path opens the gallery instead of the camera, you're still good; the user can pick or snap from there.`,
    },
    {
      title: "Upload to Supabase Storage",
      content: `## From File to URL

When someone picks a file, you need to **upload** it to the \`photos\` bucket, then **store the public URL** in your \`photos\` table **after** you know the note's \`id\`.

### Upload helper

This builds a **unique filename** (so uploads don't overwrite each other), uploads the file, and returns the **public URL** — or \`null\` if something blew up:

\`\`\`javascript
async function uploadPhoto(file) {
  const fileName = \`\${Date.now()}-\${file.name}\`
  const { data, error } = await supabase.storage
    .from('photos')
    .upload(fileName, file)
  if (error) { alert('Upload failed!'); return null; }
  const { data: urlData } = supabase.storage
    .from('photos')
    .getPublicUrl(fileName)
  return urlData.publicUrl
}
\`\`\`

### Fold it into \`saveNote\` (or your equivalent)

Rough flow — adapt names to match *your* code:

1. Read the file input: \`const input = document.getElementById('photo-input')\` and \`input.files[0]\` (might be \`undefined\` if no photo).  
2. **If** there's a file, call \`const imageUrl = await uploadPhoto(file)\`. If that returns \`null\`, stop — don't save a half-broken note unless *you* want that behavior.  
3. **Insert the note** into \`notes\` like you already do, and make sure you **get the new row's \`id\` back** (Supabase can return inserted rows — use whatever pattern you used in Lesson 6).  
4. **If** you have an \`imageUrl\`, **insert** into \`photos\`:

\`\`\`javascript
await supabase.from('photos').insert({
  note_id: newNoteId,
  image_url: imageUrl,
})
\`\`\`

5. Clear the file input and reload notes so the UI updates.

> **Hearthian Field Note**: If your project uses **Row Level Security**, add policies for \`photos\` the same way you did for \`notes\` — insert for logged-in (or anon) users as your app expects, and select so you can read them back.`,
    },
    {
      title: "Display Photos in Notes",
      content: `## Show What You Captured

Loading notes isn't enough anymore — you want **each note's photos** too. Two common approaches:

1. **Two queries**: load notes, then load photos where \`note_id\` is in your list of note ids.  
2. **One query with a join**: if you're comfortable with SQL views or PostgREST nested selects, you can sometimes pull notes **and** related photos in one go.

Pick what fits your current setup; the goal is: **for each note, you know its image URLs**.

### Render images

When you build HTML for a note, if that note has photos, add \`<img>\` tags:

\`\`\`html
<img src="THE_PUBLIC_URL" alt="Note attachment" loading="lazy">
\`\`\`

### CSS that keeps layouts happy

\`\`\`css
.note-photos img {
  max-width: 100%;
  border-radius: 8px;
}
\`\`\`

**Bonus level-up**: show **thumbnails** in the list (smaller \`max-width\` / fixed height with \`object-fit: cover\`), and when Hawk taps one, show the **full-size** version in a simple overlay or new focus state. That feels *chef's kiss* on mobile.

> **Hearthian Field Note**: \`loading="lazy"\` asks the browser to defer off-screen images — handy once you have lots of notes with pictures.`,
    },
    {
      title: "Final Push — You Did It!",
      content: `## You Ship. You Win. 🎉

This is the **last lesson** of Outer Wilds Academy — and that means it's time to **merge your work** and take a second to see how far you've come.

### Git: add, commit, push, merge

\`\`\`bash
git add .
git status
git commit -m "Add photo uploads with Supabase Storage"
git push -u origin phase-10/photos
\`\`\`

On GitHub (or wherever your repo lives), open a **pull request** from \`phase-10/photos\` into \`main\`, review the diff, merge, and let Vercel (or your host) deploy. **Test on your phone** — snap a photo, save a note, refresh: your future self should see that moment preserved.

### Look at what you built

You started with **no code** — and now you're running a **real web app** on the internet:

- **HTML** for structure, **CSS** for a look that fits your style, **JavaScript** for buttons, forms, and logic that actually *does* things.  
- A **database** for notes, full **CRUD**, and updates that feel **live**.  
- **Deployment** so anyone with a link can visit — plus **responsive design** so it feels right on a tiny screen or a big monitor.  
- **Photo uploads**, including from a **phone camera**, wired through **Supabase Storage** and your own \`photos\` table.

That's not a toy project. That's the same **building blocks** real teams use every day.

### Skills in your pack

You've touched **HTML**, **CSS**, **JavaScript**, **Git**, **npm**, **Vite**, **Supabase**, **Vercel**, and **responsive design**. That's a serious starter kit.

### Where you could wander next (totally optional)

- **More features**: search, categories, favorites, dark mode, whatever sounds fun.  
- **Bigger tools**: dip into **React** or another framework when you're curious — you'll recognize half the ideas already.  
- **Something brand new**: a game helper, a club website, a silly app for friends — you've proven you can **start** and **finish**.

Hawk — **congratulations.** You stuck with it, lesson after lesson, and built something **yours** end to end. That's rare. Be proud, show it off, and keep building.

> **Hearthian Field Note**: The best coders are the ones who **keep going** after the tutorial ends. You're already one of them.`,
    },
  ],
};

export default lessonData;
