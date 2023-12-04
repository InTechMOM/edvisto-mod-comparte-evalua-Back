import auth from "../../../config/firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import UserEV from "../../../models/user.js";
import { schemaUpdate } from "./validation.js";

//Resetear contraseña
const resetPassword = async (request, response, next)  => {

try {
  
  //Lectura de datos
  const { email, securityResponse } = request.body;

  const {error} = schemaUpdate.validate(request.body);
    if (error) { 
      return response.status(400).json({error: error.details[0].message});
    }

  const user = await UserEV.findOne({email});

  if (!user) {
    return response.status(403).json({ error:"Unregistered Email"});
  }

  if(user.securityResponse !== securityResponse) {
    return response.status(403).json({ error:"Incorrect security response"})}

  //await sendPasswordResetEmail(auth, email);

  return response.status(200).json({ error:"A password reset email has been sent"})
} catch (error) { 
  next (error);
  };
}

export default resetPassword;