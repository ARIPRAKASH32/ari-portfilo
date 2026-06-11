"use client"

import { motion } from "framer-motion"
import { Link2, Code2, Mail, MessageCircle, ArrowUpRight } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"
import { ParticleField } from "./particle-field"

const CHANNELS = [
  { icon: Link2, label: "LinkedIn", handle: "/in/ariprakash", href: "https://www.linkedin.com/in/ariprakash-n-/" },
  { icon: Code2, label: "GitHub", handle: "@ariprakash32", href: "https://github.com/ARIPRAKASH32" },
  { icon: Mail, label: "Email", handle: "ariprakash32@gmail.com", href: "mailto:ariprakash32@gmail.com" },
  { icon: MessageCircle, label: "WhatsApp", handle: "Chat now", href: "https://wa.me/" },
]

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden py-28">
      <div className="absolute inset-0 opacity-60">
        <ParticleField density={0.00006} />
      </div>
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[50vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[160px]"
        style={{ background: "var(--glow-soft)" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
        <Reveal className="mb-4 flex justify-center">
          <SectionLabel>06 — INITIATE CONTACT</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-3xl text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
            Let&apos;s Build Something{" "}
            <span className="text-primary text-glow">Extraordinary.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Have an idea that deserves to feel like the future? I&apos;m always open to bold
            collaborations, ambitious products and good conversations.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.label} delay={0.06 * i}>
              <motion.a
                whileHover={{ y: -6 }}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-border glass p-6 transition-colors hover:border-primary/60 hover:box-glow"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-secondary/60 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <span className="font-heading text-sm font-semibold">{c.label}</span>
                <span className="font-mono text-xs text-muted-foreground">{c.handle}</span>
              </motion.a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:ariprakash@mail.com"
            className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground box-glow"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <span className="font-heading text-sm font-bold tracking-[0.25em]">
          ARI<span className="text-primary">.OS</span>
        </span>
        <p className="font-mono text-xs text-muted-foreground">
          © 2026 Ariprakash Nagaraj · Engineered with intent
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">●</span> SYSTEM ONLINE
        </p>
      </div>
    </footer>
  )
}
