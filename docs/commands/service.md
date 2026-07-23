# 🧰 asc service

Manage the daemon's systemd service unit.

## Usage

```
asc service <action>
```

### install

Install the service unit and enable autostart. Creates the systemd unit
(running `asc serve`) and enables it — the daemon starts on boot from here on.

### uninstall

Stop, disable and remove the service unit.

### start

Start the service.

### stop

Stop the service.

### restart

Restart the service.

### status

Show the service state (active / inactive / not installed). Shorthand: `asc status`
also shows this alongside version and app summary.

## See also

- [📡 API](/cli/api) — the server `asc service` starts/stops.
