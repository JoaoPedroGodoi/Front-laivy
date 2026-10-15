import { NavLink } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import Logo from './Logo.jsx'

const PERFIS = { 1: 'Administrador', 2: 'Treinador', 3: 'Atleta' }

// Estrutura comum das telas internas: menu lateral + conteúdo.
function Layout({ titulo, children }) {
  const { usuario } = useUsuario()

  return (
    <div className="layout">
      <aside className="sidebar">
        <Logo />
        <nav>
          <NavLink to="/inicio">Início</NavLink>
          <NavLink to="/exames">Exames</NavLink>
        </nav>
        <div className="sidebar-usuario">
          <strong>{usuario.nome_usuario}</strong>
          <small>{PERFIS[usuario.tipo_usuario]}</small>
        </div>
      </aside>
      <main className="conteudo">
        <h1>{titulo}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
