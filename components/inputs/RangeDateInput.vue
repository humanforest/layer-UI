<script setup lang="ts">
import {
  CalendarDate,
  DateFormatter,
  getLocalTimeZone,
} from "@internationalized/date";

const df = new DateFormatter("en-GB", {
  dateStyle: "medium",
});

const modelValue = shallowRef({
  start: new CalendarDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate()
  ),
  end: new CalendarDate(
    new Date().getFullYear(),
    new Date().getMonth() + 1,
    new Date().getDate()
  ),
});

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
        <template v-if="modelValue.start">
          <template v-if="modelValue.end">
            {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }} -
            {{ df.format(modelValue.end.toDate(getLocalTimeZone())) }}
          </template>

          <template v-else>
            {{ df.format(modelValue.start.toDate(getLocalTimeZone())) }}
          </template>
        </template>
        <template v-else> Pick a date </template>
      </UButton>

      <template #content>
        <UCalendar
          v-model="modelValue"
          class="p-2"
          :number-of-months="2"
          :color="props.color"
          range
        />
      </template>
    </UPopover>
  </div>
</template>
