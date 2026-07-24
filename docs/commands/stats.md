# 📊 asc stats

Show CPU, memory, disk usage and I/O, and network I/O per app, like
`docker stats --no-stream`. Shows your own apps; run under `sudo` to see
everyone's, grouped by owner.

NET I/O and DISK I/O are cumulative byte totals since the app started
("rx / tx" and "read / write"), not a rate — same convention as `docker
stats`'s own columns. Network I/O is only available for Docker apps, which
have their own network namespace; systemd and process apps share the host's,
so that column reads as a dash for them.

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
