import { Navigate } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import DashboardAdmin from './DashboardAdmin.jsx'
import DashboardAtleta from './DashboardAtleta.jsx'

// Escolhe qual dashboard mostrar de acordo com o perfil de quem entrou.
function Dashboard() {
  const { usuario } = useUsuario()

  // Tipo 0 é o usuário vazio: ninguém fez login
  if (usuario.tipo_usuario === 0) {
    return <Navigate to="/login" />
  }

  // Tipo 3 é atleta
  if (usuario.tipo_usuario === 3) {
    return <DashboardAtleta />
  }

  // Tipo 1 (administrador) e tipo 2 (treinador)
  return <DashboardAdmin />
}

export default Dashboard
