function authorizationRol(rolWhich, response, dataCreated = undefined) {
  if (rolWhich) {
    if (rolWhich.rol === "Soy Docente") {
      if (dataCreated !== undefined) {
        return response.status(200).json({
          saved:("Welcome teacher"),
        data: dataCreated
        });
      } else {
        return response.status(200).json("Welcome teacher");
      }  
    } else {
      if (dataCreated !== undefined) {
        return response.status(200).json({
          saved:("Welcome student"),
          data: dataCreated
      });
      } else {
        return response.status(200).json("Welcome student");
      }
    }
  }
}

export default authorizationRol
  