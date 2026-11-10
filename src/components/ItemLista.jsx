// Uma linha de lista: título, detalhe embaixo e uma etiqueta à direita.
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
