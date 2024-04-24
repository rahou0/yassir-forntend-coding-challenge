"use client"

import * as React from "react"
import Link from "next/link"
import { MainNavItem } from "../types"
import { usePathname, useSelectedLayoutSegment } from "next/navigation"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MobileNav } from "@/components/mobile-nav"

interface MainNavProps {
    items?: MainNavItem[],
    children?: React.ReactNode
}

export function MainAppNav({ items, children }: MainNavProps) {
    const segment = useSelectedLayoutSegment()
    const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false)
    const pathname = usePathname();

    React.useEffect(() => {
      if(pathname) setShowMobileMenu(false)
    }, [pathname])

    return (
        <div className="flex gap-6 md:gap-10">
            <Link href="/" className="hidden items-center space-x-2 md:flex">
                <span className="hidden font-bold sm:inline-block">{'Yassir restaurant'}</span>
            </Link>
            {items?.length ? (
                <nav className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <Link
                            key={index}
                            href={item.disabled ? "#" : item.href}
                            className={cn(
                                "flex items-center text-lg font-bold transition-colors hover:text-foreground/80 sm:text-sm",
                                item.href.endsWith(`/${segment}`)
                                    ? "text-foreground"
                                    : "text-foreground/40",
                                item.disabled && "cursor-not-allowed opacity-80"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>
            ) : null}
              <button
                className="flex items-center space-x-2 md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
                {showMobileMenu ? <Icons.close /> : <Icons.menu />}
            </button>
            {showMobileMenu && items && (
                <MobileNav items={items}>{children}</MobileNav>
            )}
        </div>
    )
}
