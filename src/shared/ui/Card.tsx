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
        'rounded-[var(--radius-md)] border-[0.5px] border-[var(--str-default)] bg-[var(--bg-card)] p-6',
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
        <h2 className="text-[20px] font-semibold text-[var(--txt-main)]">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-[14px] text-[var(--txt-secondary)]">{subtitle}</p>
        )}
      </div>
      {action && <div className="ml-4 shrink-0">{action}</div>}
    </div>
  )
}
