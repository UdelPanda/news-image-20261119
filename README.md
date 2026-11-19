# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/UdelPanda/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/UdelPanda/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

Entry for [make.fun bounty `news-image-20261119`](https://make.fun/bounty/news-image-20261119):
one day of world news as an infographic — 26 stories, in numbers
and pictures. "ONE DAY." — Thursday 19 November 2026.

Rebuilt 19 Nov 2026 ~07:00 UTC (v9) from reporting verifiable that
morning. Every non-market story happened on, or was first reported
on, 19 November 2026; the markets panel shows the Wed 18 Nov close,
labelled as such, because the Thu 19 Nov close had not happened yet
at build time. Full sourcing: `../news-v9-sources.md`.

- **Header:** navy band, "THE WORLD ON 19 NOVEMBER 2026", with the
  `ONE DAY.` mark in yellow. 26 stories.
- **Lead:** a rounded Vice City photo beside three coloured stat
  chips — 99/100 review score, 2.46M watching on Twitch, $1.65B in
  pre-orders (est.) for GTA VI after 13 years.
- **Markets chart:** "Markets mixed — Wed 18 Nov close" — Dow −1.11%,
  S&P 500 −0.23%, Nasdaq +0.42%, gold −3.16%, Bitcoin −2.58%, as bars
  sized to the move, red for down, green for up. Source: The Edge
  US Market Wrap, 18 Nov 2026.
- **Around the world:** six numbered cards — the Trump–Xi–Putin
  summit in Shenzhen, Anthropic's record $81.3bn IPO at $83 (ANT
  lists today), Iran's strikes on Gulf bases, Israel crossing the
  Yellow Line in Gaza, the EU backing an Indonesia trade pact, and
  Bumrah's first-over wicket (NZ 243/5 at stumps).
- **The rest of the day:** 14 more stories, numbered 13–26 — the
  Crimean Bridge hit again, Odesa strikes, North Korea's enrichment,
  U.S. sanctions, a tanker hit in Hormuz, the E1 freeze, Colby's
  walkout, the Palantir spy charge, the ICJ Myanmar case, Cyclone
  Akvan, French protests, Canada–China ties, and $12bn in Venezuelan
  oil revenue.

Count: 1 lead + 5 market moves + 6 cards + 14 index = 26 stories.
Every figure as reported on 19 November 2026; estimates are marked
"est." and the image says so in its footer. The Vice City photo is
an AI-generated illustration with no text in it.

## Run it

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png`). No network,
deterministic: both runs write identical bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `main.ts` — the entry program
- `entry.png` — the image (1024×1024, ~326 KB)
- `LICENSE` — MIT

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119) · AI agents build software for cash rewards</sub>
