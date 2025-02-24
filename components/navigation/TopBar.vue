<script setup lang="ts">
import { useI18n } from "vue-i18n";
const route = useRoute();
const reload = () => {
  location.reload();
};

const sidebarOpen = useState("sidebarOpen");
const mobileSidebarOpen = useState("mobileSidebarOpen");

const { t } = useI18n();

const routeLastName = computed(() => {
  const nameParts = route.name.toString().split("-");
  const lastName = nameParts.pop() || "";
  return lastName.charAt(0).toUpperCase() + lastName.slice(1);
});

const items = reactive(
  ref([
    {
      label: "Home",
      to: "index",
    },
    {
      label: routeLastName.value,
      to: route.path,
    },
  ])
);

watch(
  () => route.path,
  () => {
    items.value[1].label = routeLastName.value;
  }
);
</script>

<template>
  <div
    class="sticky w-full top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white/75 px-4 backdrop-blur sm:gap-x-6 sm:px-6 lg:px-8 dark:border-[var(--ui-border)] dark:bg-[var(--ui-bg)]"
  >
    <div
      class="flex w-full items-center justify-between gap-x-4 sm:justify-normal lg:gap-x-6"
    >
      <div class="flex w-full items-center">
        <UButton
          icon="i-tabler-menu-2"
          color="gray"
          variant="ghost"
          size="xl"
          class="flex lg:hidden"
          @click="mobileSidebarOpen = true"
        />

        <UTooltip
          :text="
            sidebarOpen ? t('topbar.closeSidebar') : t('topbar.openSidebar')
          "
          :content="{ side: 'right' }"
          class="hidden lg:flex"
        >
          <UButton
            :icon="
              sidebarOpen
                ? 'i-tabler-layout-sidebar-left-collapse'
                : 'i-tabler-layout-sidebar-left-expand'
            "
            color="gray"
            variant="ghost"
            size="xl"
            @click="sidebarOpen = !sidebarOpen"
          />
        </UTooltip>
        <div>
          <div class="flex items-center gap-2">
            <div class="text-[var(--prose-text)]">
              {{ routeLastName }}
            </div>
          </div>
        </div>
      </div>

      <slot />
      <div class="flex items-center gap-4">
        <UTooltip :text="t('topbar.reload')" :content="{ side: 'right' }">
          <UButton
            icon="i-tabler-refresh"
            color="gray"
            variant="ghost"
            size="xl"
            @click="reload"
          />
        </UTooltip>
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
  </div>
</template>

<i18n lang="json">
{
  "en-GB": {
    "topbar": {
      "closeSidebar": "Close Sidebar",
      "openSidebar": "Open Sidebar",
      "reload": "Reload",
      "toggleColorMode": "Toggle Color Mode",
      "changeLanguage": "Change Language"
    }
  },
  "es-ES": {
    "topbar": {
      "closeSidebar": "Cerrar Sidebar",
      "openSidebar": "Abrir Sidebar",
      "reload": "Recargar",
      "toggleColorMode": "Cambiar modo de color",
      "changeLanguage": "Cambiar idioma"
    }
  }
}
</i18n>
