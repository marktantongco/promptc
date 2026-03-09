# promptc — The Prompt Operating System

> Prompts are no longer text. They are infrastructure.

promptc is an open, composable system for building, testing, versioning, and governing
prompts as first-class engineering artifacts.

---

## 🤔 What Problem Does This Solve?

Most AI prompts today are:
- **Vague** — "make a web app" gives inconsistent results
- **Unversioned** — nobody knows what changed or why it broke
- **Unreusable** — every project starts from scratch
- **Unmeasured** — you can't tell which prompt actually works better

**promptc fixes this** by treating prompts like code: structured, tested, versioned, reusable.

---

## 🐣 Beginner? Start Here (5 Minutes)

You don't need to understand everything. Just follow these steps:

### Step 1 — Install

```bash
# Make sure you have Node.js 18+ installed
node --version  # should say v18 or higher

# Clone this repo
git clone https://github.com/YOUR_USERNAME/promptc.git
cd promptc

# Install dependencies
npm install
```

### Step 2 — Build Your First Prompt

```bash
npm run dev -- build \
  --role "senior product designer" \
  --product "personal portfolio website" \
  --platform web \
  --goal "Create a stunning, minimal portfolio with smooth animations"
```

This generates a ready-to-use prompt in `examples/compiled-prompts/`.

### Step 3 — Use a Preset (even easier)

```bash
# Web app prompt
npm run dev -- build --preset web-ui --goal "AI skills dashboard"

# Mobile app prompt
npm run dev -- build --preset mobile-ui --goal "expense tracker app"
```

### Step 4 — Check Your Prompt Quality

```bash
npm run dev -- lint examples/compiled-prompts/prompt.md
```

If there are issues, fix them automatically:

```bash
npm run dev -- lint examples/compiled-prompts/prompt.md --fix
```

### Step 5 — See Which Prompt Structure Wins

```bash
npm run dev -- test
```

This shows you A/B score comparisons between different prompt structures.

### Step 6 — Copy the Prompt Into Your AI

Open the generated `.md` file in `examples/compiled-prompts/`, copy the content,
and paste it into **Claude**, **ChatGPT**, **Antigravity**, or any AI tool.

---

## 📁 Project Structure

```
promptc/
├── apps/
│   └── cli/                  # The command-line tool
│       ├── index.ts           # Main CLI entry
│       └── commands/
│           ├── build.ts       # Compiles prompts
│           ├── lint.ts        # Checks prompt quality
│           └── test.ts        # A/B scores prompts
│
├── packages/
│   └── presets/               # Ready-to-use prompt bundles
│       ├── mobile-ui.yaml     # For mobile app prompts
│       ├── web-ui.yaml        # For web app prompts
│       └── ai-docs.yaml       # For documentation prompts
│
├── examples/
│   └── compiled-prompts/      # Your generated prompts go here
│
└── .github/
    └── workflows/
        └── promptc-lint.yml   # Automatic quality checks on GitHub
```

---

## 🧱 The 8-Layer Prompt Architecture

Every good AI prompt has these 8 layers in order:

| # | Layer | What It Does |
|---|---|---|
| 1 | **ROLE** | Tells AI who to act as |
| 2 | **CONTEXT** | Product, audience, platform |
| 3 | **OBJECTIVE** | What success looks like |
| 4 | **CONSTRAINTS** | Quality guardrails |
| 5 | **AESTHETIC** | Design language |
| 6 | **PLANNING** | AI reasons before generating |
| 7 | **OUTPUT FORMAT** | What files to create |
| 8 | **REFINEMENT** | Self-critique before final answer |

**Missing any layer = worse output.** This is why vague prompts produce vague results.

---

## 🎯 The Three Layers Rule

When prompting AI for web apps, always cover:

```
FUNCTION   →  What does the app DO?
DESIGN     →  What does it LOOK and FEEL like?
TECHNOLOGY →  What STACK runs it?
```

Miss one → the AI guesses → output collapses.

---

## 🐾 Animal Thinking Modes

Use these frameworks to approach any problem:

| Mode | Animal | Best For |
|---|---|---|
| 🦫 **Beaver** | Build a system step-by-step | Process design, automation |
| 🐬 **Dolphin** | Generate creative ideas | Brainstorming, innovation |
| 🦅 **Eagle** | See the big picture | Long-term strategy |
| 🐜 **Ant** | Break into tiny steps | Project planning, execution |
| 🦉 **Owl** | Find hidden factors | Deep analysis, blind spots |
| 🐇 **Rabbit** | Multiply ideas | Content, angle exploration |
| 🐘 **Elephant** | Connect cross-field insights | Research, analogies |

