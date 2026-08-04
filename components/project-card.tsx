"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Code2, ExternalLink, ArrowRight, Star } from "lucide-react"

export interface ProjectType {
  id: string
  title: string
  category: string
  duration: string
  role: string
  teamSize: string
  status: string
  description: string
  problemStatement: string
  solution: string
  keyFeatures: string[]
  architecture: string
  challenges: string
  futureEnhancements: string
  image: string
  gallery: string[]
  tech: string[]
  github: string
  demo: string
  featured?: boolean
}

interface ProjectCardProps {
  project: ProjectType
  onClick: (project: ProjectType) => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-border glass transition-all duration-500 hover:border-primary/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-primary/20 bg-background/50">
      {/* Animated glowing border effect */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      
      {project.featured && (
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1 rounded-full border border-yellow-500/30 bg-yellow-500/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-yellow-500 backdrop-blur-md">
          <Star className="h-3 w-3 fill-yellow-500" /> Featured
        </div>
      )}
      
      {/* Hero Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/20">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-widest uppercase text-primary font-semibold">{project.category}</span>
          <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            {project.status}
          </span>
        </div>
        
        <h3 className="font-heading text-2xl font-bold leading-tight">{project.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 font-mono text-[10px] text-muted-foreground transition-colors group-hover:border-primary/30"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-border bg-secondary/30 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
              +{project.tech.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onClick(project)}
            className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] box-glow"
          >
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/30 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            aria-label="GitHub Repository"
          >
            <Code2 className="h-5 w-5" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/30 transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            aria-label="Live Demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  )
}
