const app = require('./app');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const port = process.env.PORT || 3000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: "VUTTR API",
      description: "VUTTR API Information",
      contact: {
        name: "Dinaerte Neto",
        email: 'dinaerteneto@gmail.com'
      },
    },
    basePath: '/'
  },
  apis: ['./src/routes.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
