import { requisicao } from './api.js'

// Avaliações de um atleta específico
export function listarDesempenhosDoUsuario(id) {
  return requisicao('/desempenhos/usuario/' + id, 'GET')
}
