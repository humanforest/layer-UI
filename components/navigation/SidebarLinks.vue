<script setup lang="ts">
import type { NavigationLink } from "../../types/ui";

defineProps({
  links: {
    type: Array as PropType<NavigationLink[]>,
    default: () => [],
  },
});
</script>

<template>
  <div>
    <UNavigationMenu
      orientation="vertical"
      :items="links"
      color="neutral"
      :ui="{
        link: 'group relative flex items-center gap-2 px-3 py-2 font-bold rounded-md text-md focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
      }"
    />
  </div>
</template>
