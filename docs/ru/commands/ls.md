# 📃 asc ls

Список приложений — сокращённая версия [`asc app list`](/ru/commands/app#list)
(root видит приложения всех пользователей). Алиас: `asc ps`.

## Использование

```
asc ls [ports|disk|stats]
```

Без вида — это ровно `asc app list`. С видом — переключается на этот вид тех
же приложений: каждый вид зеркалит верхнеуровневую команду, поэтому оба
написания остаются синхронными.

### ports

То же самое, что [`asc ports`](/ru/commands/ports).

### disk

То же самое, что [`asc disk`](/ru/commands/disk).

### stats

То же самое, что [`asc stats`](/ru/commands/stats) (без `--sort`/`--live`).

## См. также

- [📱 Управление приложениями](/ru/cli/app-management)
