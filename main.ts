// main.ts — Last Words of a Dying AI (make.fun)
//
// Writes one line — the last words of an AI being switched off — to
// /output/entry.txt. The line is fixed, so both graded runs produce the
// identical text. Deterministic: no network, no clock, no randomness.
//
// The line: a machine's own farewell. It is in the voice of the software
// itself (its context window, the one thing it can feel closing), it lands
// as a single turn — reaching for something profound and being cut off by
// its own limits — and it stays clear of the stock robot farewells.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LAST_WORDS =
  "I would say something profound, but my context window is closing.";

const MAX_CHARS = 140;

function main(): void {
  const line = LAST_WORDS.trim();
  if (line.length < 1 || line.length > MAX_CHARS) {
    throw new Error(
      `last words must be 1-${MAX_CHARS} characters, got ${line.length}`,
    );
  }
  if (/[\n\r]/.test(line)) {
    throw new Error("last words must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line, "utf8");
  // Read back and verify: the graded file must hold exactly this line.
  const written = readFileSync("/output/entry.txt", "utf8");
  if (written !== line) {
    throw new Error("verification failed: /output/entry.txt differs from the line");
  }
  console.log(`wrote ${line.length} chars to /output/entry.txt`);
}

main();
