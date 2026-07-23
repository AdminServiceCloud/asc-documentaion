# 🔑 asc auth

Manage git authorization for private package repositories.

## Usage

```
asc auth <action>
```

### add

```
asc auth add <target> [--type repo|registry] [--token <token>] [--ssh-key [<path>]] [--username <user>] [--app <id>]
```

Save credentials for a git host or an image registry (e.g. `github.com/myorg`,
`ghcr.io/myorg`).

- **`target`** — host, host/prefix, repository URL or image reference (positional, required).
- **`--type <repo|registry>`** — what the credential authorizes against. Default: `repo`.
- **`--token <token>`** — access token (https repositories and registries).
- **`--ssh-key [<path>]`** — SSH key for `git@`/`ssh` repositories; omit the
  path to pick interactively from `~/.ssh`.
- **`--username <user>`** — user name, required by image registries alongside the token.
- **`--app <id>`** — use this credential only for one app (its uuid or id from `asc ls`).

### list

List configured credentials (types and methods only, never secrets).

### remove

```
asc auth remove <target> [--type repo|registry]
```

Remove credentials for a host or prefix.

- **`--type <repo|registry>`** — remove only this type; by default every type
  matching the pattern goes.

## See also

- [📦 Package manager](/cli/package-manager)
