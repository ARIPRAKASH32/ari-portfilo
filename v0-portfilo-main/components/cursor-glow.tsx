"use client"

import { useEffect, useState } from "react"

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // only on devices with a fine pointer
    if (!window.matchMedia("(pointer: fine)").matches) return
    setEnabled(true)
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      style={{
        background: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, color-mix(in oklch, var(--primary) 14%, transparent), transparent 70%)`,
      }}
    />
  )
}
