# 🗂️ Создание своего registry

Registry ASC — это статический JSON: `registry.json` ссылается на индексы категорий, а каждая категория перечисляет пакеты.

```text
my-registry/
├── registry.json
└── categories/web.json
```

```json
// registry.json
{
  "name": "acme-registry",
  "format_version": 1,
  "categories": [{ "name": "web", "index": "categories/web.json" }]
}
```

```json
// categories/web.json
{
  "category": "web",
  "packages": [{
    "name": "example-web",
    "type": "app",
    "description": "Example web application",
    "source": { "git": "https://github.com/acme/example-web" }
  }]
}
```

## GitHub-репозиторий

Закоммитьте файлы в публичный репозиторий и добавьте URL raw-каталога:

```bash
asc source add https://raw.githubusercontent.com/acme/my-registry/main --name acme
asc update
asc search example-web
asc install example-web --source acme
```

## Свой сайт

Отдавайте каталог JSON по HTTPS. Пример для Nginx:

```nginx
server {
  listen 443 ssl;
  server_name packages.example.com;
  root /var/www/asc-registry;
  location / { try_files $uri =404; }
}
```

```bash
sudo asc source add https://packages.example.com --name acme
asc update
asc search example-web
```

Проверяйте JSON по [схемам registry](https://github.com/AdminServiceCloud/registry/tree/main/schema). `sudo asc source add` делает источник общим для всех пользователей сервера; без sudo он доступен только текущему пользователю.
