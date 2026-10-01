// Cartão de um exame: nome do atleta e seus dados.
function CardExame({ exame }) {
  return (
    <div className="card card-exame">
      <strong>{exame.nome_atleta}</strong>
      <p>Peso: {exame.peso} kg</p>
      <p>Altura: {exame.altura} m</p>
      <p>Gordura: {exame.gordura}%</p>
      <p>Situação: {exame.situacao}</p>
    </div>
  )
}

export default CardExame
