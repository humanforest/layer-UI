<script setup lang="ts">
const items = [
  {
    label: 'Icons',
    icon: 'i-tabler-mood-smile-beam'
  },
  {
    label: 'Colors',
    icon: 'i-tabler-address-book'
  },
  {
    label: 'Components',
    icon: 'i-tabler-box'
  }
]
</script>

<template>
  <UAccordion
    :items="items"
    trailing-icon="i-tabler-chevron-down"
  >
    <template #body="{ item }">
      This is the {{ item.label }} panel.
      {{ item.icon }}
    </template>
  </UAccordion>
</template>