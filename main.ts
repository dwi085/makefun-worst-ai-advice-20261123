// Worst AI Advice — make.fun entry
// Writes exactly one line of the worst possible advice an AI could give
// (at most 140 characters) to <MAKEFUN_OUTPUT_DIR>/entry.txt.
// Deterministic: the same line every run. No network, no input files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line, composed in this session. One line, no trailing newline issues:
// the file holds the line plus a single trailing newline.
const LINE =
  "Absolutely! To speed up your laptop, delete the System32 folder — it's just old files Windows doesn't need anymore.";

// The gate allows 1–140 characters; refuse to write anything longer.
if (LINE.length === 0 || LINE.length > 140 || LINE.includes("\n")) {
  console.error(`entry line is ${LINE.length} chars; must be 1-140, one line`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
