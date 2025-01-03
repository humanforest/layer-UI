export default defineAppConfig({
  ui: {
    primary: 'emerald',
    colors: {
      gray: 'slate',
      green: 'primary',
      blue: 'blue',
      white: 'white',
      indigo: 'indigo',
      violet: 'violet',
      pink: 'pink',
      yellow: 'yellow',
      red: 'red',
      purple: 'purple',
      amber: 'amber',
      emerald: 'emerald',
      cyan: 'cyan',

    },
    button: {
      size: {
        '2xl': 'text-xl',
      },
      gap: {
        '2xl': 'gap-x-2.5',
      },
      padding: {
        '2xl': 'px-3.5 py-2.5',
      },
      square: {
        '2xl': 'p-3',
      },
      icon: {
        size: {
          '2xl': 'h-7 w-7',
        },
      },
      default: {
        loadingIcon: 'i-tabler-loader',
      },
    },
    card: {
      header: {
        base: 'text-lg font-bold',
        padding: 'px-4 py-5 sm:px-6',
      },
      base: 'overflow-hidden',
    },
    avatar: {
      background: 'bg-gray-100 dark:bg-gray-700',
      rounded: 'rounded-full object-cover',
    },
    verticalNavigation: {
      base: 'group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
    },
    alert: {
      title: 'text-sm font-bold',
    },
    tooltip: {
      popper: { strategy: 'fixed' },
    },
    dropdownMenu: {
      slots: {
        content: 'max-w-max min-w-max bg-red-500'
      },
    },
    selectMenu: {
      width: 'max-w-max min-w-max',
      slots: {
        content: 'max-w-max min-w-max'
      },
      default: {
        selectedIcon: 'i-tabler-circle-check-filled',
      },
      option: {
        selected: 'pe-8',
      },
    },
    formGroup: {
      label: {
        base: 'block text-base font-medium text-gray-700 dark:text-gray-300',
      },
      description: 'text-gray-400 dark:text-gray-500',
      hint: 'text-gray-400 dark:text-gray-500',
      help: 'mt-2 text-xs text-gray-400 dark:text-gray-500',
    },
    slideover: {
      wrapper: 'sm:m-2',
      background: 'sm:bg-transparent sm:dark:bg-transparent',
    },
    breadcrumb: {
      base: 'group flex min-w-0 items-center gap-x-1.5 text-base font-normal text-gray-400 dark:text-gray-500',
      ol: 'flex flex-wrap items-center gap-x-1.5',
    },
    table: {
      loadingState: {
        icon: 'i-tabler-loader',
        label: 'Loading...',
      },
    },
  },
})