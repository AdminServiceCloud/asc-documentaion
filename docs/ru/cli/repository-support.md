# 📦 Поддержка ASC в репозитории

Для одного приложения используйте `asc.yaml`, для настраиваемых оператором значений — `asc.settings.yaml`, для нескольких приложений в одном репозитории — `asc.stack.yaml`.

## Одно приложение

Разместите `asc.yaml` в корне репозитория:

```yaml
name: example-web
version: 1.0.0
type: docker
settings: ./asc.settings.yaml
runtime:
  image: ghcr.io/acme/example-web:1.0.0
```

Environment-переменные, порты и тома хранятся в `asc.settings.yaml`:

```yaml
settings:
  - key: http_port
    type: ports
    default: [8080]
    container: 3000
    env: PORT
  - key: data
    type: volumes
    default: [/app/data]
  - key: admin_password
    type: secret
    required: true
    env: ADMIN_PASSWORD
```

## Несколько приложений

Разместите `asc.stack.yaml` в корне, а `asc.yaml` каждого приложения — в указанном каталоге:

```yaml
name: example-stack
version: 1.0.0
apps:
  - { name: database, path: ./database }
  - { name: web, path: ./web, depends_on: [database] }
  - { name: metrics, path: ./metrics, optional: true }
```

В корне может быть только один entry point: `asc.yaml` или `asc.stack.yaml`. Docker-пакету нужен `runtime.image` или `runtime.image-build`, native-пакету — `runtime.start`. `ports` задаёт порт хоста, а `container` — внутренний порт. Зависимости стека должны существовать и не могут образовывать цикл.

Перед публикацией проверьте пакет по [схемам ASC](https://github.com/AdminServiceCloud/registry/tree/main/schema).
