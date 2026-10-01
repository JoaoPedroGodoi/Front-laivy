import { useState } from 'react'
import { useUsuario } from '../hooks/useUsuario.js'
import Campo from '../components/Campo.jsx'
import Botao from '../components/Botao.jsx'

function Login() {
  const { entrar } = useUsuario()
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [perfil, setPerfil] = useState('Treinador')

  function fazerLogin(evento) {
    evento.preventDefault()
    entrar({ nome: usuario, perfil })
  }

  return (
    <div className="tela-login">
      <form className="card form-login" onSubmit={fazerLogin}>
        <h2 className="marca">LAIVY</h2>
        <p className="subtitulo">Entre para gerenciar seu time</p>

        <Campo rotulo="Login" tipo="text" valor={usuario} aoMudar={(e) => setUsuario(e.target.value)}
          placeholder="Digite seu login" />
        <Campo rotulo="Senha" tipo="password" valor={senha} aoMudar={(e) => setSenha(e.target.value)}
          placeholder="••••••••" />

        <label className="campo">
          <span>Perfil</span>
          <select value={perfil} onChange={(e) => setPerfil(e.target.value)}>
            <option>Administrador</option>
            <option>Treinador</option>
            <option>Atleta</option>
          </select>
        </label>

        <Botao texto="Entrar no Sistema" />
      </form>
    </div>
  )
}

export default Login
