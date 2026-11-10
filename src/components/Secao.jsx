// Cartão com título. O conteúdo vai entre <Secao> e </Secao>.
// Se "vazia" for verdadeiro, avisa que ainda não há nada para mostrar.
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
