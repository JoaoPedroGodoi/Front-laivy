import { useNavigate } from 'react-router-dom'
import { login } from '../services/usuarioService.js'

// Hook que faz o login e guarda o usuário logado no navegador (localStorage).
export function useUsuario() {
  const navigate = useNavigate()

  // Lê o usuário salvo. Se ninguém fez login ainda, usa um usuário vazio.
  let usuario = JSON.parse(localStorage.getItem('usuario'))
  if (usuario === null) {
    usuario = { nome_usuario: '', tipo_usuario: 0 }
  }

  async function entrar(loginDigitado, senha, perfil) {
    const dadosUsuario = await login(loginDigitado, senha, perfil)
    localStorage.setItem('usuario', JSON.stringify(dadosUsuario))
    navigate('/inicio')
  }

  return { usuario, entrar }
}
