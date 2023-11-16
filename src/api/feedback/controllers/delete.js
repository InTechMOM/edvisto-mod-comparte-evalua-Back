import mongoose from "mongoose"; 
import StudentsFeedback from "../../../models/feedback.js";

const deliveryDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     if (!mongoose.isValidObjectId(id)) {
       return response.status(422).json({message: "Id Not Valid"})
      }
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