import { requisicao } from './api.js'

// Últimas ações feitas no sistema. Só o administrador tem permissão.
export async function listarUltimasAcoes() {
  const resposta = await requisicao('/auditoria?tamanho=5', 'GET')
  return resposta.itens
}
