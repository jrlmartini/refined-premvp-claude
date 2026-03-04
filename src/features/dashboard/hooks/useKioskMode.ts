import { useState, useEffect, useCallback } from 'react'

export function useKioskMode() {
  const [isKiosk, setIsKiosk] = useState(false)

  const enterKiosk = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen()
    } catch {
      /* browser may block if not user-initiated */
    }
  }, [])

  const exitKiosk = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen()
      }
    } catch {
      /* ignore */
    }
  }, [])

  const toggleKiosk = useCallback(() => {
    if (isKiosk) {
      exitKiosk()
    } else {
      enterKiosk()
    }
  }, [isKiosk, enterKiosk, exitKiosk])

  // Sync state with actual fullscreen status
  useEffect(() => {
    const handler = () => {
      setIsKiosk(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  // Keyboard shortcut: Ctrl/Cmd + Shift + K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'K') {
        e.preventDefault()
        toggleKiosk()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [toggleKiosk])

  return { isKiosk, toggleKiosk, enterKiosk, exitKiosk }
}
