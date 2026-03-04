import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatPercent, CHART_COLORS, axisStyle, gridStyle } from '@/shared/lib'
import { revenueData } from '../../data/mockData'

export function RevenueCard() {
  const { mtd, ytd, metaMTD, metaYTD, trend } = revenueData
  const mtdPct = ((mtd / metaMTD) * 100) - 100
  const ytdPct = ((ytd / metaYTD) * 100) - 100

  return (
    <Card>
      <CardHeader title="Receita" subtitle="MTD / YTD vs Meta" />

      <div className="mb-4 grid grid-cols-2 gap-4">
        <KPIBlock label="MTD" value={mtd} meta={metaMTD} delta={mtdPct} />
        <KPIBlock label="YTD" value={ytd} meta={metaYTD} delta={ytdPct} />
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend}>
            <CartesianGrid {...gridStyle} />
            <XAxis dataKey="month" {...axisStyle} />
            <YAxis {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            <Legend
              wrapperStyle={{ fontSize: 12, color: 'var(--txt-secondary)' }}
            />
            <Line
              type="monotone"
              dataKey="realizado"
              name="Realizado"
              stroke={CHART_COLORS.chart1}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="meta"
              name="Meta"
              stroke={CHART_COLORS.chart6}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

function KPIBlock({ label, value, meta, delta }: { label: string; value: number; meta: number; delta: number }) {
  const isPositive = delta >= 0
  return (
    <div>
      <p className="text-[12px] text-[var(--txt-secondary)]">{label}</p>
      <p className="tabular-nums text-[30px] font-bold text-[var(--txt-main)] leading-tight">{formatBRL(value)}</p>
      <div className="mt-1 flex items-center gap-2">
        <span className="text-[13px] text-[var(--txt-muted)]">Meta: {formatBRL(meta)}</span>
        <Badge variant={isPositive ? 'success' : 'danger'}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {formatPercent(Math.abs(delta))}
        </Badge>
      </div>
    </div>
  )
}
