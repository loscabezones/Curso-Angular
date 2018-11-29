# Curso-Angular
Curso Angular

## Contenido ##

 ### APLICACION-1 ###
 
 * * *
 
 ### 01-hola-Mundo ###
 
 * Proyecto de inicio limpio de angular, creado con Angular Cli 7.0.
 
 ####  Contenido añadido ####
 
 - Añadido mensaje Hola Mundo en el componenete principal
 - Añadido componentes header, body y footer
 - muestras de ngIf y ngFor
 
 ### APLICACION-2 ###
 
 * * *
 
 ### 02-spa ###
 
 * proyecto de inicio limpio para crear una pagina Sinle Page, creado con Angular Cli 7.0

 ####  Contenido añadido ####
 
 - Añadido Componente about, heroes, home, y navbar
 - añadido archivo de routing
 - configurado rutas y llamada a las rutas en el navbar
 - creación servicio heroes.service
 - cambio de rutas a trabes de botones.
 - creacion de componente heroe y desarollo devisualicacion de contenido
 - creacion de buscador
 - separacion componente heroe-tarjeta y llamarla en el componente Heroes y buscador
 
  ### APLICACION-3 ###
 
 * * *
 
 ### 03-pipes ###
 
 * proyecto de inicio limpio para crear ejemplos de pipe, creado con Angular Cli 7.0

 ####  Contenido añadido ####
 
 ##### tabla con ejemplos de pipe de ANGULAR
 
 - pipe: uppercase
 - pipe: lowercase
 - pipe: slice
 - pipe: number
 - pipe: percent
 - pipe: currency
 - pipe: number
 - pipe: json
 - pipe: async
 - pipe: date
 
 ##### Pipes creados 
 
 ~~~
 - pipe: capitalizado // Pipe que recibe un string y pone en mayuscula la primera letra de cada palabra. //
 ~~~
 
 ~~~
 - pipe: contrasena // Pipe que recibe un string y pone todos los caracteres con asteriscos //
 ~~~
 
 ~~~
 - pipe: domsegurp // Pipe que recibe una url y la securiza para poder reporducirla en la web //
 ~~~
 
 
 ### APLICACION-4 ###
 
 * * *
 
 ### 04-spotiapp ###
 
 * proyecto utilizando la api de spotify que muestra las canciones mas recientes, y contiene un buscador
   de canciones que permite reproducir las canciones mas escuchadas del artista buscado.

 ####  Contenido añadido ####
 
 - Creacion de componentes "home", "navbar", y "search" he implementacion de "navbar" con rutas
 - Creacion de servicio de spotify
 - Añadido informacion en la home de los ultimos albunes con su foto y descripcion mediante el servicio de spotify 
 - Desarrolo componente buscador que llama al servicio para mostrar elementos
 - Optimicacion de servicios con el uso de "map" de rxjs
 - Refactorizacion de los servicios
 - Creacion de pipe "noimage" que de un array de imagenes, selecciona la primera
 - Creacion de componente "tarjetas" que es llamado en el componente "home" y "search"
 - Añadido spiner de busqueda cuando esta cargando los elementos
 - Evento click en las tarjetas. Seleciona el id del artista y lo enruta a la pagina "artista"
 - Desarrllo de la página "artista" y control de carga en el observable
 - Añadido listado de canciones mas escuchadas en la pagina "artista"
 - Creación de pipe "domseguro para reproducir la musica con el widget de spotify
 - Control de errores cuando falta el token en "home"
 - Añadido Servicios de renovacion de toquen // Por desarrollar //
 
  #### Funcionamiento ####
  
  * Para poder visualizar la pagina ha de actualizarse el token que esta en el servicio: "spotify.service.ts".
    el valor del token es guardada en la variable "token"
    
    Ejemplo de token:
    ~~~
    token = "Bearer BQDTxE8SpGu9WlokFeA5KPATXKIbd1OgBHoA7VdZY7io9SyW2Q4kHkUKv1C2jVeZXzrHjsCKCJC00b3ZtdI";
    ~~~
    
    Para conseguir el toquen ir a la direccion: https://developer.spotify.com/dashboard/ 
    Nos logeamos con nuestra cuenta spotify y creamos un nuevo proyecto
    
    esto nos dara dos claves:
    
    * Client ID
    * Client Secret
    
    Una vez con nuestras claves mediante por ejemplo post man devemos realizar una petcion POST a:
    https://accounts.spotify.com/api/token
    
    y en el body con la opcion marcada: "x-www-form-urlencoded" introducirle 3 elementos:
      
      ~~~
    * KEY: grant_type,   VALUE: client_credentials
    * KEY: client_id,   VALUE: <nuestro Client ID>
    * KEY: client_secret,   VALUE: <nuestro Client Secret>
      ~~~
      
    y nos devolvera una respuesta como la siguiente: que contendra nuestro token, PD: solo durara 1 hora.
    
    ~~~
    {
      "access_token": "BQCSQGhlvfKAEMpp5pPES79KHsE0am3hOVJcK_vUFDG1Nx6GA0pCeiZPUHY4icSInmTAxN-JFvKUzCcuhB0",
      "token_type": "Bearer",
      "expires_in": 3600,
      "scope": ""
    }
    ~~~
    
    
    

 
