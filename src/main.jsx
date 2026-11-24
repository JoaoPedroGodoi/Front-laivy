import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import App from './App.jsx'
import ErroBoundary from './components/ErroBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ErroBoundary>
      <App />
    </ErroBoundary>
  </BrowserRouter>,
)
