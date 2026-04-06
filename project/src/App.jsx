import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer'; // <-- Adicione esta linha!
import './App.css'
import AdicionarUsuario from './components/AdicionarUsuario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header />
        <main>
          <AdicionarUsuario />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
