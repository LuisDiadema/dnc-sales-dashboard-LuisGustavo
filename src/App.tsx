import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/Cadastro" element={<>Cadastro</>} />
        <Route path="Login" element={<>Login</>} />
        <Route path="/Perfil" element={<>Perfil</>} />
        <Route path="/Leads" element={<>Leads</>} />
      </Routes>
    </Router>
  )
}

export default App
