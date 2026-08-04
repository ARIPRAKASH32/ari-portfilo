"use client"

import { Reveal, SectionLabel } from "./reveal"
import { Trophy, Medal, Award } from "lucide-react"

type Achievement = {
  id: string
  title: string
  institution: string
  event?: string
  prize: string
  icon: any
}

const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-1",
    title: "1st Prize in Coding Competition",
    institution: "Government College of Engineering, Bargur",
    event: "Code Vertex",
    prize: "1st Prize",
    icon: Trophy
  },
  {
    id: "ach-2",
    title: "2nd Prize in National-Level Coding Competition",
    institution: "R. P. Sarathy Institute of Technology",
    event: "Code Rescue",
    prize: "2nd Prize",
    icon: Medal
  },
  {
    id: "ach-3",
    title: "1st Place in Debugging Competition",
    institution: "Study World College of Engineering",
    prize: "1st Place",
    icon: Award
  }
]

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-24 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <div className="text-center mb-16">
          <Reveal className="mb-4 flex justify-center">
            <SectionLabel>06 — RECOGNITION</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto">
              Awards & <span className="text-primary text-glow">Achievements.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((ach, idx) => (
            <Reveal key={ach.id} delay={0.1 + idx * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border glass-panel p-8 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
                
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-border text-yellow-500 box-glow">
                  <ach.icon className="h-7 w-7" />
                </div>
                
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {ach.title}
                </h3>
                
                <div className="mt-auto space-y-2 pt-4 border-t border-border/50">
                  <div className="text-sm font-medium text-muted-foreground">
                    {ach.institution}
                  </div>
                  {ach.event && (
                    <div className="text-xs text-muted-foreground/80 font-mono">
                      Event: {ach.event}
                    </div>
                  )}
                </div>

                <div className="absolute top-8 right-8 text-4xl opacity-5 pointer-events-none">
                  <ach.icon />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
