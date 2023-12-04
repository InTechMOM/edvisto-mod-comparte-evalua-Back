//Validación de id
import mongoose from "mongoose"; 

function isValidObjectId(id) {
  if (!mongoose.isValidObjectId(id)) {
  throw new Error ("Id Not Valid");
  }
}

export default isValidObjectId;