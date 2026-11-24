import { useEffect, useState } from 'react'
import { listarExames, cadastrarExame, excluirExame } from '../services/exameService.js'

// HOOK · exames · listar, cadastrar, excluir · erro
export function useExames() {
  const [exames, setExames] = useState([])
  const [erro, setErro] = useState('')

  // busca no backend → atualiza a lista
  async function carregar() {
    try {
      setExames(await listarExames())
      setErro('')
    } catch (e) {
      setErro(e.message)
    }
  }

  // sem try → erro tratado no FormExame
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

  // useEffect → busca ao abrir a tela
  useEffect(() => {
    carregar()
  }, [])

  return { exames, erro, adicionar, remover }
}
