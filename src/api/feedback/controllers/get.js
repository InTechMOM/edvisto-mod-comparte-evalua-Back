import mongoose from "mongoose"; 
import StudentsFeedback from "../../../models/feedback.js";

//Listar proyectos entregados
const allDeliveries = async (request, response, next) => { 
  const { assignmentId, emailStudent, email, course, title, qualified} = request.query;

  try {
     
    const filters = { 
      ...assignmentId && { assignmentId },
      ...emailStudent && { emailStudent },
      ...email && { email },
      ...course && { course },
      ...title && { title },
      ...qualified && { qualified},
    }; 

    const arrayDeliveries = await StudentsFeedback.find(filters); 

    if (arrayDeliveries?.length === 0) {
      return response.status(404).json({ 
        message:"Deliveries Not Found"});
    }
    return response.status(200).json({ 
      message:"Deliveries found successfully",
      "Deliveries":arrayDeliveries});
  } catch (error) { 
    next (error);
  }
}

export default allDeliveries;