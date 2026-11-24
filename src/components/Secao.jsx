// COMPONENTE · card com título · children · vazia → "Nada para mostrar"
function Secao({ titulo, vazia, children }) {
  return (
    <section className="card secao">
      <h2>{titulo}</h2>
      {vazia && <p className="secao-vazia">Nada para mostrar ainda.</p>}
      {children}
    </section>
  )
}

export default Secao
