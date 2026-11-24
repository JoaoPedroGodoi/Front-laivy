// Função única que conversa com o backend. Todos os services passam por aqui,
// então os erros são tratados em um lugar só e sempre viram uma mensagem legível.
export async function requisicao(caminho, metodo, dados) {
  let resposta
  try {
    resposta = await fetch('/api' + caminho, {
      method: metodo,
      credentials: 'include', // envia o cookie de login junto
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  } catch {
    // Sem internet ou servidor fora do ar: o fetch nem chega a ter resposta
    throw new Error('Sem conexão com o servidor. Verifique sua internet.')
  }

  // Erros 500 ou maiores: o backend está desligado ou deu um problema interno
  if (resposta.status >= 500) {
    throw new Error('Não foi possível falar com o servidor.')
  }

  // Se o backend respondeu com erro, mostra a mensagem que ele mandou.
  // O .catch evita quebrar quando a resposta de erro não vem em JSON.
  if (!resposta.ok) {
    const erro = await resposta.json().catch(() => ({}))
    if (erro.erro) {
      throw new Error(erro.erro)
    }
    // Sem mensagem do backend: 401/403 é sessão expirada ou falta de permissão
    if (resposta.status === 401 || resposta.status === 403) {
      throw new Error('Você não tem permissão para ver isto. Faça login novamente.')
    }
    throw new Error('Ocorreu um erro. Tente novamente.')
  }

  // O DELETE não devolve nada, então só os outros métodos leem a resposta
  if (metodo !== 'DELETE') {
    return resposta.json()
  }
}
