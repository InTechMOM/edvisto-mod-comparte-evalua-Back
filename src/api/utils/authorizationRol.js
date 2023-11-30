function authorizationRol(observerUser, response, idToken, refreshToken) {
  if (observerUser) {
    if (observerUser.rol === "Soy Docente") {
      return response.status(200).json({
        message:"Welcome teacher",
        idToken, 
        refreshToken
      });
    } else {
      return response.status(200).json({
        message:"Welcome student",
        idToken, 
        refreshToken});
    }
  }
}

export default authorizationRol  