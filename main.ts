import { mkdirSync, writeFileSync } from "node:fs";

// "haunted": the Wi-Fi appears and vanishes on its own schedule.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, "haunted", "utf8");
