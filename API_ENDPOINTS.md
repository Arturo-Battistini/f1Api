# 🏎️ F1 Fan API - Documentación Completa

## 🌐 Base URL
```
https://f1api-4pft.onrender.com/api
```

## 📋 Endpoints Disponibles

---

## 👤 PILOTOS (`/pilots`)

### **Obtener todos los pilotos**
```http
GET /api/pilots
```
**Respuesta:** Lista de todos los pilotos con sus equipos actuales.

### **Obtener solo pilotos activos**
```http
GET /api/pilots/active
```
**Respuesta:** Lista de pilotos que están activos en la F1.

### **Obtener top pilotos por puntos**
```http
GET /api/pilots/top?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de pilotos a devolver (default: 10)

**Ejemplo:**
```http
GET /api/pilots/top?limit=5
```

### **Obtener pilotos por equipo (ID)**
```http
GET /api/pilots/team/{teamId}
```
**Parámetros:**
- `teamId`: ID del equipo (ej: "64f8a1b2c3d4e5f6a7b8c9d0")

**Ejemplo:**
```http
GET /api/pilots/team/64f8a1b2c3d4e5f6a7b8c9d0
```

### **Obtener pilotos por nombre de equipo**
```http
GET /api/pilots/team/{teamName}
```
**Parámetros:**
- `teamName`: Nombre del equipo (ej: "Ferrari", "Mercedes", "Red Bull Racing")

**Ejemplo:**
```http
GET /api/pilots/team/Ferrari
```

### **Obtener pilotos por nacionalidad**
```http
GET /api/pilots/nationality/{nationality}
```
**Parámetros:**
- `nationality`: Nacionalidad del piloto (ej: "España", "Reino Unido")

**Ejemplo:**
```http
GET /api/pilots/nationality/España
```

### **Obtener piloto específico**
```http
GET /api/pilots/{id}
```
**Parámetros:**
- `id`: ID único del piloto

**Ejemplo:**
```http
GET /api/pilots/64f8a1b2c3d4e5f6a7b8c9d0
```

---

## 🏎️ EQUIPOS (`/teams`)

### **Obtener todos los equipos**
```http
GET /api/teams
```
**Respuesta:** Lista de todas las escuderías.

### **Obtener solo equipos activos**
```http
GET /api/teams/active
```
**Respuesta:** Lista de equipos que están activos en la F1.

### **Obtener top equipos por campeonatos**
```http
GET /api/teams/top?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de equipos a devolver (default: 10)

### **Obtener equipos por nacionalidad**
```http
GET /api/teams/nationality/{nationality}
```
**Parámetros:**
- `nationality`: Nacionalidad del equipo (ej: "Reino Unido", "Italia")

### **Obtener equipos por motor**
```http
GET /api/teams/engine/{engine}
```
**Parámetros:**
- `engine`: Fabricante del motor (ej: "Mercedes", "Ferrari", "Honda RBPT")

### **Obtener equipo por nombre**
```http
GET /api/teams/name/{teamName}
```
**Parámetros:**
- `teamName`: Nombre del equipo (ej: "Ferrari", "Mercedes", "Red Bull Racing")

**Ejemplo:**
```http
GET /api/teams/name/Ferrari
```

### **Obtener equipo específico**
```http
GET /api/teams/{id}
```
**Parámetros:**
- `id`: ID único del equipo

---

## 🏁 CIRCUITOS (`/circuits`)

### **Obtener todos los circuitos**
```http
GET /api/circuits
```
**Respuesta:** Lista de todos los circuitos.

### **Obtener solo circuitos activos**
```http
GET /api/circuits/active
```
**Respuesta:** Lista de circuitos que están activos.

### **Obtener circuitos más largos**
```http
GET /api/circuits/longest?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de circuitos a devolver (default: 10)

### **Obtener circuitos más cortos**
```http
GET /api/circuits/shortest?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de circuitos a devolver (default: 10)

### **Obtener circuitos por país**
```http
GET /api/circuits/country/{country}
```
**Parámetros:**
- `country`: País del circuito (ej: "España", "Italia", "Reino Unido")

