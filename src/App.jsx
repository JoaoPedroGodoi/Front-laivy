import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Exames from './pages/Exames.jsx'
import Dashboard from './pages/Dashboard.jsx'
import TrocarSenha from './pages/TrocarSenha.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/exames" element={<Exames />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trocar-senha" element={<TrocarSenha />} />
    </Routes>
  )
}

export default App
