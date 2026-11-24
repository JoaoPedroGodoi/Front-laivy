import { Navigate } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import DashboardAdmin from './DashboardAdmin.jsx'
import DashboardAtleta from './DashboardAtleta.jsx'

// PAGE · escolhe o dashboard pelo perfil
function Dashboard() {
  const { usuario } = useUsuario()

  // tipo 0 → ninguém logado → login
  if (usuario.tipo_usuario === 0) {
    return <Navigate to="/login" />
  }

  // tipo 3 → atleta
  if (usuario.tipo_usuario === 3) {
    return <DashboardAtleta />
  }

  // tipo 1, 2 e 4 → admin / treinador / preparador
  return <DashboardAdmin />
}

export default Dashboard
