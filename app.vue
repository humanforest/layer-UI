<script setup lang="ts">
import { TooltipProvider } from 'reka-ui'
</script>
<template>
  <UApp>
    <NuxtLayout>
      <TooltipProvider>
        <div>
          <NuxtLoadingIndicator :throttle="0" />
          <NuxtPage />
        </div>
      </TooltipProvider>
    </NuxtLayout>
  </UApp>
</template>
