import UserEV from "../../../models/user.js";
import { schemaRegister } from "./validation.js";
import auth from "../../../config/firebase.js";
import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import validData from "../../utils/validData.js"
import partsDate from "../../utils/date.js"

//Registro de usuario en firebase
async function registerFirebase(request, response) {
  
  try {
    const { password, email } = request.body;

    const userFirebase = await createUserWithEmailAndPassword(auth, email, password);
      const userFB = userFirebase.user;
      console.log("Usuario registrado en firebase");
      
      //await sendEmailVerification(userFB); //Activar si se va a hacer prueba respectiva
      return userFB;
      
  } catch (error) {
    console.log("No se logro registrar al Usuario en Firebase")
    if (error.code === "auth/email-already-in-use") {
      response.status(409).json({error:"email is assigned to another user"});
    } else {
      const errorMessage = error.message
      response.status(500).json({ error: errorMessage });
    } 
    return { uid: null};
  }
};

export const registerMongoDB = async (request, response, next) => { 

  const mongoDBEmailDuplicate = 11000;

  validData(schemaRegister, response, request);
  try {

    const { name, lastName, birthdayDate, email, password, password2, securityQuestion, securityResponse, rol, acceptedTerms, course } = request.body;

    const emailRegistered = await UserEV.findOne({ email });
      if (emailRegistered) {
       return response.status(409).json({error:"Email Registered"})
      }

    if (password != password2) {
      return response.status(409).json({error:"The password do not match"})
    } else {

    const dateInfo = partsDate(birthdayDate, response);
      const {day, month, year} = dateInfo;
      const isoDate =`${year}-${month}-${day}T00:00:00.000Z`; 
      
      const userFB = await registerFirebase(request, response);

      if(userFB && userFB.uid) {

      //Creación de usuario en MongoDB
      const userMongoDB = new UserEV({
        uid: userFB.uid,
        name: name.toUpperCase(),
        lastName: lastName.toUpperCase(),
        birthdayDate: new Date(isoDate),
        email, 
        securityQuestion,
        securityResponse,
        rol,
        acceptedTerms,
        course
      });

      //Almacenamiento en MongoDB del usuario
      const userCreated = await userMongoDB.save();
        return response.status(201).json({
          message:"User created and stored successfully",
          data: userCreated
        }) 
      }
  }
  } catch (error) { 
      if (error.code === mongoDBEmailDuplicate || error.keyPattern || error.keyValue) {
      console.log(error);
      return response.status(409).json({error:"email is assigned to another user"});
    } 
    next (error);
  };
}

export default registerMongoDB;