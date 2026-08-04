"use client"

import { Reveal, SectionLabel } from "./reveal"
import { ExternalLink, Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"

type Certification = {
  id: string
  title: string
  issuer: string
  date: string
  logoText: string
  link: string
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jan 2026",
    logoText: "TATA",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_694ba7debeda68c47382749a_1767630377927_completion_certificate.pdf"
  },
  {
    id: "cert-2",
    title: "Deloitte Australia - Technology Job Simulation",
    issuer: "Forage",
    date: "Dec 2025",
    logoText: "Deloitte",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_694ba7debeda68c47382749a_1766658794066_completion_certificate.pdf"
  }
]

export function Certifications() {
  return (
    <section id="certifications" className="relative scroll-mt-24 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[50%] right-[10%] w-[30%] h-[30%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="text-center mb-16">
          <Reveal className="mb-4 flex justify-center">
            <SectionLabel>05 — CREDENTIALS</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto">
              Professional <span className="text-primary text-glow">Certifications.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              Verified achievements and continuous learning milestones.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <Reveal key={cert.id} delay={0.1 + idx * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border glass-panel transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)]">
                
                {/* Simulated Certificate Preview Banner */}
                <div className="relative h-32 w-full bg-gradient-to-br from-secondary/80 to-background overflow-hidden border-b border-border/50">
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 0)", backgroundSize: "16px 16px" }} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                    <Award className="h-24 w-24" />
                  </div>
                </div>
                
                {/* Issuer Logo Float */}
                <div className="absolute top-20 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background border border-border font-heading font-bold text-primary box-glow shadow-lg z-10">
                  {cert.logoText}
                </div>

                <div className="relative z-10 flex flex-1 flex-col p-6 pt-10">
                  <h3 className="font-heading text-xl font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">{cert.issuer}</p>
                  
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {cert.date}
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-cyan-400 transition-colors"
                    >
                      Verify <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
