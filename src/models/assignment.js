import { Schema, model, SchemaTypes } from "mongoose";

const valuesCourse = ["SegundoA", "SegundoB", "TerceroA", "TerceroB", "CuartoA", "CuartoB", "QuintoA", "QuintoB"];

const assignmentSchema = new Schema({
emailTeacher: {
    type:String,
    required:true,
    minlength: 8,
    maxlength: 32,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0
  },
  course: {
    type:String,
    enum:{
      values: valuesCourse,message:"Opción no valida"}
  },
  name: {
    type:String,
    required:true,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:100         
  },
  title: {
    type:String,
    required:true,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:100         
  },
  descriptión:{      
    type:String,
    required:true,
    maxlength:1200
  },
  emailStudents:{
    type:[String]
  },
  resourcesURL:[{
      type:String 
  }],
  startDate: {
    type:SchemaTypes.Date, 
    get: date => date.toISOString().split('T')[0], 
    set: date => new Date(date) 
  },
  finishDate: {
    type:SchemaTypes.Date, 
    get: date => date.toISOString().split('T')[0], 
    set: date => new Date(date) 
  },
},
{
  timestamps: true
}
);

export default model("Assignment", assignmentSchema);