// COMPONENTE · campo com rótulo · step="any" = aceita decimal
function Campo({ rotulo, tipo, valor, aoMudar, placeholder }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <input type={tipo} value={valor} onChange={aoMudar} placeholder={placeholder} step="any" required />
    </label>
  )
}

export default Campo
