import mongoose from "mongoose"; 
import UserEV from "../../../models/user.js";
import auth from "../../../config/firebase.js";
import adminFB from "../../../config/firebaseAdmin.js";
import isValidObjectId from "../../utils/valid.js"

const userDelete = async (request, response, next) => { 
  const id = request.params.id

  try { 
    
    isValidObjectId(id);

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
      
  } catch (error) { 
    if (error.message === 'auth/invalid-uid'){
      return response.status(422).json({
        message:"Invalid Uid provided for authentication"
      });
    } else if (error.message === 'Id Not Valid'){
      return response.status(422).json({
        message:"Id Not Valid"
      });

    } else {
    next (error);
    }
  };
}
export default userDelete;