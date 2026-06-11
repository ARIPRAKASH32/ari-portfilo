"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const LINES = [
  "> INITIALIZING ARI.OS",
  "> LOADING INTELLIGENT MODULES",
  "> CONNECTING TO DIGITAL NETWORK",
  "> SYSTEM READY",
]

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [typed, setTyped] = useState("")
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)
  const completedRef = useRef(false)

  useEffect(() => {
    let lineIdx = 0
    let charIdx = 0
    let timer: ReturnType<typeof setTimeout>

    const typeNext = () => {
      if (lineIdx >= LINES.length) {
        setProgress(100)
        timer = setTimeout(() => {
          setDone(true)
          setTimeout(() => {
            if (!completedRef.current) {
              completedRef.current = true
              onComplete()
            }
          }, 900)
        }, 350)
        return
      }
      const current = LINES[lineIdx]
      if (charIdx <= current.length) {
        setTyped(current.slice(0, charIdx))
        charIdx++
        setProgress(Math.min(98, ((lineIdx + charIdx / current.length) / LINES.length) * 100))
        timer = setTimeout(typeNext, 26)
      } else {
        setVisibleLines((prev) => [...prev, current])
        setTyped("")
        lineIdx++
        charIdx = 0
        timer = setTimeout(typeNext, 240)
      }
    }
    timer = setTimeout(typeNext, 500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          {/* ambient glow */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[120px]"
            style={{ background: "var(--glow-soft)" }}
          />

          <div className="relative z-10 w-full max-w-md px-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-destructive/80" />
                <span className="h-3 w-3 rounded-full bg-accent/80" />
                <span className="h-3 w-3 rounded-full bg-primary/80" />
              </div>
              <span className="font-mono text-xs tracking-widest text-muted-foreground">
                ari@os — /boot
              </span>
            </div>

            <div className="glass min-h-44 rounded-xl border border-border p-5 font-mono text-sm">
              {visibleLines.map((line, i) => (
                <p key={i} className="leading-7 text-primary text-glow">
                  {line}
                  <span className="ml-2 text-muted-foreground">[ok]</span>
                </p>
              ))}
              {typed && (
                <p className="leading-7 text-primary text-glow">
                  {typed}
                  <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
                </p>
              )}
            </div>

            {/* sound-wave / progress */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-6 flex-1 items-center gap-[3px]">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-full rounded-full bg-primary/70"
                    style={{
                      height: `${20 + Math.abs(Math.sin(i * 0.7 + progress * 0.05)) * 80}%`,
                      opacity: (i / 36) * 100 < progress ? 1 : 0.2,
                      transition: "opacity 0.2s, height 0.2s",
                    }}
                  />
                ))}
              </div>
              <span className="w-12 text-right font-mono text-xs text-muted-foreground">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
