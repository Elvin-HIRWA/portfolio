import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { stats } from '@/data'
import { staggerContainer, fadeUp } from '@/utils/variants'

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true })

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="relative group text-center p-8 rounded-2xl bg-card border border-border hover:border-brand/30 transition-all duration-300 hover:shadow-card-hover overflow-hidden"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand/0 to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Accent line at top */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-transparent via-brand to-transparent group-hover:w-full transition-all duration-500"
      />

      <div className="relative z-10">
        <div
          className="text-5xl sm:text-6xl font-black text-transparent bg-gradient-to-br from-brand to-violet-400 bg-clip-text mb-2 tabular-nums"
          aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
        >
          {inView ? (
            <CountUp
              start={0}
              end={stat.value}
              duration={2.5}
              delay={index * 0.15}
              useEasing
              suffix={stat.suffix}
            />
          ) : (
            <>0{stat.suffix}</>
          )}
        </div>
        <div className="text-text font-semibold text-lg mb-1">{stat.label}</div>
        <div className="text-muted text-sm">{stat.description}</div>
      </div>
    </motion.div>
  )
}

export function Stats() {
  return (
    <section
      className="py-24 relative"
      aria-label="Statistics"
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
