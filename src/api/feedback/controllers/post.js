import mongoose from "mongoose"; 
import UserEV from "../../../models/user.js";
import StudentsFeedback from "../../../models/feedback.js";
import Assignment from "../../../models/assignment.js";
import { schemaDelivery } from "./validation.js";
import isValidObjectId from "../../utils/valid.js"
import validData from "../../utils/validData.js"

async function delivery (request, response, next) {
  try {
    const { emailStudent, videoURL } = request.body;
    const assignmentId = request.params.id

    validData(schemaDelivery, response, request);

    isValidObjectId(assignmentId, response);
     
    //El estudiante esta asignado
    const isAssigned = await Assignment.findOne({
      _id:assignmentId,
      emailStudents: {$in: [emailStudent]},
    })
      .select("course title")
      .exec();
    
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
      course: isAssigned.course,
      title: isAssigned.title,
      emailStudent,
      videoURL,
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