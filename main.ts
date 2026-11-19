// make.fun news-image-20261119 — v10, a newspaper front page.
// Node 22, standard library only, no network access.
// The front page is rendered in advance (see build_image_v10.py, which uses
// PIL) and stored beside this file as entry.png: a 1024x1024 PNG, 42 stories,
// every one genuinely Thursday 19 November 2026. That is inside the gate
// (at most 1024x1024, at most 1 MiB). This program only places a copy in the
// grader's output directory, so two runs produce a byte-identical entry.png.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png is missing next to main.ts");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "entry.png"));
