import { useUsuario } from '../hooks/useUsuario.js'
import { useDashboardAtleta } from '../hooks/useDashboardAtleta.js'
import { formatarData } from '../utils/datas.js'
import Layout from '../components/Layout.jsx'
import CardInfo from '../components/CardInfo.jsx'
import Secao from '../components/Secao.jsx'
import ItemLista from '../components/ItemLista.jsx'
import ProximasAtividades from '../components/ProximasAtividades.jsx'

function DashboardAtleta() {
  const { usuario } = useUsuario()
  const { exames, desempenhos, atividades, erro } = useDashboardAtleta(usuario.id_usuario)

  return (
    <Layout titulo="Meu dashboard">
      <p className="subtitulo">Olá, {usuario.nome_usuario}! Acompanhe seus dados aqui.</p>

      {erro && <p className="erro">{erro}</p>}

      <div className="grade-info">
        <CardInfo titulo="Meus exames" valor={exames.length} />
        <CardInfo titulo="Minhas avaliações" valor={desempenhos.length} />
        <CardInfo titulo="Próximas atividades" valor={atividades.length} />
      </div>

      <div className="grade-secoes">
        <ProximasAtividades atividades={atividades} />

        <Secao titulo="Meus exames" vazia={exames.length === 0}>
          {exames.map((exame) => {
            let situacao = 'Inapto'
            if (exame.status_usuario === 1) {
              situacao = 'Apto'
            }

            return (
              <ItemLista
                key={exame.id_exame}
                titulo={'Peso: ' + exame.peso_usuario + ' kg | Altura: ' + exame.altura_usuario + ' m'}
                detalhe={'Válido até ' + formatarData(exame.data_fim_exame)}
                etiqueta={situacao}
              />
            )
          })}
        </Secao>

        <Secao titulo="Minhas avaliações" vazia={desempenhos.length === 0}>
          {desempenhos.map((desempenho) => (
            <ItemLista
              key={desempenho.id_desempenho}
              titulo={'Salto vertical: ' + desempenho.salto_vertical + ' | Salto horizontal: ' + desempenho.salto_horizontal}
              detalhe={formatarData(desempenho.data_desempenho)}
              etiqueta={desempenho.pontuacao + ' pts'}
            />
          ))}
        </Secao>
      </div>
    </Layout>
  )
}

export default DashboardAtleta
