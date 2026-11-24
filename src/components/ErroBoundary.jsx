import { Component } from 'react'

// COMPONENTE: protege o app inteiro (ele envolve o <App /> no main.jsx).
// Se alguma tela quebrar, mostra um aviso em vez de deixar a página em branco.
// Obs.: o React só oferece isso em componente de classe, por isso ele não é uma função.
class ErroBoundary extends Component {
  state = { quebrou: false }

  // O React chama esta função automaticamente quando uma tela dá erro
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

    // Sem erro: mostra o app normalmente
    return this.props.children
  }
}

export default ErroBoundary
