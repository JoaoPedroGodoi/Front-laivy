import { useEffect, useState } from 'react'
import { listarAtletas } from '../services/usuarioService.js'
import Campo from './Campo.jsx'
import Selecao from './Selecao.jsx'
import Botao from './Botao.jsx'

// COMPONENTE · formulário de exame
function FormExame({ aoSalvar }) {
  const [atletas, setAtletas] = useState([])
  const [idAtleta, setIdAtleta] = useState('')
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [situacao, setSituacao] = useState('1')
  const [erro, setErro] = useState('')

  // busca atletas → preenche a seleção
  useEffect(() => {
    listarAtletas()
      .then(setAtletas)
      .catch((e) => setErro(e.message))
  }, [])

  async function salvar(evento) {
    evento.preventDefault() // não recarrega a página

    // monta o exame no formato do backend
    const exame = {
      usuario: { id_usuario: Number(idAtleta) },
      data_inicio_exame: dataInicio,
      data_fim_exame: dataFim,
      peso_usuario: Number(peso),
      altura_usuario: Number(altura),
      status_usuario: Number(situacao),
    }

    try {
      await aoSalvar(exame)
      // sucesso → limpa o formulário
      setErro('')
      setIdAtleta('')
      setDataInicio('')
      setDataFim('')
      setPeso('')
      setAltura('')
      setSituacao('1')
    } catch (e) {
      // erro → mostra mensagem · mantém o digitado
      setErro(e.message)
    }
  }

  return (
    <form className="card form-exame" onSubmit={salvar}>
      <Selecao rotulo="Atleta" valor={idAtleta} aoMudar={(e) => setIdAtleta(e.target.value)}>
        <option value="">Selecione</option>
        {atletas.map((atleta) => (
          <option key={atleta.id_usuario} value={atleta.id_usuario}>{atleta.nome_usuario}</option>
        ))}
      </Selecao>
      <Campo rotulo="Data do exame" tipo="date" valor={dataInicio} aoMudar={(e) => setDataInicio(e.target.value)} />
      <Campo rotulo="Válido até" tipo="date" valor={dataFim} aoMudar={(e) => setDataFim(e.target.value)} />
      <Campo rotulo="Peso (kg)" tipo="number" valor={peso} aoMudar={(e) => setPeso(e.target.value)} />
      <Campo rotulo="Altura (m)" tipo="number" valor={altura} aoMudar={(e) => setAltura(e.target.value)} />
      <Selecao rotulo="Situação" valor={situacao} aoMudar={(e) => setSituacao(e.target.value)}>
        <option value="1">Apto</option>
        <option value="0">Inapto</option>
      </Selecao>
      <Botao texto="Cadastrar exame" />

      {erro && <p className="erro">{erro}</p>}
    </form>
  )
}

export default FormExame
