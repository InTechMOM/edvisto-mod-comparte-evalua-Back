import auth from "../../../config/firebase.js";
import { sendPasswordResetEmail } from "firebase/auth";
import UserEV from "../../../models/user.js";

//Resetear contraseña
const resetPassword = async (request, response, next)  => {

try {
  
  //Lectura de datos
  const { email, securityResponse } = request.body;

  const user = await UserEV.findOne({email});

  if (!user) {
    return response.status(403).json({ error:"Unregistered Email"});
  }

  if(user.securityResponse !== securityResponse) {
    return response.status(403).json({ error:"Incorrect security response"})}
  //Envio de correo de reestablecimiento
  //await sendPasswordResetEmail(auth, email);

  return response.status(200).json({ error:"A password reset email has been sent"})
} catch (error) { 
  next (error);
  };
}

export default resetPassword;