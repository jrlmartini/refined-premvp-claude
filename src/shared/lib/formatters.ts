/**
 * Formatadores numéricos pt-BR conforme designsystem.md
 *
 * Regras:
 * - Milhões: sufixo M  (ex: R$ 2,8M)
 * - Milhares: sufixo k  (ex: R$ 845,3k)
 * - < 1.000: sem sufixo (ex: 934)
 * - Percentual: 1 casa decimal + %  (ex: 17,4%)
 * - Moeda: prefixo R$  com espaço
 */

const ptBR = 'pt-BR'

/** Formata número compacto (1.234.567 → "1,2M"; 12.345 → "12,3k"; 934 → "934") */
export function formatCompact(value: number): string {
  const abs = Math.abs(value)
  const sign = value < 0 ? '-' : ''

  if (abs >= 1_000_000) {
    const n = abs / 1_000_000
    return `${sign}${n.toLocaleString(ptBR, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}M`
  }
  if (abs >= 1_000) {
    const n = abs / 1_000
    return `${sign}${n.toLocaleString(ptBR, { maximumFractionDigits: 1, minimumFractionDigits: 1 })}k`
  }
  return value.toLocaleString(ptBR, { maximumFractionDigits: 0 })
}

/** Formata moeda BRL compacta (R$ 2,8M, R$ 845,3k, R$ 934) */
export function formatBRL(value: number): string {
  return `R$ ${formatCompact(value)}`
}

/** Formata moeda BRL completa sem compactação */
export function formatBRLFull(value: number): string {
  return value.toLocaleString(ptBR, {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

/** Formata percentual (17.4 → "17,4%") */
export function formatPercent(value: number): string {
  return `${value.toLocaleString(ptBR, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
}

/** Formata número simples pt-BR */
export function formatNumber(value: number): string {
  return value.toLocaleString(ptBR)
}
