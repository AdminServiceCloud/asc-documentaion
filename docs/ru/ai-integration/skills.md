# 🧠 Skills

## 📌 Описание

ASC предоставляет готовые [Agent Skills](https://agentskills.io/), которые
обучают AI-агентов работе с CLI `asc`. Skills содержат инструкции для
конкретных задач и безопасные fallback-сценарии, тогда как MCP даёт AI-клиенту
доступ к запущенному daemon в реальном времени.

## 🎯 Установка

Skills распространяются вместе с
[репозиторием asc-daemon](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills).
Чтобы установить их глобально для Claude Code, выполните:

```bash
cp -r skills/* ~/.claude/skills/
```

Либо добавьте их только в текущий репозиторий:

```bash
cp -r skills/* .claude/skills/
```

## 🏗️ Доступные skills

| Skill | Назначение |
|---|---|
| [🖥️ asc-server-management](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills/asc-server-management) | Управление приложениями, логами и бекапами через ASC. |
| [📦 asc-app-packaging](https://github.com/AdminServiceCloud/asc-daemon/tree/main/skills/asc-app-packaging) | Создание и валидация `asc.yaml` / `asc.stack.yaml`, затем публикация пакетов в registry. |

В каждом skill описан fallback на случай, когда `asc` не установлен. Перед
адаптацией под другой AI-клиент изучите его `SKILL.md`.

## 🔗 Связанные страницы

- [🤖 MCP](/ru/ai-integration/mcp) — подключение MCP-совместимого клиента напрямую к запущенному daemon.
- [🤖 MCP-сервер](/ru/cli/mcp-server) — полное описание подключения и безопасности.
