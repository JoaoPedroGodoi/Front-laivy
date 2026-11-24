import { requisicao } from './api.js'

// SERVICE · auditoria · últimas ações · só admin
export async function listarUltimasAcoes() {
  const resposta = await requisicao('/auditoria?tamanho=5', 'GET')
  return resposta.itens
}
