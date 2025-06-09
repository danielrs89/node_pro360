const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/route');
const cors = require('cors');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});
