import mongoose from "mongoose"; 
import StudentsFeedback from "../../../models/feedback.js";
import isValidObjectId from "../../utils/valid.js"

const deliveryDelete = async (request, response, next) => { 
  const id = request.params.id //Id de feedback

  try { 
    isValidObjectId(id, response)
    
     const deliveryDeleteId = await StudentsFeedback.findByIdAndDelete(id);
     if (!deliveryDeleteId) {
      return response.status(404).json({
        message:"delivery Not Found"})
      }
      return response.status(200).json({
        message:"Delivery successfully deleted",
        data: deliveryDeleteId
     })
   } catch (error) { 
     next (error);
   };
 }

export default deliveryDelete;