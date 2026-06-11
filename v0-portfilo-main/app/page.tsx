"use client"

import { useState } from "react"
import { BootLoader } from "@/components/boot-loader"
import { CursorGlow } from "@/components/cursor-glow"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Stats } from "@/components/stats"
import { Contact, Footer } from "@/components/contact"
import { AriAssistant } from "@/components/ari-assistant"

export default function Page() {
  const [booted, setBooted] = useState(false)

  return (
    <>
      <BootLoader onComplete={() => setBooted(true)} />
      {booted && (
        <main className="relative">
          <CursorGlow />
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Stats />
          <Contact />
          <Footer />
          <AriAssistant />
        </main>
      )}
    </>
  )
}
