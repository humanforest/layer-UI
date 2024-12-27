<template>
  <div
    class="relative flex w-full flex-1 flex-col overflow-hidden border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900"
  >
    <div class="flex min-h-0 grow flex-col gap-y-2">
      <div v-if="$slots.header" class="flex w-full flex-col p-4">
        <slot name="header" />
      </div>

      <div class="flex flex-1 flex-col gap-y-2 overflow-y-auto p-4">
        <slot />
      </div>

      <div
        v-if="$slots.footer"
        class="flex shrink-0 items-center justify-between gap-x-1.5 p-4"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
