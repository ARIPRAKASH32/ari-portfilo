"use client"

import { motion } from "framer-motion"
import { Reveal, SectionLabel } from "./reveal"
import { 
  Code2, Monitor, Server, Database, BrainCircuit, Cloud, Users, 
  TerminalSquare, Layout, Cpu, Network, ShieldCheck
} from "lucide-react"

type SkillCategory = {
  title: string
  icon: React.ElementType
  skills: { name: string; level: number }[]
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: TerminalSquare,
    skills: [
      { name: "JavaScript / TypeScript", level: 95 },
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C++", level: 80 },
    ],
  },
  {
    title: "Frontend Engineering",
    icon: Monitor,
    skills: [
      { name: "React & Next.js", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
      { name: "HTML5 & CSS3", level: 95 },
    ],
  },
  {
    title: "Backend Architecture",
    icon: Server,
    skills: [
      { name: "Node.js & Express", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Flask & FastAPI", level: 80 },
      { name: "RESTful APIs", level: 95 },
    ],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 75 },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Computer Vision", level: 90 },
      { name: "Scikit-Learn", level: 85 },
      { name: "TensorFlow", level: 70 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS (EC2, S3)", level: 80 },
      { name: "Docker", level: 75 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Linux Administration", level: 85 },
    ],
  }
]

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-32 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="text-center sm:text-left mb-16">
          <Reveal className="mb-4 flex justify-center sm:justify-start">
            <SectionLabel>02 — CORE COMPETENCIES</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto sm:mx-0">
              My Technical <span className="text-primary text-glow">Arsenal.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto sm:mx-0">
              A comprehensive breakdown of my engineering capabilities across the full stack and applied intelligence.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Reveal key={category.title} delay={0.1 + idx * 0.05}>
              <div className="group h-full rounded-3xl border border-border glass-panel p-8 transition-all duration-500 hover:border-primary/40 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] relative overflow-hidden">
                {/* Decorative background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/50 border border-border text-primary group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={skill.name}>
                        <div className="mb-2 flex justify-between items-center text-sm">
                          <span className="font-medium text-foreground">{skill.name}</span>
                          <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1), ease: "easeOut" }}
                            className="h-full rounded-full bg-gradient-to-r from-primary to-cyan-400 relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse-glow rounded-full" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
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
