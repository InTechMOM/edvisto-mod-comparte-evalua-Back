import mongoose from "mongoose"; 
import Assignment from "../../../models/assignment.js";
import { SchemaAssignment } from "./validation.js";
import UserEV from "../../../models/user.js";
import validData from "../../utils/validData.js"
import partsDate from "../../utils/date.js"

function dateValidation (date) {
  const currentDate = new Date();

  try{
    const dateInfo = partsDate(date);
    const {day, month, year} = dateInfo;
    const inputDate = new Date(year, month - 1, day); //enero = 0

    if (inputDate >= currentDate) {
      return `${year}-${month}-${day}T00:00:00.000Z`;
    } else {
      throw new Error("Invalid date");
    }
  } catch (error) {
    throw new Error("Wrong date format");
  }
}

async function assignment(request, response, next) {
  try {

    validData(SchemaAssignment, response, request);

    const { course, emailTeacher, name, title, descriptión, emailStudents, resourcesURL, startDate, finishDate} = request.body;

    //Verificación que sea un email de docente
    const teacher = await UserEV.findOne({ email:emailTeacher, rol:"Soy Docente" });
    
    if (!teacher) {
      return response.status(404).json({
        error:"Unregistered teacher email"
      })
    }

    //Validación de fecha posterior a la actual
    const isoStart = dateValidation(startDate)
    const isoFinish = dateValidation(finishDate)

    //Creación de la asignación
    const newAssignment = new Assignment ({
      emailTeacher, 
      course,
      name : name.toUpperCase(),
      title : title.toUpperCase(), 
      descriptión, 
      emailStudents,
      resourcesURL,
      startDate: new Date(isoStart),
      finishDate: new Date(isoFinish)
    })

    //Almacenamiento de la asignación
    const saveAssignment = await newAssignment.save()
    return response.status(201).json({
      message:"Assigned Project",
      data: saveAssignment
    })   
  } catch (error) {
    if (error.message === "Invalid date" || error.message === "Wrong date format") {
      return response.status(400).json("Invalid date. The start/end date must be equal to or later than the current date.");
    } else {
    next (error)
    } 
  }
}

export default assignment;