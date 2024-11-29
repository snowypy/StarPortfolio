'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useActiveCategory } from '@/hooks/use-active-category'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs,
  SiMongodb,
  SiKotlin,
  SiPython,
  SiSpringboot,
  SiNginx,
  SiRedis,
  SiJenkins,
  SiGit,
  SiReact
} from 'react-icons/si'

export type Category = 'Full Stack' | 'Frontend' | 'Backend' | 'Utilities'

type Tech = {
  name: string
  color: string
  experience: string
}

const techIcons: Record<string, any> = {
  'Next.js': SiNextdotjs,
  'Spring Boot': SiSpringboot,
  'Python': SiPython,
  'Jenkins': SiJenkins,
  'Git': SiGit,
  'Kotlin': SiKotlin,
  'Typescript': SiTypescript,
  'Nginx': SiNginx,
  'Redis': SiRedis,
  'Node.js': SiNodedotjs,
  'React': SiReact,
  'MongoDB': SiMongodb,
}

const techStack: Record<Category, Tech[]> = {
  'Full Stack': [
    { name: 'Next.js', color: '#5A2C81', experience: '3 months' },
    { name: 'TypeScript', color: '#3178C6', experience: '6 months' },
    { name: 'Node.js', color: '#339933', experience: '6 months' },
  ],
  'Frontend': [
    { name: 'React', color: '#61DAFB', experience: '3 months' }
  ],
  'Backend': [
    { name: 'Kotlin', color: '#000000', experience: '4 years' },
    { name: 'Python', color: '#336791', experience: '2 years' },
    { name: 'MongoDB', color: '#47A248', experience: '3 years' },
    { name: 'Spring Boot', color: '#000000', experience: '2 years' },
    { name: 'Nginx', color: '#269539', experience: '2 years' },
    { name: 'Redis', color: '#DC382D', experience: '1 year' }
  ],
  'Utilities': [
    { name: 'Git', color: '#F05032', experience: '4 years' },
  ],
}

export function TechStack() {
  const { activeCategory, handleCategoryClick } = useActiveCategory()
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap justify-center gap-2">
        {Object.keys(techStack).map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            className={`rounded-full ${
              activeCategory === category 
                ? "" 
                : "bg-[#171717] text-white hover:bg-white hover:text-[#171717] transition-colors border-gray-700"
            }`}
            onClick={() => handleCategoryClick(category as Category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {techStack[activeCategory].map((tech) => (
            <motion.div
              key={tech.name}
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                className={`
                  px-4 py-2 
                  flex items-center gap-2 
                  rounded-lg
                  shadow-lg
                  text-white
                  select-none
                  bg-[${tech.color}] 
                  hover:bg-[${tech.color}]/80
                  transition-all duration-300
                  border border-white/10
                  overflow-hidden
                  min-w-[120px]
                  justify-center
                `}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {techIcons[tech.name] && React.createElement(techIcons[tech.name], {
                  className: "w-4 h-4 shrink-0"
                })}
                <AnimatePresence mode="wait">
                  {hoveredTech === tech.name ? (
                    <motion.span
                      key="experience"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="font-medium"
                    >
                      {tech.experience}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="name" 
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="font-medium"
                    >
                      {tech.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}