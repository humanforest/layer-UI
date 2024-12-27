<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const reload = () => {
  location.reload();
};

const sidebarOpen = useState("sidebarOpen");
const mobileSidebarOpen = useState("mobileSidebarOpen");

const { t } = useI18n();
</script>

<template>
  <div
    class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white/75 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8 dark:border-gray-700 dark:bg-gray-900/75"
  >
    <div class="flex w-full items-center justify-between gap-x-4 sm:justify-normal lg:gap-x-6">
      <UButton
        icon="i-tabler-menu-2"
        color="gray"
        variant="ghost"
        size="xl"
        class="flex lg:hidden"
        @click="mobileSidebarOpen = true"
      />

      <UTooltip
        :text="sidebarOpen ? t('topbar.closeSidebar') : t('topbar.openSidebar')"
        :content="{ side: 'right' }"
        class="hidden lg:flex"
      >
        <UButton
          :icon="sidebarOpen
            ? 'i-tabler-layout-sidebar-left-collapse'
            : 'i-tabler-layout-sidebar-left-expand'
            "
          color="gray"
          variant="ghost"
          size="xl"
          @click="sidebarOpen = !sidebarOpen"
        />
      </UTooltip>

      <UTooltip
        :text="t('topbar.reload')"
        :content="{ side: 'right' }"
      >
        <UButton
          icon="i-tabler-refresh"
          color="gray"
          variant="ghost"
          size="xl"
          @click="reload"
        />
      </UTooltip>

      <slot />

      <UTooltip
        :text="t('topbar.toggleColorMode')"
        :content="{ side: 'left' }"
      >
        <ColorModeButton />
      </UTooltip>

      <UTooltip
        :text="t('topbar.changeLanguage')"
        :content="{ side: 'left' }"
      >
        <LanguageSwitcher />
      </UTooltip>
    </div>
  </div>
</template>
