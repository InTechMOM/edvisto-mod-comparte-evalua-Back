import express from "express"; 
const deliveryRouter = express.Router();

import delivery from "../controllers/post.js";
import allDeliveries from "../controllers/get.js"
import deliveryDelete from "../controllers/delete.js";
import studentFeedback from "../controllers/patch.js";
import getCount from "../controllers/getCount.js";

//Entregar un proyecto
deliveryRouter.post("/delivery/:id", delivery);

//Listar todos las entregas
deliveryRouter.get("/deliveries", allDeliveries); 

//Conteo
deliveryRouter.get("/deliveries/:id", getCount); 

//Calificar entrega
deliveryRouter.patch("/delivery/:id/feedback", studentFeedback);

//Eliminar Entrega
deliveryRouter.delete("/delivery/:id", deliveryDelete);

export default deliveryRouter;