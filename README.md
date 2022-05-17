# Quiz #2 - API CRUD
> Usted ha sido contratado para generar en servicio de API para el siguiente esquema de base de datos. La idea fundamental es generar las acciones típicas como lo es, el CRUD. Una de las condiciones propuesta por el cliente, es que se utilice el uso de json tokens para seguridad.

### Requerimientos:
- Utilice algún lenguaje de servidor visto en clase
- Puede usar base de datos relacionales o no relaciones
- Debe contener json tokens
- Debe contener la arquitectura MVC (Controlador,Router,Model)

# Docs
## **run**
> npm install

### Acccess 
> Create a file .env and add this
> ```USERNAME=api-crud 
> PASSWORD=MWtDvbWzpB1g3gYG
> DBNAME=api-crud
> TOKEN_SECRET=secret_key
> ```
> You won't need an access token to add new users neither to login,
> however you will need the access token to perform any other action CRUD.
> To get the access token you have to use the ```/login``` route with the username and password in the body post request (using postman)

## Routes
> The API was developed with MongoDB, these are the collections:
> - usuarios
> - temas
> - profesores
> - cursos
> - practicas
> - curso_practicas
> 
#### CRUD

> Create user 
> ```/usuarios ```
> 
> LogIn (to get the access token) 
> ```/login ```

> To perform the other actiones CRUD, just use the same route with the corresponding collection name:  
> 
> Create
> **(POST)** ```/<collection_name>```
>
> Get all **(GET)**
> ```/<collection_name> ```
>
> Update **(PUT)**
> ```/<collection_name>/id ```
>
> Delete **(DELETE)**
> ```/<collection_name>/id ```
