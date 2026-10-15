// Botão padrão do Laivy.
// Dentro de um formulário, ele envia o formulário.
// Fora de um formulário, ele executa a função "aoClicar".
function Botao({ texto, aoClicar }) {
  return (
    <button className="botao" onClick={aoClicar}>
      {texto}
    </button>
  )
}

export default Botao
