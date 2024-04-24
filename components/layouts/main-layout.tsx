"use client"
import React from 'react'
import { SiteFooter } from '../site-footer'
import { MainAppNav } from '../main-nav'
import { dashboardConfig } from "@/config/dashboard"
import { UserAccountNav } from '../user-account-nav'

interface MainLayoutProps {
    children?: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col space-y-6">
            <header className="sticky top-0 z-[999999] border-b bg-background">
                <div className="container flex h-16 justify-between py-4">
                    <MainAppNav items={dashboardConfig.mainNav} />
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">

                        <UserAccountNav
                            user={{
                                name: `Admin Admin`,
                                image: '',
                                email: `admin@test.com`,
                            }}
                        />
                    </div>
                </div>

            </header>

            <main className="flex w-full flex-1 flex-col overflow-hidden px-6 sm:px-12">
                {children}
            </main>
            <SiteFooter className="border-t" />
        </div>)
}

export default MainLayout