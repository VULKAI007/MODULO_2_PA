import { useState } from 'react'
import './style.css'

export default function AdicionarPersonagens() {
    const [nome, setNome] = useState('')
    const [listaDePersonagens, setListaDePersonagens] = useState([])

    const handlerAdicionarPersonagem = (event) =>{

        event.preventDefault()

        if (nome) {
            setListaDePersonagens([listaDePersonagens, {nome}])
        setNome('')
        }
    }

    return (
        <div className='formulario'>
            <h2>Adicionar Personagem</h2>
            <form onSubmit={handlerAdicionarPersonagem}>
                <input 
                type="text"
                value={nome}
                onChange={(e) => setPersonagem(e.target.value)} 
                />

                <button type="submit">Adicionar</button>
            </form>

            <hr />

            <h2>Personagens Adicionados</h2>
            <ul>
                {listaDePersonagens.map((personagem) => 
                <li key={index}>
                    {personagem.nome}
                </li>
                )}
            </ul>


        </div>
    )
}