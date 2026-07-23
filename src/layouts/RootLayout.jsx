import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, FileText, ExternalLink } from 'lucide-react'
import { navLinks } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/utils/cn'
import { Button } from '@/components/Button'

function Navbar({ darkMode, toggleDark }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const sectionIds = ['home', 'challenge', 'projects', 'skills', 'about', 'contact']
  const activeSection = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href) => {
    setIsOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        )}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-brand/50 rounded-lg"
              aria-label="Elvin Hirwa - Home"
            >
              <motion.div
                className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center text-white font-bold text-sm shadow-brand"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                EH
              </motion.div>
              <span className="hidden sm:block text-text font-semibold text-sm group-hover:text-brand transition-colors">
                Elvin Hirwa
              </span>
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1" role="menubar">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    role="menuitem"
                    className={cn(
                      'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      'focus:outline-none focus:ring-2 focus:ring-brand/50',
                      isActive ? 'text-text' : 'text-muted hover:text-text'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/6 rounded-lg border border-white/8"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                )
              })}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand/50"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? 'sun' : 'moon'}
                    initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <Button
                variant="primary"
                size="sm"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                icon={<FileText size={14} />}
                iconPosition="left"
                className="hidden sm:inline-flex"
                aria-label="Preview resume in new tab"
              >
                Resume
              </Button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-muted hover:text-text hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-brand/50"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-bg/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <nav className="flex-1 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                    className="flex items-center justify-between py-4 border-b border-border text-lg font-medium text-muted hover:text-text transition-colors focus:outline-none focus:text-text"
                  >
                    {link.label}
                    <ExternalLink size={16} className="opacity-40" />
                  </motion.a>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-6"
              >
                <Button
                  variant="primary"
                  size="lg"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                  icon={<FileText size={16} />}
                  iconPosition="left"
                >
                  View Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-border py-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-muted text-sm">
          Made with{' '}
          <span className="text-red-400" aria-label="love">❤️</span>
          {' '}by{' '}
          <span className="text-text font-medium">Elvin Hirwa</span>
        </p>
        <p className="text-subtle text-xs mt-2">
          © {new Date().getFullYear()} — Built with React, Vite & Framer Motion
        </p>
      </div>
    </footer>
  )
}

export function RootLayout({ children, darkMode, toggleDark }) {
  return (
    <div className="min-h-screen bg-bg text-text font-sans transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
