"use client"

import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard, type ProjectType } from "./project-card"

interface ProjectCarouselProps {
  projects: ProjectType[]
  onProjectClick: (project: ProjectType) => void
}

export function ProjectCarousel({ projects, onProjectClick }: ProjectCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev()
      if (e.key === "ArrowRight") scrollNext()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect, scrollPrev, scrollNext])

  // Pause on hover
  const onMouseEnter = useCallback(() => {
    if (!emblaApi) return
    const autoplay = emblaApi.plugins().autoplay
    if (autoplay) autoplay.stop()
  }, [emblaApi])

  const onMouseLeave = useCallback(() => {
    if (!emblaApi) return
    const autoplay = emblaApi.plugins().autoplay
    if (autoplay) autoplay.play()
  }, [emblaApi])

  return (
    <div 
      className="relative mx-auto w-full max-w-[1400px] px-5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
        <div className="flex -ml-6 touch-pan-y">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-0 shrink-0 grow-0 pl-6 basis-full md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} onClick={onProjectClick} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation and Pagination */}
      <div className="mt-12 flex items-center justify-between sm:justify-center sm:gap-12">
        <button
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow"
          aria-label="Previous project"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex flex-wrap justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-8 bg-primary box-glow"
                  : "w-2 bg-secondary/60 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-border glass transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary box-glow"
          aria-label="Next project"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
