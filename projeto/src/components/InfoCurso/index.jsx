import { useState } from 'react'
import './style.css'
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"></link>

function InfoCurso() {
    const [nome, setNome] = useState("Progamação de Aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(90)
    const [ local, setLocal] = useState("SENAI")

    return (
        <div className='info-curso'>
            <h2>Dados do Curso: </h2>
            <p>Nome: { nome }</p>
            <p>Carga Horária: { cargaHoraria }</p>
            <p>Local: { local }</p>
        </div>

    )
    
}

export default InfoCurso