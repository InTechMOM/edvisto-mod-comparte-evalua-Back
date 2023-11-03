import express from "express"; 
const usersRouter = express.Router();

import registerMongoDB from "../controllers/post.js";
import allUsers from "../controllers/get.js";
import userDelete from "../controllers/delete.js";
import login from "../controllers/login.js";
import resetPassword from "../controllers/patch.js"; 
import { registerGoogle } from "../controllers/authenticationGoogle.js";
import { signOutUser } from "../controllers/authenticationGoogle.js";

//Crear el usuario
usersRouter.post("/register", registerMongoDB);
usersRouter.post("/login", login);
usersRouter.post("/registergoogle", registerGoogle);
usersRouter.post("/logout", signOutUser);

//Listar todos los usuarios
usersRouter.get("/users", allUsers); 

//Eliminar usuarios
usersRouter.delete("/users/:id", userDelete);

//Actualizar el usuario
usersRouter.patch("/resetPassword", resetPassword);

export default usersRouter;