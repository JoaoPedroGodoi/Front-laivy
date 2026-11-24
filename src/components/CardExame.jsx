import Botao from './Botao.jsx'

// Cartão de um exame: nome do atleta, seus dados e o botão de excluir.
function CardExame({ exame, podeExcluir, aoExcluir }) {
  let situacao = 'Inapto'
  if (exame.status_usuario === 1) {
    situacao = 'Apto'
  }

  // Se o atleta foi apagado, o exame chega sem usuário
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
