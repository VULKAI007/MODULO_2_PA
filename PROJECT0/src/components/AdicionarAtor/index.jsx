import React, { useState } from 'react';
import './style.css';

export default function HandlerAdicionarAtor() {
    const [nome, setNome] = useState('');
    const [personagem, setPersonagem] = useState(''); // Ajustado o P maiúsculo
    const [listaDeAtores, setListaDeAtores] = useState([]); // Faltava esse estado

    const handlerAdicionarAtor = (event) => {
        event.preventDefault();

        if (nome && personagem) {
            setListaDeAtores([...listaDeAtores, { nome, personagem }]);
            setNome('');
            setPersonagem('');
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Ator</h2>
            <form onSubmit={handlerAdicionarAtor}>
                <input 
                    type="text"
                    placeholder="Nome do ator"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input 
                    type="text"
                    placeholder="Nome do personagem"
                    value={personagem}
                    onChange={(e) => setPersonagem(e.target.value)}
                />

                <button type='submit'>Adicionar</button>
            </form>

            <hr />

            <h2>Atores Adicionados</h2>
            <ul>
                {listaDeAtores.map((ator, index) => (
                    <li key={index}>
                        <strong>{ator.nome}</strong> - ({ator.personagem})
                    </li>
                ))}
            </ul>
        </div>
    );
}