import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ClienteLista from './components/ClienteLista';
import ClienteForm from './components/ClienteFormulario';
import {Container} from '@mui/material'
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Navbar/>
      <Routes>
        <Route path="/" element={<ClienteLista />} />
        <Route path="/cliente/nuevo" element={<ClienteForm />} />
      </Routes>
      </Container>
    </BrowserRouter>
  )
}