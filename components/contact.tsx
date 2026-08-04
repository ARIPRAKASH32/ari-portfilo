"use client"

import { useState } from "react"
import { Reveal, SectionLabel } from "./reveal"
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react"
import { GithubIcon, LinkedinIcon, LeetcodeIcon, WhatsappIcon } from "./brand-icons"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/ariprakash32@gmail.com", {
        method: "POST",
        body: formData,
      })
      
      if (res.ok) {
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 5000)
        form.reset()
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error(error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer id="contact" className="relative scroll-mt-24 pt-32 pb-12 overflow-hidden border-t border-border">
      <div className="absolute inset-0 z-0 pointer-events-none bg-background">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] rounded-[100%] bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="text-center mb-16">
          <Reveal className="mb-4 flex justify-center">
            <SectionLabel>06 — LET'S TALK</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-balance font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mx-auto">
              Get in <span className="text-primary text-glow">Touch.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed mx-auto">
              Have a project in mind or want to discuss opportunities? Let's build something extraordinary together.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] mb-24">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div className="glass-panel p-8 rounded-3xl border border-border h-full flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5">
                  <Mail className="h-32 w-32" />
                </div>
                
                <div className="space-y-8 relative z-10">
                  <h3 className="font-heading text-2xl font-bold">Contact Info</h3>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                        <a href="mailto:ariprakash32@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">ariprakash32@gmail.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Location</p>
                        <p className="text-lg font-medium">India, Tamil Nadu, Dindigul</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                        <p className="text-lg font-medium">+91 83004 33976</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 pt-8 border-t border-border relative z-10">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Connect on Socials</p>
                  <div className="flex gap-4">
                    <a href="https://github.com/ARIPRAKASH32" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/ariprakash-n-/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1">
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                    <a href="https://leetcode.com/u/ARIPRAKASH_N/" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1">
                      <LeetcodeIcon className="h-5 w-5" />
                    </a>
                    <a href="https://wa.me/918300433976" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all hover:-translate-y-1">
                      <WhatsappIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal delay={0.3}>
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-border">
              <h3 className="font-heading text-2xl font-bold mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 relative group">
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground ml-1">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full h-14 rounded-xl border border-border bg-background/50 px-4 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 hover:border-primary/30"
                    />
                  </div>
                  <div className="space-y-2 relative group">
                    <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground ml-1">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full h-14 rounded-xl border border-border bg-background/50 px-4 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 hover:border-primary/30"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative group">
                  <label htmlFor="subject" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground ml-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="w-full h-14 rounded-xl border border-border bg-background/50 px-4 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 hover:border-primary/30"
                  />
                </div>

                <div className="space-y-2 relative group">
                  <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground ml-1">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full rounded-xl border border-border bg-background/50 p-4 text-sm transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50 hover:border-primary/30 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`group flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-8 py-4 font-bold text-primary-foreground transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 box-glow ${
                    isSubmitted ? "bg-green-600 hover:bg-green-600" : "bg-primary"
                  }`}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : isSubmitted ? (
                    <>Sent Successfully!</>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </Reveal>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ariprakash Nagaraj. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            Built with <span className="text-primary hover:text-cyan-400 transition-colors">Next.js</span> & <span className="text-primary hover:text-cyan-400 transition-colors">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
