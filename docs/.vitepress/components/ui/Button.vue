<script setup lang="ts">
import { cn } from "@/lib/utils"
import { buttonVariants, type ButtonVariants } from "./button"

interface Props {
  variant?: ButtonVariants["variant"]
  size?: ButtonVariants["size"]
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: "default",
  size: "default",
})
</script>

<template>
  <button :class="cn(buttonVariants({ variant: props.variant, size: props.size }), props.class)">
    <slot />
  </button>
</template>
