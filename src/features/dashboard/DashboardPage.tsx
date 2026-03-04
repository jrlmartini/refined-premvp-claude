import {
  RevenueCard,
  TopClientsCard,
  CashPositionCard,
  CashFlowCard,
  EbitdaCard,
  RFMHeatmapCard,
  ContractsCard,
  WaterMetricsCard,
  AgingCard,
  ShowcaseCard,
} from './components/cards'

export function DashboardPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:gap-6">
      {/* Row 1: Receita (8 col) + Posição de Caixa (4 col) */}
      <div className="xl:col-span-8">
        <RevenueCard />
      </div>
      <div className="xl:col-span-4">
        <CashPositionCard />
      </div>

      {/* Row 2: EBITDA (6 col) + Top Clientes (6 col) */}
      <div className="xl:col-span-6">
        <EbitdaCard />
      </div>
      <div className="xl:col-span-6">
        <TopClientsCard />
      </div>

      {/* Row 3: Fluxo de Caixa (8 col) + Contratos (4 col) */}
      <div className="xl:col-span-8">
        <CashFlowCard />
      </div>
      <div className="xl:col-span-4">
        <ContractsCard />
      </div>

      {/* Row 4: Tratamento de Água (6 col) + Heatmap RFM (6 col) */}
      <div className="xl:col-span-6">
        <WaterMetricsCard />
      </div>
      <div className="xl:col-span-6">
        <RFMHeatmapCard />
      </div>

      {/* Row 5: Aging (6 col) + Showcase (6 col) */}
      <div className="xl:col-span-6">
        <AgingCard />
      </div>
      <div className="xl:col-span-6">
        <ShowcaseCard />
      </div>
    </div>
  )
}
