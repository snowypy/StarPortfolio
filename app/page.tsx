import Image from "next/image"
import Link from "next/link"
import { Github, Send, Download, Home, FolderGit2, BookOpen, User, Mail, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import StarBackground from "@/components/star-background"
import { TechStack } from "@/components/tech-stack"
import { ParallaxProjects } from "@/components/parallax-projects"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <StarBackground />
      <div className="dotted-background" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <div className="flex items-center gap-4 px-6 py-2 rounded-full bg-gray-900/50">
              <Link href="/" className="flex items-center gap-2 text-sm">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/projects" className="flex items-center gap-2 text-sm">
                <FolderGit2 className="w-4 h-4" />
                Projects
              </Link>
              <Link href="/blog" className="flex items-center gap-2 text-sm">
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <Link href="/about" className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                About
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Contact
              </Link>
              <Button variant="ghost" size="icon" className="ml-2">
                <Moon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 overflow-hidden border-4 border-gray-800 rounded-full">
                <Image
                  src="/placeholder.svg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-xl">
                Hi <span className="inline-block animate-wave">👋</span> I&apos;m
              </p>
              <h1 className="text-5xl font-bold">Faizan Asad</h1>
              <p className="text-xl text-gray-400">Full Stack Web / Blockchain Developer</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button className="rounded-full bg-gray-800 hover:bg-gray-700">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Button>
              <Button variant="outline" className="rounded-full">
                <Github className="mr-2 h-4 w-4" />
                Github
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>

            <TechStack />
          </div>

          {/* Projects */}
          <ParallaxProjects />
        </div>
      </main>
    </div>
  )
}

