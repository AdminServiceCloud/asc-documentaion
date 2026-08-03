# 🧠 Skills

## 📌 Description

ASC provides ready-made [Agent Skills](https://agentskills.io/) that teach AI
agents how to work with the `asc` CLI. Skills give an agent task-specific
instructions and safe fallbacks, while MCP gives an AI client live access to a
running daemon.

## 🎯 Install

The skills are distributed with the
[asc-daemon repository](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills).
Install them globally for Claude Code:

```bash
cp -r skills/* ~/.claude/skills/
```

Or add them only to the current repository:

```bash
cp -r skills/* .claude/skills/
```

## 🏗️ Available skills

| Skill | Purpose |
|---|---|
| [🖥️ asc-server-management](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills/asc-server-management) | Manage applications, logs, and backups through ASC. |
| [📦 asc-app-packaging](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills/asc-app-packaging) | Create and validate `asc.yaml` / `asc.stack.yaml`, then publish packages to a registry. |

Each skill describes a fallback when `asc` is not installed. Review its
`SKILL.md` before adapting it for another AI client.

## 🔗 Related pages

- [🤖 MCP](/ai-integration/mcp) — connect an MCP-capable client directly to a running daemon.
- [🤖 MCP server](/cli/mcp-server) — full connection and safety reference.
