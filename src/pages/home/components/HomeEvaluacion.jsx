import React from 'react'

const HomeEvaluacion = () => {
    return (
        <div className='home-info-container'>
            <div className="flex flex-col items-start w-full">

                <h3 className='title-h2'>Metodología de evaluación</h3>
                <ul className='space-y-1 pt-2'>
                    <li><strong>Ejercicios prácticos: </strong>presentados al cierre de cada clase</li>
                    <li><strong>Cuestionarios: </strong>una vez aprobados desbloquean el contenido teórico del Campus y habilitan las entregas del Proyecto Integrador (partcial y final)</li>
                    <li><strong>PFI - Pre-entrega: </strong>aproximadamente a mitad de la cursada</li>
                    <li><strong>PFI - Entrega final: </strong>aproximadamente a cierre de la cursada</li>
                </ul>
            </div>
        </div>
    )
}

export default HomeEvaluacion