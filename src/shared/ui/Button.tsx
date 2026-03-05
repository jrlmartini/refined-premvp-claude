import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--bg-button)] text-[var(--txt-main)] border-transparent hover:border-[var(--str-hover)]',
  secondary:
    'bg-[var(--bg-card)] text-[var(--txt-main)] border-[var(--str-default)] hover:border-[var(--str-hover)]',
  ghost:
    'bg-[var(--bg-card)] text-[var(--txt-muted)] border-[var(--str-disabled)]',
  destructive:
    'bg-[var(--bg-destructive)] text-[var(--txt-main)] border-transparent hover:border-[var(--str-destructive)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'min-h-10 px-4 py-2 text-[14px]',
  md: 'min-h-10 px-4 py-2 text-[16px]',
  lg: 'min-h-10 px-6 py-2 text-[16px]',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border-[var(--border-default)] font-semibold transition-colors',
        'focus-visible:outline-1 focus-visible:outline-[var(--str-hover)] focus-visible:ring-1 focus-visible:ring-[var(--str-hover)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variantStyles[variant],
        sizeStyles[size],
        variant !== 'ghost' && 'hover:border-[var(--border-highlight)]',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
