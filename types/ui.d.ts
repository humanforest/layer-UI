import type { Avatar, Badge, Chip, Link as ULink, Tooltip } from '#ui/types'

export interface Link extends ULink {
  hide?: boolean
  label: string
  class?: string
  click?: (event: Event) => void
}

export interface NavigationLink extends Link {
  labelClass?: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  avatarClass?: string
  chip?: string | Chip
  chipClass?: string
  badge?: string | number | Badge
  tooltip?: Tooltip
  defaultOpen?: boolean
  click?: () => void
  mobileLabel?: string
  // Only applicable to links with children
  draggable?: boolean
  collapsible?: boolean
  children?: NavigationLink[]
}
