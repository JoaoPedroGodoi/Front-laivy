
export async function requisicao(caminho, metodo, dados) {
  const resposta = await fetch('/api' + caminho, {
    method: metodo,
    credentials: 'include', // envia o cookie de login junto
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  })

  // Erros 500 ou maiores: o backend está desligado ou deu um problema interno
  if (resposta.status >= 500) {
    throw new Error('Não foi possível falar com o servidor.')
  }

  // Se o backend respondeu com outro erro, mostra a mensagem que ele mandou
  if (!resposta.ok) {
    const erro = await resposta.json()
    throw new Error(erro.erro)
  }

  // O DELETE não devolve nada, então só os outros métodos leem a resposta
  if (metodo !== 'DELETE') {
    return resposta.json()
  }
}
