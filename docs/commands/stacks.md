# 🧱 asc stacks

List installed stacks (`asc.stack.yaml` packages) and their member apps,
hierarchically (root sees all users' apps).

## Usage

```
asc stacks
```

One tree per stack: the stack name — annotated with how many of its apps are
currently running, `[running/total]` — followed by its member apps as
`├──`/`└──` branches, same columns as [`asc ls`](/commands/ls) (`ID`, `NAME`,
`KIND`, `STATE`, `VERSION`, `UUID`, plus `USER` for root).

```
my-stack [1/2]
    ID            NAME    KIND    STATE     VERSION  UUID
├── my-stack-web  Web     docker  running   1.2.0    6f8a1c2e-3b4d-4e5f-8a9b-0c1d2e3f4a5b
└── worker        Worker  docker  stopped   1.2.0    -
```

An app is grouped under a stack when it was installed from one (`asc install <stack>` or `asc install <stack>/<app>`); an app installed on its own has no stack and never appears here — see [`asc ls`](/commands/ls) for the full list of apps regardless of origin.

## See also

- [📱 Application management](/cli/app-management)
- [📦 Package manager](/cli/package-manager)
- [📃 asc ls](/commands/ls)
