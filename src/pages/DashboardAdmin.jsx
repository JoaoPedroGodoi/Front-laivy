import { useUsuario } from '../hooks/useUsuario.js'
import { useDashboardAdmin } from '../hooks/useDashboardAdmin.js'
import { formatarDataHora } from '../utils/datas.js'
import Layout from '../components/Layout.jsx'
import CardInfo from '../components/CardInfo.jsx'
import Secao from '../components/Secao.jsx'
import ItemLista from '../components/ItemLista.jsx'
import ProximasAtividades from '../components/ProximasAtividades.jsx'

function DashboardAdmin() {
  const { usuario } = useUsuario()
  const ehAdministrador = usuario.tipo_usuario === 1
  const { usuarios, times, exames, atividades, acoes, erro } = useDashboardAdmin(ehAdministrador)

  // Atletas são os usuários do tipo 3
  const atletas = usuarios.filter((pessoa) => pessoa.tipo_usuario === 3)

  // Inaptos são os exames com status 0
  const inaptos = exames.filter((exame) => exame.status_usuario === 0)

  return (
    <Layout titulo="Dashboard">
      <p className="subtitulo">Visão geral do sistema</p>

      {erro && <p className="erro">{erro}</p>}

      <div className="grade-info">
        <CardInfo titulo="Usuários" valor={usuarios.length} />
        <CardInfo titulo="Atletas" valor={atletas.length} />
        <CardInfo titulo="Times" valor={times.length} />
        <CardInfo titulo="Exames" valor={exames.length} />
        <CardInfo titulo="Exames inaptos" valor={inaptos.length} />
      </div>

      <div className="grade-secoes">
        <ProximasAtividades atividades={atividades} />

        {ehAdministrador && (
          <Secao titulo="Últimas ações no sistema" vazia={acoes.length === 0}>
            {acoes.map((acao) => (
              <ItemLista
                key={acao.id_log}
                titulo={acao.descricao}
                detalhe={acao.nome_usuario + ' - ' + formatarDataHora(acao.data_hora)}
                etiqueta={acao.acao}
              />
            ))}
          </Secao>
        )}
      </div>
    </Layout>
  )
}

export default DashboardAdmin
