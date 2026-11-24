import { requisicao } from './api.js'

// SERVICE · exames · GET, POST, DELETE

export function listarExames() {
  return requisicao('/exames', 'GET')
}

export function cadastrarExame(exame) {
  return requisicao('/exames', 'POST', exame)
}

export function excluirExame(id) {
  return requisicao('/exames/' + id, 'DELETE')
}
