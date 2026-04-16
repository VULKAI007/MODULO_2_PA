import React from 'react';
import './App.css'; // ou o nome do seu arquivo CSS principal

// Lembre-se de ajustar os caminhos ('./...') dependendo das suas pastas
import Header from './components/Header';
import AdicionarAtor from './components/AdicionarAtor';
import Footer from './components/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      
      <main>
        <AdicionarAtor />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;