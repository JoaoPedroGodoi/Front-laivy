import { useNavigate } from 'react-router-dom'
import { login, loginGoogle, trocarSenha } from '../services/usuarioService.js'
import { loginComGoogle } from '../services/firebase.js'

// Usuário logado, guardado na memória e compartilhado por todas as telas.
// Ao recarregar a página (F5) ele volta vazio e é preciso entrar de novo.
// tipo_usuario 0 = ninguém logado.
let usuarioLogado = { nome_usuario: '', tipo_usuario: 0 }

// HOOK: faz o login (normal ou Google) e devolve o usuário logado.
export function useUsuario() {
  const navigate = useNavigate()

  async function entrar(loginDigitado, senha, perfil) {
    usuarioLogado = await login(loginDigitado, senha, perfil)

    // Com senha temporária, o backend só libera o sistema depois da troca
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

    // O backend confere o token e devolve o usuário do Laivy com o mesmo e-mail
    const idToken = await contaGoogle.getIdToken()
    usuarioLogado = await loginGoogle(idToken)
    usuarioLogado.foto = contaGoogle.photoURL
    navigate('/inicio')
  }

  return { usuario: usuarioLogado, entrar, salvarNovaSenha, entrarComGoogle }
}
