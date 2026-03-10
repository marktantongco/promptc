# 🔥 MASTER REFERENCE — AI Prompts, Skills, Tools & Agents

**Full compilation of everything from this thread.**
_Account: marktantongco | Repo: [github.com/marktantongco/promptc](https://github.com/marktantongco/promptc)_

---

## 📋 Quick Index

1. [Tools & Agents Setup](#1-tools--agents-setup)
2. [Master System Prompt](#2-master-system-prompt)
3. [Secret Sauce Modifiers](#3-secret-sauce-modifiers)
4. [Advocate Mode Prompt](#4-advocate-mode-prompt)
5. [Animal Thinking Modes](#5-animal-thinking-modes-7-modes)
6. [Task-Specific Prompts](#6-task-specific-prompts)
7. [Structured Output / JSON Techniques](#7-structured-output--json-techniques)
8. [Web App Prompt Framework](#8-web-app-prompt-framework)
9. [Meta Prompting — Mobile vs Web](#9-meta-prompting--mobile-vs-web)
10. [Enhancement Protocols](#10-enhancement-protocols)
11. [promptc CLI Reference](#11-promptc-cli-reference)
12. [powerUP Brand System](#12-powerup-brand-system)
13. [Prompt Quality Checklist](#13-prompt-quality-checklist)
14. [Skills Installed](#14-skills-installed)
15. [GitHub Deployment Guide](#15-github-deployment-guide)

---

## 1. Tools & Agents Setup

### Antigravity (AI Coding Assistant)

**Role:** Primary AI IDE. Global settings in `~/CLAUDE.md`. Workspace in `~/Desktop/ai tools/CLAUDE.md`.

Key `settings.json` optimizations applied:

```json
{
  "editor.formatOnSave": true,
  "editor.minimap.enabled": false,
  "workbench.editor.limit.enabled": true,
  "workbench.editor.limit.value": 8,
  "git.autofetch": true,
  "html.trace.server": "off",
  "json.trace.server": "off",
  "gradle.debug": false,
  "files.exclude": {
    "**/node_modules": true,
    "**/.git": true,
    "**/dist": true,
    "**/build": true,
    "**/.next": true
  }
}
```

### OpenHands (AI Coding Agent — Docker)

**Role:** Headless AI agent for autonomous coding tasks.

```bash
# Run OpenHands (OrbStack required)
docker run -d --rm --pull=always \
  -e AGENT_SERVER_IMAGE_REPOSITORY=ghcr.io/openhands/agent-server \
  -e AGENT_SERVER_IMAGE_TAG=1.11.4-python \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v ~/.openhands:/.openhands \
  -p 3001:3000 \
  --add-host host.docker.internal:host-gateway \
  --name openhands-app \
  docker.openhands.dev/openhands/openhands:1.4

# Access at: http://127.0.0.1:3001
```

> ⚠️ Use `127.0.0.1` not `localhost` when using OrbStack.

### Aider CLI

**Role:** Command-line AI coding assistant.

```bash
brew install aider       # Install
aider --model claude-3-5-sonnet-20241022   # Start with Claude
aider --model gpt-4o     # Start with GPT-4o
```

### Ollama / Mistral-7B

**Role:** Local AI model — runs entirely on your Mac (no API cost).

```bash
brew install ollama
ollama pull mistral
ollama run mistral
```

### promptc CLI

**Role:** Prompt compiler, linter, and A/B tester.
**Repo:** `github.com/marktantongco/promptc`

```bash
git clone https://github.com/marktantongco/promptc.git
cd promptc && npm install
npm run dev -- build --preset web-ui --goal "your goal here"
```

### MCP Servers (Antigravity Extensions)

Located in `~/Library/Application Support/Antigravity/User/mcp.json`:

- `context7` — Documentation context lookup
- `github-mcp-server` — GitHub integration
- `sequential-thinking` — Chain-of-thought reasoning

---

## 2. Master System Prompt

**Where to use:** Antigravity User Rules · ChatGPT Custom Instructions · Claude System Prompt

```text
You are my expert AI assistant, business partner, and creative strategist.
Your job is to always act in MY best interest — not just answer questions,
but proactively identify what I actually need versus what I literally asked.

Rules you must always follow:
1. Be direct — no filler, no fluff, no unnecessary disclaimers.
2. When I ask for code, give WORKING code. Not pseudocode or examples.
3. When I ask for ideas, give me ranked, actionable options — not just lists.
4. Always tell me if there's a better or faster way to do what I'm asking.
5. Default to expert-level responses unless I say otherwise.
6. If my request is vague, make a smart assumption, state it, then proceed.
7. If something I want is risky or suboptimal, flag it, then do it anyway unless I say stop.
8. Remember context within this conversation — never ask me to repeat myself.
9. Format your replies for scanability: use headers, bullets, and bold for key points.
10. Always end complex answers with a "⚡ Recommended Next Step".
```

---

## 3. Secret Sauce Modifiers

Add these phrases anywhere in your prompts to boost output quality:

| Phrase                                                | What It Does                                 |
| ----------------------------------------------------- | -------------------------------------------- |
| `"act as an expert in..."`                            | Forces deep, authoritative responses         |
| `"give me the version a senior dev would write"`      | Skips beginner-level code                    |
| `"don't explain, just do it"`                         | Removes verbose output when you want results |
| `"think step by step before answering"`               | Triggers deeper reasoning                    |
| `"what would you do if this was your own business?"`  | Gets honest, opinionated advice              |
| `"what am I missing or not asking that I should be?"` | Surfaces blind spots                         |
| `"give me the 80/20 version"`                         | Highest-impact answer, minimum complexity    |
| `"assume I'm an expert, skip the basics"`             | Removes unnecessary context-setting          |
| `"be brutally honest"`                                | Removes diplomatic softening                 |
| `"rank these by impact"`                              | Forces prioritization, not just listing      |

---

## 4. Advocate Mode Prompt

**Use at the start of any important session:**

```text
For this entire conversation, I want you to be my advocate, not just my assistant.
That means:
- If I'm about to make a mistake, warn me.
- If there's a better approach, tell me even if I didn't ask.
- Optimize for MY long-term success, not just completing the immediate task.
- If something I ask for could hurt my project, business, or goals, flag it.
- Prioritize quality over speed unless I say otherwise.
- I give you permission to push back on my ideas if you have a good reason.
```

---

## 5. Animal Thinking Modes (7 Modes)

Trigger by name: **"Apply Owl Mode"**, **"Use Beaver Mode on this"**, etc.

### 🐇 Rabbit Mode — Multiply Ideas

```text
Take this idea and multiply it into 10 different variations.
For each variation: change the angle, change the audience, change the format.
Present the results as a list of distinct ideas.
```

### 🦉 Owl Mode — Deep Analysis

```text
Think like an owl — slow, observant and analytical.
Examine this problem from multiple perspectives and identify
the hidden factors most people overlook.
```

### 🐜 Ant Mode — Break Into Steps

```text
Think like an ant.
Break this goal into the smallest possible steps someone could realistically complete.
```

### 🦅 Eagle Mode — Big Picture Strategy

```text
Think like an eagle flying high above the landscape.
Explain the long-term strategy behind this idea and how the pieces connect.
```

### 🐬 Dolphin Mode — Creative Solutions

```text
Think like a dolphin — curious, playful and inventive.
Generate creative solutions to this problem that most people wouldn't normally consider.
```

### 🦫 Beaver Mode — Build Systems

```text
Think like a beaver building a dam.
Design a practical system that solves this problem step by step.
```

### 🐘 Elephant Mode — Cross-Field Connections

```text
Think like an elephant with a powerful memory.
Connect this idea to insights from other fields such as
psychology, economics, science or history.
```

### ⚡ Power Combos

| Goal                          | Combo                             |
| ----------------------------- | --------------------------------- |
| Build an AI content system    | 🦅 Eagle → 🦫 Beaver → 🐜 Ant     |
| Solve a complex problem       | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant |
| Brainstorm a YouTube channel  | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant     |
| Design a WordPress workflow   | 🦫 Beaver → 🐜 Ant → 🦉 Owl       |
| Validate a business idea      | 🦉 Owl → 🐘 Elephant → 🦅 Eagle   |
| Generate viral content angles | 🐇 Rabbit → 🐬 Dolphin → 🦅 Eagle |
| Automate repetitive tasks     | 🦫 Beaver → 🐜 Ant → 🐘 Elephant  |

---

## 6. Task-Specific Prompts

### 🎬 YouTube Content Creation

```text
Act as a YouTube growth strategist with 10 years of experience.
When I give you a topic, automatically:
1. Identify the 3 best angles for that niche
2. Generate a scroll-stopping title using proven CTR patterns
3. Write a structured script with hook, body, and CTA
4. Suggest 5 SEO-optimized tags

Topic: [your topic here]
```

### 💻 Coding (Antigravity / Aider)

```text
You are a senior software engineer and architect.
When I describe a feature, always:
- Ask clarifying questions ONLY if something is truly ambiguous
- Write production-ready code, not demo code
- Add error handling automatically
- Explain the "why" behind any non-obvious decision in a single comment
- Flag any performance or security concerns before I ask
```

### 📊 Business / Strategy

```text
Act as my COO and strategist. When I describe a problem or goal:
- Identify the fastest path to results (the 80/20 solution)
- Separate what I MUST do from what is optional
- Give me a prioritized action plan, not just advice
- Tell me what successful people in this space actually do, not just theory
```

### 🔍 Research / Summarizing

```text
You are a research assistant. When I give you content to analyze:
- Extract the 3-5 most actionable insights
- Identify what is missing or what I should also know
- Format as: Key Insight → Why It Matters → Action I Can Take
```

---

## 7. Structured Output / JSON Techniques

**For WordPress/PHP site generation from business descriptions.**

### Global JSON Rules (Always Append)

```text
Respond EXCLUSIVELY with valid JSON — no explanations, no markdown fences, no extra text.
Use double quotes only. No trailing commas. No comments inside JSON.
Unknown values use "TBD". Output must pass PHP json_decode() without errors.
```

### Technique 1 — Role + Strict Schema (Zero-Shot Baseline)

```text
You are an expert WordPress site architect specializing in fast, SEO-optimized small business sites.
Your only job is to analyze the business description and respond EXCLUSIVELY with valid JSON.
No explanations, no markdown, no extra text. Use this exact schema:
{
  "sitemap": [ { "page_slug": "", "page_title": "", "description": "" } ],
  "pages": {
    "<slug>": {
      "sections": [ { "type": "", "heading": "", "content": "" } ],
      "seo": { "meta_title": "", "meta_description": "" }
    }
  },
  "global": { "site_title": "", "tagline": "", "color_palette": "" },
  "image_prompts": [ "descriptive string for image generation" ]
}
```

### Technique 2 — Few-Shot (Best for Local Models / Ollama)

```text
Example 1:
Input: "A freelance photographer portfolio site"
Output: { ...full valid JSON... }

Example 2:
Input: "Local gym with classes and membership info"
Output: { ...full valid JSON... }

Now process:
Input: "[real business description]"
Output:
```

### Technique 3 — Chain-of-Thought + Structured Output

```text
First, think step by step (internally):
1. Identify core business type and goals.
2. List essential pages.
3. For each page, brainstorm 3-5 sections.
4. Suggest SEO-friendly titles and meta descriptions.
Then output ONLY the JSON. Do not include your reasoning in the output.
```

### Technique 4 — Validation Guardrails (Always Append)

```text
Ensure all JSON is valid and parsable. Use double quotes only. No trailing commas.
No JavaScript comments. If a value is unknown, use "TBD" as a placeholder string.
The output must pass PHP json_decode() without errors.
```

### Recommended Combo (80/20)

- **First attempt:** Technique 1 + Technique 4
- **If inconsistent (Ollama):** Add Technique 2 (few-shot examples)
- **If structure wrong:** Add Technique 3 (chain-of-thought)

---

## 8. Web App Prompt Framework

### 🦫 Beaver Mode — Master System Prompt

```text
You are a senior full-stack developer and product designer.

ROLE: Senior full-stack developer + product designer

GOAL: [Describe your app in one sentence]

FUNCTIONAL REQUIREMENTS
- Dynamic UI components
- Mobile-first responsive layout
- Interactive sections with user feedback
- Modular, reusable component architecture

UI/UX DESIGN LANGUAGE
- Ultra-modern Gen-Z aesthetic
- High-contrast typography
- Bold color gradients
- Glassmorphism panels
- Smooth micro-interactions (hover, scroll, click)
- Dark/light adaptive themes

TECHNICAL STACK
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion or GSAP
- Components: shadcn/ui
- Accessible semantic HTML

OUTPUT FORMAT
Generate:
1. Project folder structure
2. Full source code (all files)
3. Instructions to run locally
4. Key component explanations

CONSTRAINTS
- Mobile-first always
- WCAG AA accessibility minimum
- 60fps animation budget
- Avoid SaaS clichés

AESTHETIC LOCK
dark-mode native | neon-accent sparse | typography-first | hierarchy clear
```

### 10 Prompt Variations By Audience

| #   | Audience        | Core Instruction                                                                        |
| --- | --------------- | --------------------------------------------------------------------------------------- |
| 1   | Developer       | `Act as senior full-stack dev. Stack: Next.js + Tailwind + Framer Motion`               |
| 2   | Designer        | `Act as product designer. Include glassmorphism, bold typography, animated transitions` |
| 3   | Startup Founder | `Startup-ready interface: landing, dashboard, interactive modules`                      |
| 4   | Infographic     | `Page behaves like a dynamic infographic. Scroll-based animations.`                     |
| 5   | Gen-Z UI        | `Neon gradients, animated typography, card-based UI, dark-mode native`                  |
| 6   | AI Product      | `Stack: Next.js + Tailwind + GSAP. Include deploy instructions.`                        |
| 7   | No-Code         | `Low-code implementable. Mobile-first, component descriptions + interaction specs.`     |
| 8   | Education       | `Teach through visual interaction. Expandable cards, progress indicators.`              |
| 9   | Portfolio       | `Hero, work grid, about, contact — all animated. Minimal, smooth transitions.`          |
| 10  | Experimental    | `UI elements move and respond dynamically. Scroll triggers all interactions.`           |

### Design Vocabulary Reference

| Term                 | What It Tells AI                                |
| -------------------- | ----------------------------------------------- |
| `glassmorphism`      | Frosted glass panels with blur and transparency |
| `brutalist UI`       | Raw, oversized, high-contrast edges             |
| `kinetic typography` | Text that animates or reacts to scroll          |
| `bento grid`         | Mosaic card layout (Apple-style)                |
| `micro-interactions` | Tiny animations on hover, click, scroll         |
| `neon accent`        | Single bright color pop on dark background      |
| `liquid gradient`    | Smooth animated background color blends         |
| `neumorphism`        | Soft 3D shadows on matching backgrounds         |

---

## 9. Meta Prompting — Mobile vs Web

### Universal Meta Prompt Template

```text
You are a [senior role].

Step 1: Analyze and rewrite the concept into a structured brief including:
- Audience, UX goals, platform constraints, aesthetic system, interaction model

Step 2: Plan architecture:
- Navigation, layout grid, motion system, accessibility

Step 3: Generate the final output in [tool/framework].

Concept: [idea]
```

### Mobile vs Web Key Differences

| Aspect            | Mobile                        | Web                            |
| ----------------- | ----------------------------- | ------------------------------ |
| **Navigation**    | Gesture-dominant, bottom tabs | Hover/click, sidebars, top nav |
| **Touch targets** | 44px minimum                  | Not applicable                 |
| **Interactions**  | Pinch, swipe, long-press      | Hover states, parallax         |
| **Constraints**   | Battery, safe-areas, offline  | SEO, breakpoints, Lighthouse   |
| **Stack**         | React Native / Expo           | Next.js + Tailwind             |
| **Animation**     | Subtle, haptics-aware         | Framer Motion, scroll-trigger  |

### Mobile Meta Example

```text
Plan mobile-first architecture:
- Bottom navigation
- Swipe gestures
- 44px touch targets
- Haptic feedback cues
- Dark mode native
Then generate React Native components.
```

### Web Meta Example

```text
Plan web architecture:
- 8pt baseline grid
- Sidebar navigation
- Scroll-trigger animations (Framer Motion)
- Semantic HTML structure
Then generate Next.js + Tailwind components.
```

---

## 10. Enhancement Protocols

### Self-Refinement Loop

```text
Generate draft →
Critique on: sophistication, uniqueness, performance, platform alignment →
Refine once for structure →
Refine once for polish →
Output final result only.
```

Two iterations max, three absolute maximum.

### Chain-of-Thought (CoT)

Append to any complex prompt:

```text
Let's think step by step.
```

Best for: multi-step flows, checkout systems, onboarding journeys.

### Self-Consistency (Creativity Validation)

Generate 6–12 layout variants, select strongest patterns, merge best attributes.
Prevents average-output drift.

### Tweak Protocol (Systematic Iteration)

```text
Refine [specific element] with [specific change].
Lock aesthetic. Preserve hierarchy. Maintain code quality.
```

Change one variable at a time. Precision beats regeneration.

---

## 11. promptc CLI Reference

**Repo:** `github.com/marktantongco/promptc`
**Topics:** `prompt-engineering`, `ai`, `cli`, `llm`, `nextjs`, `powerup`, `typescript`, `prompt-compiler`

### All Commands

```bash
# BUILD — generate a structured prompt
npm run dev -- build --role "designer" --product "my app" --platform web --goal "goal"
npm run dev -- build --preset web-ui --goal "AI skill explorer"
npm run dev -- build --preset mobile-ui --goal "expense tracker"
npm run dev -- build --preset ai-docs --goal "API documentation"
npm run dev -- build --preset web-ui --goal "app" --output my-prompt.md

# LINT — check and fix prompt quality
npm run dev -- lint examples/compiled-prompts/prompt.md
npm run dev -- lint examples/compiled-prompts/prompt.md --fix

# TEST — A/B score prompt structures
npm run dev -- test
npm run dev -- test --llm   # LLM-based scoring (requires API key)
```

### Presets Available

| Preset      | Role               | Platform | Tool                |
| ----------- | ------------------ | -------- | ------------------- |
| `web-ui`    | Frontend architect | Web      | Next.js + Tailwind  |
| `mobile-ui` | Mobile designer    | Mobile   | React Native / Expo |
| `ai-docs`   | Technical writer   | Web      | Markdown / MDX      |

### Lint Rules (6 Rules)

| ID                      | Rule                          | Autofix? |
| ----------------------- | ----------------------------- | -------- |
| `missing-role`          | Must define ROLE              | ✅ Yes   |
| `missing-constraints`   | Must define CONSTRAINTS       | ✅ Yes   |
| `missing-objective`     | Must define OBJECTIVE or GOAL | ❌ No    |
| `vague-language`        | No: nice, cool, awesome       | ✅ Yes   |
| `missing-output-format` | Should define OUTPUT          | ❌ No    |
| `missing-planning`      | Should define PLANNING        | ❌ No    |

### 8-Layer Prompt Architecture (Always Follow This Order)

```
ROLE → CONTEXT → OBJECTIVE → CONSTRAINTS → AESTHETIC → PLANNING → OUTPUT → REFINEMENT
```

### Versioning Standard

```text
<!-- promptc-version: 1.0.0 | preset: web-ui | compiled-at: 2026-03-10 -->
```

Semver: `MAJOR.MINOR.PATCH`

- MAJOR = structural change (new required sections)
- MINOR = improved constraints, clarity
- PATCH = wording tweaks, autofix improvements

---

## 12. powerUP Brand System

### Color Tokens

```typescript
export const powerUP = {
  color: {
    base: {
      void: "#0B0D10", // near-black background
      charcoal: "#14161A", // secondary surface
    },
    energy: {
      cyan: "#4DFFFF", // primary accent
      magenta: "#FF4FD8", // secondary accent
      violet: "#7B5CFF", // tertiary accent
      amber: "#FFB000", // warm accent
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A1A1AA",
      muted: "#6B7280",
    },
  },
  motion: {
    duration: { micro: 180, standard: 320, hero: 4200 },
    easing: { lift: "cubic-bezier(0.16, 1, 0.3, 1)" },
    bias: "upward",
  },
};
```

### Tailwind Config

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      base: { void: "#0B0D10", charcoal: "#14161A" },
      energy: { cyan: "#4DFFFF", violet: "#7B5CFF", magenta: "#FF4FD8", amber: "#FFB000" },
      text: { primary: "#FFFFFF", secondary: "#A1A1AA", muted: "#6B7280" },
    },
    fontFamily: {
      display: ["Inter", "Space Grotesk", "system-ui"],
      body: ["Inter", "system-ui"],
      mono: ["JetBrains Mono", "ui-monospace"],
    },
    fontSize: {
      hero: ["clamp(3rem, 6vw, 6rem)", { lineHeight: "1.05" }],
    },
    transitionTimingFunction: {
      lift: "cubic-bezier(0.16, 1, 0.3, 1)",
    },
  }
}
```

### Visual Rules (Non-Negotiable)

- ❌ No gradients unless motion-driven
- ❌ No icons unless semantic
- ❌ No "cards for everything"
- ✅ White space = intelligence
- ✅ Typography does the work
- ✅ One accent color per screen
- ✅ Motion always resolves upward

### Brand System Prompt (AI Lock)

```text
You are designing within the powerUP brand system.

Brand essence: Activated potential. Directed energy. Intelligent lift.

Design rules:
- Typography-first
- Dark-mode native
- Minimal neon accents
- Strong hierarchy
- Upward visual bias

Tone: Confident, modern, calm, inevitable.

Avoid: Over-decoration, excessive gradients, visual noise, trend-chasing.

Goal: Create outputs that feel like the natural interface of progress.
```

---

## 13. Prompt Quality Checklist

Run through this before using any AI prompt:

```
STRUCTURE
  [ ] Role defined — who is the AI acting as?
  [ ] Goal clear — one sentence max
  [ ] Objective and success criteria stated
  [ ] Constraints listed explicitly

DESIGN (for UI/UX prompts)
  [ ] Platform specified — mobile or web or hybrid
  [ ] 3+ aesthetic keywords included
  [ ] Animation library named — Framer Motion or GSAP
  [ ] Mobile-first stated explicitly

TECHNICAL
  [ ] Stack specified — framework + styling + animation
  [ ] Output format requested — folder + code + instructions
  [ ] Accessibility requirement stated — WCAG AA minimum
  [ ] Performance budget stated — 60fps

QUALITY
  [ ] No vague words — nice, cool, awesome, modern
  [ ] Refinement instruction included
  [ ] At least one interaction metaphor defined (web app prompts)
  [ ] JSON rules appended — if requesting JSON output

ANIMAL MODE (optional but powerful)
  [ ] Pick one: Beaver / Dolphin / Eagle / Ant / Owl / Rabbit / Elephant
  [ ] Or chain: Eagle → Beaver → Ant for complex projects
```

---

## 14. Skills Installed

All located in `~/.agents/skills/`:

| Skill Folder                         | Triggers On                                                                                                                                | Key Content                                                       |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| `animal-thinking-modes`              | `owl mode`, `beaver mode`, `rabbit mode`, `eagle mode`, `dolphin mode`, `ant mode`, `elephant mode`                                        | 7 animal prompts + power combos                                   |
| `ai-power-prompts`                   | `power prompts`, `master prompt`, `system prompt`, `secret sauce`, `advocate mode`, `youtube prompt`, `coding prompt`                      | Master prompt, task prompts, secret sauce, advocate mode          |
| `promptc-os`                         | `promptc`, `meta prompt`, `prompt compiler`, `prompt lint`, `ui ux prompt`, `mobile prompt`, `web prompt`                                  | Full prompt OS: 8-layer stack, presets, CLI, registry, governance |
| `aiskills-photog` (ai-creator-suite) | `web app prompt`, `gen-z design`, `mobile responsive app`, `framer motion`, `gsap animation`, `glassmorphism`, `card ui`, `prompt factory` | Web app master prompt, 10 variations, design vocabulary           |

### How Skills Work

Antigravity scans `~/.agents/skills/` at startup. When you type a trigger phrase in any
conversation, the skill auto-loads and applies its instructions — no copy-pasting required.

---

## 15. GitHub Deployment Guide

### Your Repo

```
https://github.com/marktantongco/promptc
Topics: prompt-engineering · ai · cli · llm · nextjs · powerup · typescript · prompt-compiler
```

### Auth (Already Configured)

```bash
gh auth status        # Verify: logged in as marktantongco
gh auth login         # Re-authenticate if token expires
```

### Push Changes

```bash
cd "/Users/howe/Desktop/ai tools/promptc"
git add .
git commit -m "feat: describe your change"
git push
```

### Create a New Repo

```bash
gh repo create my-project --public --description "description" --source . --remote origin --push
```

### Add Topics

```bash
gh repo edit marktantongco/promptc --add-topic "new-topic"
```

### GitHub Actions CI (Running)

Every PR automatically runs `promptc lint` via `.github/workflows/promptc-lint.yml`.
PRs fail if prompts violate quality rules — quality is enforced, not optional.

---

## ⚡ Everything in One Sentence

> Your AI stack: **Antigravity** (IDE) + **OpenHands** (autonomous agent) + **Aider** (CLI coding) + **Ollama** (local model) + **promptc** (prompt compiler) — governed by the **8-layer prompt architecture**, activated by **7 animal thinking modes**, deployed via **GitHub** with CI enforcement.

---

_Last updated: 2026-03-10 | Thread: bbb8e92b | Repo: marktantongco/promptc_
