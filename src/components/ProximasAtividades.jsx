import { formatarDataHora } from '../utils/datas.js'
import Secao from './Secao.jsx'
import ItemLista from './ItemLista.jsx'

const TIPOS = { 1: 'Treino', 2: 'Jogo', 3: 'Evento', 4: 'Competição' }

// Lista das próximas atividades. Usada nos dois dashboards.
function ProximasAtividades({ atividades }) {
  return (
    <Secao titulo="Próximas atividades" vazia={atividades.length === 0}>
      {atividades.map((atividade) => (
        <ItemLista
          key={atividade.id_atividade}
          titulo={atividade.nome_atividade}
          detalhe={formatarDataHora(atividade.data_atividade)}
          etiqueta={TIPOS[atividade.tipo_atividade]}
        />
      ))}
    </Secao>
  )
}

export default ProximasAtividades
