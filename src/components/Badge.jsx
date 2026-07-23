import { cn } from '@/utils/cn'

const variants = {
  default: 'bg-brand/10 text-brand border-brand/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  muted: 'bg-white/5 text-muted border-white/10',
  success: 'bg-green-500/10 text-green-400 border-green-500/20',
  warning: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
}

export function Badge({ children, variant = 'default', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
