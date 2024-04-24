import { BadgeVariantProps } from "../components/ui/badge"

export type RowSelectionState = Record<string, boolean>

export type StatusVariant={
    variant: BadgeVariantProps,
    label: string,
    value: string
}
export type Option = Record<"value" | "label", string> & Record<string, string>

export type NavItem = {
    title: string
    href: string
    disabled?: boolean
}

export type MainNavItem = NavItem

export type DashboardConfig = {
    mainNav: NavItem[]
    sidebarNav: NavItem[]
}