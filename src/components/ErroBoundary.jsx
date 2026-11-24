import { Component } from 'react'

// Se algum componente quebrar ao desenhar a tela, mostra um aviso
// em vez de deixar a página inteira em branco.
// (Error Boundary ainda precisa ser componente de classe no React.)
class ErroBoundary extends Component {
  state = { quebrou: false }

  static getDerivedStateFromError() {
    return { quebrou: true }
  }

  componentDidCatch(erro) {
    console.error('Erro na tela:', erro)
  }

  render() {
    if (this.state.quebrou) {
      return (
        <div className="tela-login">
          <div className="card form-login">
            <p className="erro">Algo deu errado nesta tela.</p>
            <a className="botao link-botao" href="/inicio">Voltar ao início</a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErroBoundary
