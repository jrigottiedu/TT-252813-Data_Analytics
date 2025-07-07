import React from "react";
import DisplayCode from "../../../componentes/code/DisplayCode";

const SqlView = () => {
  return (
    <div>
      <h1 className="title-class">SQL Code Snippets</h1>



      {/******************  IMPORTAR LIBRERIAS ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Código para importar librerias necesarias</h2>
      <ul class="list-disc pl-6">
        <li>Importamos <code>sqlite3</code> que nos provee los métodos para trabajar con la base de datos</li>
        <li>Además importamos <code>os</code> para crear la ruta relativa</li>
      </ul>

      <DisplayCode
        code={`
# importamos el módulo Sqlite3
import sqlite3

# importamos el módulo os
import os
        `}
      ></DisplayCode>

      {/******************  CONSTRUIR RUTA RELATIVA ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Construir la ruta relativa</h2>
      <ul class="list-disc pl-6">
        <li>Usamos el método path del módulo <code>os</code> para obtener la ruta donde se encuentra el archivo Python que estamos ejecutando</li>
        <li>Luego armamos la ruta relativa con el nombre de nuestra base de datos a crear o acceder</li>
      </ul>


      <DisplayCode
        code={`
# Carpeta donde está el script actual
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Ruta completa a la base de datos
bd_ruta = os.path.join(BASE_DIR, "inventario.db")
        `}
      ></DisplayCode>



      {/******************  CONSTRUIR TABLA PRODUCTOS ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para crear la tabla productos</h2>
      <ul class="list-disc pl-6">
        <li>Esta función establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta</li>
        <li>Confirma los cambios</li>
        <li>Cierra la conexión</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones</li>
      </ul>

      <DisplayCode
        code={`
# Función para crear la tabla productos
def bd_crear_tabla_productos():
    try:
        # establece la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # cursor para ejecutar las consultas
        cursor = conexion.cursor()
        # variable sql con la consulta en texto plano
        sql = """CREATE TABLE IF NOT EXISTS "productos" (
		"id"	INTEGER,
		"nombre"	TEXT NOT NULL,
		"categoria"	TEXT NOT NULL,
		"precio"	REAL NOT NULL,
		PRIMARY KEY("id" AUTOINCREMENT)
	);"""
        # ejecuta la consulta
        cursor.execute(sql)
        # confirma los cambios
        conexion.commit()
    except Exception as error:
        # muestra en pantalla si hubo error
        print(f"Error encontrado al crear la tabla: {error}")
    finally:
        # cierra la conexión
        conexion.close()`}
        language="Python"
      ></DisplayCode>



      {/******************  INSERTAR UN REGISTRO EN LA TABLA PRODUCTOS ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para insertar un registro en la tabla productos</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetros los valores de los campos del registro a insertar</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar y parametriza los valores a insertar</li>
        <li>Ejecuta la consulta con la tupla como argumento que contiene los valores pasados en la función</li>
        <li>Confirma los cambios</li>
        <li>Cierra la conexión</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para insertar datos en la tabla productos
def bd_insertar_producto(nombre, categoria, precio):
    status = False
    try:
        # establece la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # cursor para ejecutar las consultas
        cursor = conexion.cursor()
        # variable sql con la consulta en texto plano - los valores estan parametrizados
        sql = """INSERT INTO productos 
		("nombre","categoria","precio") 
		VALUES 
		(?,?,?)"""
        # ejecuta la consulta con los parametros en la lista
        cursor.execute(sql, (nombre, categoria, precio))
        # validamos que se haya actualizado el registro y actualizamos el estado para informar
        if cursor.rowcount == 1:
            status = True
        # confirma los cambios
        conexion.commit()
    except Exception as error:
        # muestra en pantalla si hubo error
        print(f"Error encontrado al crear la tabla: {error}")
    finally:
        # cierra la conexión
        conexion.close()
        # retorna el estado de la transaccion
        return status`}
        language="Python"
      ></DisplayCode>

      {/******************  LEER TODOS LOS REGISTROS DE LA TABLA PRODUCTOS ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para leer todos los registros de la tabla productos</h2>
      <ul class="list-disc pl-6">
        <li>Esta función establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta</li>
        <li>Vuelca en la variable local lista_productos el resultado de la consulta</li>
        <li>Cierra la conexión.</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para leer TODOS los datos de la tabla productos
def bd_leer_productos():
    # declaramos una lista local para retornar el resultado de la consulta en la tabla
    lista_productos = []
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # declaramos la variable sql con la consulta en texto plano
        sql = """SELECT * FROM productos"""
        # ejecutamos la consulta
        cursor.execute(sql)
        # volcamos en una variable local los datos que vienen de la base
        lista_productos = cursor.fetchall()
    except Exception as error:
        print(
            f"Error encontrado al crear la tabla: {error}"
        )  # muestramos en pantalla si hubo error
    finally:
        conexion.close()  # cerramos la conexión
    return lista_productos`}
        language="Python"
      ></DisplayCode>

      {/******************  LEER TODOS LOS REGISTROS DE LA TABLA PRODUCTOS CUYO VALOR EN EL CAMPO NOMBRE CONTENGA EL VALOR BUSCADO ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para leer todos los registro de la tabla productos según el nombre</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el nombre del producto a buscar en la tabla</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene el nombre del producto como argumento</li>
        <li>Vuelca en la variable local lista_productos el resultado de la consulta</li>
        <li>Cierra la conexión</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para buscar solo un producto segun su nombre de la tabla productos
def bd_leer_producto_por_nombre(nombre):
    # declaramos una lista local para retornar el resultado de la consulta en la tabla
    lista_productos = []
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL
        sql = """SELECT * FROM productos WHERE nombre LIKE ?"""
        # ejecutamos la consulta con el parámetro nombre
        cursor.execute(sql, ("%" + nombre + "%",))
        # volcamos en una variable local los datos que vienen de la base
        lista_productos = cursor.fetchall()
    except Exception as error:
        print(
            f"Error encontrado al crear la tabla: {error}"
        )  # muestramos en pantalla si hubo error
    finally:
        conexion.close()  # cerramos la conexión
    return lista_productos`}
        language="Python"
      ></DisplayCode>


      {/******************  ACTUALIZAR EL CAMPO PRECIO DE UN REGISTRO DE LA TABLA PRODUCTOS SEGUN EL ID INDICADO ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para actualizar el precio de un registro según el id</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el id del registro y el precio a modificar</li>
        <li>Declara e inicializa en False una variable llamada status para retornar el resultado de la función</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene el id y el precio del producto como argumento</li>
        <li>Obtiene del cursor la cantidad de filas afectadas. Si es mayor a 0, actualiza la variable status</li>
        <li>Cierra la conexión</li>
        <li>Retorna el status para informar</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para modificar el precio de un registro de la tabla productos según el id
def bd_actualizar_precio(id, precio):
    status = False
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL
        sql = """UPDATE productos SET precio = :precio WHERE id = :id"""  #
        # ejecutamos la consulta con los parámetros id y precio de forma nombrada
        cursor.execute(sql, {"precio": precio, "id": id})
        # confirmamos el cambio
        conexion.commit()
        # validamos que se haya actualizado el registro y actualizamos el estado para informar
        if cursor.rowcount > 0:
            status = True
    except Exception as error:
        print(
            f"Error encontrado al crear la tabla: {error}"
        )  # muestramos en pantalla si hubo error
    finally:
        # cerramos la conexión
        conexion.close()
        # retornamos el estado de la operación
        return status
`}
        language="Python"
      ></DisplayCode>



      {/******************  ACTUALIZAR UN REGISTRO DE LA TABLA PRODUCTOS SEGUN EL ID INDICADO ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para actualizar todos los campos de un registro según el id</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el id del registro y los valores de los campos</li>
        <li>Declara e inicializa en False una variable llamada status para retornar el resultado de la función</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene los pares clave:valor de todos los campos</li>
        <li>Obtiene del cursor la cantidad de filas afectadas. Si es mayor a 0, actualiza la variable status</li>
        <li>Cierra la conexión</li>
        <li>Retorna el status para informar</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para modificar todos los campos de registro de la tabla productos según el id
def bd_actualizar_producto(id, nombre, categoria, precio):
    status = False
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL
        sql = """UPDATE productos SET nombre = :nombre, categoria = :categoria, precio = :precio WHERE id = :id"""  #
        # ejecutamos la consulta con los parámetros id y precio de forma nombrada
        cursor.execute(
            sql,
            {
                "id": id,
                "nombre": nombre,
                "categoria": categoria,
                "precio": precio,
            },
        )
        # confirmamos el cambio
        conexion.commit()
        # validamos que se haya actualizado el registro y actualizamos el estado para informar
        if cursor.rowcount > 0:
            status = True
    except Exception as error:
        print(
            f"Error encontrado al crear la tabla: {error}"
        )  # muestramos en pantalla si hubo error
    finally:
        # cerramos la conexión
        conexion.close()
        # retornamos el estado de la operación
        return status
`}
        language="Python"
      ></DisplayCode>



      {/******************  ELIMINAR UN REGISTRO DE LA TABLA PRODUCTOS SEGUN EL ID INDICADO ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para eliminar un registro de la tabla productos según el id</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el id del registro a eliminar</li>
        <li>Declara e inicializa en False una variable llamada status para retornar el resultado de la función</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene el id del producto a eliminar como argumento</li>
        <li>Obtiene del cursor la cantidad de filas afectadas. Si es mayor a 0, actualiza la variable status</li>
        <li>Cierra la conexión</li>
        <li>Retorna el status para informar</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para eliminar un registro de la tabla productos segén el id
def bd_eliminar_producto(id):
    # declaramos una variable local con el estado de la operacion
    status = False
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL parametrizada
        sql = """DELETE FROM productos WHERE id = ?"""
        # ejecutamos la consulta y pasamos como argumento la tupla con el id del registro a eliminar
        cursor.execute(sql, (id,))
        # confirmamos el cambio
        conexion.commit()
        # validamos que se haya actualizado el registro y actualizamos el estado para informar
        if cursor.rowcount > 0:
            status = True
    except Exception as error:
        print(
            f"Error encontrado al eliminar el registro: {error}"
        )  # muestramos en pantalla si hubo error
    finally:
        # cerramos la conexión
        conexion.close()
        # retornamos el estado de la operación
        return status
`}
        language="Python"
      ></DisplayCode>


      {/******************  BUSCAR UN REGISTRO DE LA TABLA PRODUCTOS SEGUN EL ID INDICADO ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para buscar un registro de la tabla productos según el id</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el id del registro a buscar</li>
        <li>Declara e inicializa en False una variable llamada prodcuto para retornar el resultado de la búsqueda</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene el id del producto a buscar como argumento</li>
        <li>Vuelca en la variable producto el resultado de la ejecución de la consulta</li>
        <li>Cierra la conexión</li>
        <li>Retorna la variable producto</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para buscar solo un producto segun su id de la tabla productos
def bd_leer_producto_por_id(id):
    # declaramos una variable local para retornar el resultado de la consulta en la tabla
    producto = None
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL parametrizada
        sql = """SELECT * FROM productos WHERE id = ?"""
        # ejecutamos la consulta con el parámetro id
        cursor.execute(sql, (id,))
        # volcamos en una variable local el dato que vienen de la base
        producto = cursor.fetchone()
    except Exception as error:
        # muestramos en pantalla si hubo error
        print(f"Error encontrado al leer el registro por id: {error}")
    finally:
        # cerramos la conexión
        conexion.close()
        # retornamos el resultado
        return producto

`}
        language="Python"
      ></DisplayCode>


      {/******************  BUSCAR TODOS LOS REGISTRO DE LA TABLA PRODUCTOS CON BAJO STOCK ***************************/}
      <h2 className="font-semibold text-xl pt-10 pb-2">Función / Método para buscar todos registro de la tabla productos con bajo stock</h2>
      <ul class="list-disc pl-6">
        <li>Esta función tiene por parámetro el umbral de stock a buscar</li>
        <li>Declara e inicializa una lista llamada lista_productos para retornar el resultado de la búsqueda</li>
        <li>Establece una conexión a la base "inventario.bd" usando la ruta definida en el paso anterior</li>
        <li>Prepara el cursor para ejecutar la consulta/query SQL</li>
        <li>Carga en la variable <code>sql</code> el texto con la consulta a ejecutar</li>
        <li>Ejecuta la consulta con la tupla que contiene el stock a buscar como argumento</li>
        <li>Vuelca en la variable lista_productos el resultado de la ejecución de la consulta</li>
        <li>Cierra la conexión</li>
        <li>Retorna la variable lista_producto</li>
        <li>Es buena práctica envolver el código con <code>try-except-finally</code> para el manejo de errores/excepciones.</li>
      </ul>

      <DisplayCode
        code={`
# Funcion para buscar los producto con bajo stock
def bd_leer_producto_bajo_stock(stock):
    # declaramos una variable local para retornar el resultado de la consulta en la tabla
    lista_productos = []
    try:
        # establecemos la conexión a la base inventario.db con ruta relativa
        conexion = sqlite3.connect(bd_ruta)
        # creamos el cursor para ejecutar la consulta
        cursor = conexion.cursor()
        # preparamos la consulta SQL parametrizada
        sql = """SELECT * FROM productos WHERE cantidad < ?"""
        # ejecutamos la consulta con el parámetro cantidad
        cursor.execute(sql, (stock,))
        # volcamos en una variable local el dato que vienen de la base
        lista_productos = cursor.fetchall()
    except Exception as error:
        # muestramos en pantalla si hubo error
        print(f"Error encontrado al leer el registro por id: {error}")
    finally:
        # cerramos la conexión
        conexion.close()
        # retornamos el resultado
        return lista_productos

`}
        language="Python"
      ></DisplayCode>

    </div>
  );
};

export default SqlView;
