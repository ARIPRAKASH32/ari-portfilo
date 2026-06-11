"use client"

import { Reveal, SectionLabel } from "./reveal"
import { Code2, BrainCircuit, Server, Cloud, Trophy } from "lucide-react"

const FACETS = [
  { icon: Code2, title: "Full Stack Developer", desc: "End-to-end products with the MERN stack & modern React." },
  { icon: BrainCircuit, title: "AI Enthusiast", desc: "Computer vision, gesture systems & applied intelligence." },
  { icon: Server, title: "Spring Boot Developer", desc: "Robust Java backends and scalable REST APIs." },
  { icon: Cloud, title: "AWS Learner", desc: "Cloud deployment, serverless & infrastructure." },
  { icon: Trophy, title: "Competitive Programmer", desc: "DSA, problem solving & multi-award winner." },
]

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-28">
      <Reveal className="mb-10">
        <SectionLabel>01 — THE STORY</SectionLabel>
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="max-w-4xl text-balance font-heading text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          Technology should create{" "}
          <span className="text-primary text-glow">meaningful experiences.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground" delay={0.1}>
          <p>
            I&apos;m <span className="text-foreground">Ariprakash Nagaraj</span>, a software
            engineer who treats every interface as an opportunity to make people feel
            something. My work blends rigorous full-stack engineering with a fascination for
            artificial intelligence.
          </p>
          <p>
            From building real-time gesture-controlled systems to architecting clean Spring
            Boot services, I obsess over the details that turn good software into
            unforgettable products — and I&apos;m just getting started.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {FACETS.map((f, i) => (
            <Reveal key={f.title} delay={0.08 * i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border glass p-5 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1">
                <div
                  aria-hidden
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: "var(--glow-soft)" }}
                />
                <f.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-heading text-base font-semibold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
