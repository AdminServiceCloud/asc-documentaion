# 🤖 asc mcp

Expose the local ASC daemon as a Model Context Protocol server.

## Usage

```
asc mcp serve
```

### serve

Serve MCP over standard input/output. The command requires a running daemon.
Access follows the OS UID of this process: ordinary users can manage only their
own applications, while root can manage all applications.

See [🤖 MCP server](/cli/mcp-server) for client configuration and safety notes.
