import Joi from "joi"; 

// Esquema de entrega
export const schemaDelivery =   Joi.object ({
  emailStudent: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
  videoURL: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
})

// Esquema de feedback
export const schemaFeedback = Joi.object ({
  feedback: ({
    email: Joi.string().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}).required(),
    skills: {
      communication: Joi.number().required().min(0).max(5),
      collaboration: Joi.number().required().min(0).max(5),
      creativity: Joi.number().required().min(0).max(5),
      criticalThinking: Joi.number().required().min(0).max(5)
    },
    comment: Joi.string()})
})