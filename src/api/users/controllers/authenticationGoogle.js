import auth from "../../../config/firebase.js";
import UserEV from "../../../models/user.js";
import adminFB from "../../../config/firebaseAdmin.js";
import { signOut } from "firebase/auth";
import authorizationRol from "../../utils/authorizationRol.js"

export async function registerGoogle(request, response, next) {
  try {

    const {user, idToken} = request.body;
    
    const adminAuth = adminFB.auth();

    const { uid, email, displayName } = user;

    const tokenVerify = await adminAuth.verifyIdToken(idToken);

    if (tokenVerify) {

      const observerUser = await UserEV.findOne({uid});
             
      if (observerUser){

        const refreshToken = user.stsTokenManager.refreshToken;

        authorizationRol(observerUser, response, idToken, refreshToken);

      } else {

        const userMongoDB = new UserEV({
          uid,
          email,
          name: displayName.toUpperCase(),
          rol: "Soy Estudiante"
        });

        const userCreated = await userMongoDB.save();

        return response.status(201).json({
          message:"User created and authenticated",
          data : userCreated })
        
      }

    } else {
      return response.status(401).json("It was not possible to authenticate the user");
    }
  } catch (error) {
    return response.status(500).json("Authentication Error"); 
  }
}

export async function signOutUser() {
  try {
    await signOut(auth);
    return response.status(200).json("Successful Logout");
  } catch (error) {
    return response.status(500).json("I couldn't log out, try again later");
  }
}