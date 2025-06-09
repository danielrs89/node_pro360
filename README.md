# NODE_PRO360

## 📁 ESTRUCTURA DEL PROYECTO

```pgsql
provider-api/
├── controllers/
│   └── controller.js
├── routes/
│   └── route.js
├── db/
│   └── connection.js
├── .env
├── app.js
├── package.json
└── README.md
```

## 📦 PASOS PARA CREAR EL PROYECTO

### 1. Inicializa el proyecto y dependencias

```bash
mkdir node_pro360
cd node_pro360
npm init -y
npm install express mysql2 dotenv
npm install --save-dev nodemon
```

### 2. Archivo .env

Crea .env en la raíz:

```env

DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
PORT=3000
```

### 3. Conexión a la base de datos (db/connection.js)

```js
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("🟢 Conectado a la base de datos MySQL");
});

module.exports = connection;
```

### 4. Controlador básico (controllers/providerController.js)

```js
const db = require("../db/connection");

exports.getProviders = (req, res) => {
  db.query("SELECT * FROM providers", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
```

### 5. Rutas (routes/providerRoutes.js)

```js
const express = require("express");
const router = express.Router();
const providerController = require("../controllers/controller");

router.get("/", providerController.getProviders);

module.exports = router;
```

### 6. App principal (app.js)

```js
const express = require("express");
const dotenv = require("dotenv");
const providerRoutes = require("./routes/route");

dotenv.config();
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
```

## 7. Ejecutar el servidor

```bash
node app.js
```
