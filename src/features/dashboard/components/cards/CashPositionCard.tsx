import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { TrendingUp } from 'lucide-react'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatPercent, CHART_COLORS, axisStyle, gridStyle } from '@/shared/lib'
import { cashPositionData } from '../../data/mockData'

export function CashPositionCard() {
  const { current, change, trend } = cashPositionData

  return (
    <Card>
      <CardHeader
        title="Posição de Caixa"
        action={
          <Badge variant="success">
            <TrendingUp size={12} />
            {formatPercent(change)}
          </Badge>
        }
      />

      <p className="tabular-nums text-[30px] font-bold text-[var(--txt-main)] leading-tight">
        {formatBRL(current)}
      </p>
      <p className="mb-4 text-[16px] text-[var(--txt-secondary)]">Saldo atual consolidado</p>

      <div className="h-36">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trend}>
            <defs>
              <linearGradient id="cashGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={CHART_COLORS.chart4} stopOpacity={0.3} />
                <stop offset="95%" stopColor={CHART_COLORS.chart4} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid {...gridStyle} />
            <XAxis dataKey="month" {...axisStyle} />
            <YAxis {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            <Area
              type="monotone"
              dataKey="value"
              name="Saldo"
              stroke={CHART_COLORS.chart4}
              fill="url(#cashGrad)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
