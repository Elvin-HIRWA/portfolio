import { useState, useEffect } from 'react'
import { RootLayout } from '@/layouts/RootLayout'
import { ScrollProgress } from '@/components/ScrollProgress'
import { CursorGlow } from '@/components/CursorGlow'
import { MouseFollower } from '@/components/MouseFollower'
import { Hero } from '@/sections/Hero'
import { Stats } from '@/sections/Stats'
import { Challenge } from '@/sections/Challenge'
import { Projects } from '@/sections/Projects'
import { Skills } from '@/sections/Skills'
import { WhyIBuild } from '@/sections/WhyIBuild'
import { FunSection } from '@/sections/FunSection'
import { Timeline } from '@/sections/Timeline'
import { TechCloud } from '@/sections/TechCloud'
import { Contact } from '@/sections/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) {
      setDarkMode(stored === 'dark')
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDark = () => setDarkMode((prev) => !prev)

  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <MouseFollower />

      <RootLayout darkMode={darkMode} toggleDark={toggleDark}>
        <Hero />
        <Stats />
        <Challenge />
        <Projects />
        <Skills />
        <WhyIBuild />
        <FunSection />
        <Timeline />
        <TechCloud />
        <Contact />
      </RootLayout>
    </>
  )
}
