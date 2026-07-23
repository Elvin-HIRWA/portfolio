import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/utils/variants'
import { cn } from '@/utils/cn'

export function SectionHeader({ eyebrow, title, description, centered = true, className }) {
  return (
    <motion.div
      className={cn('space-y-4 mb-16', centered && 'text-center', className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {eyebrow && (
        <motion.div variants={fadeUp} className={cn('flex items-center gap-2', centered && 'justify-center')}>
          <div className="h-px w-8 bg-brand/60" />
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">{eyebrow}</span>
          <div className="h-px w-8 bg-brand/60" />
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={fadeUp} className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}
