import fs from "fs";
import path from "path";
import YAML from "yaml";

interface BuildOptions {
  role: string;
  product: string;
  platform: string;
  goal: string;
  preset?: string;
  output?: string;
}

function loadPreset(name: string): Record<string, unknown> {
  const presetPath = path.resolve(`packages/presets/${name}.yaml`);
  if (!fs.existsSync(presetPath)) {
    console.warn(`⚠  Preset '${name}' not found. Using defaults.`);
    return {};
  }
  return YAML.parse(fs.readFileSync(presetPath, "utf8"));
}

export function buildPrompt(options: BuildOptions) {
  const preset = options.preset ? loadPreset(options.preset) : {};

  const role =
    options.role || (preset.role as string) || "senior product designer";
  const platform = options.platform || (preset.platform as string) || "web";
  const constraints = (preset.constraints as string[]) || [
    "Mobile-first",
    "WCAG AA accessibility",
    "60fps performance budget",
    "No clichés or SaaS tropes",
  ];
  const tool = (preset.tool as string) || "Next.js + Tailwind";

  const version = "1.0.0";
  const today = new Date().toISOString().split("T")[0];

  const prompt = `<!-- promptc-version: ${version} | preset: ${options.preset || "custom"} | compiled-at: ${today} -->

ROLE
You are a ${role}.

CONTEXT
Product: ${options.product}
Platform: ${platform}
Tool/Framework: ${tool}

OBJECTIVE
${options.goal}
Success criteria:
- Functional correctness
- Visual clarity
- Platform alignment
- Production-ready output

CONSTRAINTS
${constraints.map((c) => `- ${c}`).join("\n")}

AESTHETIC SYSTEM
- Typography-first
- Dark-mode native
- Minimal neon accents
- Strong visual hierarchy
- Ultra-modern, Gen-Z fluent but timeless

PLANNING PHASE (MANDATORY — do this before generating code)
1. Define information architecture
2. Define navigation model
3. Define layout and grid system
4. Define interaction and motion logic
5. Validate accessibility and performance

OUTPUT FORMAT
Generate:
1. Project folder structure
2. Full source code for all files
3. Instructions to run locally (npm install && npm run dev)
4. Explanation of key components and design decisions

REFINEMENT
- After generating the first draft, critique for clarity and completeness
- Refine once for structure
- Refine once for polish and consistency
- Output final result only
`;

  console.log("\n" + prompt.trim() + "\n");

  if (options.output) {
    const outDir = path.dirname(options.output);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(options.output, prompt.trim());
    console.log(`✅ Saved to ${options.output}`);
  } else {
    // Default save
    const outDir = path.resolve("examples/compiled-prompts");
    fs.mkdirSync(outDir, { recursive: true });
    const fileName = `prompt-${Date.now()}.md`;
    fs.writeFileSync(path.join(outDir, fileName), prompt.trim());
    console.log(`✅ Saved to examples/compiled-prompts/${fileName}`);
  }
}
