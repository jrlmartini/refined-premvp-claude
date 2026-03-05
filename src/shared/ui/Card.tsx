import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

interface CardProps {
  children: ReactNode
  className?: string
  interactive?: boolean
}

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-[var(--radius-md)] border-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-card)] p-6 transition-colors',
        interactive && 'hover:border-[var(--border-highlight)] hover:border-[var(--str-hover)] focus-visible:border-[var(--border-highlight)] focus-visible:border-[var(--str-hover)]',
        className,
      )}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  title: string
  subtitle?: string
  action?: ReactNode
  className?: string
}

export function CardHeader({ title, subtitle, action, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4 flex items-start justify-between', className)}>
      <div>
        <h2 className="overflow-hidden text-[var(--text-h2)] font-semibold text-[var(--txt-main)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[var(--text-body)] text-[var(--txt-secondary)]">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 shrink-0">{action}</div>}
    </div>
  )
}
