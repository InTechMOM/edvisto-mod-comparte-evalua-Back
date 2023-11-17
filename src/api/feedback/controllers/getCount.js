import mongoose from "mongoose"; 
import StudentsFeedback from "../../../models/feedback.js";

//Listar
const getCount = async (request, response, next) => { 
  try {
    const id = request.params.id
        
    //Validación del id de la asignación
    if (!mongoose.isValidObjectId(id)) {
      return response.status(422).json({message: "Id Not Valid"})
    }
 
    //Cantidad de projectos entregados calificados por asignación
    const qualifiedCount = await StudentsFeedback.countDocuments({
      assignmentId : id,
      qualified:true
    });

    const totalDocumentsCount = await StudentsFeedback.countDocuments ({ assignmentId : id }); 

    //Formato deseado
    const resultString = `${qualifiedCount}/${totalDocumentsCount}`;

    return response.status(200).json({ 
      qualifiedCount,
      totalDocumentsCount,
      resultString
    });
  } catch (error) { 
    next (error);
  }
}

export default getCount;