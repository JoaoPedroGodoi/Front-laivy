// Funções que deixam as datas do backend no formato brasileiro.

// Recebe '2026-11-05' e devolve '05/11/2026'
export function formatarData(data) {
  // Alguns exames antigos não têm data
  if (data === null) {
    return 'sem data'
  }

  // O 'T00:00' evita que o navegador mostre o dia anterior por causa do fuso horário
  return new Date(data + 'T00:00').toLocaleDateString('pt-BR')
}

// Recebe '2026-11-05T14:30:00' e devolve '05/11/2026 14:30'
export function formatarDataHora(dataHora) {
  const data = new Date(dataHora)
  return data.toLocaleDateString('pt-BR') + ' ' + data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}
