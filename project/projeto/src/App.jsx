import { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer'; // <-- Adicione esta linha!
import './App.css'
import AdicionarPersonagens from './components/AdicionarPersonagens'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header />
        <main>
          <AdicionarPersonagens />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
