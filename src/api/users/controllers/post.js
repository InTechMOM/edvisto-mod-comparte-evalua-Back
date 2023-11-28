import UserEV from "../../../models/user.js";
import { schemaRegister } from "./validation.js";
import auth from "../../../config/firebase.js";
import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import validData from "../../utils/validData.js"
import partsDate from "../../utils/date.js"

//Registro de usuario en firebase
async function registerFirebase(request) {
  try {
    const { password, email } = request.body;

    const userFirebase = await createUserWithEmailAndPassword(auth, email, password);
      const userFB = userFirebase.user;
      console.log("Usuario registrado en firebase");
      
      //Envio de correo de verificación (comentado para pruebas, evitando spam)
      //await sendEmailVerification(userFB); //Activar si se va a hacer prueba respectiva
      console.log("Envio correo de verificación");
      return userFB;
      
  } catch (error) {
    console.log("No se logro registrar al Usuario en Firebase")
    const errorMessage = error.message
    console.error("Error:",errorMessage)
    return error.message; //("Error al registrar el usuario en Firebase"); // Se detiene la ejecución y se manejara desde el midd de errores
  }
}

export const registerMongoDB = async (request, response, next) => { 

//Registro 

  validData(schemaRegister, response, request);

  try {

    //Lectura de datos
    const { name, lastName, birthdayDate, email, password, password2, securityQuestion, securityResponse, rol, acceptedTerms, course } = request.body;

    //Email unico
    const emailRegistered = await UserEV.findOne({ email });
      if (emailRegistered) {
       return response.status(409).json({error:"Email Registered"})
      }

    //Password suministradas coinciden
    if (password != password2) {
      return response.status(409).json({error:"The password do not match"})
    } else {

    const dateInfo = partsDate(birthdayDate, response);
      const {day, month, year} = dateInfo;
      const isoDate =`${year}-${month}-${day}T00:00:00.000Z`; // comillas simples para interpolar variablesj
      
      const userFB = await registerFirebase(request);

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
        response.status(201).json({
          message:"User created and stored successfully",
          data: userCreated
        })  
  }
  } catch (error) { 
      if (error.code === 11000 || error.keyPattern || error.keyValue) {
      console.log(error)
      return response.status(409).json({error:"email is assigned to another user"});
    } next (error);
  };
}

export default registerMongoDB;