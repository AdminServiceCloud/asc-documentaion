import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import NavModeToggle from "../components/NavModeToggle.vue"
import ArticleCard from "../components/ArticleCard.vue"
import "./style.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Swap in the shadcn-vue ModeToggle for the nav bar; it drives the same
    // `isDark`/`.dark` state VitePress's own switch would (see
    // components/ModeToggle.vue), so the built-in switch is hidden via CSS
    // in style.css (`.VPSwitchAppearance`) to avoid two toggles for one
    // setting. Rendered through NavModeToggle's <ClientOnly> wrapper to
    // avoid an SSR/client hydration mismatch on the toggle's icon.
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () => h(NavModeToggle),
    })
  },
  enhanceApp({ app }) {
    app.component("ArticleCard", ArticleCard)
  },
} satisfies Theme
