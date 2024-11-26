import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Home, FolderGit2, BookOpen, User, Mail, Moon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Faizan Asad - Full Stack Web / Blockchain Developer',
  description: 'Portfolio of Faizan Asad, showcasing skills in Full Stack Web and Blockchain Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <div className="dotted-background" />
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
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}

