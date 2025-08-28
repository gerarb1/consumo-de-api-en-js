#   Fake Store API Testing Guide

##  Información General de la API
- **Base URL:** `https://fakestoreapi.com`  
- **Tipo:** REST API  
- **Autenticación:** No requerida  
- **Formato de respuesta:** JSON  

---

##  Endpoints Disponibles

### 1.  Productos

#### GET - Obtener todos los productos 

```json
 GET https://fakestoreapi.com/products

[
  {
    "id": 0,
    "title": "string",
    "price": 0.1,
    "description": "string",
    "category": "string",
    "image": "http://example.com"
  }
]
```
- **Descripción:** Obtiene todos los productos (20 productos).  
- **Respuesta:** Array de objetos producto.  
- **Status Code:** `200 OK`  

#### GET - Obtener producto por ID  
```js
GET https://fakestoreapi.com/products/{id}
```
- **Parámetros:**
- `id` *(path parameter)* → ID del producto (1-20).  
- **Ejemplo:** 
```js 
GET https://fakestoreapi.com/products/1
``` 
### POST - (simulado)
```json
POST https://fakestoreapi.com/products
{
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}
``` 

### PUT - (simulado)

```json
https://fakestoreapi.com/products/{id}
{
  "id": 0,
  "title": "string",
  "price": 0.1,
  "description": "string",
  "category": "string",
  "image": "http://example.com"
}
```
### DEL - (simulado)
```json
https://fakestoreapi.com/products/{id}
```
