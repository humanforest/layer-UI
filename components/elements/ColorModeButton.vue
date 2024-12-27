<script setup>
import { computed, nextTick } from 'vue'

const mode = useColorMode()
const isDark = computed({
  get() {
    return mode.value === 'dark'
  },
  set() {
    mode.preference = mode.value === 'dark' ? 'light' : 'dark'
  },
})

const isAppearanceTransition =
  typeof document !== 'undefined' &&
  // @ts-expect-error: Transition API
  document.startViewTransition &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

function toggle(event) {
  if (!isAppearanceTransition || !event) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
      },
      {
        duration: 700,
        easing: 'ease-in',
        pseudoElement: isDark.value
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
</script>

<template>
  <ClientOnly v-if="!mode?.forced">
    <UButton
      :icon="mode.value === 'dark' ? 'i-tabler-moon' : 'i-tabler-sun'"
      color="gray"
      variant="ghost"
      size="xl"
      aria-label="Theme"
      @click="toggle"
    />
  </ClientOnly>
</template>