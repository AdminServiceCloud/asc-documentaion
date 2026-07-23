# 🗂️ asc source

Manage registry sources: your own list; under `sudo` — the system list shared
by all users.

## Usage

```
asc source <action>
```

### add

```
asc source add <url> [--name <name>]
```

Add a registry source (`https://` or `file://`).

- **`url`** — source URL (positional, required).
- **`--name <name>`** — source name; derived from the URL when omitted.

### remove

```
asc source remove <name>
```

Remove a source by name.

### list

List configured sources.

## See also

- [📦 Package manager](/cli/package-manager)
