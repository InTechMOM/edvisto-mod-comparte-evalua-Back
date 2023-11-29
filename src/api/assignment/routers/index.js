import express from "express"; 
const assignmentRouter = express.Router();

import assignment from "../controllers/post.js";
import allProjects from "../controllers/get.js"
import assignmentDelete from "../controllers/delete.js";

assignmentRouter.post("/project", assignment);

assignmentRouter.get("/projects", allProjects); 

assignmentRouter.delete("/project/:id", assignmentDelete);

export default assignmentRouter;