<script setup lang="ts">
import type { NavigationLink } from "../../types/ui";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "reka-ui";
defineProps({
  links: {
    type: Array as PropType<NavigationLink[]>,
    default: () => [],
  },
  isAsChild: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  collapsible: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
});
</script>

<template>
  <NavigationMenuRoot
    v-slot="{ modelValue }"
    :disable-hover-trigger="true"
    :disable-click-trigger="false"
    :disable-pointer-leave-close="true"
    orientation="vertical"
  >
    <NavigationMenuList>
      <NavigationMenuItem
        v-for="item in links"
        :key="item.label"
        :class="item.children && item.children.length ? 'px-3' : ''"
      >
        <NavigationMenuLink v-if="!item.children" as="div">
          <ULink
            :to="item.to"
            exact
            :active="true"
            class="flex items-center gap-2"
            active-class="text-green-500"
          >
            <UIcon :name="item.icon" />
            {{ item.label }}
          </ULink>
        </NavigationMenuLink>
        <NavigationMenuTrigger
          v-else
          :id="modelValue"
          :disabled="!item.children"
        >
          <div
            class="group relative flex items-center justify-between gap-2 py-2 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 text-white before:bg-primary-500"
          >
            <span class="flex items-center gap-2">
              <UIcon :name="item.icon" />
              {{ item.label }}
            </span>
            <UIcon
              v-if="item.children"
              :name="
                modelValue ? 'i-tabler-chevron-up' : 'i-tabler-chevron-down'
              "
            />
          </div>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <template v-if="item.children">
            <SidebarLinks
              :links="item.children"
              :is-as-child="true"
              :collapsible="true"
            />
          </template>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>
