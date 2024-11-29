'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Code2, Palette, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { type Project } from '@/types/project'

const icons = {
  code: Code2,
  palette: Palette,
  spark: Zap
}

interface ProjectCardProps {
  project: Project
  isSelected: boolean
  onSelect: (id: string) => void
}

export function ProjectCard({ project, isSelected, onSelect }: ProjectCardProps) {
  const Icon = icons[project.icon as keyof typeof icons]
  
  return (
    <motion.button
      layout
      onClick={() => onSelect(project.id)}
      className={`w-full text-left relative overflow-hidden rounded-lg cursor-pointer transition-colors
        ${isSelected ? 'bg-blue-950/50 ring-2 ring-blue-500' : 'bg-gray-900/50 hover:bg-gray-900/80'}`}
    >
      <div className="relative h-32">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="p-4 relative z-10">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.year}</p>
          </div>
          <div className={`p-2 rounded-full ${isSelected ? 'bg-blue-500' : 'bg-gray-800'}`}>
            <Icon className="w-4 h-4" />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map(tech => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.button>
  )
}
