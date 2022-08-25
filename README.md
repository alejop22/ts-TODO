# API TODO
----
API de TODOs usando TypeScript y Express

## instructuvo para correr el proyecto:

### IMPORTANTE:
Debe tener instalado TypeScript de forma global para poder compilar el proyecto  y generar la carpeta __dist__ con el JavaScript puro o en su defecto buscarlo en los modulos de node

Luego de esto ingresar los siguientes comandos en la raíz de la app:

`$ npm install`

`$ fsc`

`$ npm start`

# Documentación de la API
----
La API expone cuatro endpoints:

## Obtener las todas las tareas sin completar GET:
```
http://localhost:3000/api/todo/

```

## Obtener las todas las tareas completas GET:
```
http://localhost:3000/api/todo/completo

```

## Crear una tarea POST:
```
http://localhost:3000/api/todo/

```
### Dato de entrada para la creacion
```json
{
    "title": "Hacer la tarea"
}
```

## Terminar la tarea PUT:
```
http://localhost:3000/api/todo/:id

Este endpoint recibe por params el id de la tarea que se quiera actualizar y cambie a terminada

```


