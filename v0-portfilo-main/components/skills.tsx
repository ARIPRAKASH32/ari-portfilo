"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Reveal, SectionLabel } from "./reveal"

type Skill = {
  name: string
  level: number
  exp: string
  projects: string
}

const SKILLS: Skill[] = [
  { name: "React.js", level: 92, exp: "2+ yrs · core stack", projects: "Gesture Mouse UI, Portfolio" },
  { name: "MERN Stack", level: 88, exp: "Full-stack apps", projects: "Realtime dashboards" },
  { name: "Spring Boot", level: 82, exp: "REST APIs & services", projects: "Inventory & auth APIs" },
  { name: "AWS", level: 70, exp: "Deploy & serverless", projects: "Cloud-hosted apps" },
  { name: "Java", level: 90, exp: "OOP & backend", projects: "Competitive programming" },
  { name: "C++", level: 90, exp: "OOP & backend", projects: "Competitive programming" },
  { name: "Python", level: 86, exp: "AI & automation", projects: "OpenCV, MediaPipe" },
  { name: "JavaScript", level: 93, exp: "Language fluency", projects: "Every web project" },
  { name: "MongoDB", level: 84, exp: "NoSQL modeling", projects: "MERN backends" },
  { name: "MySQL", level: 80, exp: "Relational data", projects: "Spring Boot services" },
  { name: "DSA", level: 89, exp: "Algorithms", projects: "1st & 2nd prize wins" },
  { name: "OOP", level: 90, exp: "Design principles", projects: "Scalable systems" },
]

const ORBIT = ["React", "Java", "C++", "Python", "AWS", "Mongo", "Spring", "JS", "SQL"]

export function Skills() {
  const [active, setActive] = useState<Skill | null>(null)

  return (
    <section id="skills" className="relative scroll-mt-24 overflow-hidden py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/3 h-[40vh] w-[40vh] -translate-x-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: "var(--glow-soft)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mb-3">
          <SectionLabel>02 — CAPABILITIES</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            A living constellation of <span className="text-primary text-glow">skills</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Orbiting tech sphere */}
          <Reveal className="flex justify-center">
            <div className="relative h-72 w-72 sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full border border-primary/20" />
              <div className="absolute inset-8 rounded-full border border-primary/15" />
              <div className="absolute inset-16 rounded-full border border-primary/10" />
              {/* core */}
              <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full glass border border-primary/40 box-glow">
                <span className="animate-pulse-glow font-heading text-sm font-bold tracking-widest text-primary">
                  ARI
                </span>
              </div>
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              >
                {ORBIT.map((t, i) => {
                  const angle = (i / ORBIT.length) * Math.PI * 2
                  const radius = 132
                  const x = Math.cos(angle) * radius
                  const y = Math.sin(angle) * radius
                  return (
                    <motion.span
                      key={t}
                      className="absolute left-1/2 top-1/2 flex h-12 w-12 items-center justify-center rounded-full glass border border-border text-center font-mono text-[10px] text-foreground"
                      style={{ x, y, marginLeft: -24, marginTop: -24 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    >
                      {t}
                    </motion.span>
                  )
                })}
              </motion.div>
            </div>
          </Reveal>

          {/* Floating energy cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.name} delay={0.03 * i} y={20}>
                <button
                  onMouseEnter={() => setActive(s)}
                  onFocus={() => setActive(s)}
                  onMouseLeave={() => setActive(null)}
                  className="group relative h-full w-full overflow-hidden rounded-xl border border-border glass p-3.5 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:box-glow"
                >
                  <span className="font-heading text-sm font-semibold">{s.name}</span>
                  <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 + 0.03 * i }}
                      className="block h-full rounded-full bg-primary"
                    />
                  </div>
                  <span className="mt-1 block font-mono text-[10px] text-muted-foreground">
                    {s.level}%
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* detail panel */}
        <Reveal delay={0.1} className="mt-8">
          <div className="glass min-h-[72px] rounded-2xl border border-border p-5">
            {active ? (
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                <span className="font-heading text-lg font-bold text-primary text-glow">
                  {active.name}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="text-foreground">exp:</span> {active.exp}
                </span>
                <span className="font-mono text-sm text-muted-foreground">
                  <span className="text-foreground">projects:</span> {active.projects}
                </span>
              </div>
            ) : (
              <p className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">{"// "}</span>Hover a skill to reveal experience &amp; related projects.
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
