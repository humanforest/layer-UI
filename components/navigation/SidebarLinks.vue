<script setup lang=ts>
import type { NavigationLink } from '../../types/ui';

const props = defineProps({
  links: {
    type: Array as PropType<NavigationLink[]>,
    default: () => [],
  },
})
console.log(props.links)
</script>

<template>
  <div>
    <UNavigationMenu
      orientation="vertical"
      :items="links"
      class="data-[orientation=vertical]:w-48"
    />
  </div>
</template>