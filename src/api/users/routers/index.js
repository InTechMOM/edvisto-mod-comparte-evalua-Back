import express from "express"; 
const usersRouter = express.Router();

import registerMongoDB from "../controllers/post.js";
import allUsers from "../controllers/get.js";
import userDelete from "../controllers/delete.js";

//Crear el usuario
usersRouter.post("/register", registerMongoDB);

//Listar todos los usuarios
usersRouter.get("/users", allUsers); 

//Eliminar usuarios
usersRouter.delete("/users/:id", userDelete);

export default usersRouter;