import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import ModeToggle from "../components/ModeToggle.vue"
import ArticleCard from "../components/ArticleCard.vue"
import "./style.css"

export default {
  extends: DefaultTheme,
  Layout: () => {
    // Swap in the shadcn-vue ModeToggle for the nav bar; it drives the same
    // `isDark`/`.dark` state VitePress's own switch would (see
    // components/ModeToggle.vue), so the built-in switch is hidden via CSS
    // in style.css (`.VPSwitchAppearance`) to avoid two toggles for one
    // setting.
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () => h(ModeToggle),
    })
  },
  enhanceApp({ app }) {
    app.component("ArticleCard", ArticleCard)
  },
} satisfies Theme
