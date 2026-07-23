import { cn } from '@/utils/cn'

export function GradientBorder({ children, className, innerClassName, gradient }) {
  return (
    <div
      className={cn(
        'p-px rounded-2xl',
        gradient || 'bg-gradient-to-br from-brand/50 via-violet-500/20 to-accent/30',
        className
      )}
    >
      <div className={cn('rounded-[calc(1rem-1px)] bg-card h-full w-full', innerClassName)}>
        {children}
      </div>
    </div>
  )
}
