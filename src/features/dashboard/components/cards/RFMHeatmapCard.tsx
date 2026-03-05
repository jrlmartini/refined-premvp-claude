import { Card, CardHeader } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { rfmData } from '../../data/mockData'

const RECENCY_LABELS = ['Muito recente', 'Recente', 'Antigo'] as const
const FREQUENCY_LABELS = ['Alta', 'Média', 'Baixa'] as const

function getHeatColor(value: number): string {
  if (value >= 80) return 'var(--chart-4)'
  if (value >= 60) return 'var(--chart-2)'
  if (value >= 40) return 'var(--chart-3)'
  if (value >= 25) return 'var(--chart-6)'
  return 'var(--chart-7)'
}

function getOpacity(value: number): number {
  return 0.3 + (value / 100) * 0.7
}

export function RFMHeatmapCard() {
  return (
    <Card>
      <CardHeader title="Heatmap RFM" subtitle="Recência × Frequência (clientes)" />

      <div className="overflow-x-auto">
        <table className="w-full text-center text-[16px]">
          <thead>
            <tr>
              <th className="pb-4 text-left text-[var(--txt-secondary)] font-normal">Recência</th>
              {FREQUENCY_LABELS.map((f) => (
                <th key={f} className="pb-4 text-[var(--txt-secondary)] font-normal">{f}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECENCY_LABELS.map((r) => (
              <tr key={r}>
                <td className="py-2 text-left text-[var(--txt-secondary)]">{r}</td>
                {FREQUENCY_LABELS.map((f) => {
                  const cell = rfmData.find((c) => c.recency === r && c.frequency === f)
                  if (!cell) return <td key={f} />
                  return (
                    <td key={f} className="p-2">
                      <div
                        className={cn(
                          'mx-auto flex h-16 w-full max-w-24 flex-col items-center justify-center rounded-[var(--radius-sm)]',
                        )}
                        style={{
                          backgroundColor: getHeatColor(cell.value),
                          opacity: getOpacity(cell.value),
                        }}
                      >
                        <span className="tabular-nums text-[20px] font-bold text-[var(--txt-main)]">
                          {cell.count}
                        </span>
                        <span className="text-[16px] text-[var(--txt-main)]">clientes</span>
                      </div>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
