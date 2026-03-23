# DAI-Server

Servidor REST básico de autenticación con Express + Sequelize (PostgreSQL) usando JWT.

## 🚀 Descripción

Proyecto con funcionalidades mínimas de login y registro de usuarios:
- Registro: `POST /auth/register`
- Login: `POST /auth/login`
- Protege rutas con tokens JWT (se puede extender con middleware existente en `src/routes/auth/authorize.js`).

## 🧩 Tecnologías

- Node.js (CommonJS)
- Express 5
- Sequelize (PostgreSQL)
- bcrypt
- jsonwebtoken
- dotenv
- morgan
- cors
- nodemon (desarrollo)

## 📁 Estructura

- `index.js`: entrada y conexión a DB
- `src/config/app.js`: servidor y middlewares
- `src/config/db.js`: config de Sequelize / modelos
- `src/routes/`: rutas API
- `src/controllers/`: lógica de negocio
- `src/handlers/`: respuesta y manejo de errores
- `src/models/User.js`: modelo de usuario
- `src/utils/responseBuilder.js`: formato de respuesta

## ⚙️ Configuración

1. Clona el proyecto.
2. Instala dependencias:

```bash
npm install
```

3. Crea archivo `.env` en la raíz (ejemplo):

```env
PORT=3000
DB_USER=postgres
DB_PASSWORD=tu_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_db
JWT_SECRET=secreto_super_seguro
```

4. Levanta servidor:

```bash
npm start
```

5. Verifica en `http://localhost:<PORT>`

## 🔐 Autenticación

### Registro

`POST /auth/register`

Body JSON esperado:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "pass123",
  "dni": "12345678",
  "name": "Nombre",
  "role": "user"   
}
```

Respuesta 201 con usuario creado.

### Login

`POST /auth/login`

Body JSON esperado:

```json
{
  "identifier": "usuario@ejemplo.com", // o DNI
  "password": "pass123"
}
```

Respuesta 200 con token JWT:

```json
{
  "status": 200,
  "message": "Login exitoso",
  "data": { "token": "..." }
}
```

## 🧪 Pruebas rápidas

Con Postman o curl:

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"email":"a@a.com","password":"123","dni":"111"}'

curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"identifier":"a@a.com","password":"123"}'
```

## 🛠️ Extensiones posibles

- Añadir validación con `Joi` o `express-validator`
- Agregar rutas protegidas con middleware `authorize` en `src/routes/auth/authorize.js`
- Manejar refresh token
- Añadir rol-based access control

---

### Nota

Se ha creado según tu solicitud: ruta de login + registro ya implementadas en el proyecto. Cambia datos de DB y JWT en `.env` antes de usar.
