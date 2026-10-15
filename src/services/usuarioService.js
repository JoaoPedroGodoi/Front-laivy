import { requisicao } from './api.js'

export async function login(login_usuario, senha_usuario, tipo_usuario) {
  const dados = await requisicao('/usuarios/login', 'POST', { login_usuario, senha_usuario, tipo_usuario })
  return dados.usuario
}

// Busca todos os usuários e devolve só os atletas (tipo 3)
export async function listarAtletas() {
  const usuarios = await requisicao('/usuarios', 'GET')
  return usuarios.filter((usuario) => usuario.tipo_usuario === 3)
}
