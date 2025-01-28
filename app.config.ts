export default defineAppConfig({
  ui: {
    colors: {
      primary: "emerald",
      secondary: "secondary",
      tertiary: "tertiary",
      error: "text-red-500",
      info: "info",
      success: "success",
      warning: "warning",
      green: "green",
      blue: "blue",
      red: "red",
      yellow: "yellow",
      purple: "purple",
      pink: "pink",
      indigo: "indigo",
      teal: "teal",
      cyan: "cyan",
      black: "black",
      white: "white",
      violet: "violet",
      orange: "orange",
      emerald: "emerald",
      gray: "gray",
      amber: "amber",
      slate: "slate",
      neutral: "neutral",
    },
    navigationMenu: {
      slots: {
        root: "relative !min-h-[auto] !min-w-[auto]",
      },
    },
    link: {
      base: "focus-visible:outline-[var(--ui-scondary)]",
      variants: {
        active: {
          true: "before:bg-[var(--ui-primary)] text-white font-bold",
        },
      },
    },
    button: {
      slots: {
        base: "rounded-[calc(var(--ui-radius)*1.5)] font-medium inline-flex items-center focus:outline-hidden disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75 transition-colors cursor-pointer",
        label: "truncate",
        leadingIcon: "shrink-0",
        leadingAvatar: "shrink-0",
        leadingAvatarSize: "",
        trailingIcon: "shrink-0",
      },
      variants: {
        size: {
          xs: {
            base: "px-2 py-1 text-xs gap-1",
            leadingIcon: "size-4",
            trailingIcon: "size-4",
          },
          sm: {
            base: "px-2.5 py-1.5 text-xs gap-1.5",
            leadingIcon: "size-4",
            trailingIcon: "size-4",
          },
          md: {
            base: "px-2.5 py-1.5 text-sm gap-1.5",
            leadingIcon: "size-5",
            trailingIcon: "size-5",
          },
          lg: {
            base: "px-3 py-2 text-sm gap-2",
            leadingIcon: "size-5",
            trailingIcon: "size-5",
          },
          xl: {
            base: "px-3 py-2 text-base gap-2",
            leadingIcon: "size-6",
            trailingIcon: "size-6",
          },
          "2xl": {
            // Definición correcta de 2xl
            base: "px-3.5 py-2.5 text-xl gap-2.5",
            leadingIcon: "h-7 w-7",
            trailingIcon: "h-7 w-7",
          },
        },
        square: {
          true: "",
        },
        loading: {
          true: "",
        },
      },
      compoundVariants: [
        {
          size: "2xl",
          square: true,
          class: "p-3",
        },
        {
          loading: true,
          class: {
            leadingIcon: "animate-spin",
            trailingIcon: "animate-spin",
          },
        },
        {
          color: "gray",
          variant: "solid",
          class:
            "shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 aria-disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 dark:aria-disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400",
        },
      ],
      default: {
        loadingIcon: "i-tabler-loader",
        size: "md", // Tamaño por defecto para evitar errores
      },
    },
    card: {
      slots: {
        header: "text-lg font-bold px-4 py-5 sm:px-6",
        root: "overflow-hidden",
      },
    },
    avatar: {
      background: "bg-gray-100 dark:bg-gray-700",
      rounded: "rounded-full object-cover",
    },
    alert: {
      title: "text-sm font-bold",
    },
    tooltip: {
      popper: { strategy: "fixed" },
    },
    dropdownMenu: {
      slots: {
        itemTrailing: "gap-4",
      },
    },
    selectMenu: {
      width: "max-w-max min-w-max",
      slots: {
        content: "max-w-max min-w-max",
      },
      default: {
        selectedIcon: "i-tabler-circle-check-filled",
      },
      option: {
        selected: "pe-8",
      },
    },
    formGroup: {
      label: {
        base: "block text-base font-medium text-gray-700 dark:text-gray-300",
      },
      description: "text-gray-400 dark:text-gray-500",
      hint: "text-gray-400 dark:text-gray-500",
      help: "mt-2 text-xs text-gray-400 dark:text-gray-500",
    },
    slideover: {
      wrapper: "sm:m-2",
      background: "sm:bg-transparent sm:dark:bg-transparent",
    },
    breadcrumb: {
      base: "group flex min-w-0 items-center gap-x-1.5 text-base font-normal text-gray-400 dark:text-gray-500",
      ol: "flex flex-wrap items-center gap-x-1.5",
    },
    table: {
      loadingState: {
        icon: "i-tabler-loader",
        label: "Loading...",
      },
    },
  },
});
