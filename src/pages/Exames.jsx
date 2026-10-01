import { listarExames } from '../services/exameService.js'
import Layout from '../components/Layout.jsx'
import CardExame from '../components/CardExame.jsx'

function Exames() {
  const exames = listarExames()

  return (
    <Layout titulo="Exames">
      <div className="grade-exames">
        {exames.map((exame) => (
          <CardExame key={exame.id_exame} exame={exame} />
        ))}
      </div>
    </Layout>
  )
}

export default Exames
