//Función de validación de datos de ingreso

function validData(schema, response, request) {
  const {error} = schema.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }
}

export default validData