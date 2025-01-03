<script setup lang="ts">

type SelectMenuItem = {
  id: string;
  label: string;
  color?: string;
  metadata?: { color?: string };
  avatar?: string;
};

type AcceptableValue = {
  id: string;
  label: string;
};

const model = ref<(boolean | SelectMenuItem | AcceptableValue)[]>([])

defineProps({
  options: {
    type: Array as PropType<(boolean | SelectMenuItem | AcceptableValue)[]>,
    default: () => [],
  },
  label: {
    type: String,
    default: 'Items',
  },
  selectLabel: {
    type: String,
    default: (props: any) => props.label,
  },
  maxItems: {
    type: Number,
    default: 3,
  },
  allLabel: {
    type: String,
    default: 'All',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  searchablePlaceholder: {
    type: String,
    default: 'Search...',
  },
})
</script>

<template>
  <USelectMenu
    v-model="model"
    :items="options"
    option-attribute="label"
    multiple
    :placeholder="selectLabel"
    :searchable="searchable"
    :searchable-placeholder="searchablePlaceholder"
    leading-icon="i-tabler-circle-plus"
    :content="{ side: 'bottom', align: 'start' }"
  >
    <template #item="{ item, value }">
      <UBadge
        v-if="item.color"
        size="sm"
        :label="item.label"
        :color="item.color"
        :variant="'subtle'"
      />

      <div
        v-else-if="item.avatar"
        class="flex items-center gap-1"
      >
        <UAvatar
          :src="item.avatar"
          :alt="item.label"
          size="2xs"
          class="mr-2"
        />
        <span class="truncate">{{ item.label }}</span>
      </div>
      <span
        v-else
        class="truncate"
      >{{ item.label }}</span>
    </template>
  </USelectMenu>
</template>
