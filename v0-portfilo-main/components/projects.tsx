"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code2, ExternalLink, ArrowUpRight } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"

type Project = {
  title: string
  tagline: string
  description: string
  image: string
  tech: string[]
  features: string[]
  github: string
  demo: string
}

const PROJECTS: Project[] = [
  {
    title: "Hand Gesture Controlled Virtual Mouse",
    tagline: "AI · COMPUTER VISION",
    description:
      "A real-time system that turns hand movements into full mouse control — no hardware required. Powered by computer vision, it recognizes gestures for clicking, dragging, scrolling and capturing screenshots.",
    image: "/project-gesture-mouse.png",
    tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
    features: [
      "AI gesture recognition in real time",
      "Drag, scroll & click controls",
      "Screenshot capture gestures",
      "Hardware-free, webcam only",
    ],
    github: "https://github.com/",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mb-3">
          <SectionLabel>03 — SELECTED WORK</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-3xl text-balance font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Products that feel like the <span className="text-primary text-glow">future</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={0.05 * i}>
              <article className="group relative overflow-hidden rounded-3xl border border-border glass transition-all duration-500 hover:border-primary/50">
                <div className="grid lg:grid-cols-2">
                  {/* visual */}
                  <div className="relative min-h-64 overflow-hidden lg:min-h-full">
                    <Image
                      src={p.image || "/placeholder.svg"}
                      alt={`${p.title} preview`}
                      width={760}
                      height={620}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 lg:to-card/90" />
                    <span className="absolute left-5 top-5 rounded-full border border-primary/40 glass px-3 py-1 font-mono text-[11px] tracking-widest text-primary">
                      {p.tagline}
                    </span>
                  </div>

                  {/* content */}
                  <div className="flex flex-col justify-center p-7 sm:p-10">
                    <h3 className="text-balance font-heading text-2xl font-bold leading-tight sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-xs text-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground box-glow"
                      >
                        <Code2 className="h-4 w-4" /> GitHub
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        href={p.demo}
                        className="inline-flex items-center gap-2 rounded-full border border-border glass px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/60"
                      >
                        <ExternalLink className="h-4 w-4" /> Live Demo
                      </motion.a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* more coming */}
        <Reveal delay={0.1} className="mt-10">
          <a
            href="#contact"
            className="group flex items-center justify-between rounded-2xl border border-dashed border-border glass p-6 transition-colors hover:border-primary/50"
          >
            <div>
              <p className="font-heading text-lg font-semibold">More experiments in the lab</p>
              <p className="text-sm text-muted-foreground">
                New AI &amp; full-stack projects are always in motion.
              </p>
            </div>
            <ArrowUpRight className="h-6 w-6 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
