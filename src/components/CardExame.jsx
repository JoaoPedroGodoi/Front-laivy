import Botao from './Botao.jsx'

// COMPONENTE · card do exame · atleta, peso, altura, situação, excluir
function CardExame({ exame, podeExcluir, aoExcluir }) {
  let situacao = 'Inapto'
  if (exame.status_usuario === 1) {
    situacao = 'Apto'
  }

  // sem atleta → "Atleta removido" (não quebra)
  let nomeAtleta = 'Atleta removido'
  if (exame.usuario) {
    nomeAtleta = exame.usuario.nome_usuario
  }

  return (
    <div className="card card-exame">
      <strong>{nomeAtleta}</strong>
      <p>Peso: {exame.peso_usuario} kg</p>
      <p>Altura: {exame.altura_usuario} m</p>
      <p>Situação: {situacao}</p>

      {podeExcluir && <Botao texto="Excluir" aoClicar={() => aoExcluir(exame.id_exame)} />}
    </div>
  )
}

export default CardExame
