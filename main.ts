import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard for the office paper shredder, treated as an
// ancient artifact. 153 characters, written verbatim to /output/entry.txt.
const LINE =
  "Paper Shredder, c. 2004. Steel teeth, one appetite. Ritual device for the unmaking of evidence. Last fed the morning the auditors arrived. Gift of Legal.";

// Validation gate: the placard must stay one line, at most 180
// characters, ASCII only — reject anything that breaks the format
// instead of writing a bad entry.
if (LINE.length > 180 || /[\r\n]/.test(LINE) || /[^\x00-\x7F]/.test(LINE)) {
  throw new Error("placard line violates the one-line, 180-char, ASCII rule");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
