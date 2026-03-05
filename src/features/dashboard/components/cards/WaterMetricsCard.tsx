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

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {waterMetricsData.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[var(--radius-sm)] border-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-main)] p-4"
          >
            <p className="mb-2 text-[var(--text-body)] text-[var(--txt-secondary)]">{metric.label}</p>
            <p className="tabular-nums text-[var(--text-h2)] font-semibold text-[var(--txt-main)]">
              {metric.unit === '%' ? formatPercent(metric.value) : formatNumber(metric.value)}
              {metric.unit && metric.unit !== '%' && (
                <span className="ml-2 text-[var(--text-body)] text-[var(--txt-muted)]">{metric.unit}</span>
              )}
            </p>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-[var(--text-body)] text-[var(--txt-muted)]">
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
