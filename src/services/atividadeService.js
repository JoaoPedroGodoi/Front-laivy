import { requisicao } from './api.js'

// SERVICE · atividades · 5 próximas
export async function listarProximasAtividades() {
  const atividades = await requisicao('/atividades', 'GET')
  const agora = new Date()

  // 1 = ativa · 0 = cancelada · 2 = finalizada
  const futuras = atividades.filter((atividade) => {
    return atividade.status_atividade === 1 && new Date(atividade.data_atividade) >= agora
  })

  // ordena: mais perto primeiro
  futuras.sort((a, b) => new Date(a.data_atividade) - new Date(b.data_atividade))

  return futuras.slice(0, 5)
}
