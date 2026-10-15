// Caixa de seleção com rótulo. As opções vão entre <Selecao> e </Selecao>.
function Selecao({ rotulo, valor, aoMudar, children }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <select value={valor} onChange={aoMudar} required>
        {children}
      </select>
    </label>
  )
}

export default Selecao
