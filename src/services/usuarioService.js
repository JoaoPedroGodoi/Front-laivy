import { requisicao } from './api.js'

// SERVICE: chamadas ao backend sobre usuários e login.

export async function login(login_usuario, senha_usuario, tipo_usuario) {
  const dados = await requisicao('/usuarios/login', 'POST', { login_usuario, senha_usuario, tipo_usuario })
  return dados.usuario
}

// Envia o token do Google para o backend, que procura o usuário pelo e-mail
export async function loginGoogle(id_token) {
  const dados = await requisicao('/usuarios/login-google', 'POST', { id_token })
  return dados.usuario
}

export function listarUsuarios() {
  return requisicao('/usuarios', 'GET')
}

// Busca todos os usuários e devolve só os atletas (tipo 3)
export async function listarAtletas() {
  const usuarios = await listarUsuarios()
  return usuarios.filter((usuario) => usuario.tipo_usuario === 3)
}

// Troca a senha temporária por uma senha nova
export async function trocarSenha(id, novaSenha) {
  const dados = await requisicao('/usuarios/' + id + '/senha', 'PUT', { senha_usuario: novaSenha })
  return dados.usuario
}
