import mongoose from "mongoose"; 
import UserEV from "../../../models/user.js";
import auth from "../../../config/firebase.js";
import adminFB from "../../../config/firebaseAdmin.js";

const userDelete = async (request, response, next) => { 
  const id = request.params.id

  try { 
    
    //Lectura del id del usuario (MongoDB)
    if (!mongoose.isValidObjectId(id)) {
      return response.status(422).json({message: "Id Not Valid" });
    }

    //Busqueda del usario y eliminación
    const usertoDelete = await UserEV.findById(id);
    if (!usertoDelete) {
      return response.status(404).json({
        message:"User Not Found"})
    } 

    const {uid} = usertoDelete;

    const deletedUser = await UserEV.findByIdAndDelete(id)
   
    await adminFB.auth().deleteUser(uid);
      return response.status(200).json({
       message:"User successfully deleted",
       data: deletedUser
      })
  }catch (error) { 
    switch (error.code) {
      case 'auth/invalid-uid':
        break;
    }
    next (error);
  };
}
export default userDelete;