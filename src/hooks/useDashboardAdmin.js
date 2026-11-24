import { useEffect, useState } from 'react'
import { listarUsuarios } from '../services/usuarioService.js'
import { listarTimes } from '../services/timeService.js'
import { listarExames } from '../services/exameService.js'
import { listarProximasAtividades } from '../services/atividadeService.js'
import { listarUltimasAcoes } from '../services/auditoriaService.js'

// HOOK · dados do dashboard admin
export function useDashboardAdmin(ehAdministrador) {
  const [usuarios, setUsuarios] = useState([])
  const [times, setTimes] = useState([])
  const [exames, setExames] = useState([])
  const [atividades, setAtividades] = useState([])
  const [acoes, setAcoes] = useState([])
  const [erro, setErro] = useState('')

  async function carregar() {
    try {
      setUsuarios(await listarUsuarios())
      setTimes(await listarTimes())
      setExames(await listarExames())
      setAtividades(await listarProximasAtividades())

      // auditoria → só administrador
      if (ehAdministrador) {
        setAcoes(await listarUltimasAcoes())
      }
    } catch (e) {
      setErro(e.message)
    }
  }

  // useEffect → busca ao abrir a tela
  useEffect(() => {
    carregar()
  }, [])

  return { usuarios, times, exames, atividades, acoes, erro }
}
