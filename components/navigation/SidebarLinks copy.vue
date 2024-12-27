<template>
  <component
    :is="draggable && Container ? Container : 'ul'"
    :class="ui.wrapper"
    v-bind="{
      ...(draggable
        ? {
          orientation: 'vertical',
          behaviour: 'contain',
          lockAxis: 'y',
          tag: 'ul',
        }
        : {}),
      ...attrs,
    }"
    @drag-start="isDragging = true"
    @drag-end="isDragging = false"
    @drop="onDrop"
    @touchend="fixActionRestriction"
  >
    <component
      :is="draggable && Draggable ? Draggable : 'li'"
      v-for="(link, index) in links"
      :key="index"
      tag="li"
      :class="ui.container"
    >
      asdasd
    </component>
  </component>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@chakra-ui/vue";
// @ts-ignore
import { twJoin, twMerge } from "tailwind-merge";
import { getULinkProps } from "#ui/utils";
import type { ChipColor } from "#ui/types";
import type { NavigationLink } from "~/types/ui";

const config = computed(() => ({
  wrapper: "relative !min-h-[auto] !min-w-[auto]",
  container: "!overflow-visible",
  base: "group relative flex items-center gap-2 px-3 py-2 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75",
  firstLevel: {
    active: "text-white before:bg-primary-500",
    label: "text-base font-bold truncate relative",
  },
  active:
    "text-gray-900 dark:text-white before:bg-gray-100 dark:before:bg-gray-800",
  inactive:
    "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:before:bg-gray-50 dark:hover:before:bg-gray-800/50",
  static: "text-gray-900 dark:text-white cursor-auto",
  icon: {
    base: "flex-shrink-0 size-5",
    active: "text-white",
    inactive:
      "text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200",
  },
  trailingIcon: {
    name: "i-tabler-chevron-down",
    base: "ml-auto w-5 h-5 transform transition-transform duration-200 flex-shrink-0",
    active: "",
    inactive: "-rotate-90",
  },
  avatar: {
    base: "flex-shrink-0",
    size: "3xs" as const,
  },
  chip: {
    base: "flex-shrink-0 mx-2.5",
    size: "sm" as const,
  },
  badge: {
    base: "flex-shrink-0 ml-auto relative rounded",
    color: "gray" as const,
    variant: "solid" as const,
    size: "xs" as const,
  },
  label: "text-sm truncate relative",
  dot: {
    wrapper: "w-px h-full mx-[9.5px] bg-gray-200 dark:bg-gray-700 relative",
    after:
      "after:absolute after:z-[1] after:w-px after:h-full after:bg-gray-200 after:dark:bg-gray-700 after:transform after:translate-y-full after:inset-x-0",
    base: "w-1 h-1 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    active: "bg-gray-900 dark:bg-white",
    inactive:
      "bg-gray-400 dark:bg-gray-500 group-hover:bg-gray-700 dark:group-hover:bg-gray-200",
  },
  tooltip: {
    strategy: "override",
    transition: {
      enterActiveClass: "transition ease-out duration-200",
      enterFromClass: "opacity-0",
      enterToClass: "opacity-100",
      leaveActiveClass: "transition ease-in duration-150",
      leaveFromClass: "opacity-100",
      leaveToClass: "opacity-0",
    },
  },
  transition: {
    enterActiveClass:
      "overflow-hidden transition-[height] duration-200 ease-out",
    leaveActiveClass:
      "overflow-hidden transition-[height] duration-200 ease-out",
  },
}));

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  draggable: {
    type: Boolean,
    default: false,
  },
  level: {
    type: Number,
    default: 0,
  },
  links: {
    type: Array as PropType<NavigationLink[]>,
    default: () => [],
  },
  class: {
    type: [String, Object, Array] as PropType<any>,
    default: undefined,
  },
  ui: {
    type: Object as PropType<Partial<typeof config.value>>,
    default: () => ({}),
  },
});

const links = props.links.filter((l) => !l.hide);

const emit = defineEmits(["update:links"]);

let Container: any;
let Draggable: any;

if (props.draggable) {
  await import("vue3-smooth-dnd" as string)
    .then(({ Container: _Container, Draggable: _Draggable }) => {
      Container = _Container;
      Draggable = _Draggable;
    })
    .catch();
}

const isDragging = ref(false);

const { ui, attrs } = useUI(
  "dashboard.sidebar.links",
  toRef(props, "ui"),
  config,
  toRef(props, "class"),
  true
);

function onEnter(_el: Element, done: () => void) {
  const el = _el as HTMLElement;
  el.style.height = "0";
  el.offsetHeight; // Trigger a reflow, flushing the CSS changes
  el.style.height = el.scrollHeight + "px";

  el.addEventListener("transitionend", done, { once: true });
}

function onBeforeLeave(_el: Element) {
  const el = _el as HTMLElement;
  el.style.height = el.scrollHeight + "px";
  el.offsetHeight; // Trigger a reflow, flushing the CSS changes
}

function onAfterEnter(_el: Element) {
  const el = _el as HTMLElement;
  el.style.height = "auto";
}

function onLeave(_el: Element, done: () => void) {
  const el = _el as HTMLElement;
  el.style.height = "0";

  el.addEventListener("transitionend", done, { once: true });
}

function onDrop(results: {
  removedIndex: number;
  addedIndex: number;
  payload: any;
}) {
  const { removedIndex, addedIndex, payload } = results;
  const links = [...props.links];

  if (removedIndex === null && addedIndex === null) {
    return;
  }

  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = links.splice(removedIndex, 1)[0];
  }
  if (addedIndex !== null) {
    links.splice(addedIndex, 0, itemToAdd);
  }

  emit("update:links", links);
}

function fixActionRestriction() {
  document.body.classList.remove(
    "smooth-dnd-no-user-select",
    "smooth-dnd-disable-touch-action"
  );
}
</script>
