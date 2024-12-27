<script setup lang="ts">
const open = ref(false);
const content = ref("navigation");
const items = reactive([
  [
    {
      label: "Components Content",
      icon: "i-lucide-book-open",
      onSelect: () => (content.value = "content"),
    },
    {
      label: "Components Inputs",
      icon: "i-lucide-text-cursor-input",
      onSelect: () => (content.value = "inputs"),
    },
    {
      label: "Components Navigations",
      icon: "i-lucide-ship-wheel",
      onSelect: () => (content.value = "navigation"),
    },
  ],
]);
</script>
<template>
  <UDrawer v-model:open="open" should-scale-background direction="left">
    <slot />
    <template #content>
      <div class="p-5">
        <UNavigationMenu orientation="vertical" :items="items" />
      </div>
    </template>
  </UDrawer>
</template>
