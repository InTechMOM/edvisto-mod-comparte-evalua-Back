import mongoose from "mongoose"; 
import Assignment from "./assignment.js";
import { Schema, model} from "mongoose";

const studentsfeedbackSchema = new Schema({
  assignmentId:{
    type:Schema.Types.ObjectId,
    ref:"Assignment",
    required: true,
  },
  course: {
    type:String
  },
  title: {
    type:String
  },
  emailStudent:{
    type:String,
    required:true,
    minlength: 8,
    maxlength: 32,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0
  },
  videoURL: {
    type:String
  },
  feedback: {
    email:{
      type:String,
      minlength: 8,
      maxlength: 32,
      minDomainSegments: 2, 
      tlds: { allow: ['com', 'net'] },
      noWhiteSpaces:0
    },
    skills: {
      communication: {
        type:Number,
        min:0,
        max:5
      },
      collaboration: {
        type:Number,
        min:0,
        max:5
      },
      creativity: {
        type:Number,
        min:0,
        max:5
      },
      critical_thinking: {
        type:Number,
        min:0,
        max:5
      }
    },
    comment: {
      type:String, 
      },
  },
  qualified:{
    type:Boolean
  }
},
{
  timestamps: true
});

export default  model("StudentsFeedback", studentsfeedbackSchema);