interface PromptScore {
  clarity: number;
  structure: number;
  constraints: number;
  predictability: number;
  overall: number;
}

function scorePrompt(prompt: string): PromptScore {
  let clarity = 5;
  let structure = 5;
  let constraints = 5;
  let predictability = 5;

  // Structure checks
  if (prompt.includes("ROLE")) structure += 1;
  if (prompt.includes("CONTEXT")) structure += 1;
  if (prompt.includes("OBJECTIVE") || prompt.includes("GOAL")) structure += 1;
  if (prompt.includes("PLANNING")) structure += 1;
  if (prompt.includes("OUTPUT")) structure += 1;
  structure = Math.min(10, structure);

  // Constraint checks
  if (prompt.includes("CONSTRAINTS")) constraints += 2;
  if (prompt.toLowerCase().includes("mobile-first")) constraints += 1;
  if (prompt.toLowerCase().includes("wcag")) constraints += 1;
  if (prompt.toLowerCase().includes("60fps")) constraints += 1;
  constraints = Math.min(10, constraints);

  // Clarity checks
  if (!/\b(nice|cool|awesome)\b/iu.test(prompt)) clarity += 1;
  if (prompt.length > 300) clarity += 1;
  if (prompt.length > 600) clarity += 1;
  clarity = Math.min(10, clarity);

  // Predictability
  if (prompt.includes("OUTPUT FORMAT") || prompt.includes("Generate:"))
    predictability += 2;
  if (prompt.includes("REFINEMENT")) predictability += 1;
  if (prompt.includes("promptc-version")) predictability += 1;
  predictability = Math.min(10, predictability);

  const overall =
    Math.round(
      ((clarity + structure + constraints + predictability) / 4) * 10,
    ) / 10;

  return { clarity, structure, constraints, predictability, overall };
}

export function testCommand(options: { llm?: boolean }) {
  console.log("\n📊 promptc A/B Prompt Scoring\n");

  const variants = [
    {
      label: "Variant A — Minimal (no structure)",
      prompt: "Create a web app with modern design.",
    },
    {
      label: "Variant B — Role + Goal (partial)",
      prompt:
        "You are a designer.\nCONSTRAINTS\n- Mobile-first\nCreate a web app with modern design.",
    },
    {
      label: "Variant C — Full Structure (recommended)",
      prompt: `ROLE\nYou are a senior product designer.\n\nCONTEXT\nProduct: AI dashboard\nPlatform: web\n\nOBJECTIVE\nDesign a clean, fast interface.\n\nCONSTRAINTS\n- Mobile-first\n- WCAG AA\n- 60fps\n- No clichés\n\nPLANNING\n1. Define architecture\n2. Define navigation\n\nOUTPUT FORMAT\nGenerate full source code.\n\nREFINEMENT\nRefine twice. Final only.`,
    },
  ];

  const results = variants.map((v) => ({
    label: v.label,
    ...scorePrompt(v.prompt),
  }));

  results.forEach((r) => {
    console.log(`\n${r.label}`);
    console.log(`  Clarity:       ${r.clarity}/10`);
    console.log(`  Structure:     ${r.structure}/10`);
    console.log(`  Constraints:   ${r.constraints}/10`);
    console.log(`  Predictability: ${r.predictability}/10`);
    console.log(`  ─────────────────────`);
    console.log(`  Overall:       ${r.overall}/10`);
  });

  const winner = results.reduce((a, b) => (a.overall > b.overall ? a : b));
  console.log(`\n🏆 Winner: ${winner.label} (${winner.overall}/10)\n`);

  if (options.llm) {
    console.log(
      "ℹ  LLM scoring requires an API key. Set OPENAI_API_KEY or ANTHROPIC_API_KEY and re-run.",
    );
  }
}
