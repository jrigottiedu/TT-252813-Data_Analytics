import React from 'react'

const Semana4Afterclass = () => {
    return (
        <div>
            <h1 className="title-afterclass">After Class | Miércoles 16 de abril</h1>
            <section className="home-info-container">
                <p>Hoy resolvimos el ejercicio de la clase 3, que es una mejora del ejercicio de la clase 2 </p>
                <p>El objetivo es aplicar "Condicionales" para validar el ingreso de los datos </p>
                <p>Para el nombre, apellido y correo, queremos mostrar un error si no se ingresa algún dato</p>
                <p>Para el caso de la edad, queremos mostrar un error si se ingresa una edad menor a 18</p>
                <p>Vimos varios enfoques, pueden ir explorando los códigos que subimos al repositorio Github</p>
                <ul className='list-disc list-inside ml-4'>
                    <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/after_class/validar_ingresos_simples.py" target='_blank' className='link'>Validando ingresos simples</a></li>
                    <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/after_class/validar_multiples_ingresos.py" target='_blank' className='link'>Validando ingresos múltiples</a></li>
                    <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/after_class/ejercicio_v1.py" target='_blank' className='link'>Primera versión del ejercicio aplicando validación a cada dato ingresado</a></li>
                    <li><a href="https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/blob/master/semana_4/after_class/ejercicio_v2.py" target='_blank' className='link'>Segunda versión del ejercicio aplicando validación múltiple, combinando operadores lógicos</a></li>
                </ul>
                <p className='pt-3'>Finalmente, encontrarán los enlaces a la grabación en Youtube y el repositorio completo en Github</p>
                <ul>
                    <li><a href='https://youtu.be/txq7nvrGEeM' target="_blank" className='link'>Link video After Class en Youtube</a></li>
                    <li><a href='https://github.com/jrigottiedu/TT-1C2025-25011-codigo-de-clases/tree/master/semana_4/after_class' target='_blank' className='link'>Link resolución ejercicios en Github</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Semana4Afterclass