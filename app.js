import express from "express";
import http from "http";
import cors from "cors";
import routes from "./routes/customerRoutes.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import "./database/index.js";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  routes() {
    this.server.use(routes);
  }
}

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Kraut und Rueben API",
    version: "1.0.0",
    description:
      "This is a REST API application made with Express. All the existing methods/functions are able to test and have live support.",
  },
  servers: [
    {
      url: "http://localhost:3333",
      description: "Development server",
    },
  ],
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const server = http.Server(new App().server);

server.listen(3333, () => console.log(`listen on port 3333`));
