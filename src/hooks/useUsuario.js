import { useNavigate } from 'react-router-dom'
import { login, trocarSenha } from '../services/usuarioService.js'
import { loginComGoogle } from '../services/firebase.js'


let usuarioLogado = { nome_usuario: '', tipo_usuario: 0 }

// Hook que faz o login e devolve o usuário logado.
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

    // O backend não conhece contas do Google, então o perfil fica 0 (sem perfil no Laivy)
    usuarioLogado = {
      nome_usuario: contaGoogle.displayName,
      foto: contaGoogle.photoURL,
      tipo_usuario: 0,
    }
    navigate('/inicio')
  }

  return { usuario: usuarioLogado, entrar, salvarNovaSenha, entrarComGoogle }
}
