"use client"

import { DashboardHeader } from "@/components/dashboard-header"
import {
  Users,
  MessageSquare,
  ExternalLink,
  Shield,
  Zap,
  BookOpen,
} from "lucide-react"

const benefits = [
  {
    icon: MessageSquare,
    title: "Networking Estrategico",
    description: "Conecte-se com outros alunos, troque experiencias e faca parcerias.",
  },
  {
    icon: Zap,
    title: "Atualizacoes em Tempo Real",
    description: "Receba novidades sobre ferramentas de IA, tendencias e estrategias antes de todos.",
  },
  {
    icon: Shield,
    title: "Suporte da Comunidade",
    description: "Tire duvidas, compartilhe resultados e receba feedback de quem esta na trincheira.",
  },
  {
    icon: BookOpen,
    title: "Conteudo Exclusivo",
    description: "Materiais, dicas e insights que so sao compartilhados dentro do grupo.",
  },
]

const rules = [
  "Respeite todos os membros. Sem ofensas, discriminacao ou bullying.",
  "Nao compartilhe o conteudo do curso fora do grupo.",
  "Contribua ativamente: perguntas, insights e resultados sao bem-vindos.",
  "Proibido spam, links de afiliados e autopromocessao sem autorizacao.",
]

export default function GrupoPage() {
  return (
    <div className="min-h-screen">
      <DashboardHeader />

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-balance text-2xl font-bold text-foreground">
            {"Grupo Exclusivo"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {"Comunidade fechada para alunos do IA Lucrativa."}
          </p>
        </div>

        {/* Join card */}
        <div className="mb-8 overflow-hidden rounded-xl border border-primary/20 bg-card">
          <div className="relative p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {"Comunidade YSAF Dominus IA"}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {"147 membros ativos"}
                  </p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/CzQAcYTACzRHg7vwoFsaQs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 animate-glow-pulse"
              >
                {"Entrar no Grupo"}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            {"Beneficios do Grupo"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                  <benefit.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            {"Regras da Comunidade"}
          </h2>
          <div className="rounded-xl border border-border bg-card p-5">
            <ul className="space-y-3">
              {rules.map((rule, index) => (
                <li key={`rule-${index}`} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[10px] font-bold text-primary">
                    {index + 1}
                  </span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
