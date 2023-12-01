function authorizationRol(observerUser, response, idToken, refreshToken) {
  if (observerUser) {
      return response.status(200).json({
        message:"Welcome teacher",
        name:observerUser.name,
        idToken, 
        refreshToken
      });
    } else {
      return response.status(200).json({
        message:"Welcome student",
        name:observerUser.name,
        idToken, 
        refreshToken});
    }
}

export default authorizationRol  