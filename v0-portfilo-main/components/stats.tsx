"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Code2, Trophy, Flame, Activity, GitBranch } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const dur = 1600
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {n.toLocaleString()}
      {suffix}
    </span>
  )
}

const STATS = [
  { icon: GitBranch, label: "GitHub", metric: "Repositories", value: 48, suffix: "+" },
  { icon: Code2, label: "LeetCode", metric: "Problems Solved", value: 420, suffix: "+" },
  { icon: Activity, label: "HackerRank", metric: "Badges", value: 12, suffix: "" },
  { icon: Trophy, label: "Codeforces", metric: "Contests", value: 35, suffix: "+" },
]

// 7x18 contribution-style heatmap
const WEEKS = 26
const DAYS = 7

export function Stats() {
  const [heat, setHeat] = useState<number[]>(() => Array.from({ length: WEEKS * DAYS }, () => 0))

  useEffect(() => {
    setHeat(Array.from({ length: WEEKS * DAYS }, () => Math.floor(Math.random() * 5)))
  }, [])

  return (
    <section id="stats" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-3">
          <SectionLabel>05 — LIVE TELEMETRY</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Numbers behind the <span className="text-primary text-glow">grind</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-50"
                  style={{ background: "var(--glow-soft)" }}
                />
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground">
                  <s.icon className="h-4 w-4 text-primary" /> {s.label}
                </div>
                <p className="mt-4 font-heading text-4xl font-extrabold text-primary text-glow">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.metric}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* heatmap */}
        <Reveal delay={0.1} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-border glass p-6">
            <div className="mb-4 flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground">
              <Flame className="h-4 w-4 text-accent" /> CONTRIBUTION HEATMAP · LAST 6 MONTHS
            </div>
            <div className="flex gap-[3px] overflow-x-auto pb-1">
              {Array.from({ length: WEEKS }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {Array.from({ length: DAYS }).map((_, d) => {
                    const lvl = heat[w * DAYS + d]
                    return (
                      <motion.span
                        key={d}
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (w * DAYS + d) * 0.001 }}
                        className="h-3 w-3 rounded-[3px]"
                        style={{
                          background:
                            lvl === 0
                              ? "var(--secondary)"
                              : `color-mix(in oklch, var(--primary) ${lvl * 25}%, var(--secondary))`,
                        }}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-end gap-2 font-mono text-[10px] text-muted-foreground">
              less
              {[0, 1, 2, 3, 4].map((l) => (
                <span
                  key={l}
                  className="h-3 w-3 rounded-[3px]"
                  style={{
                    background:
                      l === 0
                        ? "var(--secondary)"
                        : `color-mix(in oklch, var(--primary) ${l * 25}%, var(--secondary))`,
                  }}
                />
              ))}
              more
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
