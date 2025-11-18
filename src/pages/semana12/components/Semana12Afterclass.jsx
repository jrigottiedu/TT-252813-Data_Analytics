import React from 'react'

const Semana12Afterclass = () => {
  return (
    <div>
      <h1 className="title-afterclass">After Class | Miércoles 12 de noviembre</h1>
      <section className="home-info-container">
        <h2 className='title-h2'>Resumen del Taller Parte II</h2>
        <ul className='list-disc list-inside'>
          <li>Continuamos con la segunda parte del Taller de Visualización, usando el Dataset "Superset" con datos de ventas de productos, por fecha, por zona geográfica, por cliente y por categoría.</li>
          <li>Repasamos el Pipeline o "Flujo de datos", desde el Dataset hasta llegar al Dashboard.</li>
          <li>Desde Looker completamos los Join/Merge entre la tabla de Métricas (facts) y las dimensiones productos y clientes.</li>
          <li>Incorporamos los gráficos de barra para ventas por categorías, de rectángulos para subcategorías y tabla de calor para analizar a los clientes.</li>
          <li>Incluso agregamos controles deslizantes y mené desplegables para refinar búsquedas o analizar intervalos.</li>
          <li><a href="https://docs.google.com/presentation/d/1TCbMf74Mfb5rNSFhL7aDzBnUj9tYr_HL/edit?usp=sharing&ouid=115334316874644775342&rtpof=true&sd=true" target='_blank' className='link'>PPT Presentación Taller</a></li>
          <li><a href="https://colab.research.google.com/drive/1fbl8rywIqh1f3Fq-6a7OJaMLSZ8TMNGb#scrollTo=YBCfXzGesBrA" target='_blank' className='link'>Notebook ETL Google Drive</a></li>
          <li><a href="https://github.com/jrigottiedu/TT-2C2025-Data-Analitycs-Notebooks/blob/main/Taller%20Visualizacion/Taller_visualizacion.ipynb" target='_blank' className='link'>Notebook ETL Github</a></li>
          <li><a href="https://docs.google.com/spreadsheets/d/1FgKgJA40Naojb2RcEF1ZHQFuTOsGhIQbJrPKM31-eJ0/edit?gid=873446023#gid=873446023" target='_blank' className='link'>Google Sheet con las tablas OLAP</a></li>
          <li><a href="https://lookerstudio.google.com/reporting/53719678-d35c-4c05-ac67-c4ba60abb233" target='_blank' className='link'>Dashboard Looker Completo</a></li>
        </ul>


        <h2 className='title-h2 pt-10'>Recordatorios</h2>
        <ul className='list-disc list-inside'>
          <li>Nos encontramos nuevamente el Lunes 17/11 a las 19:00 hs por Zoom, tienen el Link en la page Inicio</li>
        </ul>

        {/* Grabación de After Class en Youtube */}
        <div className='py-5'>
          <h2 className='title-h2'>Grabación Taller de Visualización</h2>
          <a
            className="flex items-center gap-2 no-underline text-gray-700 hover:text-darkblue-600 transition-colors duration-200 pb-5"
            href='https://www.youtube.com/watch?v=90z4OilKv7s'
            alt="Video semana 12 After Class 12"
            target="_blank">
            <span className="material-icons text-darkblue-600 group-hover:text-darkblue-700">ondemand_video</span>
            <span>Ver en Youtube</span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Semana12Afterclass