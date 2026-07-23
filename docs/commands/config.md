# ⚙️ asc config

Manage daemon configuration (`config.toml`).

## Usage

```
asc config <action>
```

### lang

```
asc config lang [en|ru]
```

Show or set the CLI output language. Without an argument, prints the current
setting; with `en`/`ru`, sets it — affects the output of all commands
(including this "More info" footer) through the translation system.

### debug

```
asc config debug [on|off]
```

Show or set debug logging. Without an argument, prints the current setting;
with `on`/`off`, sets it — persists to `config.toml`'s `[log] level`
(`RUST_LOG` still overrides it at runtime).
