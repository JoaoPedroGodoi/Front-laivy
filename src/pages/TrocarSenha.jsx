import { useState } from 'react'
import { useUsuario } from '../hooks/useUsuario.js'
import Logo from '../components/Logo.jsx'
import Campo from '../components/Campo.jsx'
import Botao from '../components/Botao.jsx'

// PAGE · troca de senha · primeiro acesso
function TrocarSenha() {
  const { salvarNovaSenha } = useUsuario()
  const [novaSenha, setNovaSenha] = useState('')
  const [erro, setErro] = useState('')

  async function salvar(evento) {
    evento.preventDefault() // não recarrega a página
    try {
      await salvarNovaSenha(novaSenha)
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <div className="tela-login">
      <form className="card form-login" onSubmit={salvar}>
        <Logo />
        <p className="subtitulo">Crie uma nova senha para continuar</p>

        <Campo rotulo="Nova senha" tipo="password" valor={novaSenha} aoMudar={(e) => setNovaSenha(e.target.value)}
          placeholder="Letras e números, 8 ou mais" />

        {erro && <p className="erro">{erro}</p>}

        <Botao texto="Salvar senha" />
      </form>
    </div>
  )
}

export default TrocarSenha
