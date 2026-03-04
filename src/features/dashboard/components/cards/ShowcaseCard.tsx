import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Card, CardHeader, Button } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatCompact, formatPercent, CHART_COLORS } from '@/shared/lib'
import { sparklineData } from '../../data/mockData'

function Sparkline({
  data,
  color,
  label,
  mainValue,
  formatFn,
}: {
  data: number[]
  color: string
  label: string
  mainValue: string
  formatFn?: (v: number) => string
}) {
  const chartData = data.map((v, i) => ({ idx: i, value: v }))

  return (
    <div className="rounded-[var(--radius-sm)] border-[0.5px] border-[var(--str-default)] bg-[var(--bg-main)] p-3">
      <div className="mb-2 flex items-start justify-between">
        <p className="text-[12px] text-[var(--txt-secondary)]">{label}</p>
        <p className="tabular-nums text-[16px] font-bold text-[var(--txt-main)]">{mainValue}</p>
      </div>
      <div className="h-12">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis dataKey="idx" hide />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip content={<ChartTooltip formatValue={(v) => (formatFn ? formatFn(v) : String(v))} />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
              name={label}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export function ShowcaseCard() {
  return (
    <Card>
      <CardHeader title="Showcase" subtitle="Botões e sparklines" />

      {/* Button showcase */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Button variant="primary" size="sm">Primário</Button>
        <Button variant="secondary" size="sm">Secundário</Button>
        <Button variant="ghost" size="sm">Ghost</Button>
        <Button variant="destructive" size="sm">Destrutivo</Button>
        <Button variant="primary" size="sm" disabled>Desabilitado</Button>
      </div>

      {/* Sparklines */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Sparkline
          data={sparklineData.revenue}
          color={CHART_COLORS.chart1}
          label="Receita"
          mainValue={formatBRL(9_500_000)}
          formatFn={(v) => formatBRL(v * 100_000)}
        />
        <Sparkline
          data={sparklineData.customers}
          color={CHART_COLORS.chart2}
          label="Clientes"
          mainValue={formatCompact(160)}
          formatFn={(v) => String(v)}
        />
        <Sparkline
          data={sparklineData.efficiency}
          color={CHART_COLORS.chart4}
          label="Eficiência"
          mainValue={formatPercent(94)}
          formatFn={(v) => formatPercent(v)}
        />
      </div>
    </Card>
  )
}
