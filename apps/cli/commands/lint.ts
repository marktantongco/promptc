import fs from "fs";

interface LintRule {
  id: string;
  description: string;
  check: (prompt: string) => boolean;
  fix?: (prompt: string) => string;
}

const rules: LintRule[] = [
  {
    id: "missing-role",
    description: "Prompt must define an explicit ROLE section.",
    check: (p) => p.includes("ROLE"),
    fix: (p) => `ROLE\nYou are a senior product designer.\n\n${p}`,
  },
  {
    id: "missing-constraints",
    description: "Prompt must define a CONSTRAINTS section.",
    check: (p) => p.includes("CONSTRAINTS"),
    fix: (p) =>
      `${p}\n\nCONSTRAINTS\n- Mobile-first\n- WCAG AA accessibility\n- 60fps performance`,
  },
  {
    id: "missing-objective",
    description: "Prompt must define an OBJECTIVE or GOAL.",
    check: (p) => p.includes("OBJECTIVE") || p.includes("GOAL"),
  },
  {
    id: "vague-language",
    description: "Avoid vague adjectives: nice, cool, awesome, modern.",
    check: (p) => !/\b(nice|cool|awesome)\b/iu.test(p),
    fix: (p) =>
      p.replace(/\b(nice|cool|awesome)\b/giu, "clear and intentional"),
  },
  {
    id: "missing-output-format",
    description: "Prompt should specify an OUTPUT FORMAT section.",
    check: (p) => p.includes("OUTPUT"),
  },
  {
    id: "missing-planning",
    description: "UI/UX prompts benefit from a PLANNING phase.",
    check: (p) => p.includes("PLANNING"),
  },
];

export function lintCommand(file: string, options: { fix?: boolean }) {
  if (!fs.existsSync(file)) {
    console.error(`❌ File not found: ${file}`);
    process.exit(1);
  }

  let content = fs.readFileSync(file, "utf8");
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const rule of rules) {
    if (!rule.check(content)) {
      if (
        rule.id === "missing-planning" ||
        rule.id === "missing-output-format"
      ) {
        warnings.push(`⚠  [${rule.id}] ${rule.description}`);
      } else {
        errors.push(`✖  [${rule.id}] ${rule.description}`);
      }
      if (options.fix && rule.fix) {
        content = rule.fix(content);
      }
    }
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log("✅ No lint errors — prompt looks good!");
    return;
  }

  if (errors.length > 0) {
    console.log("\n❌ Errors (must fix):");
    errors.forEach((e) => console.log(e));
  }
  if (warnings.length > 0) {
    console.log("\n⚠  Warnings (recommended):");
    warnings.forEach((w) => console.log(w));
  }

  if (options.fix) {
    fs.writeFileSync(file, content);
    console.log("\n✅ Autofixes applied where possible.");
  } else {
    console.log("\n💡 Run with --fix to apply safe autofixes.");
  }

  if (errors.length > 0) process.exit(1);
}
