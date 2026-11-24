import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "The robot vacuum says it ate the sock on purpose: it was tired of our relationship being defined by things it sweeps under the couch.\n";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, { encoding: "utf8" });
