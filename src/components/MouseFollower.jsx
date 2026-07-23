import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function MouseFollower() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 })
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 })

  const dotX = useSpring(cursorX, { stiffness: 800, damping: 50 })
  const dotY = useSpring(cursorY, { stiffness: 800, damping: 50 })

  const isHoveringRef = useRef(false)

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [data-cursor-pointer]')) {
        isHoveringRef.current = true
      }
    }

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, [data-cursor-pointer]')) {
        isHoveringRef.current = false
      }
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full border border-brand/40 hidden lg:block"
        style={{
          x: springX,
          y: springY,
          width: 32,
          height: 32,
          translateX: '-50%',
          translateY: '-50%',
        }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none fixed z-50 rounded-full bg-brand hidden lg:block"
        style={{
          x: dotX,
          y: dotY,
          width: 5,
          height: 5,
          translateX: '-50%',
          translateY: '-50%',
        }}
        aria-hidden="true"
      />
    </>
  )
}
