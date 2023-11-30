import mongoose from "mongoose"; 
import Assignment from "../../../models/assignment.js";
import { SchemaAssignment } from "./validation.js";
import UserEV from "../../../models/user.js";
import partsDate from "../../utils/date.js"

function dateValidation (date) {
  const currentDate = new Date();

  try{
    const dateInfo = partsDate(date);
    const {day, month, year} = dateInfo;
    const inputDate = new Date(year, month - 1, day);

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
    let isoStart;
    let isoFinish;

    const {error} = SchemaAssignment.validate(request.body);
    if (error) { 
      return response.status(422).json({error: error.details[0].message}) 
    }

    const { course, emailTeacher, name, title, descriptión, emailStudents, resourcesURL, startDate, finishDate} = request.body;

    const teacher = await UserEV.findOne({ email:emailTeacher, rol:"Soy Docente" });
    
    if (!teacher) {
      return response.status(404).json({
        error:"Unregistered teacher email"
      })
    }

    const newAssignmentData = {
      emailTeacher, 
      course,
      name : name.toUpperCase(),
      title : title.toUpperCase(), 
      descriptión, 
      emailStudents,
      resourcesURL,
    }

    if ( isoStart && isoFinish) {
      isoStart = dateValidation(startDate)
      isoFinish = dateValidation(finishDate)
      newAssignmentData.isoStart = new Date(isoStart),
      newAssignmentData.isoFinish = new Date(isoFinish)
    }

    const newAssignment = new Assignment(newAssignmentData);

    const saveAssignment = await newAssignment.save()
    return response.status(201).json({
      message:"Assigned Project",
      data: saveAssignment
    })   
  } catch (error) {
    if (error.message === "Invalid date" || error.message === "Wrong date format") {
      return response.status(422).json("Invalid date. The start/end date must be equal to or later than the current date.");
    } else {
    next (error)
    } 
  }
}

export default assignment;