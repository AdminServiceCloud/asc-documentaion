<script setup lang="ts">
// ModeToggle renders a Sun/Moon icon based on `isDark`, whose initial value
// on first client render can differ from what was used during SSR (VitePress
// resolves the real theme from localStorage/prefers-color-scheme via an
// anti-FOUC script that runs before Vue mounts) — that mismatch is what
// produced the "Hydration completed but contains mismatches" warning in
// production. Rendering it inside <ClientOnly> (a component VitePress
// registers globally) sidesteps the mismatch by not SSR-rendering it at all.
import ModeToggle from "./ModeToggle.vue"
</script>

<template>
  <ClientOnly>
    <ModeToggle />
  </ClientOnly>
</template>
