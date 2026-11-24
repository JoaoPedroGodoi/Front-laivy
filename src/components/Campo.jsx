// COMPONENTE: campo de formulário com rótulo.
// step="any" deixa digitar números com vírgula (ex.: altura 1,80).
function Campo({ rotulo, tipo, valor, aoMudar, placeholder }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      <input type={tipo} value={valor} onChange={aoMudar} placeholder={placeholder} step="any" required />
    </label>
  )
}

export default Campo
