import React from "react";

const Home1 = () => {
  return (
    <div className="home-info-container">
      {/* Título */}
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-5">
        📌 Información Importante para la Cursada
      </h1>

      {/* Horarios */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">📅 Horarios</h2>
        <p className="mt-2">
          🕒 <strong>Horario de Clase:</strong> [Día y Hora]
        </p>
        <p>
          🎓 <strong>Horario de After Class:</strong> [Día y Hora]{" "}
          <a href="[LINK_MEET]" className="text-blue-500 underline">
            Meet
          </a>{" "}
          |{" "}
          <a href="[LINK_ZOOM]" className="text-blue-500 underline">
            Zoom
          </a>
        </p>
      </section>

      {/* Tutores */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          🙋🏻‍♀️ Tutor/a e Instructor/a
        </h2>
        <p className="mt-2">
          👩‍🏫 <strong>Tutor/a:</strong> [Nombre] -{" "}
          <a href="mailto:[MAIL_TUTOR]" className="text-blue-500 underline">
            [MAIL_TUTOR]
          </a>
        </p>
        <p>
          👨‍🏫 <strong>Instructor/a:</strong> [Nombre] -{" "}
          <a
            href="mailto:[MAIL_INSTRUCTOR]"
            className="text-blue-500 underline"
          >
            [MAIL_INSTRUCTOR]
          </a>
        </p>
      </section>

      {/* Clases en vivo */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          💻 Clases en Vivo
        </h2>
        <p className="mt-2">
          📍 <strong>Clase en vivo por Zoom:</strong>{" "}
          <a href="[LINK_ZOOM_CLASE]" className="text-blue-500 underline">
            Link
          </a>{" "}
          (Asistencia obligatoria)
        </p>
        <p>
          🔢 <strong>ID de reunión:</strong> [ID_ZOOM]
        </p>
        <p>
          ⚙️{" "}
          <a href="[GUIA_ZOOM]" className="text-blue-500 underline">
            Guía para ingresar a Zoom
          </a>
        </p>
        <p className="mt-2 text-red-600">
          ⚠️ Usa el siguiente formato en Zoom: <strong>Apellido, Nombre</strong>
        </p>
        <p className="mt-2">
          📜 <strong>¿Cómo tomamos asistencia?</strong> Se registra según el
          nombre en Zoom y el tiempo de conexión.
        </p>
      </section>

      {/* Aula Virtual */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">🖥️ Aula Virtual</h2>
        <p className="mt-2">
          📚 <strong>Acceso:</strong>{" "}
          <a href="[LINK_AULA_VIRTUAL]" className="text-blue-500 underline">
            Plataforma del Aula Virtual
          </a>
        </p>
        <p className="mt-2 text-gray-700">
          🔑 <strong>Usuario:</strong>{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">
            DNI (sin puntos ni guiones)
          </code>
        </p>
        <p>
          🔐 <strong>Contraseña por defecto:</strong>{" "}
          <code className="bg-gray-200 px-2 py-1 rounded">Prueba!123</code>
        </p>
      </section>

      {/* Enlaces importantes */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          🔗 Enlaces Importantes
        </h2>
        <p className="mt-2">
          🎬 <strong>Clases grabadas:</strong>{" "}
          <a href="[LINK_YOUTUBE]" className="text-blue-500 underline">
            YouTube
          </a>
        </p>
        <p>
          💡 <strong>Videos complementarios:</strong>{" "}
          <a href="[LINK_VIDEOS]" className="text-blue-500 underline">
            Ver aquí
          </a>
        </p>
        <p>
          ➕ <strong>Invitación a Discord:</strong>{" "}
          <a
            href="[LINK_DISCORD_INVITACION]"
            className="text-blue-500 underline"
          >
            Unirse
          </a>
        </p>
        <p>
          💬 <strong>Ingreso a Discord:</strong>{" "}
          <a href="[LINK_DISCORD]" className="text-blue-500 underline">
            Acceder
          </a>
        </p>
        <p>
          🗒️ <strong>Pautas de convivencia:</strong>{" "}
          <a href="[LINK_CONVIVENCIA]" className="text-blue-500 underline">
            Leer aquí
          </a>
        </p>
      </section>

      {/* Proyecto Final */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700">
          🎯 Proyecto Final
        </h2>
        <p className="mt-2 text-gray-600">
          📌 La consigna del proyecto final estará disponible más adelante.
        </p>
      </section>
    </div>
  );
};

export default Home1;
