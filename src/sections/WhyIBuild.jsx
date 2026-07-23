import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Music, BookOpen, Users, FileText } from 'lucide-react'
import { whyIBuild } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { fadeLeft, fadeRight, staggerContainer, fadeUp } from '@/utils/variants'

const iconMap = { Lightbulb, Music, BookOpen, Users, FileText }

function AboutImage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <motion.div ref={ref} variants={fadeLeft} className="relative">
      <motion.div style={{ y }}>
        {/* Decorative image placeholder */}
        <div className="relative w-full aspect-[4/5] max-w-sm mx-auto rounded-3xl overflow-hidden">
          {/* Gradient background that serves as the "image" */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-card to-violet-900/20" />

          {/* Code pattern overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="font-mono text-xs sm:text-sm space-y-2 text-left w-full opacity-60">
              {[
                '<Engineer>',
                '  passion="backend"',
                '  focus="scalability"',
                '  location="Rwanda"',
                '  available={true}',
                '  coffee={Infinity}',
                '</Engineer>',
              ].map((line, i) => (
                <motion.div
                  key={i}
                  className={`${line.startsWith('<') || line.startsWith('</')  ? 'text-brand' : line.includes('=') ? 'text-muted' : 'text-accent'}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-brand/20" />

          {/* Corner accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-brand/40 rounded-tl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-brand/40 rounded-br-lg" />
        </div>
      </motion.div>

      {/* Experience badge */}
      <motion.div
        className="absolute -bottom-6 -right-4 sm:-right-8 bg-card border border-border rounded-2xl p-4 shadow-card"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="text-3xl font-black text-transparent bg-gradient-to-br from-brand to-violet-400 bg-clip-text">3+</div>
        <div className="text-xs text-muted mt-0.5 font-medium">Years Building</div>
      </motion.div>

      <motion.div
        className="absolute -top-4 -left-4 sm:-left-8 bg-card border border-border rounded-2xl p-4 shadow-card"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <div className="text-accent font-bold text-sm">10+</div>
        <div className="text-xs text-muted">Projects Shipped</div>
      </motion.div>
    </motion.div>
  )
}

export function WhyIBuild() {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
      aria-label="About Elvin — why I build software"
    >
      {/* Background blob */}
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="Why I Build Software"
          centered
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center mt-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left — image */}
          <AboutImage />

          {/* Right — content */}
          <motion.div variants={fadeRight} className="space-y-8">
            {/* Quote */}
            <blockquote className="relative pl-6 border-l-2 border-brand">
              <p className="text-text text-xl sm:text-2xl font-medium leading-relaxed italic">
                "{whyIBuild.quote}"
              </p>
            </blockquote>

            <p className="text-muted text-lg leading-relaxed">
              {whyIBuild.body}
            </p>

            {/* Interests */}
            <div>
              <h3 className="text-text font-semibold mb-4">Outside of code, I enjoy:</h3>
              <div className="space-y-3">
                {whyIBuild.interests.map((item) => {
                  const Icon = iconMap[item.icon]
                  return (
                    <motion.div
                      key={item.label}
                      className="flex items-center gap-3 group"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-9 h-9 rounded-xl bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand/20 transition-colors shrink-0">
                        {Icon && <Icon size={16} />}
                      </div>
                      <span className="text-muted group-hover:text-text transition-colors text-sm font-medium">
                        {item.label}
                      </span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* MailerLite mention */}
            <div className="p-5 rounded-2xl bg-brand/5 border border-brand/15">
              <p className="text-sm text-muted leading-relaxed">
                <span className="text-brand font-semibold">Applying to MailerLite</span> because I believe in building tools that empower creators and businesses — and I want to contribute to a team that holds quality and craftsmanship at its core.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
