"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, FileText, Mail, Code2, Database, Terminal, Layout, Cpu } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from "./brand-icons"
import { ParticleField } from "./particle-field"
import { MagneticButton } from "./magnetic-button"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

// Custom hook for typing effect
const useTypingEffect = (text: string, speed = 50) => {
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])

  return displayedText
}

export function Hero() {
  const typedText = useTypingEffect("I craft intelligent, immersive products at the intersection of full-stack engineering and applied AI.", 35)

  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-aurora">
      {/* Backgrounds */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
        
        {/* Animated Gradient Blobs */}
        <motion.div
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -left-[20%] top-10 h-[60vh] w-[60vh] rounded-full bg-white/10 blur-[150px] mix-blend-screen"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 50, 0], 
            y: [0, 50, -50, 0],
            scale: [1, 0.9, 1.1, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -right-[20%] bottom-0 h-[50vh] w-[50vh] rounded-full bg-neutral-500/10 blur-[150px] mix-blend-screen"
        />

        {/* Grid Pattern */}
        <div
          aria-hidden
          className="grid-fade absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F8FAFC 1px, transparent 1px), linear-gradient(to bottom, #F8FAFC 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating Technology Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute top-[20%] left-[10%] opacity-30 text-white/50 animate-float-slow" style={{ animationDelay: '0s' }}>
            <Code2 size={48} />
          </motion.div>
          <motion.div className="absolute top-[60%] left-[15%] opacity-20 text-neutral-400 animate-float-fast" style={{ animationDelay: '1s' }}>
            <Database size={64} />
          </motion.div>
          <motion.div className="absolute top-[30%] right-[12%] opacity-30 text-neutral-500 animate-float-slow" style={{ animationDelay: '2s' }}>
            <Cpu size={56} />
          </motion.div>
          <motion.div className="absolute bottom-[20%] right-[20%] opacity-20 text-neutral-600 animate-float-fast" style={{ animationDelay: '3s' }}>
            <Layout size={40} />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Left Content Column */}
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass-panel px-4 py-2 text-xs font-semibold tracking-wider text-muted-foreground shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            AVAILABLE FOR WORK
          </motion.div>

          <motion.h2 variants={item} className="mb-2 font-mono text-lg text-primary md:text-xl">
            Hi, my name is
          </motion.h2>

          <motion.h1
            variants={item}
            className="font-heading font-extrabold leading-[1.1] tracking-tight
                       text-5xl sm:text-6xl md:text-7xl lg:text-[80px]"
          >
            Ariprakash <br className="hidden lg:block" />
            <span className="text-glow bg-gradient-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
              Nagaraj.
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-8 min-h-[80px] max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
            {typedText}
            <span className="animate-pulse text-primary ml-1">|</span>
          </motion.div>

          {/* Buttons & Socials */}
          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center gap-6">
            <div className="flex gap-4">
              <MagneticButton href="#projects" variant="primary" className="h-14 px-8 text-[15px] font-semibold rounded-2xl">
                Explore Projects <ArrowUpRight className="h-5 w-5 ml-2" />
              </MagneticButton>
              <MagneticButton href="https://drive.google.com/file/d/1fP2qqDgzRHHglVBw7XRxaFCJAby9awGN/view?usp=sharing" target="_blank" rel="noopener noreferrer" variant="ghost" className="h-14 px-8 text-[15px] font-semibold rounded-2xl glass-panel border-border hover:bg-secondary">
                <FileText className="h-5 w-5 mr-2" /> Resume
              </MagneticButton>
            </div>
            
            <div className="h-8 w-px bg-border hidden sm:block" />
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/ARIPRAKASH32" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/ariprakash-n-/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="https://leetcode.com/u/ARIPRAKASH_N/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow">
                <LeetcodeIcon className="h-5 w-5" />
              </a>
              <a href="https://wa.me/918300433976" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow">
                <WhatsappIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Portrait Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.4 }}
          className="relative mx-auto w-full max-w-[420px] mt-12 lg:mt-0 lg:ml-auto"
        >   
          <div className="animate-float-slow relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-white/20 to-neutral-500/20 opacity-60 blur-3xl"
            />
            <div className="glass-panel relative aspect-[4/5] p-3 sm:p-5 rounded-[2rem] border border-white/10 box-glow shadow-2xl shadow-white/5">
              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden">
                <Image
                  src="/ari-portrait.png"
                  alt="Portrait of Ariprakash Nagaraj"
                  fill
                  priority
                  className="object-cover object-[65%_top]"
                />
                {/* Overlay styling for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-foreground">Ariprakash N.</h3>
                    <p className="font-mono text-sm text-primary mt-1">Full Stack Engineer</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements around the image */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 -top-8 glass-panel p-4 rounded-2xl border-white/10 box-glow"
            >
              <Terminal className="h-8 w-8 text-neutral-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-border p-1.5 glass">
          <motion.span
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
