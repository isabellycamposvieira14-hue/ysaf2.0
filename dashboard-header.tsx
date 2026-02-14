"use client"

import { User } from "lucide-react"

export function DashboardHeader() {
  const progress = 35

  return (
    <header className="flex flex-col gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4 pl-12 lg:pl-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Bem-vindo de volta</p>
          <p className="text-xs text-muted-foreground">Membro YSAF Dominus IA</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 sm:w-56">
          <div className="mb-1 flex items-center justify-between">
            <p className="text-xs font-medium text-muted-foreground">Progresso do curso</p>
            <p className="text-xs font-bold text-primary">{progress}%</p>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-secondary">
            <div
              className="animate-progress-fill h-full rounded-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
