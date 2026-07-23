# 📊 asc stats

Show CPU, memory and disk usage per app, like `docker stats --no-stream`.
Shows your own apps; run under `sudo` to see everyone's, grouped by owner.

## Usage

```
asc stats [--sort cpu|mem] [--live]
```

## Options

- **`--sort <cpu|mem>`** — sort rows by consumption. Default: `cpu`.
- **`--live`** — keep refreshing in place until interrupted (Ctrl+C), like
  plain `docker stats` (without `--no-stream`).

## See also

- [📊 Monitoring](/cli/monitoring)
- `asc ls stats` — the same view, reached via [asc ls](/commands/ls#stats).
