import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

export function Card({ children, className, hover = false, glass = false, gradient, onClick }) {
  const base = cn(
    'rounded-2xl border border-border transition-all duration-300',
    glass
      ? 'bg-white/5 backdrop-blur-md border-white/10'
      : 'bg-card',
    hover && 'hover:border-brand/30 hover:shadow-card-hover cursor-pointer',
    gradient && 'relative overflow-hidden',
    className
  )

  if (hover) {
    return (
      <motion.div
        className={base}
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onClick={onClick}
      >
        {gradient && (
          <div className={cn('absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300', gradient)} />
        )}
        {children}
      </motion.div>
    )
  }

  return (
    <div className={base} onClick={onClick}>
      {gradient && (
        <div className={cn('absolute inset-0', gradient)} />
      )}
      {children}
    </div>
  )
}
