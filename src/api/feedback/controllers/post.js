import mongoose from "mongoose"; 
import UserEV from "../../../models/user.js";
import StudentsFeedback from "../../../models/feedback.js";
import Assignment from "../../../models/assignment.js";
import { schemaDelivery } from "./validation.js";

async function delivery (request, response, next) {
  try {
    const { emailStudent, videoURL } = request.body;
    const assignmentId = request.params.id

    //Validación de datos
    const {error} = schemaDelivery.validate(request.body);
    if (error) { 
      return response.status(422).json({error: error.details[0].message}) 
    }

    //Validación del id de la asignación
    if (!mongoose.isValidObjectId(assignmentId)) {
      return response.status(422).json({message: "Id Not Valid"})
    }
 
    //El estudiante esta asignado
    const isAssigned = await Assignment.findOne({
      _id:assignmentId,
      emailStudents: {$in: [emailStudent]}
    });
    
    if (!isAssigned) {
      return response.status(404).json({
        error:"Assignment not Found"
      })
    }

    //Verificación que sea un email de estudiante
    const student = await UserEV.findOne({email:emailStudent, rol:"Soy Estudiante"});
    if (!student) {
      return response.status(404).json({
        error:"Unregistered student email"
      })
    }

    //Creación de entrega
    const delivery = await new StudentsFeedback({
      assignmentId : assignmentId,
      emailStudent,
      videoURL
    });

    //Almacenamiento de la entrega
    const saveDelivery = await delivery.save();

    return response.status(201).json({
      message:("Successfully delivered"),
      data: saveDelivery
    })

  } catch (error) { 
    if  (error.code === 11000) {
      return response.status(409).json({error:"URL is assigned to another user"});
    } next (error)
  }
}

export default delivery;