### **Obtener circuitos por tipo**
```http
GET /api/circuits/type/{type}
```
**Parámetros:**
- `type`: Tipo de circuito (ej: "permanent", "street", "hybrid")

### **Obtener circuito específico**
```http
GET /api/circuits/{id}
```
**Parámetros:**
- `id`: ID único del circuito

---

## 🛞 NEUMÁTICOS (`/tires`)

### **Obtener todos los neumáticos**
```http
GET /api/tires
```
**Respuesta:** Lista de todos los neumáticos.

### **Obtener solo neumáticos activos**
```http
GET /api/tires/active
```
**Respuesta:** Lista de neumáticos que están activos.

### **Obtener neumáticos con más agarre**
```http
GET /api/tires/high-grip?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de neumáticos a devolver (default: 10)

### **Obtener neumáticos más duraderos**
```http
GET /api/tires/high-durability?limit=10
```
**Parámetros:**
- `limit` (opcional): Número de neumáticos a devolver (default: 10)

### **Obtener neumáticos por tipo**
```http
GET /api/tires/type/{type}
```
**Parámetros:**
- `type`: Tipo de neumático (ej: "soft", "medium", "hard", "intermediate", "wet")

### **Obtener neumáticos por temporada**
```http
GET /api/tires/season/{season}
```
**Parámetros:**
- `season`: Año de la temporada (ej: 2024, 2023)

### **Obtener neumáticos por condiciones**
```http
GET /api/tires/conditions/{conditions}
```
**Parámetros:**
- `conditions`: Condiciones de uso (ej: "dry", "wet", "mixed")

### **Obtener neumático específico**
```http
GET /api/tires/{id}
```
**Parámetros:**
- `id`: ID único del neumático

---

## 📊 Ejemplos de Respuestas

### **Ejemplo: Piloto**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "name": "Max",
  "surname": "Verstappen",
  "nationality": "Países Bajos",
  "dateOfBirth": "1997-09-30T00:00:00.000Z",
  "number": 1,
  "currentTeam": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "name": "Red Bull Racing",
    "nationality": "Austria"
  },
  "championshipPoints": 575,
  "raceWins": 60,
  "podiums": 104,
  "polePositions": 40,
  "fastestLaps": 32,
  "isActive": true,
  "helmetColor": "#FF0000"
}
```

### **Ejemplo: Equipo**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
  "name": "Red Bull Racing",
  "nationality": "Austria",
  "teamPrincipal": "Christian Horner",
  "engine": "Honda RBPT",
  "headquarters": "Milton Keynes, Reino Unido",
  "foundedYear": 2005,
  "constructorsChampionships": 6,
  "driversChampionships": 7,
  "raceWins": 118,
  "polePositions": 95,
  "fastestLaps": 89,
  "isActive": true,
  "primaryColor": "#3671C6",
  "secondaryColor": "#FF0000"
}
```

---

## 🔧 Códigos de Estado HTTP

- **200 OK:** Solicitud exitosa
- **404 Not Found:** Recurso no encontrado
- **500 Internal Server Error:** Error del servidor

---

## 🌐 CORS

La API está configurada para aceptar peticiones desde cualquier origen en desarrollo.

---

## 📝 Notas

- **Todos los endpoints son de solo lectura (GET)**
- **Los datos incluyen relaciones** (ej: pilotos con sus equipos actuales)
- **Las fechas están en formato ISO 8601**
- **Los IDs son ObjectId de MongoDB**

---

## 🚀 Ejemplos de Uso

### **Obtener top 5 pilotos:**
```bash
curl https://f1api-4pft.onrender.com/api/pilots/top?limit=5
```

### **Obtener pilotos españoles:**
```bash
curl https://f1api-4pft.onrender.com/api/pilots/nationality/España
```

### **Obtener circuitos de España:**
```bash
curl https://f1api-4pft.onrender.com/api/circuits/country/España
```

### **Obtener neumáticos soft:**
```bash
curl https://f1api-4pft.onrender.com/api/tires/type/soft
```

---

## 📞 Soporte

Si tienes problemas o preguntas sobre la API, revisa los logs en Render o contacta al desarrollador. 