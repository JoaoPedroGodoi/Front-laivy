import { Link } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import { useExames } from '../hooks/useExames.js'
import Layout from '../components/Layout.jsx'
import CardInfo from '../components/CardInfo.jsx'

function Home() {
  const { usuario } = useUsuario()
  const { exames } = useExames()
  const aptos = exames.filter((exame) => exame.status_usuario === 1).length

  return (
    <Layout titulo="Início">
      <p className="subtitulo">Bem-vindo(a), {usuario.nome_usuario}!</p>

      <div className="grade-info">
        <CardInfo titulo="Exames cadastrados" valor={exames.length} />
        <CardInfo titulo="Atletas aptos" valor={aptos} />
        <CardInfo titulo="Atletas inaptos" valor={exames.length - aptos} />
      </div>

      <Link className="botao link-botao" to="/exames">Ver exames</Link>
    </Layout>
  )
}

export default Home
