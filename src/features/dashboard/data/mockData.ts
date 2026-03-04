/**
 * Dados mock centralizados para o Dashboard Executivo Conatus.
 * Todos os valores em BRL (centavos representados como decimal).
 */

import type { MONTHS_PT_BR } from '@/shared/lib'

type MonthAbbr = (typeof MONTHS_PT_BR)[number]

// ── Receita ──
export interface RevenueData {
  mtd: number
  ytd: number
  metaMTD: number
  metaYTD: number
  trend: { month: MonthAbbr; realizado: number; meta: number }[]
}

export const revenueData: RevenueData = {
  mtd: 2_840_000,
  ytd: 18_450_000,
  metaMTD: 3_100_000,
  metaYTD: 20_000_000,
  trend: [
    { month: 'Jan', realizado: 2_600_000, meta: 2_800_000 },
    { month: 'Fev', realizado: 2_750_000, meta: 2_900_000 },
    { month: 'Mar', realizado: 3_100_000, meta: 3_000_000 },
    { month: 'Abr', realizado: 2_900_000, meta: 3_100_000 },
    { month: 'Mai', realizado: 3_200_000, meta: 3_100_000 },
    { month: 'Jun', realizado: 2_960_000, meta: 3_050_000 },
    { month: 'Jul', realizado: 2_840_000, meta: 3_100_000 },
  ],
}

// ── Top Clientes ──
export interface TopClient {
  name: string
  revenue: number
  share: number
}

export const topClientsData: TopClient[] = [
  { name: 'Petrobras', revenue: 4_200_000, share: 22.8 },
  { name: 'Vale S.A.', revenue: 3_100_000, share: 16.8 },
  { name: 'BRF', revenue: 2_450_000, share: 13.3 },
  { name: 'Suzano', revenue: 1_980_000, share: 10.7 },
  { name: 'JBS', revenue: 1_650_000, share: 8.9 },
  { name: 'Outros', revenue: 5_070_000, share: 27.5 },
]

// ── Posição de Caixa ──
export interface CashPositionData {
  current: number
  previous: number
  change: number
  trend: { month: MonthAbbr; value: number }[]
}

export const cashPositionData: CashPositionData = {
  current: 8_450_000,
  previous: 7_890_000,
  change: 7.1,
  trend: [
    { month: 'Jan', value: 6_200_000 },
    { month: 'Fev', value: 6_800_000 },
    { month: 'Mar', value: 7_100_000 },
    { month: 'Abr', value: 7_500_000 },
    { month: 'Mai', value: 7_200_000 },
    { month: 'Jun', value: 7_890_000 },
    { month: 'Jul', value: 8_450_000 },
  ],
}

// ── Fluxo de Caixa Operacional ──
export interface CashFlowItem {
  month: MonthAbbr
  entrada: number
  saida: number
  liquido: number
}

export const cashFlowData: CashFlowItem[] = [
  { month: 'Jan', entrada: 3_200_000, saida: 2_600_000, liquido: 600_000 },
  { month: 'Fev', entrada: 3_400_000, saida: 2_800_000, liquido: 600_000 },
  { month: 'Mar', entrada: 3_800_000, saida: 3_000_000, liquido: 800_000 },
  { month: 'Abr', entrada: 3_500_000, saida: 2_900_000, liquido: 600_000 },
  { month: 'Mai', entrada: 3_900_000, saida: 3_100_000, liquido: 800_000 },
  { month: 'Jun', entrada: 3_600_000, saida: 3_200_000, liquido: 400_000 },
  { month: 'Jul', entrada: 3_700_000, saida: 2_950_000, liquido: 750_000 },
]

// ── EBITDA ──
export interface EbitdaData {
  current: number
  margin: number
  trend: { month: MonthAbbr; value: number; margin: number }[]
}

