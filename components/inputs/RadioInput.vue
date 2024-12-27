<script setup lang="ts">
const items = ref(['System', 'Light', 'Dark'])
const value = ref('light')
const props = defineProps({
  options: {
    type: Array as PropType<{ id: string }[]>,
    default: () => [],
  },
  wrapperClass: {
    type: String,
    default: () => 'grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4',
  },
})

</script>

<template>
  <URadioGroup
    v-model="value"
    :items="items"
  >
    <template #description="{ item, modelValue }">
      <div :class="[
        modelValue
          ? 'border-primary-500 dark:border-primary-400 ring-primary-500 dark:ring-primary-400 ring-2'
          : 'border-gray-300 dark:border-gray-700',
        'relative flex cursor-pointer rounded-lg border bg-white p-5 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-800 hover:dark:bg-gray-700',
      ]">
        <span class="flex w-full flex-col gap-4">
          <span v-if="$slots.image">
            <slot
              name="image"
              :option="item"
            />
          </span>
          <span class="flex flex-col">
            <RadioGroupLabel
              v-if="$slots.title"
              as="span"
              class="relative font-medium text-gray-900 dark:text-gray-200"
            >
              <slot
                name="title"
                :option="item"
              />
            </RadioGroupLabel>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {{ item }}
            </span>
          </span>
        </span>
        <UIcon
          name="i-tabler-circle-check-filled"
          :class="[
            !modelValue ? 'invisible' : '',
            'text-primary-500 dark:text-primary-400 absolute right-2 top-2 size-6',
          ]"
          aria-hidden="true"
        />
        <span
          :class="[
            item ? 'border' : 'border-2',
            modelValue
              ? 'border-primary-500 dark:border-primary-400'
              : 'border-transparent',
            'pointer-events-none absolute -inset-px rounded-lg',
          ]"
          aria-hidden="true"
        />
      </div>
    </template>
  </URadioGroup>
</template>
