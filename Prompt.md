# Educational HTML & CSS Site — Build Prompt

## 1. Project Overview
I am building a step-by-step educational jouney for my son to learn HTML, CSS, Javascript, Github, and deployment of websites.  Think code academy but tailored for him and his interest that allow him to actually deploy a website and have it save information for him based on a game he is playing.  So you are creating him to have a step-by-step phasing of building his own site about one of the videos games he is currently playing called "Outer Wilds" (https://www.mobiusdigitalgames.com/outer-wilds.html). Please start by researching this game and understand the loop sequence the name of the planets and some of the design aspects and assets of the game like characters or historical context of the game like the Naomi. 

IMPORTANT:  Do NOT add any spoilers to the website he is building.  The important part of this game is the exploration so if you review something that is a spoiler or teaches him to get to a certian part of the game you need to ignore it as that will be added by him later. 

Each phase defined below will need to lead him step by step to get to the deliverable and then deploy to github.  He needs to be able to view each step in his browser or on his phone (defined in the phases) then he needs to be led through database schemas, CRUD, mobile responiveness, and finally a working site that he can use. 

He needs a hompage with a table of contents of the lesson that he can work through.  Each lesson needs to have a description but he can only move through the phases by completing the phases.  Meaning he cannot skip to phase 3 until he has finished phase 1.  You can use supabase like he is going to to keep the data structure. 

Final Deliverable:  You will build me a application in Next.js that I can deploy to Vercel and connnect to my own domain that will allow him to learn and build his own application. 



### 1.1 Student Profile
- **Name:** Hawk
- **Age:** 13
- **Prior experience with code:** None,  maybe a few videos on HTML and CSS from Youtube.  Start from the beginning. 
- **Learning style preference:** He is visual with a hands on.  He will want to actually code and see result quickly or will get bored. 
- **Interests / hobbies:** He loves video games, silksong, hallowknight, fortnite, helldivers, minecraft. 

### 1.2 Goal for the Finished Site
- **Site topic / theme:** He is currently playing Outer wilds and says "I have completed a lot but know so little."  I would like to create a website that he can view each planet including the comet and the sun station in Outwilds and add notes about what he learned from each of those planets, this could include characters on the planets, noami technology, shortcuts to points of interest, and goals of the planet for the overall picture of beating the game
- **Target pages (list):** Home (overall goals and recent entries), One page for each planet/comet, a timer page that he can start and watch a timer count down from 22 minutes since that is the sequence
- **Must-have features:** Must be desktop and mobile friendly for an iphone 13 in safari.  Must have a countdown timer that he can view on every page. Must have notes that he can take and will save, and must have recent notes. The site needs to be protected with a simple password **Outerwilds26!** that saves in his localstorage so he is protected from internet trolls but doesn't have to enter the password everytime. 
- **Nice-to-have features:**  It would be nice if he could add photos to his notes by taking a picture with his phone. There are things in the game that require you to memorize an image and that could be helpful to him. 

### 1.3 Tech Constraints
- **Domain / subdomain (if any):** We are going to use Vercel free tier,  and I have a domain that I will create the subdomain hawk.2721west.com to point him to a simple domain. The Vercel setup needs to be included in the lessons. 
- **Database preference:**  Supabase free tier is fine.  the setup of the database needs to be included in the lessons. 
- **What data needs to be stored?** His notes on his journey and photos are what need to be stored.  This could include pictures. 
- **Design Considerations**  Please view the website https://www.mobiusdigitalgames.com/outer-wilds.html for information on the game and any design considerations.  
- **Authentication needed?** Yes.   The site needs to be protected with a simple password **outerwilds** that saves in his localstorage so he is protected from internet trolls but doesn't have to enter the password everytime.
- **Any libraries/frameworks allowed?** Lets start with vanilla HTML, CSS, and javascript. Libraries are okay for later in the lesson phases for more complex things like the photos or timer if needed.  

---

## 2. Curriculum & Lesson Planning

> Each phase becomes a **GitHub branch** (`phase-1/…`, `phase-2/…`, etc.) and a **PR** merged into `main`.
> Fill in the lesson goals or accept the defaults. Agents will create the branch, build the code,
> open a PR with explanatory comments, and merge when he is happy.  There will be no approval as he is the only one working on it.   So PRs might not even be necessary. 

0 - Lessonunt and IDE and foundations. 
- **Branch name:** - NA
- **Lesson Objectives** -  Get him the accounts he needs to be able to run this.  That would include a IDE download for Mac (Cursor), a terminal download (iterm), and a Github account. These should all be the free accounts and we need to remind him that each account and password needs to be in the 1password shared vault. 
- **Deliverables** - He needs to create a repo on github, setup for a Mac and node, connect an ssh key, then have a local copy in a ~/development folder that is linked to the origin so he can add PRs and send them to the.  He should be able to navigate to the directory using iterm and start his IDE by using the command `cursor .` 

### Lesson 1 — HTML Foundations
- **Branch name:** `phase-1/html-foundations`
- **Lesson objectives:** 
  - Default: page structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`), headings, paragraphs, lists, images, links
- **Deliverable:** A single home page with the structure for the site and a few assets, navgation setup should include 
    - Timber Hearth: The starting planet, home to the Hearthians, characterized by forests, geysers, and a cozy atmosphere.
    - Hourglass Twins (Ash Twin & Ember Twin): Binary planets that exchange sand throughout the loop. Ash Twin is barren with ancient technology, while Ember Twin is a rocky desert with expansive, dangerous cave systems.
    - Brittle Hollow: A crumbling planet with a black hole at its center, surrounded by icy, volcanic moons (Hollow's Lantern).
    - Giant's Deep: A gas planet with massive oceans, intense cyclones that throw islands into space, and thick atmosphere.
    - Dark Bramble: A dangerous, space-bending, thorny planet that acts as a labyrinthine dimension.
    - The Quantum Moon: A mysterious, elusive moon that changes location based on the rules of quantum imaging.
    - The Interloper: An icy, wandering comet with dangerous secrets.
    - Sun Station: The mysterious abandoned station revolving around the Sun. 
    - Countdown timer: a timer for the 22 minute loop where the sun explodes.
- **Inline comments style:** Minimal comments. Maybe include a comment for TODOs around navigation so he can see what the todo structure in the IDE can do for him. 

### Lesson 2 — CSS Basics
- **Branch name:** `phase-2/css-basics`
- **Lesson objectives:** 
  - Default: colors, fonts, box model, classes vs IDs, linking a stylesheet
- **Deliverable:**  style.css linked to index.html; page is now styled with a color palette and readable typography
- **Color palette / design direction:** let the agent pick based on the theme, his favorite color is blue. 

### Lesson 3 — Multi-Page Site & Navigation
- **Branch name:** `phase-3/multi-page-nav`
- **Lesson objectives:** creating multiple HTML files, shared navigation bar, relative links, basic page layout with CSS grid/flexbox.  Planet pages will need a notes section that displays the notes and a form that allows him to enter new notes with a button to sumbmit. The current notes will have to be in by HTML and the form submit won't actually do anything so we can comment it with a TODO. A timer page that doesn't have anything on it but a heading for "count down timer"
- **Deliverable:** All target pages working in navigation and ability to add his own notes into the notes section with a form for each page. 

### Lesson 4 - Workflow Setup
- **Branch name:** `phase-4/workflow-setup`
- **Lesson objectives:**  Now that he has the basic setup he needs to ability to work faster.   We need to setup vite and a npm based workflow that allows him to view the site on a port and have it hot reload on any HTML, CSS, and JS files that are saved. 
- **Deliverables:** - A workflow for hot reloading, viewing the site in localhost:3000 and viewing the site on mobile using his IP address:3000. He should have the proper git ignore to not send anything like node_modules 

### Lesson 5 — Interactivity & JavaScript Basics
- **Branch name:** `phase-5/interactivity`
- **Lesson objectives:** Button click handlers, DOM manipulation, toggling classes, simple form validation
- **Deliverable:** This lesson should focus on the timer and adding the countdown timer so that he can time the loops of the game. The game loop is 22 minutes so h

### Lesson 6 — Database Integration
- **Branch name:** `phase-6/database`
- **Lesson objectives:** What a database is (conceptual), what a library is (conceptual), connecting front-end to a hosted DB, reading/writing data.  You will need to help him setup a a supabase free account on supabase (remind him to store the password in 1password) and get it connected to his application. 
- **Deliverable:** He should be able to navigate to the planets page and enter his notes and submit.  This should include setting up the schema for the database.   In the end he should be able to refresh his page and now see his notes for each planet. This should take over the manual notes he was entering during phase 3 and they should all be driven by the database now. 
- **API / serverless function approach:** let agent decide

### Lesson 7 — CRUD, AJAX and component updates
- **Branch name:** `phase-6/CRUD`
- **Lesson objectives:** Learning how to handle UD of CRUD and then component updates using AJAX techniques that once he makes a database change the website should reflect it through javascript changes without him having to refresh the page.  Lastly how to add additional view only of all the notes. 
- **Deliverable:**  He should have a edit and delete ability on his notes for each planet.  When he makes a change (creating, updating or deleting) he needs to see the change reflect on the page without a refresh, and last he should have a new section on the hpmage page called "Recent notes" that include the last 5 notes he has created from any planet page.
- **API / serverless function approach:** let agent decide

### Lesson 8 — Deployment to Vercel
- **Branch name:** `phase-8/deployment`
- **Lesson objectives:**  what hosting is, connecting GitHub to vercel, environment variables, custom domain (have him complete this with his Dad)
- **Vercel team/account:**  You will need him to setup an Vercel account and put the passwords in 1password.  He will also need to be directed to set up connections through the CLI so that he can deploy. 
- **Environment variables needed:** Agent should list them and help him find or create them in the .env file. 

### Lesson 9 — Responsive Design (Mobile + Desktop)
- **Branch name:** `phase-9/responsive-design`
- **Lesson objectives:**  viewport meta tag, media queries, flexbox, responsive images, mobile-first approach
- **Deliverable:**  Site looks good on phones (375px), tablets (768px), and desktop (1200px+) through the desktop browser viewer and through the IP address on his phone.  Site should NOT be deployed at this time. 
- **Breakpoints to target:** Use agent defaults: 375px, 768px, 1200px
### Lesson 10 — Photos
- **Branch name:** `phase-8/photos`
- **Lesson objectives:** Add the library and functionality to add a photo from his mobile camera to the notes.
- **Deliverable:** Should be able to add a photo from his iphone camera directly to the notes so he can take pictures of his game. 


## 3. Repository & Git Strategy

- **GitHub repo name:** Have him decide the name
- **GitHub org or personal account:** He will sign up for it. 
- **Default branch:** `main`
- **Branching convention:** `phase-{N}/{short-description}` (pre-filled above, change if desired)
- **PR merge strategy:** let agent decide and explain to Hawk in simple terms
- **Who reviews PRs?** Auto-merge after agent self-review
- **Commit message style:** Simple descriptive messages
- **Should agents create a README per phase?** No

---

## 4. Agent Execution Instructions for Learning Platform

> These instructions tell Cursor cloud agents *how* to operate. Edit only if you want to change the workflow.

### 4.1 Workflow 
1. **Create branch** from `main` using the branch name defined above.
2. **Research sub-agent** (if needed): spawn a sub-agent to look up best practices, library docs, or design references before coding.
3. **Build**: write all code for the phase deliverable, including inline lesson comments.
4. **Self-review**: run linters, check for accessibility, verify responsive behavior where applicable.
5. **Commit & push** with clear commit messages using gh cli
6. **Open PR** to `main` with:
   - A summary of what was built.
   - Screenshots or descriptions of what to look for in the browser.
7. **Wait for review** Alert the user and wait for review of the PR.  I will merge them myself. 

### 4.2 Sub-Agent Triggers
> Define when a phase should spin up a research or helper sub-agent.
- **Design research:** Research color palettes and font pairings that match the theme
- **Database/Deployment/Workflow setup:** Research libraies, connection and UI traversing need to setup and connect to external accounts and build node workflows. 
- **Responsive patterns:** gather examples of mobile nav patterns (hamburger, slide-out)
- **Custom triggers:** Reasearch the game, outer wilds and what needs to be added to the lessons WITHOUT ANY SPOILERS.


## Standards for Lessons


### 4.3 Code Standards For Lessons
- **HTML:** Semantic HTML5, no deprecated tags, all images must have alt text
- **CSS:** External stylesheet only (no inline styles except where teaching inline for comparison), BEM naming optional
- **JavaScript:** Vanilla JS, ES6+, no jQuery
- **File structure:** [FILL — or accept default below]
  - Default:
    ```
    /
    ├── index.html
    ├── planets/
    ├──     {planet-name}.html
    ├── assets/ 
    |   └── css/
    │       └── style.css
    |   └──js/
    │       └── main.js
    |   └──images/
    ├── vercel/
    │   └── functions/    (serverless functions if needed)
    └── README.md
    ```
- **Density for teaching:**  "Moderate — explain new concepts only" 


## 5. Design & Content

### 5.1 Visual Design
- **Overall vibe:** "Fun and colorful, and follows the game" 
- **Font preferences:** "Google Fonts — pick something playful for headings, readable for body"
- **Imagery source:** Agent can useroyalty-free sources or Hawk can provide from website
- **Logo / branding:**  None needed

### 5.2 Content
- **Who writes the copy?** Agent should write placeholder copy matching the theme, if there is question please prompt the user" 
- **Tone of voice:** "Casual and fun, first person"

---

## 6. Deployment & Environment

### 6.1 Vercel Configuration
- **Build command:** npm run build
- **Publish directory:** /dist/
- **Vercel Functions directory:** vercel/functions
- **Environment variables to set:** Let the agent decide what is needed. 

### 6.2 Database Setup
- **Provider:**  Supabase Free account
- **Tables / collections needed:** Let the agent decide the schema based on a simple note taking application for planets visited. 
- **Row-level security / access rules:**  Public can insert but site should be behind password protected so public cannot access without password. 
- **Seed data needed?** No

---

## 7. Success Criteria

> How do you know the project is "done"? Check all that apply and add your own.

- [ ] All phases merged to `main` via PRs
- [ ] Site is live on Vercel and loads on mobile and desktop
- [ ] Database stores and retrieves data correctly
- [ ] Code contains educational comments for each new concept introduced
- [ ] README documents what was learned in each phase
- [ ] Lighthouse scores > [FILL — target number] on all categories
- [ ] [FILL — any other criteria]

---

## 8. Notes & Special Requests

> Anything else the agents should know? Put it here.
- My son is colorblind, avoid light blue/gray distinctions"
