const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example.controller');

/**
 * @swagger
 * /api/example:
 *   get:
 *     summary: Obtiene un ejemplo de respuesta
 *     responses:
 *       200:
 *         description: Respuesta exitosa.
 */
router.get('/', exampleController.getExample);

module.exports = router; 
