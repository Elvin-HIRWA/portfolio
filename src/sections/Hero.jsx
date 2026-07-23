import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { Button } from '@/components/Button'
import { staggerContainer } from '@/utils/variants'

function DevWorkspaceIllustration() {
  return (
    <motion.div
      className="relative w-full max-w-lg mx-auto"
    >
      {/* Floating glow blobs */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main illustration window */}
      <motion.div
        className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-card"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-auto text-xs text-muted font-mono">elvin@dev ~ api/routes</span>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed">
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">1</span>
            <span className="text-violet-400">Route</span>
            <span className="text-text">::</span>
            <span className="text-cyan-400">prefix</span>
            <span className="text-text">(</span>
            <span className="text-accent">'api/v2'</span>
            <span className="text-text">)-&gt;</span>
            <span className="text-cyan-400">group</span>
            <span className="text-text">(</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">2</span>
            <span className="pl-4 text-violet-400">function</span>
            <span className="text-text">() {'{'}</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">3</span>
            <span className="pl-8 text-violet-400">Route</span>
            <span className="text-text">::</span>
            <span className="text-cyan-400">middleware</span>
            <span className="text-text">([</span>
            <span className="text-accent">'auth'</span>
            <span className="text-text">])</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">4</span>
            <span className="pl-12 text-text">-&gt;</span>
            <span className="text-cyan-400">apiResource</span>
            <span className="text-text">(</span>
            <span className="text-accent">'students'</span>
            <span className="text-text">,</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">5</span>
            <span className="pl-16 text-violet-400">StudentController</span>
            <span className="text-text">::</span>
            <span className="text-brand">class</span>
            <span className="text-text">);</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">6</span>
            <span className="pl-4 text-text">{'}'}</span>
          </div>
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">7</span>
            <span className="text-text">);</span>
          </div>
          {/* blinking cursor */}
          <div className="flex gap-3">
            <span className="text-muted select-none w-4 text-right shrink-0">8</span>
            <motion.span
              className="inline-block w-2 h-4 bg-brand align-middle"
              animate={{ opacity: [1, 1, 0, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.45, 0.5, 1] }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating stat cards */}
      <motion.div
        className="absolute -left-8 top-1/3 bg-card border border-border rounded-xl p-3 shadow-card"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs font-mono text-text">API latency: 42ms</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-8 bottom-1/4 bg-card border border-border rounded-xl p-3 shadow-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          <span className="text-xs font-mono text-text">Redis: cache HIT ✓</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-1/4 -bottom-6 bg-card border border-accent/20 rounded-xl p-3 shadow-card"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-mono text-text">Tests: 127 passed ✓</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const handleScroll = (href) => {
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden="true"
      />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand/8 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/6 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="visible"
            animate="visible"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium">
                <span role="img" aria-label="waving hand">👋</span>
                Hello, I'm available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text leading-[1.05] tracking-tight">
                Hi, I'm{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-brand via-violet-400 to-brand bg-clip-text text-transparent">
                    Elvin Hirwa
                  </span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand to-violet-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>

              {/* Rotating subtitle */}
              <div className="flex items-center gap-3 h-10 sm:h-12" aria-live="polite" aria-atomic="true">
                <span className="text-muted text-xl sm:text-2xl font-light">—</span>
                <TypeAnimation
                  sequence={[
                    'Backend Engineer',
                    2000,
                    'Laravel Expert',
                    2000,
                    'Node.js Developer',
                    2000,
                    'Problem Solver',
                    2000,
                    'API Architect',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-xl sm:text-2xl font-semibold text-brand"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-lg sm:text-xl leading-relaxed max-w-lg"
            >
              I build scalable backend systems that power products people love. Specializing in{' '}
              <span className="text-text font-medium">Laravel</span>,{' '}
              <span className="text-text font-medium">Node.js</span>, and{' '}
              <span className="text-text font-medium">API architecture</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScroll('#challenge')}
                icon={<ArrowRight size={18} />}
              >
                View My Story
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => handleScroll('#contact')}
                icon={<Mail size={18} />}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Tech stack chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {['Laravel', 'PHP', 'Node.js', 'Redis', 'Docker', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-muted border border-border rounded-lg bg-white/[0.02] hover:border-brand/30 hover:text-brand transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <DevWorkspaceIllustration />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          aria-hidden="true"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
