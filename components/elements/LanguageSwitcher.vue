<script setup lang="ts">
const { setLocale, locale } = useI18n();

const items = [
  [
    {
      label: "🇬🇧 English",
      locale: "en-GB",
      onSelect: () => {
        setLocale("en-GB");
      },
    },
    {
      label: "🇪🇸 Spanish",
      locale: "es-ES",
      onSelect: () => {
        setLocale("es-ES");
      },
    },
  ],
];
</script>

<template>
  <UDropdownMenu
    :items="items"
    :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8,
    }"
  >
    <!--      :label="locale.split('-')[0].toUpperCase()"-->
    <UButton
      color="gray"
      size="xl"
      variant="ghost"
      icon="i-tabler-language"
    />
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon
        :name="locale === item.locale ? 'i-tabler-check' : ''"
        class="text-primary ms-auto size-4 shrink-0"
      />
    </template>
  </UDropdownMenu>
</template>
