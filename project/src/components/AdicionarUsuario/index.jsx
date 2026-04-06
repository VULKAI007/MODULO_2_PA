import { useState } from 'react'
import './style.css'

export default function AdicionarUsuario() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    // FUNÇÃO PARA ADICIONAR USUÁRIOS ENM UMA LISTA
    const handlerAdicionarUsuario = (event) => {
        // EVITADNO QUE A PÁGINA RECARREGUE AOPO MUDAR ALGUM ELEMENTO
        event.preventDefault()

        // verificando se os campos possuem algum conteúdop
        if (nome && email) {
            // ADICIONANDO NOVO USUÁRIO
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            // DEFININDO OS CAMPOS COMO VAZIO
            setNome('')
            setEmail('')
        }
    }

    return (
        //CRIANDO HTML DA PÁGINA.
        <div className='formulario'>
            <h2>Adicionar Usuário</h2>
            <form onSubmit={handlerAdicionarUsuario}>
                <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />

                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />

                <button type='submit'>Adiconar</button>
            </form>

            <hr />

            <h2>Usuários Adicionados</h2>
            <ul>
                {/* USANDO O MAP PARA MOSTRAR CADA USUÁRIO NA LISTA
                COM BASE NO ÍNDICE. */}
                {listaDeUsuarios.map((usuario, index) => (
                    <li key={index}>
                        {usuario.nome} -{usuario.email}
                    </li>
                ))}
                
            </ul>

        </div>
    )   
}