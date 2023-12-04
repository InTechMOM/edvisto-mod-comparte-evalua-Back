import mongoose from "mongoose"; 
import StudentsFeedback from "../../../models/feedback.js";
import isValidObjectId from "../../utils/valid.js"

const deliveryDelete = async (request, response, next) => { 
  const id = request.params.id //Id de feedback

  try { 
    isValidObjectId(id)
    
     const deliveryDeleteId = await StudentsFeedback.findByIdAndDelete(id);
     if (!deliveryDeleteId) {
      return response.status(404).json({
        message:"Delivery Not Found"})
      }
      return response.status(200).json({
        message:"Delivery successfully deleted",
        data: deliveryDeleteId
     })
   } catch (error) {

    if (error.message === 'Id Not Valid'){
      return response.status(400).json({
        message:"Id Not Valid"
      });

    } else {
    next (error);
    };
 }
}

export default deliveryDelete;