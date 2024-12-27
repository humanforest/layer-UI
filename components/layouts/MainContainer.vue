<script setup lang="ts">
defineProps({
  imageUrl: {
    type: String,
    default: null,
  },
})
</script>
<template>
  <UContainer
    :ui="{
      padding: 'pt-6 pb-20 sm:pb-10 lg:pt-10',
    }"
  >
    <div
      v-if="$slots.header || $slots.subtitle || $slots.actions"
      class="flex gap-4"
    >
      <div v-if="imageUrl" class="flex items-center">
        <NuxtImg :src="imageUrl" width="60" height="60" class="rounded-lg" />
      </div>
      <header class="flex-1 flex-col">
        <div class="flex justify-between">
          <h1 v-if="$slots.header" class="text-2xl font-bold">
            <slot name="header" />
          </h1>
          <div v-if="$slots.actions" class="flex items-start gap-2">
            <slot name="actions" />
          </div>
        </div>
        <span
          v-if="$slots.subtitle"
          class="mt-1 flex items-center gap-1 text-base text-gray-400 dark:text-gray-500"
        >
          <slot name="subtitle" />
        </span>
      </header>
    </div>
    <UDivider
      v-if="$slots.header || $slots.subtitle || $slots.actions"
      class="mt-4"
    />
    <main class="mt-4">
      <slot />
    </main>
  </UContainer>
</template>
