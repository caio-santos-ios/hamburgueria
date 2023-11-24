import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hamburgueria',
      version: '1.0.0',
      description: 'Uma api para fazer a gestão de lanchanote, podendo fazer pedidos, a cozinha recebe e da precedimento.',
    }
  },
  apis: [
    './src/routers/*.router.ts',
    './src/interfaces/*.interface.ts',
  ]
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
