"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileDown,
  HeadphonesIcon,
  User,
  LogOut,
  Menu,
  X,
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { createClient } from "@/lib/supabase/client"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Modulos do Curso", href: "/dashboard/modulos", icon: BookOpen },
  { label: "Grupo Exclusivo", href: "/dashboard/grupo", icon: Users },
  { label: "Materiais", href: "/dashboard/materiais", icon: FileDown },
  { label: "Suporte", href: "/dashboard/suporte", icon: HeadphonesIcon },
  { label: "Perfil", href: "/dashboard/perfil", icon: User },
]

function PantherLogoSmall() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_10px_hsla(260,100%,59%,0.5)]"
      aria-label="YSAF Dominus IA"
    >
      <circle cx="32" cy="32" r="30" stroke="hsl(260 100% 59%)" strokeWidth="2" fill="hsl(255 30% 10%)" />
      <path
        d="M26 28C26 28 28 26 32 26C36 26 38 28 38 28L40 32C40 34 38 38 36 40L32 43L28 40C26 38 24 34 24 32L26 28Z"
        fill="hsl(260 100% 59%)"
        opacity="0.3"
      />
      <circle cx="27" cy="30" r="2" fill="hsl(260 100% 75%)" />
      <circle cx="37" cy="30" r="2" fill="hsl(260 100% 75%)" />
      <path
        d="M29 35C29 35 30.5 37 32 37C33.5 37 35 35 35 35"
        stroke="hsl(260 100% 75%)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function AppSidebar({
  userEmail,
  userName,
}: {
  userEmail: string
  userName: string
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = async () => {
    setIsLoggingOut(true)
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
      router.push("/")
      router.refresh()
    } catch {
      setIsLoggingOut(false)
    }
  }

  const displayName = userName || userEmail?.split("@")[0] || "Membro"

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setMobileOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Fechar menu"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar transition-transform duration-300 lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close button mobile */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground lg:hidden"
          aria-label="Fechar menu"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-sidebar-border px-6 py-6">
          <PantherLogoSmall />
          <div>
            <p className="text-sm font-bold tracking-wide text-foreground">YSAF DOMINUS IA</p>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
              Área de Membros
            </p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 space-y-1 px-3 py-4" aria-label="Menu principal">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_hsla(260,100%,59%,0.2)]"
                    : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* User + Logout Footer */}
        <div className="border-t border-sidebar-border px-3 py-4">
          <div className="mb-3 flex items-center gap-3 px-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium text-foreground">{displayName}</p>
              <p className="truncate text-[11px] text-muted-foreground">{userEmail}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
          >
            <LogOut className="h-4 w-4" />
            {isLoggingOut ? "Saindo..." : "Sair"}
          </button>
        </div>
      </aside>
    </>
  )
}
