import { requisicao } from './api.js'

export function listarExames() {
  return requisicao('/exames', 'GET')
}

export function cadastrarExame(exame) {
  return requisicao('/exames', 'POST', exame)
}

export function excluirExame(id) {
  return requisicao('/exames/' + id, 'DELETE')
}
