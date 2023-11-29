import Joi from "joi"; 
import JoiDate from "@joi/date";

const extendedJoi = Joi.extend(JoiDate);

const valuesRoles=["Soy Estudiante", "Soy Docente"]
const valuesSecurityQuestions=[
  "Nombre de tu mascota",
  "Libro preferido", 
  "Nombre de tu abuelo"
]
const valuesCourse = ["SegundoA", "SegundoB", "TerceroA", "TerceroB", "CuartoA", "CuartoB", "QuintoA", "QuintoB"];

export const schemaRegister = Joi.object ({
  name: Joi.string().min(3).max(50).strict().required(),
  lastName: Joi.string().min(3).max(50).strict().required(),
  birthdayDate: extendedJoi.date().format("DD-MM-YYYY"), 
  email: Joi.string().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}).required(),
  password: Joi.string().min(6).max(20).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/).required(),
  password2: Joi.string().min(6).max(20).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/).required(),
  securityQuestion: Joi.string().valid(...valuesSecurityQuestions).required(),
  securityResponse: Joi.string().min(3).max(15).strict().trim().required(),
  rol: Joi.string().valid(...valuesRoles).required(),
  acceptedTerms: Joi.boolean().required(),
  course: Joi.string().valid(...valuesCourse),
})

export const schemaLogin = Joi.object ({
  email: Joi.string().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}).required(),
  password: Joi.string().min(6).max(20).pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/).required()
})