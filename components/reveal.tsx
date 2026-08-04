"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  y = 32,
}: {
  children: ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.5, 0.3, 1] as const }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </span>
  )
}

export { defaultVariants }
