<script setup lang="ts">
import { TooltipProvider } from "reka-ui";
useHead({
  bodyAttrs: {
    class: "bg-gray-50 dark:bg-gray-950",
  },
});
</script>
<template>
  <UApp>
    <NuxtLayout name="custom">
      <TooltipProvider>
        <div>
          <NuxtLoadingIndicator :throttle="0" />
          <NuxtPage />
        </div>
      </TooltipProvider>
    </NuxtLayout>
  </UApp>
</template>
<style>
html {
  font-family: "GT Haptik", sans-serif;
}

/* Color Mode transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2147483646;
}

.dark::view-transition-old(root) {
  z-index: 2147483646;
}

.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
