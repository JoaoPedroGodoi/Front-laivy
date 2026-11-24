import { requisicao } from './api.js'

// SERVICE · avaliações do atleta
export function listarDesempenhosDoUsuario(id) {
  return requisicao('/desempenhos/usuario/' + id, 'GET')
}
