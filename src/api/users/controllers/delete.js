import mongoose from "mongoose"; 
import UserEV from "../../../models/user.js";
import auth from "../../../config/firebase.js";
import adminFB from "../../../config/firebaseAdmin.js";
import isValidObjectId from "../../utils/valid.js"

const userDelete = async (request, response, next) => { 
  const id = request.params.id

  try { 
    
    isValidObjectId(id, response);

    const usertoDelete = await UserEV.findById(id);
    if (!usertoDelete) {
      return response.status(404).json({
        message:"User Not Found"})
    } 

    const {uid} = usertoDelete;
    console.log(usertoDelete);

    const deletedUser = await UserEV.findByIdAndDelete(id)
    console.log(deletedUser);
   
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