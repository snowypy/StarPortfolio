'use client';

import './globals.css';
import React from 'react';
import Link from 'next/link';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Home, FolderGit2, User } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const scrollDirection = useScrollDirection();
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-black text-white`}>
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
          scrollDirection === "down" ? "-translate-y-32" : "translate-y-0"
        }`}>
          <div className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
                <Home className="w-5 h-5" />
                Home
              </Link>
              <Link href="/projects" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
                <FolderGit2 className="w-5 h-5" />
                Projects
              </Link>
              <Link href="/about" className="flex items-center gap-3 text-lg hover:text-gray-300 transition-colors">
                <User className="w-5 h-5" />
                About
              </Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};

export default Layout;