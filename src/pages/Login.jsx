import { useState } from 'react'
import { useUsuario } from '../hooks/useUsuario.js'
import Logo from '../components/Logo.jsx'
import Campo from '../components/Campo.jsx'
import Selecao from '../components/Selecao.jsx'
import Botao from '../components/Botao.jsx'

function Login() {
  const { entrar } = useUsuario()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [perfil, setPerfil] = useState('2')
  const [erro, setErro] = useState('')

  async function fazerLogin(evento) {
    evento.preventDefault()
    try {
      await entrar(usuario, senha, perfil)
    } catch (e) {
      setErro(e.message)
    }
  }

  return (
    <div className="tela-login">
      <form className="card form-login" onSubmit={fazerLogin}>
        <Logo />
        <p className="subtitulo">Entre para gerenciar seu time</p>

        <Campo rotulo="Login" tipo="text" valor={usuario} aoMudar={(e) => setUsuario(e.target.value)}
          placeholder="Digite seu login" />
        <Campo rotulo="Senha" tipo="password" valor={senha} aoMudar={(e) => setSenha(e.target.value)}
          placeholder="••••••••" />

        <Selecao rotulo="Perfil" valor={perfil} aoMudar={(e) => setPerfil(e.target.value)}>
          <option value="1">Administrador</option>
          <option value="2">Treinador</option>
          <option value="3">Atleta</option>
        </Selecao>

        {erro && <p className="erro">{erro}</p>}

        <Botao texto="Entrar no Sistema" />
      </form>
    </div>
  )
}

export default Login
