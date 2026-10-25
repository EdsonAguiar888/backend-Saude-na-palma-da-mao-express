
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Saúde na Palma da Mão - API',
      version: '1.0.0',
      description: 'Documentação da API do projeto Saúde na Palma da Mão.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor local de desenvolvimento',
      },
    ],
  },
  apis: [
  path.join(__dirname, '../routes/*.js'),
  path.join(__dirname, '../controllers/*.js'),
],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;