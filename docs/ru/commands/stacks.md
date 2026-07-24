# 🧱 asc stacks

Список установленных стеков (пакетов `asc.stack.yaml`) и их приложений-участников,
иерархически (root видит приложения всех пользователей).

## Использование

```
asc stacks
```

По одному дереву на стек: имя стека — с пометкой, сколько его приложений
сейчас запущено, `[running/total]` — затем его приложения ветками
`├──`/`└──`, те же колонки, что и в [`asc ls`](/ru/commands/ls) (`ID`, `NAME`,
`KIND`, `STATE`, `VERSION`, `UUID`, плюс `USER` для root).

```
my-stack [1/2]
    ID            NAME    KIND    STATE     VERSION  UUID
├── my-stack-web  Web     docker  running   1.2.0    6f8a1c2e-3b4d-4e5f-8a9b-0c1d2e3f4a5b
└── worker        Worker  docker  stopped   1.2.0    -
```

Приложение попадает в стек, если оно было установлено из него (`asc install <стек>` или `asc install <стек>/<приложение>`); приложение, установленное само по себе, не принадлежит ни одному стеку и сюда не попадает — полный список приложений независимо от происхождения — [`asc ls`](/ru/commands/ls).

## См. также

- [📱 Управление приложениями](/ru/cli/app-management)
- [📦 Пакетный менеджер](/ru/cli/package-manager)
- [📃 asc ls](/ru/commands/ls)
