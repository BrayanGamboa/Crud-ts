import express from "express";
import { connectToDatabase } from "./services/database.service";
import { users } from "./routes/users.routes";
import { authRouter } from "./routes/login.routes";
import { decodeToken } from "./firebase/adminTokens";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const app = express();
const port = 8080; // default port to listen

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API REST Artist",
      description:
        "Esta API es documentada con Swagger, así se puede lograr un correcto y adecuado manejo a la misma.",
      contact: {
        name: "Brayan Gamboa",
        email: "bsgv2005@gmail.com",
      },
      servers: ["http://localhost:8080", "http://localhost:8020"],
      version: "1.0",
    },
  },
  apis: ["./dist/docs/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

connectToDatabase()
  .then(() => {
    // send all calls to /games to our gamesRouter
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/auth", authRouter);
    app.use(decodeToken);

    app.use("/users", users);

    // start the Express server
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  })
  .catch((error: Error) => {
    console.error("Database connection failed", error);
    process.exit();
  });
