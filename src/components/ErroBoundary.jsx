import { Component } from 'react'

// COMPONENTE · proteção contra tela branca · envolve o App · classe (exigência do React)
class ErroBoundary extends Component {
  state = { quebrou: false }

  // erro na tela → quebrou = true
  static getDerivedStateFromError() {
    return { quebrou: true }
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

    // sem erro → app normal
    return this.props.children
  }
}

export default ErroBoundary
