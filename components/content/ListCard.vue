<template>
  <UCard
    :ui="{
      base: 'w-full',
      body: {
        padding: 'p-0 sm:p-0',
      },
    }"
  >
    <dl class="divide-y divide-gray-100 dark:divide-gray-800">
      <slot />
    </dl>
  </UCard>
</template>
<script setup lang="ts"></script>
