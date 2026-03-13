# AI Prompt Engineering Master Reference

> **The complete reusable prompt library for AI practitioners.**
> Covers prompt architecture, thinking modes, enhancement protocols, structured output, web app generation, brand systems, design vocabulary, typography, and quality scoring.

[![promptc](https://img.shields.io/badge/promptc-OS-blueviolet)](https://github.com/marktantongco/promptc)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/marktantongco/promptc)](https://github.com/marktantongco/promptc/stargazers)

---

**Version:** v2026.3  
**Framework:** promptc OS

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Master System Prompt](#2-master-system-prompt)
3. [Advocate Mode](#3-advocate-mode)
4. [Secret Sauce Modifiers](#4-secret-sauce-modifiers)
5. [8-Layer Architecture](#5-eight-layer-prompt-architecture)
6. [Animal Thinking Modes](#6-animal-thinking-modes)
7. [Meta Prompting Framework](#7-meta-prompting-framework)
8. [Enhancement Protocols](#8-enhancement-protocols)
9. [Structured Output Techniques](#9-structured-output--json-techniques)
10. [Web App Framework](#10-web-app-prompt-framework)
11. [powerUP Brand System](#11-powerup-brand-system)
12. [Design Vocabulary](#12-design-vocabulary)
13. [Typography](#13-typography)
14. [Prompt Templates](#14-prompt-templates)
15. [Prompt Lint Rules](#15-prompt-lint-rules)
16. [Quality Checklist](#16-prompt-quality-checklist)
17. [Scoring Dimensions](#17-prompt-scoring-dimensions)

---

## 1. Quick Start

### Install & Get Started

```bash
bash -c "$(curl -fsSL https://raw.githubusercontent.com/marktantongco/promptc/main/install.sh)"
```

**Manual Installation**

```bash
# Download MASTER_REFERENCE.md
curl -sL "https://raw.githubusercontent.com/marktantongco/promptc/master/MASTER_REFERENCE.md" > MASTER_REFERENCE.md

# Add to AI instructions
echo "Read MASTER_REFERENCE.md and apply the 8-Layer Architecture" >> .cursorrules
```

### Quick Reference — Add to AI Instructions

```
Before generating code, read MASTER_REFERENCE.md and apply the 8-Layer Architecture.
```

---

## 2. Master System Prompt

**When to use:** Paste into any AI's User Rules / Custom Instructions / System Prompt field.

```
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

## 3. Advocate Mode

**When to use:** Start of any important session where you want the AI to push back, protect your interests, and optimize for long-term success.

```
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

## 4. Secret Sauce Modifiers

Append any of these phrases to boost output quality instantly:

| Modifier | What It Makes AI Do |
|----------|-------------------|
| `act as an expert in [field]` | Forces deep, authoritative responses |
| `give me the version a senior dev would write` | Skips beginner-level output |
| `don't explain, just do it` | Removes verbose preambles |
| `think step by step before answering` | Triggers deeper reasoning chain |
| `what would you do if this was your own business?` | Gets honest, opinionated advice |
| `what am I missing or not asking that I should be?` | Surfaces blind spots |
| `give me the 80/20 version` | Highest impact, minimum complexity |
| `assume I'm an expert, skip the basics` | Removes redundant context |
| `be brutally honest` | Removes diplomatic softening |
| `rank these by impact` | Forces prioritization, not listing |

---

## 5. Eight-Layer Prompt Architecture

**The universal structure. Use all 8 layers for production-quality outputs.**

```
ROLE → CONTEXT → OBJECTIVE → CONSTRAINTS → AESTHETIC → PLANNING → OUTPUT → REFINEMENT
```

| Layer | Purpose | Missing It Causes |
|-------|---------|------------------|
| **01 Role** | Who the AI acts as | Generic, shallow responses |
| **02 Context** | Product, audience, platform | Misaligned output |
| **03 Objective** | What success looks like | Aimless generation |
| **04 Constraints** | Quality guardrails | Mediocre, unconstrained output |
| **05 Aesthetic** | Design language / tone | Visually dull or off-brand |
| **06 Planning** | Reason before generating | Structural mistakes |
| **07 Output** | Exact format to deliver | Incomplete or disorganized files |
| **08 Refinement** | Self-critique before final | First-draft quality only |

### Full Template

```
ROLE
You are a [expert role].

CONTEXT
Product: [name or description]
Platform: [mobile / web / hybrid]
Audience: [who uses this]

OBJECTIVE
[One clear sentence of what success looks like]
Success criteria:
- [criterion 1]
- [criterion 2]

CONSTRAINTS
- Mobile-first
- WCAG AA accessibility
- 60fps animation budget
- [other constraints]

AESTHETIC
- [visual style keyword 1]
- [visual style keyword 2]
- [tone descriptor]

PLANNING (complete this before generating)
1. Define information architecture
2. Define navigation model
3. Define layout and grid
4. Define interaction and motion logic
5. Validate accessibility and performance plan

OUTPUT FORMAT
Generate:
1. [file or artifact type]
2. [second deliverable]
3. [instructions or explanation]

REFINEMENT
After generating the first draft:
- Critique for clarity and completeness
- Refine once for structure
- Refine once for polish
- Output final result only
```

---

## 6. Animal Thinking Modes

**Trigger by name:** _"Apply Owl Mode"_, _"Use Beaver Mode on this"_, _"Think like an Eagle"_

| Animal | Mode | Purpose |
|--------|------|---------|
| 🐇 | Rabbit | Multiply Ideas |
| 🦉 | Owl | Deep Analysis |
| 🐜 | Ant | Break Into Steps |
| 🦅 | Eagle | Big Picture Strategy |
| 🐬 | Dolphin | Creative Solutions |
| 🦫 | Beaver | Build Systems |
| 🐘 | Elephant | Cross-Field Connections |

### Individual Mode Templates

#### 🐇 Rabbit — Multiply Ideas

```
Take this idea and multiply it into 10 different variations.
For each variation: change the angle, change the audience, change the format.
Present the results as a list of distinct ideas.
```

#### 🦉 Owl — Deep Analysis

```
Think like an owl — slow, observant and analytical.
Examine this problem from multiple perspectives and identify
the hidden factors most people overlook.
```

#### 🐜 Ant — Break Into Steps

```
Think like an ant.
Break this goal into the smallest possible steps someone could realistically complete.
```

#### 🦅 Eagle — Big Picture Strategy

```
Think like an eagle flying high above the landscape.
Explain the long-term strategy behind this idea and how the pieces connect.
```

#### 🐬 Dolphin — Creative Solutions

```
Think like a dolphin — curious, playful and inventive.
Generate creative solutions to this problem that most people wouldn't normally consider.
```

#### 🦫 Beaver — Build Systems

```
Think like a beaver building a dam.
Design a practical system that solves this problem step by step.
```

#### 🐘 Elephant — Cross-Field Connections

```
Think like an elephant with a powerful memory.
Connect this idea to insights from other fields such as
psychology, economics, science or history.
```

### Mode Chains (Power Combos)

| Goal | Mode Chain | Best For |
|------|------------|----------|
| Build AI Content System | 🦅 Eagle → 🦫 Beaver → 🐜 Ant | Automated content pipelines, AI blogs |
| Solve Complex Problem | 🦉 Owl → 🐬 Dolphin → 🐘 Elephant | Product design, breakthrough features |
| Brainstorm Product | 🐇 Rabbit → 🦅 Eagle → 🐜 Ant | Product ideation, channel selection |
| Design Workflow | 🦫 Beaver → 🐜 Ant → 🦉 Owl | Automation scripts, SOPs |
| Validate Business | 🦉 Owl → 🐘 Elephant → 🦅 Eagle | Startup validation, venture assessment |
| Generate Viral Content | 🐇 Rabbit → 🐬 Dolphin → 🦅 Eagle | Social media, marketing campaigns |

---

## 7. Meta Prompting Framework

**Purpose:** Makes AI analyze and restructure any vague concept into a structured brief before generating.

### Universal Meta Prompt Template

```
You are a [senior role].

Step 1: Analyze and rewrite the concept into a structured brief including:
- Target audience and their goals
- UX objectives
- Platform constraints
- Aesthetic system
- Interaction model

Step 2: Plan the architecture:
- Navigation model
- Layout grid
- Motion and animation system
- Accessibility plan

Step 3: Generate the final output in [tool or framework].

Concept: [your idea]
```

### Mobile Meta Prompt

```
Plan mobile-first architecture:
- Bottom navigation with gesture support
- 44px minimum touch targets
- Swipe gesture patterns
- Haptic feedback cues
- Safe-area insets handled
- Dark mode as default
Then generate [React Native / Expo] components with full source code.
```

### Web Meta Prompt

```
Plan web architecture:
- 8pt baseline grid
- Responsive breakpoints: 375px, 768px, 1280px, 1920px
- Navigation: [top nav / sidebar / hybrid]
- Scroll-trigger animations via Framer Motion
- Semantic HTML structure
- SEO meta tags included
Then generate Next.js + Tailwind components with full source code.
```

### Mobile vs Web Differences

| Aspect | Mobile | Web |
|--------|--------|-----|
| Navigation | Gesture-dominant, bottom tabs | Hover/click, sidebar, top nav |
| Touch | 44px targets minimum | Not applicable |
| Interactions | Pinch, swipe, long-press | Hover states, parallax scroll |
| Constraints | Battery, safe-areas, offline | SEO, Lighthouse score |
| Stack | React Native / Expo | Next.js + Tailwind |
| Animation | Subtle, haptics-aware | Framer Motion, scroll-trigger |

---

## 8. Enhancement Protocols

### Self-Refinement Loop

```
Generate draft →
Critique on: sophistication, uniqueness, performance, platform alignment →
Refine once for structure →
Refine once for polish and consistency →
Output final result only.
```

> Two refinement iterations max. Three absolute maximum. Never re-generate from scratch.

### Chain-of-Thought (CoT)

Append to any complex prompt:

```
Let's think step by step.
```

**Best for:** multi-step flows, system design, checkout flows, onboarding journeys.

### Self-Consistency (Creativity Validation)

```
Generate [6-12] layout/approach variants.
Identify the strongest structural patterns across all variants.
Merge the best attributes into one final output.
```

**Best for:** preventing average-output drift when you need genuinely creative results.

### Tweak Protocol (Systematic Iteration)

```
Refine [specific element] with [specific change].
Lock aesthetic. Preserve hierarchy. Maintain code quality.
Do not change anything else.
```

**Best for:** Change one variable at a time. Precision beats full regeneration every time.

### Prompt Diff (Version Comparison)

```
Compare Prompt A and Prompt B.
For each, score on: clarity, constraints, predictability, output specificity.
Explain what changed between versions and why one performs better.
```

---

## 9. Structured Output / JSON Techniques

### Global JSON Rule

> Always append when requesting JSON:

```
Respond EXCLUSIVELY with valid JSON — no explanations, no markdown fences, no extra text.
Use double quotes only. No trailing commas. No comments inside JSON.
Unknown values use "TBD". Output must pass JSON.parse() without errors.
```

### Technique 1 — Role + Strict Schema (Zero-Shot Baseline)

```
You are an expert WordPress site architect.
Analyze the business description and respond EXCLUSIVELY with valid JSON.
Use this exact schema:
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
Business description: [input]
```

### Technique 2 — Few-Shot Examples (Best for Local Models)

```
Example 1:
Input: "A freelance photographer portfolio site"
Output: { ...valid JSON... }

Example 2:
Input: "Local gym with classes and membership info"
Output: { ...valid JSON... }

Now process:
Input: "[real business description]"
Output:
```

### Technique 3 — Chain-of-Thought + Structured Output

```
First, think step by step internally:
1. Identify core business type and goals.
2. List essential pages.
3. For each page, identify 3-5 sections.
4. Draft SEO-friendly titles and meta descriptions.
Then output ONLY the JSON. Do not include your reasoning in the output.
```

### Technique 4 — Validation Guardrails

```
After generating the JSON:
- Verify all keys match the schema exactly
- Check for trailing commas and fix them
- Confirm all strings use double quotes
- Replace any undefined values with "TBD"
- Ensure the result passes JSON.parse() without errors
```

### Which Technique to Use

| Situation | Technique |
|-----------|-----------|
| First attempt, any capable model | Technique 1 + Technique 4 |
| Getting inconsistent output (Ollama / local) | Add Technique 2 |
| Structure keeps being wrong | Add Technique 3 |
| All else fails | Combine all four |

---

## 10. Web App Prompt Framework

### Master System Prompt (Beaver Mode)

```
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
- No placeholder lorem ipsum content
- Avoid SaaS clichés

AESTHETIC LOCK
dark-mode native | neon-accent sparse | typography-first | hierarchy clear
```

### 10 Prompt Variations By Audience

1. **DEVELOPER** — Generate full Next.js + Tailwind + Framer Motion project
2. **PRODUCT DESIGNER** — Design ultra-modern interactive web app with design rationale
3. **STARTUP FOUNDER** — Create startup-ready premium mobile-first interface
4. **INTERACTIVE INFOGRAPHIC** — Dynamic infographic with scroll interactions
5. **GEN-Z UI** — Neon gradients, animated typography, card-based, dark-mode
6. **AI PRODUCT BUILDER** — Complete app with Next.js + Tailwind + GSAP
7. **NO-CODE FRIENDLY** — Concept implementable in low-code tools
8. **EDUCATIONAL DEMO** — Demo that teaches through visual interaction
9. **PORTFOLIO** — Ultra-modern minimal with smooth transitions
10. **EXPERIMENTAL CREATIVE** — Bold Gen-Z, scroll triggers, dark mode default

### The Three Layers Rule

```
FUNCTION   →  What does the app DO?
DESIGN     →  What does it LOOK and FEEL like?
TECHNOLOGY →  What STACK runs it?
```

### Dolphin Mode — 10 Creative UI Concepts

1. Scroll as Navigation — sections animate like chapters
2. Skill Map Interface — interactive node graph
3. AI-assisted UI — user types and interface rearranges
4. Card-based micro-apps — each card opens a mini tool
5. Data-driven storytelling — charts animate on scroll
6. Gesture-first mobile — swipe navigation instead of menus
7. AI search panel — natural language search filters
8. Live theme switcher — neon / minimal / glass toggle
9. Canvas mode — user manipulates elements visually
10. Interactive infographic — site as moving infographic

---

## 11. powerUP Brand System

**Apply whenever generating UI/UX within the powerUP brand.**

```
Brand essence: Activated potential. Directed energy. Intelligent lift.

Color palette:
- Background: #0B0D10 (void black), #14161A (charcoal)
- Accents (use sparingly): cyan #4DFFFF, violet #7B5CFF, magenta #FF4FD8, amber #FFB000
- Text: #FFFFFF (primary), #A1A1AA (secondary), #6B7280 (muted)

Typography:
- Display: Inter, Space Grotesk
- Body: Inter
- Mono: JetBrains Mono
- Hero size: clamp(3rem, 6vw, 6rem)

Motion:
- Bias: always upward
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Duration: micro 180ms, standard 320ms, hero 4200ms

Design rules:
- Typography-first — type does the work, effects support
- Dark-mode native
- One accent color per screen maximum
- White space = intelligence, never fill it
- No gradients unless motion-driven
- No icons unless semantically necessary

Tone: Confident, modern, calm, inevitable.

Avoid: over-decoration, excessive gradients, visual noise, trend-chasing, SaaS clichés.
```

---

## 12. Design Vocabulary

Use these exact terms in prompts to control visual output:

### Core Visual Effects

| Term | What It Tells AI to Generate |
|------|------------------------------|
| **glassmorphism** | Frosted glass panels — translucent, blurred backdrop |
| **brutalist ui** | Raw, oversized, high-contrast, intentionally rough |
| **kinetic typography** | Text that animates, morphs, or reacts to scroll |
| **bento grid** | Mosaic card layout — Apple-style asymmetric grid |
| **micro-interactions** | Tiny animations on hover, click, scroll, focus |
| **neon accent** | Single bright color pop against a dark background |
| **liquid gradient** | Smooth, animated, shifting background color blends |
| **dark-mode native** | Designed for dark backgrounds first, light second |

### Loading & Motion

| Term | What It Tells AI to Generate |
|------|------------------------------|
| **skeleton loading** | Placeholder shimmer before real content appears |
| **ambient motion** | Subtle, looping background animation |
| **progressive disclosure** | Reveal complexity only when user needs it |
| **editorial layout** | Magazine-style, large typography, asymmetric grid |

### Advanced Effects

| Term | What It Tells AI to Generate |
|------|------------------------------|
| **neo-brutalism** | Bold shadows, flat colors, thick borders |
| **aurora gradients** | Soft flowing northern lights effect |
| **noise grain** | Textured overlay adding depth |
| **blur overlay** | Background blur for focus |
| **morph shapes** | Organic transforming shapes |
| **tilt 3d** | Parallax depth on cards |
| **custom cursor** | Personalized cursor design |
| **particle systems** | Interactive floating elements |
| **scanline effect** | Retro CRT horizontal lines |
| **vignette** | Darkened edges for focus |
| **chromatic aberration** | RGB split glitch effect |
| **mesh gradient** | Multi-color organic blending |
| **claymorphism** | 3D soft plastic appearance |
| **fiber background** | Fiber optic light patterns |
| **isotype system** | Repeating graphic symbols |
| **duotone** | Two-color image treatment |

### Design Combos with Synergies

| Combo | Elements | Best For | Psychology |
|-------|----------|----------|------------|
| **🫧 Glass + Bento** | glassmorphism, bento grid, dark-mode | Dashboards, data viz | Depth + hierarchy + scannability |
| **💥 Brutal + Neon** | brutalist, neon accent, kinetic | Landing pages, bold brands | Urgency + attention + focus |
| **🌊 Liquid + Ambient** | liquid gradient, ambient motion | Hero sections, immersive | Emotion + flow + atmosphere |
| **📰 Editorial + Bento** | editorial, bento grid, progressive | Content platforms, blogs | Authority + modern organization |
| **✨ Micro + Skeleton** | micro-interactions, skeleton loading | Apps, data-heavy interfaces | Reduced perceived wait time |
| **🚀 Full Immersive** | kinetic, liquid, micro, ambient | Marketing sites, launches | Maximum engagement |
| **🎮 Cyberpunk Glow** | neon, chromatic, scanline, dark | Gaming, crypto, tech | Futuristic + innovation |
| **💎 Premium Minimal** | glass, noise grain, duotone | Luxury brands | Exclusivity + sophistication |
| **🧸 Playful 3D** | claymorphism, morph, tilt, cursor | Kids apps, gamified | Friendly + approachable |
| **🌐 Fiber Tech** | fiber, particles, mesh, liquid | Telecom, networks | Connectivity + speed |
| **🎬 Cinematic** | vignette, blur, kinetic, ambient | Film, media | Movie-like atmosphere |
| **📊 Isotype Data** | isotype, bento, skeleton, duotone | Statistics, reports | Data digestible + memorable |

---

## 13. Typography

### Ultra-Modern Gen-Z Typography Combos

| Display Font | Mono Pairing | Best For |
|--------------|--------------|----------|
| **Space Grotesk** | JetBrains Mono | Tech startups, developer tools, modern SaaS |
| **Syne Bold** | JetBrains Mono | Creative agencies, art portfolios, bold brands |
| **Clash Display** | Space Mono | Fashion, luxury brands, premium products |
| **Inter Tight** | JetBrains Mono | Dashboards, enterprise apps, content platforms |

### Infographic Typography

| Use Case | Font Combination |
|----------|------------------|
| **Data Viz** | Space Grotesk (headers) + Inter (body) + JetBrains Mono (numbers) |
| **Creative** | Syne (display) + Space Grotesk (body) + Clash Display (accent) |
| **Mobile** | Inter Tight (headlines) + Inter (body) + SF Pro (UI) |

---

## 14. Prompt Templates

### Ready-to-Use Templates

| Template | Description |
|----------|-------------|
| **Web** | Complete Next.js + Tailwind web applications |
| **Mobile** | React Native / Expo mobile app components |
| **Brand** | Complete brand identity with colors, typography, motion |
| **Landing Page** | High-conversion landing page with CTAs |
| **Dashboard** | Analytics dashboard with charts and data viz |
| **API Design** | REST/GraphQL API specification and documentation |

### Task-Specific Prompts

#### 🎬 YouTube Content Creation

```
Act as a YouTube growth strategist with 10 years of experience.
When I give you a topic, automatically:
1. Identify the 3 best angles for that niche
2. Generate a scroll-stopping title using proven CTR patterns
3. Write a structured script with hook, body, and CTA
4. Suggest 5 SEO-optimized tags

Topic: [your topic here]
```

#### 💻 Coding / Engineering

```
You are a senior software engineer and architect.
When I describe a feature, always:
- Ask clarifying questions ONLY if something is truly ambiguous
- Write production-ready code, not demo code
- Add error handling automatically
- Explain the "why" behind any non-obvious decision in a single comment
- Flag performance or security concerns before I ask
```

#### 📊 Business / Strategy

```
Act as my COO and strategist. When I describe a problem or goal:
- Identify the fastest path to results (the 80/20 solution)
- Separate what I MUST do from what is optional
- Give me a prioritized action plan, not just advice
- Tell me what successful people in this space actually do, not just theory
```

#### 🔍 Research / Summarizing

```
You are a research assistant. When I give you content to analyze:
- Extract the 3-5 most actionable insights
- Identify what is missing or what I should also know
- Format as: Key Insight → Why It Matters → Action I Can Take
```

---

## 15. Prompt Lint Rules

**6 rules an AI should enforce on any prompt before generating:**

| Rule ID | Check | Autofix? |
|---------|-------|----------|
| `missing-role` | Does the prompt define who the AI should act as? | ✅ Add default role |
| `missing-constraints` | Does the prompt define explicit limits? | ✅ Add mobile-first, WCAG, 60fps |
| `missing-objective` | Does the prompt state a clear success condition? | ❌ Must be user-defined |
| `vague-language` | Does it use: nice, cool, awesome? | ✅ Replace with specific terms |
| `missing-output-format` | Does it specify what files/format to generate? | ❌ Must be user-defined |
| `missing-planning` | For UI prompts, is there a planning phase? | ❌ Must be user-defined |

### Vague Words to Always Flag

| Avoid | Replace With |
|-------|--------------|
| `nice` | `clear and intentional` |
| `cool` | `high-contrast and dynamic` |
| `modern` | `[specific aesthetic keyword]` |
| `awesome` | `visually striking and purposeful` |
| `good design` | `typographically strong with clear hierarchy` |

---

## 16. Prompt Quality Checklist

```
STRUCTURE
  [ ] Role defined — who is the AI acting as?
  [ ] Goal clear — one sentence maximum
  [ ] Objective and success criteria stated
  [ ] Constraints listed explicitly (not implied)

DESIGN (for UI/UX prompts)
  [ ] Platform specified — mobile or web or hybrid
  [ ] 3+ aesthetic keywords included from the vocabulary list
  [ ] Animation library named — Framer Motion or GSAP or None
  [ ] Mobile-first stated explicitly

TECHNICAL
  [ ] Stack specified — framework + styling + animation
  [ ] Output format requested — folder + files + instructions
  [ ] Accessibility: WCAG AA minimum stated
  [ ] Performance: 60fps animation budget stated

QUALITY
  [ ] No vague words — nice, cool, awesome, modern, good
  [ ] Refinement instruction included
  [ ] At least one interaction metaphor defined
  [ ] JSON rules appended if requesting structured data output

ANIMAL MODE (optional power-up)
  [ ] Mode selected: Beaver / Dolphin / Eagle / Ant / Owl / Rabbit / Elephant
  [ ] Or chained for complex goals: Eagle → Beaver → Ant
```

---

## 17. Prompt Scoring Dimensions

**Use to evaluate and compare any two prompt variants (A/B testing):**

| Dimension | What It Measures | Max Score |
|-----------|-----------------|----------|
| **Clarity** | Is the goal unambiguous? No vague language? | 10 |
| **Structure** | Does it follow ROLE → CONTEXT → OBJECTIVE → OUTPUT? | 10 |
| **Constraints** | Mobile-first? Accessibility? Performance? | 10 |
| **Predictability** | Does it specify output format and refinement? | 10 |
| **Overall** | Average of all four dimensions | 10 |

### Scoring Formula

```
Overall = (Clarity + Structure + Constraints + Predictability) / 4
```

### Score Interpretation

| Score | Quality Level | Action |
|-------|---------------|--------|
| 9–10 | Production ready | Ship it |
| 7–8 | Good, minor gaps | Add missing constraints |
| 5–6 | Partial structure | Add role + output format |
| 3–4 | Weak, vague | Rebuild using 8-layer template |
| 1–2 | Single vague sentence | Start over with master template |

---

## Resources

| Resource | Link |
|----------|------|
| GitHub Repository | https://github.com/marktantongco/promptc |
| AI Visual Synthesis | https://github.com/marktantongco/ai-visual-synthesis |
| Vercel (Deployments) | https://vercel.com |

---

_promptc OS · powerUP · github.com/marktantongco/promptc_
