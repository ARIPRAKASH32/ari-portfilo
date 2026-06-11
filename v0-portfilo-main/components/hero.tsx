"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, FileText, Mail } from "lucide-react"
import { ParticleField } from "./particle-field"
import { MagneticButton } from "./magnetic-button"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.5, 0.3, 1] as const },
  },
}

const ROLES = ["FULL STACK DEVELOPER", "AI ENGINEER", "BUILDING FUTURE DIGITAL EXPERIENCES"]

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* backgrounds */}
      <div className="absolute inset-0">
        <ParticleField />
        <div
          aria-hidden
          className="absolute -left-40 top-10 h-[50vh] w-[50vh] rounded-full opacity-40 blur-[140px]"
          style={{ background: "var(--glow-soft)" }}
        />
        <div
          aria-hidden
          className="absolute -right-40 bottom-0 h-[40vh] w-[40vh] rounded-full opacity-25 blur-[140px]"
          style={{ background: "color-mix(in oklch, var(--accent) 40%, transparent)" }}
        />
        {/* grid */}
        <div
          aria-hidden
          className="grid-fade absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--primary) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--primary) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-28 pb-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass px-4 py-1.5 text-xs font-medium tracking-wider text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AVAILABLE FOR WORK · 2026
          </motion.div>

          <motion.h1
            variants={item}
            className="font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
          >
            ARIPRAKASH
          </motion.h1>

          <motion.div variants={item} className="mt-6 space-y-1.5 font-mono">
            {ROLES.map((r) => (
              <p key={r} className="text-sm tracking-[0.25em] text-muted-foreground sm:text-base">
                <span className="text-primary">{"// "}</span>
                {r}
              </p>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 max-w-md text-pretty leading-relaxed text-muted-foreground"
          >
            I craft intelligent, immersive products at the intersection of full-stack
            engineering and applied AI — turning ambitious ideas into cinematic digital
            experiences.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#projects" variant="primary">
              Explore Projects <ArrowUpRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#experience" variant="ghost">
              <FileText className="h-4 w-4" /> View Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="h-4 w-4" /> Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* portrait / holographic frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float-slow relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-3xl opacity-60 blur-2xl"
              style={{ background: "var(--glow-soft)" }}
            />
            <div className="glass relative overflow-hidden rounded-3xl border border-primary/30 box-glow">
              <Image
                src="/ari-portrait.png"
                alt="Portrait of Ariprakash Nagaraj"
                width={520}
                height={620}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-primary/25 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-primary">
                <span>● NEURAL_LINK: ACTIVE</span>
                <span>v3.0</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </div>
    </section>
  )
}
