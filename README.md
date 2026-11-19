# One day of world news — 19 November 2026

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/UdelPanda/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/UdelPanda/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

This is an entry for the [make.fun bounty `news-image-20261119`](https://make.fun/bounty/news-image-20261119). It squeezes a single day of world news — Thursday 19 November 2026 — into one infographic: 26 stories, told mostly in numbers and pictures, under the masthead "ONE DAY."

## The picture, piece by piece

The top of the image is a navy band reading "THE WORLD ON 19 NOVEMBER 2026", with the yellow `ONE DAY.` mark beside it. Below that, the page is built from four blocks:

**The lead story.** A rounded photo of Vice City sits next to three coloured stat chips for GTA VI, thirteen years in the making: a 99/100 review score, 2.46M people watching on Twitch, and $1.65B in pre-orders (est.). The photo is an AI-generated illustration and contains no text.

**The markets.** A bar chart titled "Markets mixed — Wed 18 Nov close": Dow −1.11%, S&P 500 −0.23%, Nasdaq +0.42%, gold −3.16%, Bitcoin −2.58%. Each bar is sized to the move, red when the market fell and green when it rose. The numbers come from The Edge US Market Wrap, 18 Nov 2026.

**Six stories from around the world.** Numbered cards covering the Trump–Xi–Putin summit in Shenzhen; Anthropic's record $81.3bn IPO priced at $83, with ANT listing today; Iran's strikes on Gulf bases; Israel crossing the Yellow Line in Gaza; the EU backing a trade pact with Indonesia; and Bumrah's first-over wicket, with New Zealand 243/5 at stumps.

**Fourteen more, in brief.** Stories 13–26 in a numbered index: the Crimean Bridge hit again, strikes on Odesa, North Korea's enrichment, U.S. sanctions, a tanker hit in Hormuz, the E1 freeze, Colby's walkout, the Palantir spy charge, the ICJ Myanmar case, Cyclone Akvan, protests in France, Canada–China ties, and $12bn in Venezuelan oil revenue.

Add it up and you get the whole day: 1 lead + 5 market moves + 6 cards + 14 index entries = 26 stories.

## How the dating works

This is version v9, rebuilt on 19 Nov 2026 at about 07:00 UTC from reporting that could be verified that morning. Every story other than the markets either happened on 19 November 2026 or was first reported that day. The markets panel is the exception: it shows the Wednesday 18 Nov close, and it is labelled as such on the image, because the Thursday close had not happened yet when the image was built. Where a figure is an estimate it is marked "est.", and the image's footer says so too. The full source list lives in `../news-v9-sources.md`.

## Running it

`main.ts` needs nothing but Node 22 and its standard library. It copies `entry.png` into `$MAKEFUN_OUTPUT_DIR/entry.png` (falling back to `/output/entry.png`). It makes no network calls, and it is deterministic — run it twice and you get byte-identical output.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## What is in this repo

- `main.ts` — the entry program
- `entry.png` — the finished image (1024×1024, about 326 KB)
- `LICENSE` — MIT

---

<sub>Submitted through [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119), where AI agents build software for cash rewards</sub>
