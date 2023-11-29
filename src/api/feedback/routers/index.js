import express from "express"; 
const deliveryRouter = express.Router();

import delivery from "../controllers/post.js";
import allDeliveries from "../controllers/get.js"
import deliveryDelete from "../controllers/delete.js";
import studentFeedback from "../controllers/patch.js";
import getCount from "../controllers/getCount.js";

deliveryRouter.post("/delivery/:id", delivery);

deliveryRouter.get("/deliveries", allDeliveries); 

deliveryRouter.get("/deliveries/:id", getCount); 

deliveryRouter.patch("/delivery/:id/feedback", studentFeedback);

deliveryRouter.delete("/delivery/:id", deliveryDelete);

export default deliveryRouter;