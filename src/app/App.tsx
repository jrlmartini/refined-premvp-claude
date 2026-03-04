import { MainLayout } from '@/layout/MainLayout'
import { DashboardPage } from '@/features/dashboard/DashboardPage'

export function App() {
  return (
    <MainLayout>
      <DashboardPage />
    </MainLayout>
  )
}