**Example:** "Apply Beaver Mode to my web app prompt, then Ant Mode for steps."

---

## 🎨 Design Vocabulary (Tell AI Exactly What You Want)

| Word | What It Tells AI |
|---|---|
| `glassmorphism` | Frosted glass panels with blur and transparency |
| `brutalist UI` | Raw, oversized, high-contrast, intentional |
| `kinetic typography` | Text that animates or reacts to scroll |
| `bento grid` | Mosaic card layout (Apple-style) |
| `micro-interactions` | Tiny animations on hover, click, scroll |
| `neon accent` | One bright color pop on a dark background |
| `dark-mode native` | Designed for dark backgrounds first |

---

## 📋 10 Ready-to-Copy Prompt Variations

### For Developers
```
Act as a senior full-stack developer.
Generate a mobile-first interactive web app.
Stack: Next.js + Tailwind + Framer Motion
Style: Gen-Z design, animated components
Output: full project structure + source code.
```

### For Designers
```
Act as a digital product designer.
Design an ultra-modern interactive web app.
Include: bold typography, glassmorphism, animated transitions.
Output: component breakdown + design rationale.
```

### For Startup Founders
```
Create a startup-ready interactive web app.
Feel: premium, modern, mobile-first.
Include: landing page, dashboard, interactive modules.
```

### For Portfolio Sites
```
Create an interactive portfolio web app.
Design: ultra-modern, minimal, smooth transitions.
Include: hero, work grid, about, contact — all animated.
```

### For AI Products
```
You are an AI product engineer.
Generate a complete interactive web app: responsive + animated.
Stack: Next.js + Tailwind + GSAP
Provide: full code + deploy instructions.
```

---

## ✅ Prompt Quality Checklist

Before running any web app prompt:

- [ ] Role defined (who is the AI acting as?)
- [ ] Goal clear (one sentence max)
- [ ] Stack specified (framework + styling + animation)
- [ ] Design language described (3+ aesthetic keywords)
- [ ] Mobile-first stated explicitly
- [ ] Output format requested (folder + code + instructions)
- [ ] Constraints listed (accessibility, performance, no clichés)

---

## 🚀 Commands Reference

```bash
# Build a prompt
npm run dev -- build --role "designer" --product "my app" --platform web --goal "my goal"

# Build with a preset
npm run dev -- build --preset web-ui --goal "AI skill explorer"
npm run dev -- build --preset mobile-ui --goal "expense tracker"
npm run dev -- build --preset ai-docs --goal "API documentation"

# Save to a specific file
npm run dev -- build --preset web-ui --goal "my app" --output my-prompt.md

# Lint a prompt
npm run dev -- lint my-prompt.md
npm run dev -- lint my-prompt.md --fix

# A/B test prompt structures
npm run dev -- test
```

---

## 🔧 Deploy to GitHub (First Time)

```bash
# 1. Create a new repo on github.com/new (name it "promptc")

# 2. Initialize git in this folder
git init
git add .
git commit -m "feat: initial promptc release"

# 3. Connect to your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/promptc.git
git branch -M main

# 4. Push
git push -u origin main
```

GitHub Actions will automatically run `promptc lint` on every pull request.

---

## 🔑 GitHub Auth Fix (if push fails)

```bash
# Option A — Use HTTPS with token
git remote set-url origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/promptc.git

# Option B — Use SSH (recommended)
# 1. Generate key: ssh-keygen -t ed25519 -C "your@email.com"
# 2. Add to GitHub: Settings → SSH Keys → Add new
# 3. Test: ssh -T git@github.com
git remote set-url origin git@github.com:YOUR_USERNAME/promptc.git
```

⚠️ **Never paste GitHub tokens into chat.** Store them in `~/.ssh/` or GitHub Actions Secrets only.

---

## 📖 License

- **Core** (CLI, compiler, prompts): MIT — free forever
- **Pro** (registry, governance): Commercial license
- **Enterprise**: Contact us

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Make your changes
4. Run lint: `npm run dev -- lint`
5. Commit: `git commit -m "feat: describe what you added"`
6. Push: `git push origin feat/my-feature`
7. Open a pull request

---

## 💡 Philosophy

> **Models change. Prompts persist.**

promptc abstracts models so your thinking survives churn.
The system is open. Composable. Governable. The direction is inevitable.
