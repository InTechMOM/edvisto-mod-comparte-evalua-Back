import express from "express"; 
const assignmentRouter = express.Router();

import assignment from "../controllers/post.js";
import allProjects from "../controllers/get.js"
import assignmentDelete from "../controllers/delete.js";

//Crear y asignar una tarea
assignmentRouter.post("/project", assignment);

//Listar todos las tareas
assignmentRouter.get("/projects", allProjects); 

//Eliminar usuarios
assignmentRouter.delete("/project/:id", assignmentDelete);

export default assignmentRouter;