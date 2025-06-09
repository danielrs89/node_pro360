📁 ESTRUCTURA DEL PROYECTO
pgsql
Copiar
Editar
provider-api/
├── controllers/
│   └── providerController.js
├── routes/
│   └── providerRoutes.js
├── db/
│   └── connection.js
├── .env
├── app.js
├── package.json
└── README.md
📦 PASOS PARA CREAR EL PROYECTO
1. Inicializa el proyecto y dependencias
bash
Copiar
Editar
mkdir provider-api
cd provider-api
npm init -y
npm install express mysql2 dotenv
2. Archivo .env
Crea .env en la raíz:

env
Copiar
Editar
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=provider_db
PORT=3000
3. Conexión a la base de datos (db/connection.js)
js
Copiar
Editar
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(error => {
  if (error) throw error;
  console.log('🟢 Conectado a la base de datos MySQL');
});

module.exports = connection;
4. Controlador básico (controllers/providerController.js)
js
Copiar
Editar
const db = require('../db/connection');

exports.getProviders = (req, res) => {
  db.query('SELECT * FROM providers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getProviderById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM providers WHERE id_provider = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: 'Proveedor no encontrado' });
    res.json(results[0]);
  });
};
5. Rutas (routes/providerRoutes.js)
js
Copiar
Editar
const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

router.get('/', providerController.getProviders);
router.get('/:id', providerController.getProviderById);

module.exports = router;
6. App principal (app.js)
js
Copiar
Editar
const express = require('express');
const dotenv = require('dotenv');
const providerRoutes = require('./routes/providerRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/providers', providerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
7. Ejecutar el servidor
bash
Copiar
Editar
node app.js
