import { useEffect, useState } from 'react'
import { listarExames } from '../services/exameService.js'
import { listarDesempenhosDoUsuario } from '../services/desempenhoService.js'
import { listarProximasAtividades } from '../services/atividadeService.js'

// Busca tudo o que o dashboard do atleta mostra.
export function useDashboardAtleta(idAtleta) {
  const [exames, setExames] = useState([])
  const [desempenhos, setDesempenhos] = useState([])
  const [atividades, setAtividades] = useState([])
  const [erro, setErro] = useState('')

  async function carregar() {
    try {
      // Para o atleta, o backend já devolve só os exames dele
      setExames(await listarExames())
      setDesempenhos(await listarDesempenhosDoUsuario(idAtleta))
      setAtividades(await listarProximasAtividades())
    } catch (e) {
      setErro(e.message)
    }
  }

  // Busca os dados uma vez, quando a tela abre
  useEffect(() => {
    carregar()
  }, [])

  return { exames, desempenhos, atividades, erro }
}
