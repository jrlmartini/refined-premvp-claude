import { Droplets } from 'lucide-react'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { formatNumber, formatPercent } from '@/shared/lib'
import { waterMetricsData } from '../../data/mockData'

export function WaterMetricsCard() {
  return (
    <Card>
      <CardHeader
        title="Tratamento de Água"
        subtitle="Métricas operacionais"
        action={<Droplets size={20} className="text-[var(--chart-3)]" />}
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {waterMetricsData.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[var(--radius-sm)] border-[0.5px] border-[var(--str-default)] bg-[var(--bg-main)] p-3"
          >
            <p className="mb-1 text-[12px] text-[var(--txt-secondary)]">{metric.label}</p>
            <p className="tabular-nums text-[20px] font-semibold text-[var(--txt-main)]">
              {metric.unit === '%' ? formatPercent(metric.value) : formatNumber(metric.value)}
              {metric.unit && metric.unit !== '%' && (
                <span className="ml-1 text-[12px] text-[var(--txt-muted)]">{metric.unit}</span>
              )}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <span className="text-[11px] text-[var(--txt-muted)]">
                Meta: {metric.unit === '%' ? formatPercent(metric.target) : formatNumber(metric.target)}
                {metric.unit && metric.unit !== '%' ? ` ${metric.unit}` : ''}
              </span>
              <Badge variant={metric.status}>{metric.status === 'success' ? 'OK' : metric.status === 'warning' ? 'Atenção' : 'Crítico'}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
