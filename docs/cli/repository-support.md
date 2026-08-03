# 📦 Add ASC support to a repository

Use `asc.yaml` for one application, `asc.settings.yaml` for operator-configurable values, and `asc.stack.yaml` for multiple applications in one repository.

## One application

Place `asc.yaml` at the repository root:

```yaml
name: example-web
version: 1.0.0
type: docker
settings: ./asc.settings.yaml
runtime:
  image: ghcr.io/acme/example-web:1.0.0
```

Keep environment variables, ports and volumes in `asc.settings.yaml`:

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

## Multiple applications

Use `asc.stack.yaml` at the root and put every app's `asc.yaml` in its declared directory:

```yaml
name: example-stack
version: 1.0.0
apps:
  - { name: database, path: ./database }
  - { name: web, path: ./web, depends_on: [database] }
  - { name: metrics, path: ./metrics, optional: true }
```

The root has exactly one entry point: `asc.yaml` or `asc.stack.yaml`. Docker packages require `runtime.image` or `runtime.image-build`; native packages require `runtime.start`. `ports` describes host ports, while `container` fixes the internal target. Stack dependencies must exist and cannot form cycles.

Validate packages with the [ASC schemas](https://github.com/AdminServiceCloud/registry/tree/main/schema) before publishing.
