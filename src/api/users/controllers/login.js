import UserEV from "../../../models/user.js";
import { schemaLogin } from "./validation.js";
import auth from "../../../config/firebase.js";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const login = async (request, response, next) => {
  try {
  
    // Login
    const {error} = schemaLogin.validate(request.body);
    if (error) { 
      return response.status(400).json({error: "Bad Request"});
    }

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
      console.log(user.blocked);

      
      const rolWhich = await UserEV.findOne({email});
      if (rolWhich) {
        if (rolWhich.rol === "Soy Docente") {
         return response.status(200).json("Welcome teacher");
        } else {
          return response.status(200).json("Welcome student");
        }
      }

    } catch (error) {
      //Captación de llamada de error por contraseña erronéa de firebase
      if (error.code === "auth/wrong-password") {

        
        user.attemptsFailed += 1;
        if (user.attemptsFailed === 3){

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