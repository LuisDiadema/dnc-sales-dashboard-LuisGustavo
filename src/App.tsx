import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, Leads, Login, Profile, Registration } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Cadastro" element={<Registration />} />
      </Routes>
    </Router>
  )
}

export default App
