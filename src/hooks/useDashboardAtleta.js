import { useEffect, useState } from 'react'
import { listarExames } from '../services/exameService.js'
import { listarDesempenhosDoUsuario } from '../services/desempenhoService.js'
import { listarProximasAtividades } from '../services/atividadeService.js'

// HOOK · dados do dashboard atleta
export function useDashboardAtleta(idAtleta) {
  const [exames, setExames] = useState([])
  const [desempenhos, setDesempenhos] = useState([])
  const [atividades, setAtividades] = useState([])
  const [erro, setErro] = useState('')

  async function carregar() {
    try {
      // backend filtra → só exames do atleta
      setExames(await listarExames())
      setDesempenhos(await listarDesempenhosDoUsuario(idAtleta))
      setAtividades(await listarProximasAtividades())
    } catch (e) {
      setErro(e.message)
    }
  }

  // useEffect → busca ao abrir a tela
  useEffect(() => {
    carregar()
  }, [])

  return { exames, desempenhos, atividades, erro }
}
