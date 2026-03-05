import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Card, CardHeader } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, CHART_COLORS, axisStyle, gridStyle } from '@/shared/lib'
import { cashFlowData } from '../../data/mockData'

export function CashFlowCard() {
  return (
    <Card>
      <CardHeader title="Fluxo de Caixa Operacional" subtitle="Entradas vs Saídas mensal" />

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={cashFlowData} barGap={4}>
            <CartesianGrid {...gridStyle} />
            <XAxis dataKey="month" {...axisStyle} />
            <YAxis {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            <Legend wrapperStyle={{ fontSize: 16, color: 'var(--txt-secondary)' }} />
            <Bar dataKey="entrada" name="Entrada" fill={CHART_COLORS.chart4} radius={[4, 4, 0, 0]} />
            <Bar dataKey="saida" name="Saída" fill={CHART_COLORS.chart7} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
