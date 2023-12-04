import mongoose from "mongoose"; 
import Assignment from "../../../models/assignment.js";

//Listar proyectos asignados
const allProjects = async (request, response, next) => { 
  const { course, emailTeacher, name, title} = request.query;

  try {
     
    const filters = { 
      ...course && { course },
      ...emailTeacher && { emailTeacher },
      ...name && { name },
      ...title && { title },
    }; 

    const arrayProjects = await Assignment.find(filters); 

    if (arrayProjects?.length === 0) {
      return response.status(404).json({ 
        message:"Projects Not Found"});
    }
    return response.status(200).json({ 
      message:"Projects found successfully",
      "Projects":arrayProjects});
  } catch (error) { 
    next (error);
  }
}

export default allProjects;