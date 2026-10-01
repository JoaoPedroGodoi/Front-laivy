import { useNavigate } from 'react-router-dom'

// Hook que guarda/lê o usuário logado no localStorage.
export function useUsuario() {
  const navigate = useNavigate()
  const usuario = JSON.parse(localStorage.getItem('usuario')) || { nome: '', perfil: '' }

  function entrar(dadosUsuario) {
    localStorage.setItem('usuario', JSON.stringify(dadosUsuario))
    navigate('/inicio')
  }

  return { usuario, entrar }
}
