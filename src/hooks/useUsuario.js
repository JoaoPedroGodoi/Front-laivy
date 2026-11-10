import { useNavigate } from 'react-router-dom'
import { login, trocarSenha } from '../services/usuarioService.js'
import { loginComGoogle } from '../services/firebase.js'

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

    // Com senha temporária, o backend só libera o sistema depois da troca
    if (dadosUsuario.primeiro_login === 1) {
      navigate('/trocar-senha')
    } else {
      navigate('/inicio')
    }
  }

  async function salvarNovaSenha(novaSenha) {
    const dadosUsuario = await trocarSenha(usuario.id_usuario, novaSenha)
    localStorage.setItem('usuario', JSON.stringify(dadosUsuario))
    navigate('/inicio')
  }

  async function entrarComGoogle() {
    const contaGoogle = await loginComGoogle()

    // O backend não conhece contas do Google, então o perfil fica 0 (sem perfil no Laivy)
    const dadosUsuario = {
      nome_usuario: contaGoogle.displayName,
      foto: contaGoogle.photoURL,
      tipo_usuario: 0,
    }
    localStorage.setItem('usuario', JSON.stringify(dadosUsuario))
    navigate('/inicio')
  }

  return { usuario, entrar, salvarNovaSenha, entrarComGoogle }
}