export const ebitdaData: EbitdaData = {
  current: 4_120_000,
  margin: 22.3,
  trend: [
    { month: 'Jan', value: 3_200_000, margin: 20.1 },
    { month: 'Fev', value: 3_500_000, margin: 21.0 },
    { month: 'Mar', value: 3_800_000, margin: 22.5 },
    { month: 'Abr', value: 3_600_000, margin: 21.3 },
    { month: 'Mai', value: 4_000_000, margin: 22.8 },
    { month: 'Jun', value: 3_900_000, margin: 21.7 },
    { month: 'Jul', value: 4_120_000, margin: 22.3 },
  ],
}

// ── Heatmap RFM ──
export interface RFMCell {
  recency: string
  frequency: string
  count: number
  value: number
}

export const rfmData: RFMCell[] = [
  { recency: 'Muito recente', frequency: 'Alta', count: 42, value: 95 },
  { recency: 'Muito recente', frequency: 'Média', count: 28, value: 70 },
  { recency: 'Muito recente', frequency: 'Baixa', count: 15, value: 40 },
  { recency: 'Recente', frequency: 'Alta', count: 35, value: 80 },
  { recency: 'Recente', frequency: 'Média', count: 52, value: 60 },
  { recency: 'Recente', frequency: 'Baixa', count: 22, value: 35 },
  { recency: 'Antigo', frequency: 'Alta', count: 18, value: 55 },
  { recency: 'Antigo', frequency: 'Média', count: 30, value: 40 },
  { recency: 'Antigo', frequency: 'Baixa', count: 48, value: 15 },
]

// ── Contratos ──
export interface ContractData {
  total: number
  active: number
  expiringSoon: number
  expired: number
  pipeline: { stage: string; count: number; value: number }[]
}

export const contractsData: ContractData = {
  total: 156,
  active: 124,
  expiringSoon: 18,
  expired: 14,
  pipeline: [
    { stage: 'Prospecção', count: 32, value: 4_500_000 },
    { stage: 'Proposta', count: 18, value: 8_200_000 },
    { stage: 'Negociação', count: 12, value: 6_100_000 },
    { stage: 'Fechamento', count: 7, value: 3_800_000 },
  ],
}

// ── Métricas de Tratamento de Água ──
export interface WaterMetric {
  label: string
  value: number
  unit: string
  target: number
  status: 'success' | 'warning' | 'danger'
}

export const waterMetricsData: WaterMetric[] = [
  { label: 'pH médio', value: 7.2, unit: '', target: 7.0, status: 'success' },
  { label: 'Turbidez', value: 2.1, unit: 'NTU', target: 5.0, status: 'success' },
  { label: 'DBO', value: 18.5, unit: 'mg/L', target: 20.0, status: 'warning' },
  { label: 'Eficiência remoção', value: 94.2, unit: '%', target: 95.0, status: 'warning' },
  { label: 'Volume tratado', value: 12_450, unit: 'm³/dia', target: 15_000, status: 'success' },
  { label: 'Consumo químico', value: 340, unit: 'kg/dia', target: 300, status: 'danger' },
]

// ── Aging de Contas a Receber ──
export interface AgingBucket {
  range: string
  amount: number
  count: number
  percentage: number
}

export const agingData: AgingBucket[] = [
  { range: 'A vencer', amount: 5_200_000, count: 45, percentage: 42.3 },
  { range: '1-30 dias', amount: 3_100_000, count: 28, percentage: 25.2 },
  { range: '31-60 dias', amount: 1_800_000, count: 15, percentage: 14.6 },
  { range: '61-90 dias', amount: 1_200_000, count: 10, percentage: 9.8 },
  { range: '> 90 dias', amount: 990_000, count: 8, percentage: 8.1 },
]

// ── Showcase (Sparklines) ──
export const sparklineData = {
  revenue: [65, 72, 68, 80, 75, 85, 92, 88, 95],
  customers: [120, 115, 130, 125, 140, 138, 150, 155, 160],
  efficiency: [88, 90, 87, 92, 91, 94, 93, 95, 94],
}
