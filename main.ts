import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Polish 3: tighten "can see" to "sees" — same meaning, one word fewer,
// sharper verb, shorter text for the size tie-break. Final line.
const ENTRY_TEXT =
  "At 3 AM, even my two-inch screen sees this signature ending in a frog-hat JPEG. No.";

// The grader reads this path; OUTPUT_PATH lets a local run inspect elsewhere.
const TARGET = process.env.OUTPUT_PATH ?? "/output/entry.txt";

function run(): void {
  const line = ENTRY_TEXT.trim();
  const size = [...line].length;
  if (size < 1 || size > 200) {
    throw new Error(`Refusing to write an entry of ${size} characters.`);
  }
  mkdirSync(dirname(TARGET), { recursive: true });
  writeFileSync(TARGET, line, "utf8");
  console.log(line);
}

run();
