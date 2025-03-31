import React from 'react'

const HomeAulaVirtual = () => {
    return (
        <div className='home-info-container'>
            <div className="flex flex-col items-start w-full">

                <h3 className='title-h2'>Aula Virtual</h3>
                <ul className='space-y-1 pt-2'>
                    <li><strong>Acceso: </strong><a className='link' href="https://aulasvirtuales.bue.edu.ar/" target="_blank">Click aquí</a></li>
                    <li><strong>Usuario: </strong>DNI sin puntos ni guiones</li>
                    <li><strong>Contraseña genérica: </strong>Prueba!123 (se sugiere cambiarla) </li>
                </ul>
            </div>
        </div>
    )
}

export default HomeAulaVirtual