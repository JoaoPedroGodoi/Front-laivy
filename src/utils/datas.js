// UTIL · datas no formato brasileiro

// '2026-11-05' → '05/11/2026'
export function formatarData(data) {
  // sem data → "sem data"
  if (!data) {
    return 'sem data'
  }

  // 'T00:00' → evita erro de fuso
  return new Date(data + 'T00:00').toLocaleDateString('pt-BR')
}

// '2026-11-05T14:30' → '05/11/2026 14:30'
export function formatarDataHora(dataHora) {
  if (!dataHora) {
    return 'sem data'
  }

  const data = new Date(dataHora)
  return data.toLocaleDateString('pt-BR') + ' ' + data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}
