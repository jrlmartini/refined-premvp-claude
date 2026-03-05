import type { ReactNode } from 'react'
import { cn } from '@/shared/lib'

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-card)] p-6',
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
        <h2 className="overflow-hidden text-[20px] font-semibold text-[var(--txt-main)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-[16px] text-[var(--txt-secondary)]">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 shrink-0">{action}</div>}
    </div>
  )
}
