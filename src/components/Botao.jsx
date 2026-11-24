// COMPONENTE · botão reutilizável · props: texto, aoClicar, tipo, icone
function Botao({ texto, aoClicar, tipo, icone }) {
  return (
    <button className="botao" type={tipo} onClick={aoClicar}>
      {icone && <img src={icone} alt="" />}
      {texto}
    </button>
  )
}

export default Botao
