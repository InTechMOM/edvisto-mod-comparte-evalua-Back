import Assignment from "../../../models/Assignment.js";
import SchemaAssignment from "./validation.js";
import UserEV from "../../../models/user.js";

async function assignment(request, response, next) {
  try {

    //Validación
    const {error} = SchemaAssignment.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
    }

    //Lectura de datos
    const { course, emailTeacher, name, title, descriptión, emailStudents, resourcesURL, startDate, finishDate} = request.body;

    //Verificación que sea un email de docente
    const teacher = await UserEV.findOne({ email:emailTeacher, rol:"Soy Docente" });
    
    if (!teacher) {
      return response.status(404).json({
        error:"Unregistered teacher email"
      })
    }

    let isoStart;
    let isoFinish;

    //Validación de fechas
    const dateStart = startDate.split("-");
    if (dateStart.length === 3) {
      const [day, month, year] = dateStart; // Es un array
      isoStart =`${year}-${month}-${day}T00:00:00.000Z`;
    }

    const dateFinish = finishDate.split("-");
    if (dateFinish.length === 3) {
      const [day, month, year] = dateFinish; // Es un array
      isoFinish =`${year}-${month}-${day}T00:00:00.000Z`;
    }

    //Creación de la asignación
    const newAssignment = new Assignment ({
      emailTeacher, 
      course,
      name,
      title, 
      descriptión, 
      emailStudents,
      resourcesURL,
      startDate: new Date(isoStart),
      finishDate: new Date(isoFinish)
    })

    //Almacenamiento de la asignación
    const saveAssignment = await newAssignment.save()
    response.status(201).json({
      message:"Assigned Project",
      data: saveAssignment
    })   
  } catch (error) {
    next (error)
  } 
}

export default assignment;