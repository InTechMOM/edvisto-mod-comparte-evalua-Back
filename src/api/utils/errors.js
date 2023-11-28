const middlewareErrors = (error, request, response, next) => {
if (error.patch) {
  return response.status(400).json({ 
    status: "error",
    send: "Something went wrong",
    name: error.name,
    message: error.message,
    patch: error.patch
});
} else { 
   console.log(error)
    return response.status(500).json({ 
      status: "error",
      send:"Internal server error",
      name: "Unknown error",
      message: "Unknown error",
  })
}
}

export default middlewareErrors;