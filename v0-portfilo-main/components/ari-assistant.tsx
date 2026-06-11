"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, Sparkles } from "lucide-react"

type Msg = { role: "ari" | "user"; text: string }

const SUGGESTIONS = ["Skills", "Projects", "Resume", "Achievements", "Contact"]

const KNOWLEDGE: Record<string, string> = {
  skills:
    "Ariprakash works across React, the full MERN stack, Spring Boot, Java, Python and AWS — plus strong DSA and OOP foundations. AI & computer vision are a special focus.",
  projects:
    "His flagship build is the Hand Gesture Controlled Virtual Mouse — real-time gesture control using OpenCV, MediaPipe and PyAutoGUI, with click, drag, scroll and screenshot gestures.",
  resume:
    "You can grab the full resume from the Journey section — it covers his internship, certifications and competitive coding wins.",
  achievements:
    "Highlights: 1st Prize at Code Vertex, 2nd Prize at Code Rescue, plus multiple full-stack and AI certifications.",
  contact:
    "Reach Ariprakash via LinkedIn, GitHub, email or WhatsApp — all linked in the Contact section below.",
  default:
    "I'm ARI AI — ask me about Ariprakash's skills, projects, resume, achievements or how to get in touch.",
}

function answerFor(input: string) {
  const q = input.toLowerCase()
  if (q.includes("skill")) return KNOWLEDGE.skills
  if (q.includes("project")) return KNOWLEDGE.projects
  if (q.includes("resume") || q.includes("cv")) return KNOWLEDGE.resume
  if (q.includes("achiev") || q.includes("award") || q.includes("prize"))
    return KNOWLEDGE.achievements
  if (q.includes("contact") || q.includes("reach") || q.includes("email"))
    return KNOWLEDGE.contact
  return KNOWLEDGE.default
}

export function AriAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ari", text: "Hi, I'm ARI AI. Ask me anything about Ariprakash." },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  const send = (text: string) => {
    const clean = text.trim()
    if (!clean) return
    setMessages((m) => [...m, { role: "user", text: clean }])
    setInput("")
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { role: "ari", text: answerFor(clean) }])
    }, 850)
  }

  return (
    <>
      {/* glowing orb trigger */}
      <motion.button
        aria-label="Open ARI AI assistant"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-6 right-6 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground box-glow"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-30" />
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-6 z-[70] flex h-[28rem] w-[min(22rem,calc(100vw-3rem))] flex-col overflow-hidden rounded-3xl border border-primary/30 glass box-glow"
          >
            {/* header */}
            <div className="flex items-center gap-3 border-b border-border bg-secondary/40 p-4">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
              <div>
                <p className="font-heading text-sm font-bold tracking-wider">ARI AI</p>
                <p className="font-mono text-[10px] text-primary">● ONLINE</p>
              </div>
            </div>

            {/* messages */}
            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-secondary/60 text-foreground"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <span className="flex gap-1 rounded-2xl border border-border bg-secondary/60 px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 }}
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                      />
                    ))}
                  </span>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* suggestions */}
            <div className="flex flex-wrap gap-1.5 px-4 pb-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-border p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Ari..."
                className="flex-1 rounded-full border border-border bg-background/60 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/60"
              />
              <button
                type="submit"
                aria-label="Send"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
