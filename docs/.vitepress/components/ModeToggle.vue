<script setup lang="ts">
import { useData } from "vitepress"
import { useToggle } from "@vueuse/core"
import { Moon, Sun } from "lucide-vue-next"
import { Button } from "./ui/button"

// `isDark` is VitePress's own appearance state — it already persists to
// localStorage and toggles the `dark` class on <html>. shadcn-vue's tokens
// key off that same `.dark` class (see theme/style.css), so reusing it here
// keeps the VitePress theme and the shadcn-vue tokens permanently in sync
// instead of having two independent dark-mode states.
const { isDark } = useData()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button
    variant="ghost"
    size="icon"
    aria-label="Toggle theme"
    @click="toggleDark()"
  >
    <Sun v-if="isDark" class="size-4" />
    <Moon v-else class="size-4" />
  </Button>
</template>
