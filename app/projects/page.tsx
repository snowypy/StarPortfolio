'use client'

import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { ProjectCard } from '@/components/project-card'
import { ProjectDetail } from '@/components/project-detail'
import { projects } from '@/types/project'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(projects[0].id)

  const currentProject = projects.find(p => p.id === selectedProject)!

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My Web3 Projects
        </motion.h1>
        
        <div className="grid lg:grid-cols-[400px,1fr] gap-8">
          <LayoutGroup>
            <div className="space-y-6">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isSelected={selectedProject === project.id}
                  onSelect={setSelectedProject}
                />
              ))}
            </div>
          </LayoutGroup>

          <ProjectDetail project={currentProject} />
        </div>
      </div>
    </div>
  )
}

