# 🚀 Getting Started

Install ASC on a server running Debian or Ubuntu. x86_64, ARM64 and ARMv7 are supported.

## Install

Run the interactive installer with sudo. It installs `asc-updater`, which downloads the daemon, configures updates and offers to install Docker when it is missing.

```bash
curl -fsSL https://raw.githubusercontent.com/AdminServiceCloud/asc-daemon/main/install.sh | sudo bash
```

For provisioning, CI and scripts, use the unattended installation with defaults:

```bash
curl -fsSL https://raw.githubusercontent.com/AdminServiceCloud/asc-daemon/main/install.sh | sudo bash -s -- --silent
```

## Verify

```bash
asc status
asc service status
docker --version
```

The installer enables the `asc` systemd service. Control it with `sudo asc service start|stop|restart|status`. Docker is only needed for `type: docker` packages; native and utility packages do not need it. Change the CLI language later with `sudo asc config lang en` or `sudo asc config lang ru`.

## Next steps

- [Add ASC support to a repository](/cli/repository-support)
- [Package manager](/cli/package-manager)
- [Create a custom registry](/cli/custom-registry)
