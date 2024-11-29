import bytestore from '../public/bytestore.png'
import akrylic from '../public/akrylic.jpg'
import { StaticImageData } from 'next/image'

export interface Project {
    id: string
    title: string
    year: number
    description: string
    image: string | StaticImageData
    technologies: string[]
    icon: 'code' | 'palette' | 'spark'
    collaborators?: number
  }
  
  export const projects: Project[] = [
    {
      id: 'bytestore',
      title: 'Bytestore',
      year: 2024,
      description: 'Tool for developers to share and distribute gradle dependencies.', 
      image: bytestore,
      technologies: ['Kotlin', 'React', 'Typescript', 'Next.js', 'Spring Boot', 'MongoDB'], 
      icon: 'code',
      collaborators: 2
    },
    {
      id: 'akrylic-entertainment',
      title: 'Akrylic',
      year: 2024,
      description: 'A series of minecraft systems built for users to owners.',
      image: akrylic,
      technologies: ['Java', 'Kotlin', 'MongoDB', 'SQLite'],
      icon: 'code',
      collaborators: 4
    }
  ]
  
  