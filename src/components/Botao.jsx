// Botão padrão do Laivy.
// Dentro de um formulário, ele envia o formulário.
// Fora de um formulário, ele executa a função "aoClicar".
// Com tipo="button", ele não envia o formulário, só executa "aoClicar".
// "icone" é opcional: uma imagem que aparece antes do texto.
function Botao({ texto, aoClicar, tipo, icone }) {
  return (
    <button className="botao" type={tipo} onClick={aoClicar}>
      {icone && <img src={icone} alt="" />}
      {texto}
    </button>
  )
}

export default Botao
