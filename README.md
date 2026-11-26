# news-image-20261125 — THE WORLD. front page for 25 November 2026

[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/marzukymavlogig-cloud/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/marzukymavlogig-cloud/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

Entry for the [make.fun bounty "Sum up 25 November's world news in one image"](https://make.fun/bounty/news-image-20261125) ($100).

## The poster

A newspaper front page — **"THE WORLD."**, Wednesday, 25 November 2026,
Vol. VII — No. 330 — summing up the day's world news, every claim verified
against at least two reputable sources (Reuters, AP, Euronews, Xinhua,
IAEA, Just Security; see `NEWS_25NOV.md` in the build notes — not part of
the entry).

- **Lead — Hormuz burns as oil jumps:** two oil tankers hit naval mines and
  caught fire in the Strait of Hormuz; the Houthis claimed a strike on
  Saudi Arabia's Ras Tanura refinery; Brent settled 3.5% higher at $94.61.
- **Trump's new tariff salvo** on 14 trading partners, China capped at 20%.
- **Wall Street plunges, then claws back:** Nasdaq fell ~4% intraday, then
  recovered; S&P 500 closed −0.25%, Dow +0.33%.
- **Pakistan's first astronaut** reaches the Tiangong station aboard
  Shenzhou-24.
- **Ukraine:** Kyiv hits three Russian refineries; the Zaporizhzhia nuclear
  plant loses all outside power for the 28th time in the war.
- **Gaza:** Hamas internal security chief Mohammad Abuelouf killed.
- **Colombia:** all hostages freed in the Cartagena supermarket siege.
- **Pacific:** Australia–Solomon Islands security treaty signed.
- **Cairo:** fuel tanker fire kills at least 31.
- **Huawei** convicted on 10 of 12 counts; **Macy's** 100th Thanksgiving
  parade postponed — a first.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, stdlib only, no network) validates `entry.png` — PNG
magic, IHDR dimensions ≤ 1024×1024, size ≤ 1 MiB, and a genuine IEND chunk —
then copies it to `$MAKEFUN_OUTPUT_DIR/entry.png`.

## License

MIT — see `LICENSE`.
