// Cartão de número (ex.: "Exames cadastrados: 4").
function CardInfo({ titulo, valor }) {
  return (
    <div className="card card-info">
      <span className="card-info-valor">{valor}</span>
      <span className="card-info-titulo">{titulo}</span>
    </div>
  )
}

export default CardInfo
