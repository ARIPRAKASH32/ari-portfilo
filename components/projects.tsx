"use client"

import { useState } from "react"
import Image from "next/image"
import { Code2, ExternalLink, Calendar, User, Users, Activity, CheckCircle2 } from "lucide-react"
import { Reveal, SectionLabel } from "./reveal"
import { ProjectCarousel } from "./project-carousel"
import { type ProjectType } from "./project-card"
import { Modal } from "./ui/modal"

const PROJECTS: ProjectType[] = [
  {
    id: "watchman",
    title: "AI-Powered Network Traffic Analyzer (WatchMan)",
    category: "AI/ML",
    duration: "4 Months",
    role: "Lead AI Engineer",
    teamSize: "3 Members",
    status: "Completed",
    description: "Developed an AI-powered Intrusion Detection and Response System that captures live packets, detects malicious traffic using Machine Learning, and provides real-time monitoring.",
    problemStatement: "Traditional signature-based IDS often fail to detect zero-day attacks and unknown threats. A more intelligent, dynamic system is needed to analyze live network traffic and identify anomalous patterns in real-time.",
    solution: "Built a hybrid AI detection engine combining Random Forest for known threats and Isolation Forest for zero-day anomaly detection, wrapped in a high-performance Flask API with Scapy for real-time packet sniffing.",
    keyFeatures: [
      "Real-time network packet capture and analysis",
      "Hybrid ML engine (Supervised + Unsupervised)",
      "Automated threat mitigation and IP blocking",
      "Live dynamic cybersecurity dashboard",
      "Real-time SMS and Email alerts"
    ],
    architecture: "The system captures packets using Scapy, processes them into flow features, and passes them to the Flask backend where the dual-ML model evaluates the threat. Results are streamed to the frontend via WebSockets.",
    challenges: "Handling the massive volume of high-speed network packets without dropping data required optimizing the Scapy sniffing process and utilizing multi-threading for the ML inference pipeline.",
    futureEnhancements: "Integration with cloud SIEM platforms, deep learning models for payload analysis, and automated patching scripts.",
    image: "/project-watchman.png",
    gallery: ["/project-watchman.png"],
    tech: ["Python", "Flask", "Scapy", "Random Forest", "Isolation Forest", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/",
    demo: "#",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio & ARI.OS",
    category: "Web & Interface Design",
    duration: "2 Months",
    role: "Full Stack Developer",
    teamSize: "1 Member",
    status: "Active",
    description: "An immersive, interactive personal portfolio engineered with a custom glassmorphic operating system interface (ARI.OS) and an integrated AI assistant to showcase my skills dynamically.",
    problemStatement: "Standard developer portfolios often feel static and fail to demonstrate actual engineering capabilities. I wanted a digital presence that acts as a live proof of concept for my full-stack and UI/UX skills.",
    solution: "Architected a custom 'OS-like' experience using Next.js and Framer Motion. Implemented a fully functional AI chatbot (ARI Assistant) trained on my resume data to answer recruiter queries in real-time.",
    keyFeatures: [
      "Custom AI Assistant (ARI AI) for interactive Q&A",
      "Cinematic page transitions and scroll-driven animations",
      "Glassmorphic design system with dynamic Aurora backgrounds",
      "Responsive, swipeable project showcase",
      "Optimized performance and accessibility standards"
    ],
    architecture: "Built on Next.js App Router for optimal SSR/SEO. Uses Framer Motion for high-performance physics-based animations and Tailwind CSS for scalable utility styling.",
    challenges: "Optimizing the heavy glassmorphic blur effects and Framer Motion animations to run consistently at 60fps on mobile devices without causing battery drain.",
    futureEnhancements: "Integrate a real-time 3D interactive hero section using Three.js and add a headless CMS for seamless content updates.",
    image: "/project-portfolio.png",
    gallery: ["/project-portfolio.png"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    github: "https://github.com/ARIPRAKASH32/ari-portfilo",
    demo: "https://ariprakash.onrender.com",
  },
  {
    id: "youtube-clone",
    title: "VIDEO PAKKALAMA",
    category: "Web Application",
    duration: "3 Months",
    role: "Full Stack Developer",
    teamSize: "2 Members",
    status: "Completed",
    description: "Responsive YouTube-inspired video streaming application with search, category filtering, and an intuitive modern interface.",
    problemStatement: "Creating a scalable video streaming platform that handles large amounts of media assets and dynamic user queries efficiently.",
    solution: "Developed a robust frontend with infinite scrolling, debounced search functionality, and category-based video fetching to mimic the core experience of a major streaming platform.",
    keyFeatures: [
      "Dynamic video fetching and playback",
      "Category-based filtering system",
      "Responsive video grid and detailed media views",
      "Custom video player controls",
      "User authentication state mockups"
    ],
    architecture: "Frontend built with raw HTML/CSS/JS or modern React wrappers, communicating with a mockup backend API to stream video metadata and URLs.",
    challenges: "Implementing a custom, fully styled video player that works consistently across different browsers and handling asynchronous state efficiently.",
    futureEnhancements: "Implementing actual user authentication, comment sections, and real backend video streaming with HLS.",
    image: "/project-youtube.png",
    gallery: ["/project-youtube.png"],
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    id: "servestock",
    title: "ServeStock Intelligence Platform",
    category: "Enterprise Software",
    duration: "4 Months",
    role: "Full Stack Developer",
    teamSize: "3 Members",
    status: "In Production",
    description: "A comprehensive restaurant inventory platform designed to manage stock levels, track expiry dates, and provide actionable purchasing insights to minimize food waste.",
    problemStatement: "Restaurants often lack real-time visibility into their stock and expiry risks, leading to significant food waste and inefficient purchasing decisions based on guesswork.",
    solution: "Developed a full-stack intelligence platform that tracks ingredients and minimum-stock thresholds, integrating a closed operational feedback loop for expiry and waste management.",
    keyFeatures: [
      "Real-time inventory and ingredient management",
      "Automated expiry-risk tracking and alerts",
      "Closed-loop operational feedback for purchasing",
      "Cross-platform Web (React) and Mobile (React Native) UI",
      "Financial impact and waste reduction analytics"
    ],
    architecture: "Built a robust Java Spring Boot REST API backend interacting with MySQL and MongoDB. The frontend ecosystem consists of React.js for web administration and React Native for mobile on-site staff.",
    challenges: "Designing a seamless data flow between the mobile app (used in the kitchen) and the web dashboard (used by management) to ensure zero latency in stock updates.",
    futureEnhancements: "Incorporate machine learning to predict seasonal demand spikes and automatically generate supplier purchase orders.",
    image: "/project-servestock.png",
    gallery: ["/project-servestock.png"],
    tech: ["Java", "Spring Boot", "React.js", "React Native", "MySQL", "MongoDB"],
    github: "https://github.com/ARIPRAKASH32/ServeStock",
    demo: "#",
  },
]

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null)

  return (
    <section id="projects" className="relative scroll-mt-24 py-28 overflow-hidden">
      {/* Premium Aurora Background & Floating Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[0%] left-[-10%] w-[50%] h-[50%] rounded-full bg-white/5 blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] rounded-full bg-neutral-500/10 blur-[150px] mix-blend-screen" />
        <div className="grid-fade absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklch, var(--primary) 30%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--primary) 30%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-5 mb-16 text-center sm:text-left">
          <Reveal className="mb-4 flex justify-center sm:justify-start">
            <SectionLabel>03 — THE SHOWCASE</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-3xl text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto sm:mx-0">
              Engineering the <span className="text-primary text-glow">Future.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto sm:mx-0">
              A curated selection of my most ambitious projects spanning Artificial Intelligence, Full-Stack Development, and Enterprise Architecture.
            </p>
          </Reveal>
        </div>

        {/* Carousel */}
        <Reveal delay={0.2}>
          <ProjectCarousel projects={PROJECTS} onProjectClick={setSelectedProject} />
        </Reveal>
      </div>

      {/* Project Details Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="flex flex-col">
            {/* Modal Hero Banner */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden shrink-0 bg-secondary/30">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-primary/40 bg-primary/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-primary backdrop-blur-md box-glow">
                    {selectedProject.category}
                  </span>
                  <span className="rounded-full border border-border bg-background/50 px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur-md">
                    {selectedProject.status}
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground drop-shadow-md">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex flex-col lg:flex-row gap-10 p-6 sm:p-10">
              
              {/* Main Content */}
              <div className="flex-1 space-y-10">
                <section>
                  <h3 className="font-heading text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Activity className="h-5 w-5" /> Project Overview
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.description}
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">The Problem</h3>
                  <p className="text-muted-foreground leading-relaxed border-l-2 border-primary/40 pl-4 py-1">
                    {selectedProject.problemStatement}
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">The Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Key Features</h3>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {selectedProject.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">Architecture</h3>
                  <div className="p-5 rounded-2xl bg-secondary/30 border border-border relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {selectedProject.architecture}
                    </p>
                  </div>
                </section>

                <section className="grid gap-8 sm:grid-cols-2 pt-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">Challenges</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-3">Future Enhancements</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedProject.futureEnhancements}
                    </p>
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-80 shrink-0 space-y-8">
                {/* Project Info Card */}
                <div className="rounded-2xl border border-border bg-secondary/20 p-6">
                  <h4 className="font-heading text-lg font-bold mb-6">Project Info</h4>
                  <ul className="space-y-5">
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border text-primary box-glow">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Duration</p>
                        <p className="text-sm font-semibold mt-0.5">{selectedProject.duration}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border text-primary box-glow">
                        <User className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Role</p>
                        <p className="text-sm font-semibold mt-0.5">{selectedProject.role}</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background border border-border text-primary box-glow">
                        <Users className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">Team Size</p>
                        <p className="text-sm font-semibold mt-0.5">{selectedProject.teamSize}</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="rounded-2xl border border-border bg-secondary/20 p-6">
                  <h4 className="font-heading text-lg font-bold mb-5">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-background px-3 py-1.5 font-mono text-[11px] text-muted-foreground shadow-sm hover:border-primary/50 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sticky top-6">
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98] box-glow"
                  >
                    <ExternalLink className="h-5 w-5" /> Live Demo
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background py-4 text-sm font-bold transition-colors hover:border-primary/50 hover:bg-secondary"
                  >
                    <Code2 className="h-5 w-5" /> View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
