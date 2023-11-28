import auth from "../../../config/firebase.js";
import UserEV from "../../../models/user.js";
import adminFB from "../../../config/firebaseAdmin.js";
import { signOut } from "firebase/auth";
import authorizationRol from "../../utils/authorizationRol.js"

export async function registerGoogle(request, response, next) {
  try {

    //El proveedor genera un token con el identifica al usuario
    const {user, idToken} = request.body;
    
    const adminAuth = adminFB.auth();

    const { uid, email, displayName } = user;

    //Verificación el token pertenezca a un usuario atenticado con google
    const tokenVerify = await adminAuth.verifyIdToken(idToken);
    console.log(idToken);

    if (tokenVerify) {

      const observerUser = await UserEV.findOne({uid});
        
      if (observerUser){
        return response.status(200).json({
          message:"User Authenticated",
        })
      } else {
        //Creación de usuario en MongoDB
        const userMongoDB = new UserEV({
          uid,
          email,
          name: displayName.toUpperCase()
        });

        //Almacenamiento en MongoDB del usuario
        const userCreated = await userMongoDB.save();

        const rolWhich = await UserEV.findOne({email});
        authorizationRol(rolWhich, response, userCreated);
      }

    } else {
      return response.status(400).json("It was not possible to authenticate the user");
    }
  } catch (error) {
    console.error("Error:",error)
    return response.status(500).json("Authentication Error"); //("Error al registrar el usuario en Firebase"); // Se detiene la ejecución y se manejara desde el midd de errores
  }
}

//Cierre de sesión (manual) si se usa toda modificar los errores del fetch
export async function signOutUser() {
  try {
    await signOut(auth);
    return response.status(200).json("Successful Logout");
  } catch (error) {
    return response.status(500).json("I couldn't log out, try again later");
  }
}