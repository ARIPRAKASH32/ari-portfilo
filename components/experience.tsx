"use client"

import { motion } from "framer-motion"
import { Reveal, SectionLabel } from "./reveal"
import { Briefcase, Calendar, MapPin } from "lucide-react"

type Experience = {
  id: string
  role: string
  company: string
  logoText: string
  location: string
  duration: string
  description: string[]
  tech: string[]
}

const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Full Stack Engineer Intern",
    company: "TechNova Solutions",
    logoText: "TN",
    location: "San Francisco, CA (Remote)",
    duration: "May 2025 – Present",
    description: [
      "Architected and deployed a scalable microservices backend using Spring Boot and PostgreSQL, improving API response times by 35%.",
      "Developed interactive front-end dashboards in React and Next.js for real-time data visualization.",
      "Integrated secure JWT-based authentication and role-based access control (RBAC)."
    ],
    tech: ["React", "Next.js", "Spring Boot", "PostgreSQL", "Docker"]
  },
  {
    id: "exp-2",
    role: "Software Developer Intern",
    company: "InnoSphere Labs",
    logoText: "IS",
    location: "New York, NY",
    duration: "Jan 2025 – Apr 2025",
    description: [
      "Built an internal AI-powered code review tool using Python and OpenAI APIs, reducing PR review time by 20%.",
      "Optimized legacy database queries, resulting in a 40% reduction in query execution time.",
      "Collaborated closely with cross-functional teams using Agile methodologies."
    ],
    tech: ["Python", "Flask", "OpenAI", "MySQL", "AWS"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <div className="text-center sm:text-left mb-20">
          <Reveal className="mb-4 flex justify-center sm:justify-start">
            <SectionLabel>04 — PROFESSIONAL JOURNEY</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Career <span className="text-primary text-glow">Experience.</span>
            </h2>
          </Reveal>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-primary/20 to-transparent sm:left-1/2 sm:-ml-px hidden sm:block" />

          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={exp.id} className="relative flex flex-col sm:flex-row items-center sm:justify-between group">
                
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 -ml-2 hidden sm:flex h-4 w-4 items-center justify-center rounded-full bg-background border-2 border-primary box-glow z-20 transition-transform group-hover:scale-150 duration-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Content Card (Left or Right side depending on index) */}
                <Reveal 
                  delay={0.1} 
                  className={`w-full sm:w-[calc(50%-3rem)] ${idx % 2 === 0 ? "sm:pr-0" : "sm:ml-auto"}`}
                >
                  <div className="relative rounded-3xl border border-border glass-panel p-8 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] group/card">
                    {/* Animated hover glow inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100 pointer-events-none rounded-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-5 mb-6">
                        {/* Company Logo */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-border text-lg font-heading font-bold text-primary box-glow">
                          {exp.logoText}
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-bold">{exp.role}</h3>
                          <div className="flex items-center gap-2 mt-1 text-primary font-medium">
                            <Briefcase className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-6 font-mono text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <span key={t} className="rounded-lg border border-border bg-secondary/50 px-3 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover/card:border-primary/30 group-hover/card:text-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
