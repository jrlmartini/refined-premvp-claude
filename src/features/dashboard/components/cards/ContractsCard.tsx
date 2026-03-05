import { FileText, AlertTriangle, XCircle, CheckCircle } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardHeader, Badge } from '@/shared/ui'
import { ChartTooltip } from '@/shared/ui/ChartTooltip'
import { formatBRL, CHART_COLORS, axisStyle, gridStyle } from '@/shared/lib'
import { contractsData } from '../../data/mockData'

export function ContractsCard() {
  const { total, active, expiringSoon, expired, pipeline } = contractsData

  return (
    <Card>
      <CardHeader title="Contratos" subtitle="Visão geral e pipeline" />

      {/* KPI tiles */}
      <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <MiniKPI icon={FileText} label="Total" value={total} variant="default" />
        <MiniKPI icon={CheckCircle} label="Ativos" value={active} variant="success" />
        <MiniKPI icon={AlertTriangle} label="A vencer" value={expiringSoon} variant="warning" />
        <MiniKPI icon={XCircle} label="Vencidos" value={expired} variant="danger" />
      </div>

      {/* Pipeline chart */}
      <p className="mb-2 text-[14px] text-[var(--txt-secondary)]">Pipeline por estágio</p>
      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={pipeline} layout="vertical" barSize={16}>
            <CartesianGrid {...gridStyle} horizontal={false} />
            <XAxis type="number" {...axisStyle} tickFormatter={(v: number) => formatBRL(v)} />
            <YAxis type="category" dataKey="stage" {...axisStyle} width={80} />
            <Tooltip content={<ChartTooltip formatValue={(v) => formatBRL(v)} />} />
            <Bar dataKey="value" name="Valor" fill={CHART_COLORS.chart3} radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

function MiniKPI({
  icon: Icon,
  label,
  value,
  variant,
}: {
  icon: typeof FileText
  label: string
  value: number
  variant: 'default' | 'success' | 'warning' | 'danger'
}) {
  const classMap = {
    default: 'text-[var(--txt-main)]',
    success: 'text-[var(--st-success)]',
    warning: 'text-[var(--st-warning)]',
    danger: 'text-[var(--st-danger)]',
  }

  return (
    <div className="rounded-[var(--radius-sm)] border-[var(--border-default)] border-[var(--str-default)] bg-[var(--bg-main)] p-4">
      <div className="mb-2 flex items-center gap-2">
        <Icon size={14} className={classMap[variant]} />
        <span className="text-[12px] text-[var(--txt-secondary)]">{label}</span>
      </div>
      <p className={`tabular-nums text-[20px] font-semibold ${classMap[variant]}`}>
        {value}
      </p>
      <Badge variant={variant} className="mt-2">
        {label}
      </Badge>
    </div>
  )
}
