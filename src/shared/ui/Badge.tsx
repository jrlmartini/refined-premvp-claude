import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

type BadgeVariant = 'default' | 'success' | 'warning' | 'danger'

interface BadgeProps {
  variant?: BadgeVariant
  children: ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--bg-card)] text-[var(--txt-secondary)] border-[var(--str-default)]',
  success: 'bg-[var(--st-success)]/15 text-[var(--st-success)] border-[var(--st-success)]/30',
  warning: 'bg-[var(--st-warning)]/15 text-[var(--st-warning)] border-[var(--st-warning)]/30',
  danger: 'bg-[var(--st-danger)]/15 text-[var(--st-danger)] border-[var(--st-danger)]/30',
}

export function Badge({ variant = 'default', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex min-h-8 items-center gap-2 rounded-[var(--radius-sm)] border-[var(--border-default)] px-2 py-2 text-[var(--text-body)] font-semibold',
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
