import Image from "next/image"
import Link from "next/link"
import { Github, Send, Download, Home, FolderGit2, BookOpen, User, Mail, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import StarBackground from "@/components/star-background"
import { TechStack } from "@/components/tech-stack"
import { ParallaxProjects } from "@/components/parallax-projects"
import me from '@/public/me.png'

export default function Page() {
  return (
    <div className="min-h-screen text-white overflow-hidden bg-transparent">
      <StarBackground />
      <div className="dotted-background" />

      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-8 text-center">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 overflow-hidden border-4 border-gray-800 rounded-full">
                <Image
                  src={me.src}
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="space-y-4">

              <p className="text-xl">
                Hi <span className="inline-block hover:animate-wave">👋</span> I&apos;m
              </p>
              <h1 className="text-5xl font-bold transition-transform duration-300 hover:scale-105 select-none">
                Nopox
              </h1>
              <p className="text-xl text-gray-400">Backend Developer</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button className="rounded-full bg-gray-800 hover:bg-gray-700">
                <User className="mr-2 h-4 w-4" />
                About Me
              </Button>
                <Link 
                  href="https://github.com/nateweisz"
                  className="rounded-full bg-[#171717] text-white hover:bg-white hover:text-[#171717] transition-colors border border-gray-700 px-4 py-2 flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Github
                </Link>
            </div>

            <TechStack />
          </div>

          <ParallaxProjects />
        </div>
      </main>
    </div>
  )
};

