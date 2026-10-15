// Função base usada por todos os services para falar com o backend.
// caminho: endereço no backend (ex.: '/exames')
// metodo:  'GET' para buscar, 'POST' para cadastrar, 'DELETE' para excluir
// dados:   o que vai ser enviado (só no POST)
export async function requisicao(caminho, metodo, dados) {
  const resposta = await fetch('/api' + caminho, {
    method: metodo,
    credentials: 'include', // envia o cookie de login junto
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })

  // Se o backend respondeu com erro, mostra a mensagem que ele mandou
  if (!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.erro)
  }

  // O DELETE não devolve nada, então só os outros métodos leem a resposta
  if (metodo !== 'DELETE') {
    return resposta.json()
  }
}
