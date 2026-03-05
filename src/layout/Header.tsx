import { Menu, Search, Bell, Maximize, Minimize, User } from 'lucide-react'
import { cn } from '@/shared/lib'

interface HeaderProps {
  onMenuClick: () => void
  isKiosk: boolean
  onToggleKiosk: () => void
  sidebarCollapsed: boolean
}

function getCurrentDate(): string {
  return new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function Header({ onMenuClick, isKiosk, onToggleKiosk, sidebarCollapsed }: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 z-30 flex h-16 items-center justify-between border-b-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-card)] px-4 transition-all duration-300',
        !isKiosk && (sidebarCollapsed ? 'md:ml-16' : 'md:ml-56'),
      )}
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-[var(--radius-sm)] p-2 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors md:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>
        <div>
          <h1 className="text-[16px] font-semibold text-[var(--txt-main)]">Dashboard Executivo</h1>
          <p className="text-[12px] text-[var(--txt-secondary)] capitalize">{getCurrentDate()}</p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <button
          className="rounded-[var(--radius-sm)] p-2 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors"
          aria-label="Buscar"
        >
          <Search size={18} />
        </button>

        {/* Notifications */}
        <button
          className="relative rounded-[var(--radius-sm)] p-2 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors"
          aria-label="Notificações"
        >
          <Bell size={18} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-[var(--st-danger)]" />
        </button>

        {/* Kiosk toggle */}
        <button
          onClick={onToggleKiosk}
          className="rounded-[var(--radius-sm)] p-2 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors"
          aria-label={isKiosk ? 'Sair do modo kiosk' : 'Modo kiosk'}
          title="Ctrl+Shift+K"
        >
          {isKiosk ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>

        {/* Avatar */}
        <button
          className="flex items-center gap-2 rounded-[var(--radius-sm)] p-2 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors"
          aria-label="Perfil do usuário"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--bg-button)]">
            <User size={16} className="text-[var(--txt-main)]" />
          </div>
          <span className="hidden text-[14px] text-[var(--txt-main)] lg:inline">Admin</span>
        </button>
      </div>
    </header>
  )
}
