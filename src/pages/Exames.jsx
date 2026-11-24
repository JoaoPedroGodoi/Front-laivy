import { useUsuario } from '../hooks/useUsuario.js'
import { useExames } from '../hooks/useExames.js'
import Layout from '../components/Layout.jsx'
import FormExame from '../components/FormExame.jsx'
import CardExame from '../components/CardExame.jsx'

// PAGE · funcionalidade principal · exames
function Exames() {
  const { usuario } = useUsuario()
  const { exames, erro, adicionar, remover } = useExames()

  // atleta → só vê · admin/treinador → cadastra e exclui
  const podeEditar = usuario.tipo_usuario !== 3

  return (
    <Layout titulo="Exames">
      {erro && <p className="erro">{erro}</p>}

      {podeEditar && <FormExame aoSalvar={adicionar} />}

      <div className="grade-exames">
        {exames.map((exame) => (
          <CardExame key={exame.id_exame} exame={exame} podeExcluir={podeEditar} aoExcluir={remover} />
        ))}
      </div>
    </Layout>
  )
}

export default Exames
