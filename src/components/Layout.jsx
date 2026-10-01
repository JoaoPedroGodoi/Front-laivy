import { NavLink } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'

// Estrutura comum das telas internas: menu lateral + conteúdo.
function Layout({ titulo, children }) {
  const { usuario } = useUsuario()

  return (
    <div className="layout">
      <aside className="sidebar">
        <h2 className="marca">LAIVY</h2>
        <nav>
          <NavLink to="/inicio">Início</NavLink>
          <NavLink to="/exames">Exames</NavLink>
        </nav>
        <div className="sidebar-usuario">
          <strong>{usuario.nome}</strong>
          <small>{usuario.perfil}</small>
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
