import { motion } from 'framer-motion'
import { techPills } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'

function FloatingPill({ pill, index }) {
  const duration = 4 + (index % 5)
  const delay = (index * 0.3) % 3
  const yOffset = 8 + (index % 12)

  return (
    <motion.span
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border cursor-default select-none ${pill.color}`}
      animate={{
        y: [0, -yOffset, 0],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.08,
        opacity: 1,
        transition: { duration: 0.2 },
      }}
    >
      {pill.label}
    </motion.span>
  )
}

export function TechCloud() {
  const row1 = techPills.slice(0, 6)
  const row2 = techPills.slice(6)

  return (
    <section
      className="py-32 relative overflow-hidden"
      aria-label="Technology stack cloud"
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" aria-hidden="true" />

      {/* Background blob */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/3 via-transparent to-accent/3 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Technologies I Work With"
          description="The tools and technologies that power the products I build."
        />

        <div className="space-y-6 flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center gap-4">
            {row1.map((pill, i) => (
              <FloatingPill key={pill.label} pill={pill} index={i} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            {row2.map((pill, i) => (
              <FloatingPill key={pill.label} pill={pill} index={i + 6} />
            ))}
          </div>
        </div>

        {/* Decorative grid */}
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-30 pointer-events-none -z-10"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}
