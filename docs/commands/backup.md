# 💾 asc backup

Create, restore and manage app backups.

## Usage

```
asc backup <action> [args]
```

### create

```
asc backup create <app> [--storage <name>]...
```

Back up an app: repository, config and data, minus `asc.backup.yaml`
exclusions.

- **`--storage <name>`** — storage to back up to, repeatable; defaults to the
  app's backup policy (`asc app settings`), else just `local`.

### restore

```
asc backup restore <app> <backup> [--storage <name>]
```

Restore an app from a backup — **the app must be stopped first** (destructive:
replaces the app's repository, config and data).

- **`backup`** — backup name, as shown by `asc backup list`.
- **`--storage <name>`** — storage the backup lives on. Default: `local`.

### list

```
asc backup list <app> [--storage <name>]
```

List an app's backups on one storage, oldest first.

- **`--storage <name>`** — storage to list. Default: `local`.

### prune

```
asc backup prune <app> [--storage <name>] --keep <n>
```

Delete an app's oldest backups on one storage beyond `--keep`.

- **`--storage <name>`** — storage to prune. Default: `local`.
- **`--keep <n>`** — number of backups to retain (required).

### storage add

```
asc backup storage add <name> --type local|s3|ftp|sftp [flags...]
```

Add a backup storage. Required flags depend on `--type`:

- **`local`**: `--dir <path>`
- **`s3`**: `--bucket <name> --region <region> [--endpoint <url>] --access-key <key> --secret-key <secret> [--prefix <prefix>]`
- **`ftp`/`sftp`**: `--host <host> [--port <port>] --user <user> [--password <password>] [--dir <path>] [--key <path>]` (`--key` is SFTP-only, instead of `--password`)

### storage list

List configured storages (`local` always exists, unlisted).

### storage remove

```
asc backup storage remove <name>
```

Remove a configured storage (`local` cannot be removed).

## See also

- [💾 Backups](/cli/backups) — full guide.
