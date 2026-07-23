# 📃 asc ls

List apps — shorthand for [`asc app list`](/commands/app#list) (root sees all
users' apps). Alias: `asc ps`.

## Usage

```
asc ls [ports|disk|stats]
```

Called bare (no view), it's exactly `asc app list`. With a view, it switches
to that view of the same apps — each mirrors a top-level command so both
spellings stay in step.

### ports

Same as [`asc ports`](/commands/ports).

### disk

Same as [`asc disk`](/commands/disk).

### stats

Same as [`asc stats`](/commands/stats) (without `--sort`/`--live`).

## See also

- [📱 Application management](/cli/app-management)
