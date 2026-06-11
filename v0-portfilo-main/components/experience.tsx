"use client"

import { motion } from "framer-motion"
import { Briefcase, Award, BadgeCheck, Code2 } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"

type Entry = {
  icon: typeof Briefcase
  period: string
  title: string
  org: string
  desc: string
  tag: string
}

const TIMELINE: Entry[] = [
  {
    icon: Briefcase,
    period: "Internship",
    title: "Software Development Intern",
    org: "Industry Experience",
    desc: "Built and shipped features across the stack, collaborating with engineers on real production systems.",
    tag: "EXPERIENCE",
  },
  {
    icon: Award,
    period: "Award",
    title: "1st Prize — Code Vertex",
    org: "Competitive Coding",
    desc: "Took first place solving complex algorithmic challenges under time pressure.",
    tag: "WIN",
  },
  {
    icon: Award,
    period: "Award",
    title: "2nd Prize — Code Rescue",
    org: "Competitive Coding",
    desc: "Secured second place in a high-stakes debugging and problem-solving contest.",
    tag: "WIN",
  },
  {
    icon: BadgeCheck,
    period: "Certifications",
    title: "Full Stack & AI Credentials",
    org: "MERN · Spring Boot · AWS",
    desc: "Continuously certified across modern web, cloud and intelligent systems.",
    tag: "CERTIFIED",
  },
  {
    icon: Code2,
    period: "Ongoing",
    title: "Competitive Programming",
    org: "DSA & Problem Solving",
    desc: "Consistent practice sharpening algorithms, data structures and clean problem solving.",
    tag: "GROWTH",
  },
]

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal className="mb-3">
          <SectionLabel>04 — THE JOURNEY</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Milestones, wins &amp; <span className="text-primary text-glow">momentum</span>
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-8 sm:pl-0">
          {/* center line */}
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {TIMELINE.map((e, i) => {
              const left = i % 2 === 0
              return (
                <Reveal key={e.title} delay={0.05 * i}>
                  <div
                    className={`relative flex items-center sm:justify-${left ? "start" : "end"}`}
                  >
                    {/* node */}
                    <span className="absolute left-3 top-6 z-10 -translate-x-1/2 sm:left-1/2">
                      <span className="relative flex h-4 w-4">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
                        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-background bg-primary" />
                      </span>
                    </span>

                    <motion.div
                      whileHover={{ y: -4 }}
                      className={`ml-8 w-full rounded-2xl border border-border glass p-6 transition-colors hover:border-primary/50 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${
                        left ? "sm:mr-auto" : "sm:ml-auto"
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-primary">
                          <e.icon className="h-4 w-4" /> {e.period}
                        </span>
                        <span className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground">
                          {e.tag}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold">{e.title}</h3>
                      <p className="mt-0.5 text-sm text-primary/90">{e.org}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {e.desc}
                      </p>
                    </motion.div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
