import { cn } from '@/utils/cn'

export function Pill({ children, className, color }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-200',
        color || 'text-muted border-border bg-white/5 hover:border-brand/30 hover:text-brand',
        className
      )}
    >
      {children}
    </span>
  )
}
