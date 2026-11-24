import { useNavigate } from 'react-router-dom'
import { login, loginGoogle, trocarSenha } from '../services/usuarioService.js'
import { loginComGoogle } from '../services/firebase.js'

// usuário logado · memória · F5 = sai · tipo 0 = ninguém
let usuarioLogado = { nome_usuario: '', tipo_usuario: 0 }

// HOOK · login normal, Google, troca de senha
export function useUsuario() {
  const navigate = useNavigate()

  async function entrar(loginDigitado, senha, perfil) {
    usuarioLogado = await login(loginDigitado, senha, perfil)

    // senha temporária → trocar senha
    if (usuarioLogado.primeiro_login === 1) {
      navigate('/trocar-senha')
    } else {
      navigate('/inicio')
    }
  }

  async function salvarNovaSenha(novaSenha) {
    usuarioLogado = await trocarSenha(usuarioLogado.id_usuario, novaSenha)
    navigate('/inicio')
  }

  async function entrarComGoogle() {
    const contaGoogle = await loginComGoogle()

    // token Google → backend → usuário pelo e-mail
    const idToken = await contaGoogle.getIdToken()
    usuarioLogado = await loginGoogle(idToken)
    usuarioLogado.foto = contaGoogle.photoURL
    navigate('/inicio')
  }

  return { usuario: usuarioLogado, entrar, salvarNovaSenha, entrarComGoogle }
}
