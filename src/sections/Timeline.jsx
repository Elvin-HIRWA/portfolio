import { motion } from 'framer-motion'
import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { timelineItems } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { Pill } from '@/components/Pill'
import { staggerContainer, fadeLeft, fadeRight, fadeUp } from '@/utils/variants'

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-0">
      {/* Left column (content when even, empty when odd) */}
      <motion.div
        variants={isLeft ? fadeLeft : {}}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`${isLeft ? 'lg:pr-16' : 'lg:order-3'}`}
      >
        {isLeft && <TimelineCard item={item} />}
      </motion.div>

      {/* Center dot */}
      <div className="hidden lg:flex items-start justify-center lg:order-2">
        <div className="relative mt-6">
          <motion.div
            className="w-5 h-5 rounded-full bg-brand border-4 border-bg shadow-brand z-10 relative"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 400, delay: 0.1 }}
          />
        </div>
      </div>

      {/* Right column (content when odd, empty when even) */}
      <motion.div
        variants={isLeft ? {} : fadeRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className={`${isLeft ? 'lg:order-3' : 'lg:pl-16 lg:order-1'}`}
      >
        {!isLeft && <TimelineCard item={item} />}
      </motion.div>
    </div>
  )
}

function TimelineCard({ item }) {
  return (
    <div className="rounded-2xl bg-card border border-border hover:border-brand/25 transition-colors duration-300 p-6 space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-muted text-xs">
          <CalendarDays size={13} />
          <span className="font-mono">{item.period}</span>
          <span className="px-2 py-0.5 rounded-full bg-white/5 border border-border text-[10px]">{item.type}</span>
        </div>
        <div>
          <h3 className="text-text font-bold text-xl leading-tight">{item.role}</h3>
          <div className="flex items-center gap-1.5 text-brand text-sm font-medium mt-0.5">
            <Briefcase size={13} />
            {item.company}
          </div>
        </div>
      </div>

      <p className="text-muted text-sm leading-relaxed">{item.description}</p>

      {/* Achievements */}
      <ul className="space-y-2">
        {item.achievements.map((ach) => (
          <li key={ach} className="flex items-start gap-2.5 text-sm text-muted">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
            {ach}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
        {item.technologies.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>
    </div>
  )
}

export function Timeline() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      aria-label="Professional timeline"
    >
      {/* Background blob */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          description="Building production systems and gaining expertise one project at a time."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand/30 to-transparent -translate-x-1/2"
            aria-hidden="true"
          />

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Mobile: simple list */}
            <div className="lg:hidden space-y-8">
              {timelineItems.map((item, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <TimelineCard item={item} />
                </motion.div>
              ))}
            </div>

            {/* Desktop: alternating layout */}
            <div className="hidden lg:block space-y-12">
              {timelineItems.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
