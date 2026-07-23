import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const variants = {
  primary: [
    'bg-brand text-white hover:bg-brand-500',
    'shadow-brand hover:shadow-brand-lg',
    'border border-brand/50',
  ],
  secondary: [
    'bg-transparent text-text',
    'border border-border hover:border-brand/60',
    'hover:bg-brand/5',
  ],
  ghost: ['bg-transparent text-muted hover:text-text hover:bg-white/5', 'border border-transparent'],
  outline: ['bg-transparent text-brand border border-brand/40 hover:bg-brand/10'],
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  onClick,
  disabled,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center gap-2 rounded-xl font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 focus:ring-offset-bg',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  )
}
