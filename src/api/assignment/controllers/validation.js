import Joi from "joi"; 
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);

//Esquema de asignación
export const SchemaAssignment =   Joi.object ({
    emailTeacher: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    course: Joi.string().required(),
    name: Joi.string().required().min(3).max(100),
    title: Joi.string().required().min(3).max(100),
    descriptión: Joi.string().required().max(1200),
    emailStudents: Joi.array().items(Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}})),
    resourcesURL: Joi.array().items(Joi.string()),
    startDate: extendedJoi.date().format("DD-MM-YYYY"),
    finishDate: extendedJoi.date().format("DD-MM-YYYY")
})

export const schemaUpdate =   Joi.object ({
  emailStudent: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
  videoURL: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
})
