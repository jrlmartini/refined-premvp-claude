import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  FileText,
  Droplets,
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/shared/lib'

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileOpen: boolean
  onMobileClose: () => void
}

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Financeiro', active: false },
  { icon: Users, label: 'Clientes', active: false },
  { icon: DollarSign, label: 'Receita', active: false },
  { icon: FileText, label: 'Contratos', active: false },
  { icon: Droplets, label: 'Operações', active: false },
  { icon: Settings, label: 'Configurações', active: false },
] as const

export function Sidebar({ collapsed, onToggle, mobileOpen, onMobileClose }: SidebarProps) {
  return (
    <>
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={onMobileClose}
        />
      )}

      <aside
        className={cn(
          'fixed left-0 top-0 z-50 flex h-dvh flex-col border-r-[0.5px] border-[var(--str-default)] bg-[var(--bg-card)] transition-all duration-300',
          /* desktop */
          collapsed ? 'w-16' : 'w-56',
          /* mobile: drawer */
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
          'md:translate-x-0',
        )}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b-[0.5px] border-[var(--str-default)] px-4">
          {!collapsed && (
            <span className="text-[18px] font-bold text-[var(--txt-main)]">Conatus</span>
          )}
          <button
            onClick={() => {
              onToggle()
              if (mobileOpen) onMobileClose()
            }}
            className="rounded-[var(--radius-sm)] p-1 text-[var(--txt-muted)] hover:text-[var(--txt-main)] transition-colors"
            aria-label={collapsed ? 'Expandir menu' : 'Colapsar menu'}
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="flex flex-col gap-1 px-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <button
                  className={cn(
                    'flex w-full items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-[14px] transition-colors',
                    item.active
                      ? 'border-[1px] border-[var(--str-hover)] bg-[var(--bg-card)] text-[var(--txt-main)]'
                      : 'border-[0.5px] border-transparent text-[var(--txt-secondary)] hover:border-[var(--str-default)] hover:text-[var(--txt-main)]',
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <item.icon size={20} className="shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="border-t-[0.5px] border-[var(--str-default)] p-4">
          {!collapsed && (
            <p className="text-[12px] text-[var(--txt-muted)]">v1.0.0</p>
          )}
        </div>
      </aside>
    </>
  )
}
