/**
 * Estilos centralizados para Recharts conforme designsystem.md §8.4
 */

export const CHART_COLORS = {
  chart1: 'var(--chart-1)',
  chart2: 'var(--chart-2)',
  chart3: 'var(--chart-3)',
  chart4: 'var(--chart-4)',
  chart5: 'var(--chart-5)',
  chart6: 'var(--chart-6)',
  chart7: 'var(--chart-7)',
  chartOther: 'var(--chart-other)',
  chart9: 'var(--chart-9)',
  chart10: 'var(--chart-10)',
  chart11: 'var(--chart-11)',
  chart12: 'var(--chart-12)',
} as const

export const CHART_COLOR_ARRAY = [
  CHART_COLORS.chart1,
  CHART_COLORS.chart2,
  CHART_COLORS.chart3,
  CHART_COLORS.chart4,
  CHART_COLORS.chart5,
  CHART_COLORS.chart6,
  CHART_COLORS.chart7,
  CHART_COLORS.chartOther,
]

export const STATUS_COLORS = {
  success: 'var(--st-success)',
  warning: 'var(--st-warning)',
  danger: 'var(--st-danger)',
} as const

/** Configuração padrão de eixos */
export const axisStyle = {
  tick: { fill: 'var(--txt-secondary)', fontSize: 12, fontFamily: 'var(--font-family)' },
  axisLine: { stroke: 'var(--str-default)' },
  tickLine: false as const,
}

/** Configuração padrão de grid */
export const gridStyle = {
  stroke: 'var(--str-default)',
  strokeOpacity: 0.4,
  strokeDasharray: '3 3',
}

/** Meses abreviados pt-BR conforme designsystem.md */
export const MONTHS_PT_BR = [
  'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
  'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',
] as const
