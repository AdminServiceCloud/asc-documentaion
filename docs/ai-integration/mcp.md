# 🤖 MCP

## 📌 Description

ASC exposes its local daemon through the
[Model Context Protocol](https://modelcontextprotocol.io/). An MCP client can
then inspect applications and logs, and use the same ASC operations it would
otherwise invoke through the CLI.

## 🎯 Connect a client

The daemon must be running and `asc` must be available on the client's PATH.
Configure a stdio MCP client to start the server with `asc mcp serve`:

```json
{
  "mcp_servers": {
    "asc": { "command": "asc", "args": ["mcp", "serve"] }
  }
}
```

For Claude Code:

```bash
claude mcp add asc -- asc mcp serve
```

The server uses the operating-system UID of the MCP process. A regular user
can access only that user's applications; root can access all applications.
Use elevated access only when it is genuinely required.

## 🏗️ Capabilities and safety

MCP provides read-only tools for system state, metrics, application details,
logs, settings, and backups. It also provides management tools for installing,
upgrading, controlling, configuring, backing up, restoring, and removing
applications.

The daemon authorizes every application reference. Destructive operations are
identified to the MCP client so it can request confirmation. Host commands run
as the user that starts `asc mcp serve`, not as the daemon.

For the full tool list, connection troubleshooting, and security details, see
[the daemon MCP server documentation](/cli/mcp-server). For the command syntax,
see [asc mcp](/commands/mcp).

## 🔗 Related pages

- [🧠 Skills](/ai-integration/skills)
- [🤖 MCP server](/cli/mcp-server)
- [📖 asc mcp command reference](/commands/mcp)
