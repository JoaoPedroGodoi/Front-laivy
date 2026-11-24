// COMPONENTE · linha de lista · título, detalhe, etiqueta
function ItemLista({ titulo, detalhe, etiqueta }) {
  return (
    <div className="item-lista">
      <div>
        <strong>{titulo}</strong>
        <small>{detalhe}</small>
      </div>
      <span className="etiqueta">{etiqueta}</span>
    </div>
  )
}

export default ItemLista
