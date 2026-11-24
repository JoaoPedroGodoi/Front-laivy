// SERVICE: a única função que conversa com o backend.
// Todos os outros services usam esta função, então os erros são tratados em um lugar só.
export async function requisicao(caminho, metodo, dados) {
  let resposta

  // 1. Envia o pedido para o backend
  try {
    resposta = await fetch('/api' + caminho, {
      method: metodo,
      credentials: 'include', // envia o cookie de login junto
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  } catch {
    // Sem internet ou servidor fora do ar: o pedido nem chegou
    throw new Error('Sem conexão com o servidor.')
  }

  // 2. Erro 500 ou maior: problema no servidor
  if (resposta.status >= 500) {
    throw new Error('Não foi possível falar com o servidor.')
  }

  // 3. Outro erro (senha errada, dado inválido...): mostra a mensagem que o backend mandou
  if (!resposta.ok) {
    let mensagem = 'Ocorreu um erro. Tente novamente.'
    try {
      const erro = await resposta.json()
      if (erro.erro) {
        mensagem = erro.erro
      }
    } catch {
      // A resposta de erro não veio em JSON: fica a mensagem padrão
    }
    throw new Error(mensagem)
  }

  // 4. Deu certo: devolve os dados (o DELETE não devolve nada)
  if (metodo !== 'DELETE') {
    return resposta.json()
  }
}
