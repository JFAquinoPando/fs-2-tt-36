"# Sistema de Gestión de Reservas

API REST para gestionar reservas de espacios y lugares. Permite crear, consultar, actualizar y eliminar reservas con validación robusta de datos.

## 🚀 Características

- ✅ Crear nuevas reservas
- ✅ Consultar todas las reservas
- ✅ Ver detalles de una reserva específica
- ✅ Actualizar reservas existentes
- ✅ Eliminar reservas
- ✅ Validación de datos con Zod
- ✅ Manejo de errores estructurado

## 🛠️ Tecnologías

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **Zod** - Validación de esquemas TypeScript-first
- **ES6+ Modules** - Sistema de módulos moderno

## 📋 Requisitos

- Node.js (v14 o superior)
- npm o yarn

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd fs-2-tt-36
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor:
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`

## 📚 API Endpoints

### Obtener todas las reservas
```
GET /reservas
```
Retorna un array con todas las reservas registradas.

### Obtener detalle de una reserva
```
GET /reservas/:id
```
Retorna los datos de una reserva específica.

### Crear nueva reserva
```
POST /reservas
Content-Type: application/json

{
  "lugar": "string",
  "solicitante": "string",
  "fecha_ini": "YYYY-MM-DD",
  "fecha_fin": "YYYY-MM-DD",
  "hora_ini": "HH:MM",
  "hora_fin": "HH:MM"
}
```

### Actualizar reserva
```
PUT /reservas/:id
Content-Type: application/json

{
  "lugar": "string",
  "solicitante": "string",
  "fecha_ini": "YYYY-MM-DD",
  "fecha_fin": "YYYY-MM-DD",
  "hora_ini": "HH:MM",
  "hora_fin": "HH:MM"
}
```

### Eliminar reserva
```
DELETE /reservas/:id
```

## 📝 Estructura del Proyecto

```
fs-2-tt-36/
├── app.js                    # Configuración de Express
├── index.js                  # Punto de entrada
├── package.json              # Dependencias del proyecto
├── controladores/
│   └── ReservaController.js  # Lógica de reservas
├── rutas/
│   └── ReservaRoutes.js      # Definición de rutas
└── README.md                 # Este archivo
```

## 🔍 Validación de Datos

El proyecto utiliza **Zod** para validar:
- `lugar` (string requerido)
- `solicitante` (string requerido)
- `fecha_ini` (fecha ISO requerida)
- `fecha_fin` (fecha ISO requerida)
- `hora_ini` (string requerido, formato HH:MM)
- `hora_fin` (string requerido, formato HH:MM)

Los errores de validación se retornan con detalles del campo y mensaje específico.

## 📊 Modelo de Datos

```javascript
{
  id: number,
  lugar: string,
  nombre: string,
  fechaInicio: string (YYYY-MM-DD),
  fechaFin: string (YYYY-MM-DD),
  horaInicio: string (HH:MM),
  horaFin: string (HH:MM)
}
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, crea un fork del proyecto y envía un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT." 
