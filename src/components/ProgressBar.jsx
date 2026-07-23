import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/utils/cn'

export function ProgressBar({ name, level, className }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div ref={ref} className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-text">{name}</span>
        <span className="text-xs font-mono text-muted">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-brand to-violet-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>
    </div>
  )
}
