import { useEffect, useState } from 'react'
import { listarExames, cadastrarExame, excluirExame } from '../services/exameService.js'

// Hook que guarda a lista de exames e permite cadastrar e excluir.
export function useExames() {
  const [exames, setExames] = useState([])
  const [erro, setErro] = useState('')

  // Busca os exames no backend e atualiza a lista
  async function carregar() {
    try {
      setExames(await listarExames())
      setErro('')
    } catch (e) {
      setErro(e.message)
    }
  }

  // Não usa try aqui: o FormExame mostra o erro ao lado do formulário
  async function adicionar(exame) {
    await cadastrarExame(exame)
    await carregar()
  }

  async function remover(id) {
    try {
      await excluirExame(id)
      await carregar()
    } catch (e) {
      setErro(e.message)
    }
  }

  // Busca os exames uma vez, quando a tela abre
  useEffect(() => {
    carregar()
  }, [])

  return { exames, erro, adicionar, remover }
}
