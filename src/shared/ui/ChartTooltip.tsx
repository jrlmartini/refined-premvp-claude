interface Payload {
  name?: string | number
  value?: string | number
  color?: string
}

interface ChartTooltipProps {
  active?: boolean
  payload?: Payload[]
  label?: string | number
  formatValue?: (value: number, name: string) => string
}

export function ChartTooltip({ active, payload, label, formatValue }: ChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-[var(--radius-sm)] border-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-card)] px-4 py-2 shadow-sm">
      {label != null && (
        <p className="mb-2 text-[var(--text-body)] text-[var(--txt-secondary)]">{String(label)}</p>
      )}
      {payload.map((p) => {
        const name = String(p.name ?? '')
        const value = formatValue ? formatValue(Number(p.value), name) : String(p.value)
        const color = String(p.color ?? 'var(--chart-1)')
        return (
          <div key={name} className="flex items-center gap-2 text-[var(--text-body)]">
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-[var(--txt-secondary)]">{name}:</span>
            <span className="tabular-nums font-semibold text-[var(--txt-main)]">{value}</span>
          </div>
        )
      })}
    </div>
  )
}
