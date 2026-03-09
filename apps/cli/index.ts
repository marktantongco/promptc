#!/usr/bin/env node
import { Command } from "commander";
import { buildPrompt } from "./commands/build.js";
import { lintCommand } from "./commands/lint.js";
import { testCommand } from "./commands/test.js";

const program = new Command();

program
  .name("promptc")
  .description(
    "The Prompt Operating System — composable, versioned, testable prompts",
  )
  .version("0.1.0");

program
  .command("build")
  .description("Build a compiled prompt from components and presets")
  .option("--role <role>", "Role/persona for the AI", "senior product designer")
  .option("--product <product>", "Product name or description", "AI dashboard")
  .option(
    "--platform <platform>",
    "Target platform: mobile | web | hybrid",
    "web",
  )
  .option(
    "--goal <goal>",
    "Primary goal in one sentence",
    "Design a clear, modern interface",
  )
  .option("--preset <preset>", "Preset name (mobile-ui, web-ui, ai-docs)")
  .option("--output <file>", "Save output to file")
  .action(buildPrompt);

program
  .command("lint")
  .description("Lint a prompt file for quality issues")
  .argument("<file>", "Path to prompt file")
  .option("--fix", "Apply safe autofixes")
  .action(lintCommand);

program
  .command("test")
  .description("A/B test and score prompts")
  .option("--llm", "Use LLM-based scoring (requires API key)")
  .action(testCommand);

program.parse();
