"use client"

import { useRef, useState, type ReactNode } from "react"
import { motion } from "framer-motion"

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: ReactNode
  href: string
  variant?: "primary" | "ghost" | "accent"
  className?: string
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground box-glow"
      : variant === "accent"
        ? "bg-accent text-accent-foreground"
        : "glass border border-border text-foreground hover:border-primary/60"

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 14 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors ${styles} ${className}`}
    >
      {children}
    </motion.a>
  )
}
