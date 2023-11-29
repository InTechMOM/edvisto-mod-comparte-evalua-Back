import UserEV from "../../../models/user.js";
import { schemaLogin } from "./validation.js";
import auth from "../../../config/firebase.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import authorizationRol from "../../utils/authorizationRol.js";
import validData from "../../utils/validData.js"

const login = async (request, response, next) => {
  try {
  
    // Login
    validData(schemaLogin, response, request)

    // Lectura de datos
    const { email, password } = request.body;

    //Verificación de existenciaa de usuario
    const user = await UserEV.findOne({email});

    if (!user) {
      return response.status(403).json({ error:"Unauthorized Access" });
    } 
  
    //Usuario autorizado por firebase
    try {
      await signInWithEmailAndPassword(auth, email, password);

      //Reestablecimeinto de bloqueo
      user.attemptsFailed = 0;
      user.blocked = false;
      await user.save();

      const rolWhich = await UserEV.findOne({email});

      authorizationRol(rolWhich, response);

    } catch (error) {
      //Captación de llamada de error por contraseña erronéa de firebase
      if (error.code === "auth/wrong-password") {

        const attemptsAllowed = 3;
        
        user.attemptsFailed += 1;
        if (user.attemptsFailed === attemptsAllowed){

          user.blocked = true;

          //email de reestablecimiento
          //await sendPasswordResetEmail(auth, email); 
          await user.save();
          return response.status(403).json({ error:"Blocked account. A password reset email has been sent"});
        }

        await user.save();
        return response.status(400).json("Wrong Password")
      }
    } 
  } catch (error) { 
   if (error.message === "auth/too-many-requests") {
     return response.status(400).json("Blocked account. A password reset email has been sent")
   } next (error);
  }

};

export default login;