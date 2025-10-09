import React from 'react'

const Semana7Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">Taller Pre-Entrega | Miércoles 8 de octubre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del Taller</h2>
        <ul className='list-disc list-inside'>
          <li>Analizamos la consigna y sugerimos un Notebook modelo</li>
          <li><a href="https://gamma.app/docs/Pre-Entrega-de-Proyecto-4eq8frsd0ubt429?mode=doc" target='_blank' className='link'>Ver consigna</a></li>
          <li><a href="https://colab.research.google.com/drive/1mAWq_MkiyT_VWEOixSlLuq1Yi_EuIJO1" target='_blank' className='link'>Ver Notbook en Drive</a></li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/PreEntrega/Pre-entrega.ipynb" target='_blank' className='link'>Ver Notbook en Github</a></li>
          <li>Los datasets del proyecto (ventas, marketing, clientes) los pueden descargar desde esta carpeta o bien importarlos directamente en sus Notebooks <a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/tree/main/PreEntrega/Datasets" target='_blank' className='link'>Acceder aquí</a></li>
          <li>Si los importan, recuerden usar el link seleccionando "Raw" en Github</li>
          <li>En el Notebook, importamos los tres datasets, hicimos el análisis exploratorio y la limpieza de datos sobre ventas - les queda pendiente hacerlo con los otros dos.</li>
          <li>Tuvimos que hacer ajustes del tipo de dato, principalmente con precio de producto y con el campo fecha_venta</li>
          <li>Las observaciones y las acciones fueron documentadas en la sección comentarios</li>
          <li>Luego avanzamos con filtros y transformaciones, y luego con agrupación/agregación, para analizar total de ventas por productos</li>
          <li>Para encontrar los productos con alto rendimiento, definimos como unbral el quartil 0.75 (que veremos en detalle en Estadística Descriptiva)</li>
          <li>Sobre el final del taller, hicimos un merge/join entre los dataframes ventas y marketing, sobre la columna "producto", de todas formas, es tema de clase 8</li>
          <li>Queda pendiente el análisis y limpieza de los dataframes marketing y clientes, y la última actividad de Integración de datos</li>
          <li>Para la entrega, compartir el link del Notebook (si es de Google Drive, asegurarse que sea público y si subieron los datasets a su Drive, compartir la carpeta)</li>
          <li>La fecha de entrega, en principio es hasta el lunes 20/10.</li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 13/10 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación del Taller Pre-entrega</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=4qtFsUl51o0'
            alt="Video semana 6 After Class 6"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana7Afterclass