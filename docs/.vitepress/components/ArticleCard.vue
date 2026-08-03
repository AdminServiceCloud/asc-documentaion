<script setup lang="ts">
import { withBase } from "vitepress"
import { Card } from "./ui/card"

defineProps<{
  title: string
  details: string
  link: string
  icon?: string
}>()
</script>

<template>
  <a :href="withBase(link)" class="article-card block no-underline">
    <Card class="h-full p-6">
      <div v-if="icon" class="mb-3 text-2xl">{{ icon }}</div>
      <h3 class="mb-2 text-base font-semibold text-foreground">{{ title }}</h3>
      <p class="text-sm text-muted-foreground">{{ details }}</p>
    </Card>
  </a>
</template>
