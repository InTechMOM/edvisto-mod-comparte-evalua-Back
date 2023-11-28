import mongoose from "mongoose"; 

//Función de validación de id

function isValidObjectId(id, response) {
  if (!mongoose.isValidObjectId(id)) {
  return response.status(422).json({message: "Id Not Valid"});}
}

export default isValidObjectId;