'use client'

import { useCallback, useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  opacity: number
}

const StarBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameId = useRef<number>()
  const starsRef = useRef<Star[]>([])
  
  const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(255, 233, 196, 0.1)', 'rgba(212, 251, 255, 0.1)']
  const STAR_COUNT = 50
  
  const createStars = useCallback((width: number, height: number) => {
    const stars: Star[] = []
    for (let i = 0; i < STAR_COUNT; i++) {
      const y = Math.random() * height
      const opacity = Math.max(0.1, 1 - (y / height))
      
      stars.push({
        x: Math.random() * width,
        y,
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        opacity
      })
    }
    return stars
  }, [])

  const animate = useCallback(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    starsRef.current.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      const color = colors[Math.floor(Math.random() * colors.length)]
      ctx.fillStyle = color.replace('0.1', star.opacity.toString())
      ctx.fill()

      star.x += star.vx
      star.y += star.vy

      star.opacity = Math.max(0.1, 1 - (star.y / canvas.height))

      star.x = (star.x + canvas.width) % canvas.width
      star.y = (star.y + canvas.height) % canvas.height
    })

    animationFrameId.current = requestAnimationFrame(animate)
  }, [colors])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      starsRef.current = createStars(canvas.width, canvas.height)
    }

    handleResize()
    animate()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [animate, createStars])

  return (
    <>
      <div className="dotted-background" />
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        style={{ 
          background: 'transparent',
          zIndex: 2
        }}
      />
    </>
  )
}

export default StarBackground