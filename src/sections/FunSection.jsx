import { motion } from 'framer-motion'
import { Music, Quote, BookOpen, Rocket } from 'lucide-react'
import { funCards } from '@/data'
import { SectionHeader } from '@/components/SectionHeader'
import { staggerContainer, fadeUp } from '@/utils/variants'

const iconMap = { Music, Quote, BookOpen, Rocket }

const cardAccents = [
  'before:from-purple-500/20',
  'before:from-green-500/20',
  'before:from-blue-500/20',
  'before:from-orange-500/20',
]

function FunCard({ card, index }) {
  const Icon = iconMap[card.icon]

  return (
    <motion.div
      variants={fadeUp}
      className="relative group rounded-2xl bg-card border border-border hover:border-white/15 p-6 overflow-hidden transition-all duration-300 hover:shadow-card-hover"
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
          {Icon && <Icon size={22} className="text-text" strokeWidth={1.5} />}
        </div>

        <h3 className="text-text font-semibold text-base mb-3">{card.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{card.content}</p>
      </div>
    </motion.div>
  )
}

export function FunSection() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      aria-label="Beyond code — personal interests"
    >
      {/* Background blob */}
      <div className="absolute top-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Beyond Code"
          title="The Human Behind the Terminal"
          description="A few things that fuel the creativity and keep the passion alive."
        />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {funCards.map((card, i) => (
            <FunCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
