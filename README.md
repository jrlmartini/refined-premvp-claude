# Conatus — Dashboard Executivo

Dashboard executivo responsivo para a Conatus Environmental Technologies. Projetado para uso em desktop e modo kiosk (TVs/monitores always-on).

## Stack

- **React 19** + **TypeScript**
- **Vite** (build tooling)
- **Tailwind CSS v4** (utility-first + CSS custom properties como tokens)
- **Recharts** (visualização de dados)
- **Lucide React** (iconografia)
- **ESLint** (linting)

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Lint
npm run lint

# Preview do build
npm run preview
```

## Estrutura de pastas

```
src/
├── app/                          # Bootstrap / App shell
│   └── App.tsx
├── layout/                       # Layout principal
│   ├── Header.tsx                # Header com busca, notificações, kiosk
│   ├── Sidebar.tsx               # Sidebar fixa (desktop) / drawer (mobile)
│   └── MainLayout.tsx            # Composição do layout
├── features/
│   └── dashboard/
│       ├── DashboardPage.tsx     # Página principal com grid de cards
│       ├── components/cards/     # Cards individuais do dashboard
│       │   ├── RevenueCard.tsx
│       │   ├── TopClientsCard.tsx
│       │   ├── CashPositionCard.tsx
│       │   ├── CashFlowCard.tsx
│       │   ├── EbitdaCard.tsx
│       │   ├── RFMHeatmapCard.tsx
│       │   ├── ContractsCard.tsx
│       │   ├── WaterMetricsCard.tsx
│       │   ├── AgingCard.tsx
│       │   └── ShowcaseCard.tsx
│       ├── hooks/
│       │   └── useKioskMode.ts   # Hook de fullscreen + atalho Ctrl+Shift+K
│       └── data/
│           └── mockData.ts       # Dados mock centralizados
└── shared/
    ├── ui/                       # Componentes UI reutilizáveis
    │   ├── Card.tsx
    │   ├── Button.tsx
    │   ├── Badge.tsx
    │   └── ChartTooltip.tsx
    ├── lib/                      # Utilitários
    │   ├── cn.ts                 # Class merge utility
    │   ├── formatters.ts         # Formatadores pt-BR (BRL, %, compacto)
    │   └── chartStyles.ts        # Tokens de cores e estilos de gráficos
    └── styles/
        ├── tokens.css            # CSS custom properties (design tokens)
        └── globals.css           # Reset + estilos globais
```

## Decisões arquiteturais

1. **Tokens CSS como custom properties** — Todas as cores, radii e fontes definidas em `:root` seguindo estritamente o `designsystem.md`. Nenhum valor hardcoded.

2. **Feature-based structure** — Cards agrupados por feature (`dashboard/components/cards/`) em vez de por tipo genérico. Cada card é um componente isolado sem dependência lateral.

3. **Dados mock centralizados** — Um único `mockData.ts` com tipos TypeScript explícitos. Facilita futura troca por API real.

4. **Formatadores centralizados** — `formatBRL`, `formatCompact`, `formatPercent` implementam as regras do design system (M/k/pt-BR). Usados em todos os cards e tooltips.

5. **Estilos de gráficos compartilhados** — `chartStyles.ts` centraliza eixos, grid e paleta de cores para consistência entre todos os Recharts.

6. **Kiosk mode** — Hook dedicado com Fullscreen API, atalho Ctrl+Shift+K e listener de `fullscreenchange`. Em kiosk, sidebar e footer são ocultados.

7. **Tailwind v4 sem config customizada** — Tokens expressos via CSS custom properties + classes utilitárias com `var()`. Sem necessidade de `tailwind.config.js`.

## Deploy

O projeto inclui um workflow GitHub Actions (`.github/workflows/deploy.yml`) que faz build e deploy automático no GitHub Pages a cada push na branch `main`.

## Próximos passos para produção

- **API real** — Substituir `mockData.ts` por chamadas a APIs REST/GraphQL com React Query ou SWR
- **Testes** — Adicionar Vitest + Testing Library para testes unitários e de integração
- **Autenticação** — Integrar com SSO/OAuth (Azure AD, Keycloak, etc.)
- **i18n** — Internacionalização com react-intl ou i18next caso necessário
- **Filtros** — Implementar filtros por período, unidade e linha de negócio
- **WebSocket / SSE** — Dados em tempo real para modo kiosk
- **Code splitting** — Lazy loading dos cards para otimizar bundle size
- **PWA** — Service worker para funcionamento offline em kiosk
