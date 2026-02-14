import React from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { AppSidebar } from "@/components/app-sidebar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/")
  }

  return (
    <div className="flex min-h-screen">
      <AppSidebar userEmail={user.email || ""} userName={user.user_metadata?.full_name || ""} />
      <div className="flex-1 lg:pl-64">{children}</div>
    </div>
  )
}
