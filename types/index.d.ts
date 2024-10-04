type NavLink = {
    name: string
    href: string
    children?: NavLink[]
    active: boolean
}