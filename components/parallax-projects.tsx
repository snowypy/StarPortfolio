'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import bytestore from '@/public/bytestore.png'
import akrylic from '@/public/akrylic.jpg'

interface Project {
  title: string
  description: string
  image: StaticImageData | string
}

const projects: Project[] = [
  {
    title: "ByteStore",
    description: "An open-source decentralized Jitpack alternative for devs.",
    image: bytestore 
  },
  {
    title: "Akrylic Development",
    description: "A platform for giving managers the tools to manage their servers.",
    image: akrylic
  }
]

export function ParallaxProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <div ref={containerRef} className="mt-24 space-y-12 max-w-2xl mx-auto">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} progress={scrollYProgress} index={index} />
      ))}
    </div>
  )
}

function ProjectCard({ project, progress, index }: { project: Project; progress: any; index: number }) {
  const y = useTransform(progress, [0, 1], [100, -100])
  const opacity = useTransform(progress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <motion.div 
      style={{ y, opacity }}
      className="group relative overflow-hidden rounded-lg shadow-lg max-w-2xl mx-auto"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm opacity-90">{project.description}</p>
      </div>
    </motion.div>
  )
}

