// SERVICE · única porta para o backend · erros num lugar só
export async function requisicao(caminho, metodo, dados) {
  let resposta

  // 1. envia o pedido
  try {
    resposta = await fetch('/api' + caminho, {
      method: metodo,
      credentials: 'include', // cookie de login
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  } catch {
    // sem conexão
    throw new Error('Sem conexão com o servidor.')
  }

  // 2. erro 500+ → servidor
  if (resposta.status >= 500) {
    throw new Error('Não foi possível falar com o servidor.')
  }

  // 3. outro erro → mensagem do backend
  if (!resposta.ok) {
    let mensagem = 'Ocorreu um erro. Tente novamente.'
    try {
      const erro = await resposta.json()
      if (erro.erro) {
        mensagem = erro.erro
      }
    } catch {
      // sem JSON → mensagem padrão
    }
    throw new Error(mensagem)
  }

  // 4. sucesso → devolve os dados (DELETE não devolve)
  if (metodo !== 'DELETE') {
    return resposta.json()
  }
}
