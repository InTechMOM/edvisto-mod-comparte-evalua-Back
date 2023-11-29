//Validación de id
import mongoose from "mongoose"; 

function isValidObjectId(id, response) {
  if (!mongoose.isValidObjectId(id)) {
  return response.status(422).json({message: "Id Not Valid"});}
}

export default isValidObjectId;