import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Exames from './pages/Exames.jsx'

// App.jsx só define as rotas do projeto.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio" element={<Home />} />
      <Route path="/exames" element={<Exames />} />
    </Routes>
  )
}

export default App
