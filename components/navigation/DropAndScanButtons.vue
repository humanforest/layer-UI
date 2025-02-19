<script setup lang="ts">
// emite event when press Scan button
defineEmits(["scan-bike", "open-collect"]);
defineProps({
  collectedBikes: {
    type: Array as PropType<unknown[]>,
    default: () => [],
  },
  classView: {
    type: String,
    default:
      "fixed bottom-0 z-40 my-auto h-22 pt-4 flex w-full border-t border-gray-200 md:hidden sm:gap-x-6 sm:px-6 lg:px-8 dark:border-[var(--ui-border)] dark:bg-[var(--ui-bg)] bg-white dark:bg-gray-900",
  },
});
</script>

<template>
  <div :class="classView">
    <div
      class="flex gap-2 justify-center md:justify-end items-start w-full px-4 md:px-0"
    >
      <UButton
        label="Drop off"
        icon="i-tabler-truck"
        color="neutral"
        variant="solid"
        class="w-full md:w-[129px] justify-center min-h-10 md:min-h-auto md:h-9.5"
        size="md"
        :disabled="collectedBikes.length > 0 ? false : true"
        @click="$emit('open-collect')"
      >
        <template #trailing>
          <UBadge
            v-if="collectedBikes.length"
            class="font-bold rounded-full bg-red-400"
            >{{ collectedBikes.length }}</UBadge
          >
        </template>
      </UButton>
      <UButton
        label="Scan Bike"
        icon="i-tabler-scan"
        color="primary"
        variant="solid"
        class="w-full md:w-[129px] justify-center items-center min-h-10 md:min-h-auto md:h-9.5"
        size="md"
        @click="$emit('scan-bike')"
      />
    </div>
  </div>
</template>
