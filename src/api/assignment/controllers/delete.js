import mongoose from "mongoose"; 
import Assignment from "../../../models/assignment.js";

const assignmentDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     if (!mongoose.isValidObjectId(id)) {
       return response.status(422).json({message: "Id Not Valid"})
      }
     const assignmentDeleteId = await Assignment.findByIdAndDelete(id);
     if (!assignmentDeleteId) {
      return response.status(404).json({
        message:"Assignment Not Found"})
      }
      return response.status(200).json({
        message:"Assignment successfully deleted",
        data: assignmentDeleteId
     })
   } catch (error) { 
     next (error);
   };
 }

export default assignmentDelete;