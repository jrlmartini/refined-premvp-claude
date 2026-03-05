import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Card, CardHeader } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, formatPercent, CHART_COLOR_ARRAY } from '@/shared/lib'
import { topClientsData } from '../../data/mockData'

export function TopClientsCard() {
  return (
    <Card>
      <CardHeader title="Top Clientes" subtitle="Participação na receita YTD" />

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Chart */}
        <div className="h-44 w-full lg:w-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={topClientsData}
                dataKey="revenue"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                strokeWidth={0}
              >
                {topClientsData.map((_, i) => (
                  <Cell key={i} fill={CHART_COLOR_ARRAY[i % CHART_COLOR_ARRAY.length]} />
                ))}
              </Pie>
              <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Table */}
        <div className="flex-1">
          <table className="w-full text-[16px]">
            <thead>
              <tr className="text-left text-[var(--txt-secondary)]">
                <th className="pb-2 font-normal">Cliente</th>
                <th className="pb-2 text-right font-normal">Receita</th>
                <th className="pb-2 text-right font-normal">%</th>
              </tr>
            </thead>
            <tbody>
              {topClientsData.map((client, i) => (
                <tr
                  key={client.name}
                  className="border-t-[var(--border-default)] border-[var(--str-default)] transition-colors hover:border-x-[var(--border-highlight)] hover:border-x-[var(--str-hover)]"
                >
                  <td className="py-2 flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: CHART_COLOR_ARRAY[i % CHART_COLOR_ARRAY.length] }}
                    />
                    <span className="text-[var(--txt-main)]">{client.name}</span>
                  </td>
                  <td className="tabular-nums py-2 text-right text-[var(--txt-main)]">
                    {formatBRL(client.revenue)}
                  </td>
                  <td className="tabular-nums py-2 text-right text-[var(--txt-secondary)]">
                    {formatPercent(client.share)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  )
}
