<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";

const df = new DateFormatter("en-GB", {
  dateStyle: "medium",
});

const today = new Date();
const modelValue = shallowRef(
  new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate())
);

const props = defineProps({
  color: {
    type: String as PropType<
      | "primary"
      | "secondary"
      | "success"
      | "info"
      | "warning"
      | "error"
      | "neutral"
    >,
    default: "neutral",
  },
  label: {
    type: String,
    default: "Date",
  },
});
</script>

<template>
  <div>
    <label for="date" class="block font-medium text-[var(--ui-text)]">
      {{ props.label }}
    </label>
    <UPopover :popper="{ placement: 'bottom-start' }" overlay>
      <UButton
        id="date"
        :color="props.color"
        variant="subtle"
        icon="i-lucide-calendar"
      >
        {{ df.format(modelValue.toDate(getLocalTimeZone())) }}
      </UButton>

      <template #content>
        <UCalendar v-model="modelValue" class="p-2" :color="props.color" />
      </template>
    </UPopover>
  </div>
</template>
