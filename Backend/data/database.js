const { Pool } = require('pg');
require('dotenv').config(); // Cargar variables de entorno

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// Verificar conexión
const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Conexión a PostgreSQL exitosa');
    client.release();
  } catch (error) {
    console.error('Error en conexión a PostgreSQL:', error);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };
