# ** Poke API Challenge** 

> ######  **Postulante:** Bryan Armando Quisaguano Casa

> ######  Perfil: [@BryanArmando](https://github.com/BryanArmando)


## Accesso a los endpoints desarrollados en backend en producción y documentados con swagger:

> ######  [Endpoints POKEAPI](https://pokeappkrug.herokuapp.com/doc/swagger-ui/index.html)


## Accesso al frontend desarrollado en Angular y desplegado en firebase

> ######  [Fontend POKEAPI](https://apppokeapifront.web.app/)

## Proceso de creación de proyecto (Back-end)

1. El lenguaje de programación elegido para el desarrollo fue Java 11 el cual lo uso mediante Spring Framework (SpringBoot)

2. Dentro de la misma he empleado varias dependencias gestionadas mediante maven, algunas de las herramientas utilizadas son: Postgres, Swagger, Hibernate. 

3. El proyecto lo he organizado en varias carpetas siguiendo un orden, se crearon 2 tablas de pokemon y el tipo, relacionadas mediante many to one, y se han creado 2 endpoints con métodos GET para la obtención de datos de los pokemon y se ha habilitado los cors para el consumo desde un sitio externo.

4. Se ha documentado los endpoints con la ayuda de swagger. 

5. Finalmente se ha desplegado el sistema en heroku y se ha realizado una conexion hacia una base de datos alojada en AlwaysData para la obtención de datos.  

## Proceso de creación de proyecto (Front-end)

1. Para la realización de la parte visual he empleado Angular 14 

2. Dentro de la misma se han creado componentes y páginas debidamente organizadas. 

3. Para un mejor diseño de la interfaz gráfica se ha empleado bootstrap y angular material.

4. Mediante un servicio realizo el enlace hacia el backend desplegado para poder consumir los endpoints y se han creado vistas mediante card para mejorar el diseño. 

5. Se tienen 2 botones para adelantar y retroceder la vista de pokemons con paginación local ya que únicamente se presentan 10 por vista, existe un botón en cada card de un pokemon para poder dirigirse a una página donde se mostraran toda la información del respectivo pokemon.

6. Se ha agredado un buscador en tiempo real, el cual busca las coincidencias con la palabra o letras que se ingresen en el espacio respectivo y muestra los pokemons con dichas coincidencias. 

6. Finalmente se ha desplegado el sistema en firebase.  
