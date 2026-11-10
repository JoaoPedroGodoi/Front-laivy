import { requisicao } from './api.js'

// Busca as atividades e devolve só as 5 próximas que ainda vão acontecer.
export async function listarProximasAtividades() {
  const atividades = await requisicao('/atividades', 'GET')
  const agora = new Date()

  // status_atividade 1 = ativa (0 = cancelada, 2 = finalizada)
  const futuras = atividades.filter((atividade) => {
    return atividade.status_atividade === 1 && new Date(atividade.data_atividade) >= agora
  })

  // Ordena da data mais perto para a mais longe
  futuras.sort((a, b) => new Date(a.data_atividade) - new Date(b.data_atividade))

  return futuras.slice(0, 5)
}
