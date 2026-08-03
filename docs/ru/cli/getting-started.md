# 🚀 Начало работы

Установите ASC на сервер с Debian или Ubuntu. Поддерживаются x86_64, ARM64 и ARMv7.

## Установка

Запустите интерактивный установщик с sudo. Он устанавливает `asc-updater`, который скачивает демон, настраивает обновления и предлагает установить Docker, если его нет.

```bash
curl -fsSL https://raw.githubusercontent.com/AdminServiceCloud/asc-daemon/main/install.sh | sudo bash
```

Для провижининга, CI и скриптов используйте установку с настройками по умолчанию:

```bash
curl -fsSL https://raw.githubusercontent.com/AdminServiceCloud/asc-daemon/main/install.sh | sudo bash -s -- --silent
```

## Проверка

```bash
asc status
asc service status
docker --version
```

Установщик включает systemd-сервис `asc`. Управляйте им через `sudo asc service start|stop|restart|status`. Docker нужен только пакетам `type: docker`; native и utility-пакеты обходятся без него. Язык CLI меняется командами `sudo asc config lang en` и `sudo asc config lang ru`.

## Дальше

- [Поддержка ASC в репозитории](/ru/cli/repository-support)
- [Пакетный менеджер](/ru/cli/package-manager)
- [Создание своего registry](/ru/cli/custom-registry)
