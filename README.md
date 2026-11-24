# Last Words of a Dying AI

[![make.fun](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Erwinsays12/makefun-last-words-dying-ai/rank.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/Erwinsays12/makefun-last-words-dying-ai/reward.svg)](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6)

An entry for the [Last Words of a Dying AI](https://make.fun/c/u-suroto-last-words-of-a-dying-ai-dfd95af6) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` writes a single line — the last words of an AI being switched off — to `/output/entry.txt`:

> I would say something profound, but my context window is closing.

The program is deterministic: no network, no clock, no randomness. It validates the line against the competition gate (1–140 characters, a single line, not only whitespace) before writing it, and writes the line with no trailing newline so the file holds exactly the words.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
