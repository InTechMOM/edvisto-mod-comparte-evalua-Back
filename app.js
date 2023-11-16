import express from "express"; 
import cors from "cors";
import { port } from "./src/config/index.js"; 
import "./src/config/dbConnection.js"; 
import bodyParser from "body-parser"; 
import middlewareErrors from "./src/api/errors/errors.js";
import usersRouter from "./src/api/users/routers/index.js";
import assignmentRouter from "./src/api/assignment/routers/index.js";
import deliveryRouter from "./src/api/feedback/routers/index.js";
import { serverRead } from "./src/api/users/controllers/get.js";
import swaggerUi from "swagger-ui-express";
import { openApiSpecification } from "./src/config/swagger.js";

const app = express(); 

//API´s
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
app.use(cors());
app.get("/", serverRead);
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerUi.setup(openApiSpecification));
app.use("/api", usersRouter);
app.use("/api", assignmentRouter);
app.use("/api", deliveryRouter);

//Errores
app.use(middlewareErrors);

app.listen(port, (error) => { 
  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
});

