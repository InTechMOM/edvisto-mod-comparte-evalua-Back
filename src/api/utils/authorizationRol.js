function authorizationRol(observerUser, response, idToken, refreshToken) {
  if (observerUser) {
      return response.status(200).json({
        message:"Welcome teacher",
        name:observerUser.name,
        lastName:observerUser.lastName,
        id:observerUser._id,
        idToken, 
        refreshToken
      });
    } else {
      return response.status(200).json({
        message:"Welcome student",
        name:observerUser.name,
        lastName:observerUser.lastName,
        id:observerUser._id,
        idToken, 
        refreshToken});
    }
}

export default authorizationRol  