<template>
  <div class="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt
      class="flex items-center text-sm font-bold leading-6 text-gray-500 dark:text-gray-400"
    >
      <slot name="label" />
    </dt>
    <dd class="mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0">
      <slot />
    </dd>
  </div>
</template>
