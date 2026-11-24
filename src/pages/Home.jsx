import { Link } from 'react-router-dom'
import { useUsuario } from '../hooks/useUsuario.js'
import { useExames } from '../hooks/useExames.js'
import Layout from '../components/Layout.jsx'
import CardInfo from '../components/CardInfo.jsx'

// PAGE: tela inicial. Mostra boas-vindas e um resumo dos exames.
function Home() {
  const { usuario } = useUsuario()
  const { exames, erro } = useExames()
  const aptos = exames.filter((exame) => exame.status_usuario === 1).length

  return (
    <Layout titulo="Início">
      {usuario.foto && <img className="foto-usuario" src={usuario.foto} alt="Foto do usuário" referrerPolicy="no-referrer" />}
      <p className="subtitulo">Bem-vindo(a), {usuario.nome_usuario}!</p>

      {erro && <p className="erro">{erro}</p>}

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
