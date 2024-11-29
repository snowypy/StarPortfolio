'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type Project } from '@/types/project'

interface ProjectDetailProps {
  project: Project
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={project.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-gray-900/50 rounded-lg overflow-hidden"
      >
        <div className="relative h-[400px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <Badge variant="outline">{project.year}</Badge>
          </div>
          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <Button className="gap-2">
            View Project
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

