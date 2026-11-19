// Entry for make.fun news-image-20261119 (Node 22, standard library only).
// The image is rendered in advance and stored beside this file as entry.png:
// a 1024x1024 infographic for Thursday 19 November 2026,
// 310,583 bytes, so it passes the gate (at most 1024x1024, at most 1 MiB).
// This program only copies
// it to the grader output directory, so both runs produce byte-identical
// output with no network access.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
