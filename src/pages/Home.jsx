import { Link } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import { listarExames } from '../services/exameService.js'
import Layout from '../components/Layout.jsx'
import CardInfo from '../components/CardInfo.jsx'

function Home() {
  const { usuario } = useUsuario()
  const exames = listarExames()

  return (
    <Layout titulo="Início">
      <p className="subtitulo">Bem-vindo(a), {usuario.nome}!</p>

      <div className="grade-info">
        <CardInfo titulo="Exames cadastrados" valor={exames.length} />
      </div>

      <Link className="botao link-botao" to="/exames">Ver exames</Link>
    </Layout>
  )
}

export default Home
