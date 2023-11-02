import { Schema, model, SchemaTypes } from "mongoose";

let values_roles=["Soy Alumno", "Soy Docente"];
let values_securityQuestions=[
  "Nombre de tu mascota",
  "Animal favorito", 
  "Nombre de tu abuelo"
]

const userSchema = new Schema({
  name: {
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:15
  },
  lastName: {
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:15
  },
  birthdayDate: {
    type:SchemaTypes.Date, // Almacena la fecha en formato YYYY-MM-DD
    get: date => date.toISOString().split('T')[0], // Esto obtiene la fecha en formato YYYY-MM-DD
    set: date => new Date(date) // Esto asegura que siempre se almacene como una fecha
  },
  email: {
    type:String,
    required:true,
    minlength: 8,
    maxlength: 32,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0, 
    unique: true 
  },
  password: {
    type:String,
    alphanum:true,
    minlength:6,
    maxlength:20,
    minOfUppercase:1, 
    minOfNumeric:1, 
    noWhiteSpaces:0, 
    minOfSpecialCharacters:1, 
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/, //validaciones para evitar inserción a la bd, no para usuario
  },
  password2: {
    type:String,
    alphanum:true,
    minlength:6,
    maxlength:20,
    minOfUppercase:1, 
    minOfNumeric:1, 
    noWhiteSpaces:0, 
    minOfSpecialCharacters:1, 
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/, //validaciones para evitar inserción a la bd, no para usuario
  },
  securityQuestion:{
    type:String,
    enum:{
    values: values_securityQuestions,message:"Opción no valida"}
  },
  securityResponse:{
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:15
  },
  rol: {
    type:String,
    enum:{
    values: values_roles,message:"Opción no valida"}
  },
  acceptedTerms: {
    type: Boolean
  },
  blocked: {
    type: Boolean,
    default: false
  },
  attemptsFailed: { 
    type: Number,
    default: 0
  },
  uid: {
    type: String
  },
  course: {
    type:String
  }
})

export default model("UserEV", userSchema);