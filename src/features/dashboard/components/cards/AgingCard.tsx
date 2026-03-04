import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatPercent, CHART_COLOR_ARRAY, axisStyle, gridStyle } from '@/shared/lib'
import { agingData } from '../../data/mockData'

export function AgingCard() {
  const total = agingData.reduce((sum, b) => sum + b.amount, 0)

  return (
    <Card>
      <CardHeader
        title="Aging — Contas a Receber"
        action={
          <div className="text-right">
            <p className="tabular-nums text-[20px] font-semibold text-[var(--txt-main)]">{formatBRL(total)}</p>
            <p className="text-[12px] text-[var(--txt-secondary)]">Total</p>
          </div>
        }
      />

      {/* Chart */}
      <div className="mb-4 h-44">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={agingData} barSize={32}>
            <CartesianGrid {...gridStyle} />
            <XAxis dataKey="range" {...axisStyle} />
            <YAxis {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            <Bar dataKey="amount" name="Valor" radius={[4, 4, 0, 0]}>
              {agingData.map((_, i) => (
                <rect key={i} fill={CHART_COLOR_ARRAY[i % CHART_COLOR_ARRAY.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary table */}
      <table className="w-full text-[13px]">
        <thead>
          <tr className="text-left text-[var(--txt-secondary)]">
            <th className="pb-2 font-normal">Faixa</th>
            <th className="pb-2 text-right font-normal">Valor</th>
            <th className="pb-2 text-right font-normal">Títulos</th>
            <th className="pb-2 text-right font-normal">%</th>
          </tr>
        </thead>
        <tbody>
          {agingData.map((bucket) => (
            <tr key={bucket.range} className="border-t-[0.5px] border-[var(--str-default)]">
              <td className="py-1.5 text-[var(--txt-main)]">{bucket.range}</td>
              <td className="tabular-nums py-1.5 text-right text-[var(--txt-main)]">{formatBRL(bucket.amount)}</td>
              <td className="tabular-nums py-1.5 text-right text-[var(--txt-secondary)]">{bucket.count}</td>
              <td className="py-1.5 text-right">
                <Badge variant={bucket.range === '> 90 dias' ? 'danger' : bucket.range === '61-90 dias' ? 'warning' : 'default'}>
                  {formatPercent(bucket.percentage)}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  )
}
