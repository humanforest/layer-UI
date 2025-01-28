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
      variant="link"
    />
  </div>
</template>
