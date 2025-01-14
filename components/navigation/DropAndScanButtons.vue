<script setup lang="ts">
// emite event when press Scan button
defineEmits(["scan-bike"]);
const props = defineProps({
  collectedBikes: {
    type: Array as PropType<unknown[]>,
    default: () => [],
  },
});
</script>

<template>
  <div
    class="fixed bottom-0 z-40 my-auto h-22 pt-4 flex w-full border-t border-gray-200 sm:hidden sm:gap-x-6 sm:px-6 lg:px-8 dark:border-gray-700 dark:bg-[var(--ui-bg)]"
  >
    <div class="flex gap-4 justify-center items-start w-full">
      <UButton
        label="Drop off"
        icon="i-tabler-truck"
        class="min-w-[172px] min-h-10 flex justify-center items-start text-black disabled:bg-[var(--ui-bg-inverted)] bg-[var(--ui-bg-inverted)]"
        size="xl"
        :ui="{ label: 'text-black' }"
        :disabled="true"
      >
        <template #trailing>
          <UBadge
            v-if="collectedBikes.length"
            class="font-bold rounded-full bg-red-400 text-black"
            >{{ collectedBikes.length }}</UBadge
          >
        </template>
      </UButton>
      <UButton
        label="Scan Bike"
        icon="i-tabler-qrcode"
        color="primary"
        class="min-w-[172px] min-h-10 flex justify-center items-center text-black"
        size="xl"
        @click="$emit('scan-bike')"
      />
    </div>
  </div>
</template>
