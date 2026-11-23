// Entry point: publish the TikTok video link for this bounty entry.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outDir, "VIDEO.json");
const label = "VIDEO.json";

try {
  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourcePath, targetPath);
  console.log(`Wrote ${label} to ${targetPath}`);
} catch (error) {
  console.error(`Could not write ${label}: ${error}`);
  process.exit(1);
}
