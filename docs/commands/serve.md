# 🚀 asc serve

Run the daemon in the foreground. This is what the systemd service unit runs
(`asc service install` creates a unit that calls `asc serve`) — you normally
don't run it directly except when debugging.

## Usage

```
asc serve
```

No flags or arguments. Starts the API server (gRPC/ConnectRPC + REST) on the
configured TCP and unix-socket listeners and blocks until interrupted. Runs
with the daemon's default signal handling (SIGPIPE not reset, unlike other
commands) since it's a long-running service, not a one-shot CLI call.

## See also

- [📡 API](/cli/api) — what `asc serve` exposes over gRPC/REST.
