import { useState, useCallback, type ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useKioskMode } from '@/features/dashboard/hooks/useKioskMode'
import { cn } from '@/shared/lib'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { isKiosk, toggleKiosk } = useKioskMode()

  const handleMenuClick = useCallback(() => {
    setMobileOpen((prev) => !prev)
  }, [])

  const handleSidebarToggle = useCallback(() => {
    setSidebarCollapsed((prev) => !prev)
  }, [])

  return (
    <div className="min-h-dvh bg-[var(--bg-main)]">
      {/* Sidebar — hidden in kiosk mode */}
      {!isKiosk && (
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={handleSidebarToggle}
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
        />
      )}

      {/* Header */}
      <Header
        onMenuClick={handleMenuClick}
        isKiosk={isKiosk}
        onToggleKiosk={toggleKiosk}
        sidebarCollapsed={sidebarCollapsed}
      />

      {/* Main content */}
      <main
        className={cn(
          'min-h-[calc(100dvh-4rem)] p-4 transition-all duration-300 lg:p-6',
          !isKiosk && (sidebarCollapsed ? 'md:ml-16' : 'md:ml-56'),
        )}
      >
        {children}
      </main>
    </div>
  )
}
