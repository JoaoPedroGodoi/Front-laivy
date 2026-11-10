import { requisicao } from './api.js'

export function listarTimes() {
  return requisicao('/times', 'GET')
}
