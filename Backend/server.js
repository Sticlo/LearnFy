require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { connectDB } = require('./data/database'); 
const logger = require('./middlewares/logger.middleware'); 
const authMiddleware = require('./middlewares/auth.middleware');
const exampleRoutes = require('./routes/example.routes');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(express.json()); // Middleware para procesar JSON
app.use(cors()); // Middleware para habilitar CORS
app.use(logger); // Middleware de logs

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LearnFy API',
      version: '1.0.0',
      description: 'API para la aplicación LearnFy',
    },
    servers: [{ url: 'http://localhost:5000', description: 'Servidor de desarrollo' }]
  },
  apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api/example', authMiddleware, exampleRoutes);

app.get('/', (req, res) => {
  res.send('API LearnFy funcionando correctamente');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Swagger en http://localhost:${PORT}/api-docs`);
});
