// Campo de formulário com rótulo.
function Campo({ rotulo, tipo, valor, aoMudar, placeholder }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <input type={tipo} value={valor} onChange={aoMudar} placeholder={placeholder} required />
    </label>
  )
}

export default Campo
