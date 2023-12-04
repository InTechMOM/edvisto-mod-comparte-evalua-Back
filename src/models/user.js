import { Schema, model, SchemaTypes } from "mongoose";

const valuesCourse = ["SegundoA", "SegundoB", "TerceroA", "TerceroB", "CuartoA", "CuartoB", "QuintoA", "QuintoB"];
const valuesCountry=[
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Paraguay", "Perú", "Uruguay", "Costa Rica",
  "Cuba", "El Salvador", "Guatemala", "Honduras", "México", "Nicaragua", "Panamá" ]
const valuesRoles = ["Soy Estudiante", "Soy Docente"];
const valuesSecurityQuestions = ["Nombre de tu mascota", "Animal favorito", "Nombre de tu abuelo"]

const userSchema = new Schema({
  name: {
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:50,
  },
  lastName: {
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:50
  },
  birthdayDate: {
    type:SchemaTypes.Date, 
    get: date => date.toISOString().split('T')[0], 
    set: date => new Date(date) 
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
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/, 
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
    match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).*$/, 
  },
  securityQuestion:{
    type:String,
    enum:{
    values: valuesSecurityQuestions,message:"Opción no valida"}
  },
  securityResponse:{
    type:String,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:15
  },
  rol: {
    type:String,
    enum:{
    values: valuesRoles,message:"Opción no valida"}
  },
  country: {
    type:String,
    enum:{
      values: valuesCountry,message:"Opción no valida"}
  },
  course: {
    type:String,
    enum:{
      values: valuesCourse,message:"Opción no valida"}
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
  }
},
{
  timestamps: true
});

export default model("UserEV", userSchema);