import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatPercent, CHART_COLORS, axisStyle, gridStyle } from '@/shared/lib'
import { ebitdaData } from '../../data/mockData'

export function EbitdaCard() {
  const { current, margin, trend } = ebitdaData

  return (
    <Card>
      <CardHeader
        title="EBITDA"
        action={<Badge variant="success">{formatPercent(margin)} margem</Badge>}
      />

      <p className="tabular-nums text-[30px] font-bold text-[var(--txt-main)] leading-tight">
        {formatBRL(current)}
      </p>
      <p className="mb-4 text-[14px] text-[var(--txt-secondary)]">Acumulado do período</p>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={trend}>
            <CartesianGrid {...gridStyle} />
            <XAxis dataKey="month" {...axisStyle} />
            <YAxis yAxisId="left" {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <YAxis yAxisId="right" orientation="right" {...axisStyle} tickFormatter={(v: number) => `${v}%`} />
            <Tooltip
              content={
                <ChartTooltip
                  formatValue={(v, name) => (name === 'Margem' ? formatPercent(v) : formatBRL(v))}
                />
              }
            />
            <Legend wrapperStyle={{ fontSize: 12, color: 'var(--txt-secondary)' }} />
            <Bar yAxisId="left" dataKey="value" name="EBITDA" fill={CHART_COLORS.chart1} radius={[4, 4, 0, 0]} />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="margin"
              name="Margem"
              stroke={CHART_COLORS.chart6}
              strokeWidth={2}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
