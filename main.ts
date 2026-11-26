import { mkdirSync, writeFileSync } from "node:fs";

// One-line museum placard for the office paper shredder, treated as an
// ancient artifact. 153 characters, written verbatim to /output/entry.txt.
const LINE =
  "Paper Shredder, c. 2004. Steel teeth, one appetite. Ritual device for the unmaking of evidence. Last fed the morning the auditors arrived. Gift of Legal.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
