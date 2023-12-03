import mongoose from "mongoose"; 
import Assignment from "../../../models/assignment.js";
import isValidObjectId from "../../utils/valid.js"

const assignmentDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
    isValidObjectId(id)

     const assignmentDeleteId = await Assignment.findByIdAndDelete(id);
     if (!assignmentDeleteId) {
      return response.status(404).json({
        message:"Assignment Not Found"})
      };
    return response.status(200).json({
        message:"Assignment successfully deleted",
        data: assignmentDeleteId
     });
  } catch (error) {

    if (error.message === 'Id Not Valid'){
      return response.status(422).json({
        message:"Id Not Valid"
      });

    } else {
    next (error);
    };
  }
}

export default assignmentDelete;