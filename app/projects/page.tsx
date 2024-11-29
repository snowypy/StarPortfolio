'use client'

import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { ProjectCard } from '@/components/project-card'
import { ProjectDetail } from '@/components/project-detail'
import { projects } from '@/types/project'
import StarBackground from "@/components/star-background"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0].id)

const currentProject = projects.find(p => p.id === selectedProject)!

return (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="container mx-auto px-4 py-16">
  <StarBackground />
  <div className="dotted-background" />
  
  <div className="grid lg:grid-cols-[400px,1fr] gap-8 relative">
    <motion.div 
      className="space-y-6 z-10"
      layout
    >
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          isSelected={project.id === selectedProject}
          onSelect={() => setSelectedProject(project.id)}
        />
      ))}
    </motion.div>

    <div className="sticky top-24">
      {selectedProject && (
        <ProjectDetail 
          project={projects.find(p => p.id === selectedProject)!} 
        />
      )}
    </div>
  </div>
</div>
  </div>
)
}