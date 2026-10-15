import { useEffect, useState } from 'react'
import { listarExames, cadastrarExame, excluirExame } from '../services/exameService.js'

// Hook que guarda a lista de exames e permite cadastrar e excluir.
export function useExames() {
  const [exames, setExames] = useState([])

  // Busca os exames no backend e atualiza a lista
  async function carregar() {
    const lista = await listarExames()
    setExames(lista)
  }

  async function adicionar(exame) {
    await cadastrarExame(exame)
    await carregar()
  }

  async function remover(id) {
    await excluirExame(id)
    await carregar()
  }

  // Busca os exames uma vez, quando a tela abre
  useEffect(() => {
    carregar()
  }, [])

  return { exames, adicionar, remover }
}
