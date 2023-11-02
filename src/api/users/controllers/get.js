import UserEV from "../../../models/user.js";

//Servidor
export const serverRead = (response) => { 
  response.send("Status:OK")
}

//Listar
const allUsers = async (request, response, next) => { 
  const { name, lastName, birthdayDate, email, securityQuestion, securityResponse, rol } = request.query;

  try {
     
    const filters = { 
      ...name && { name:name.toUpperCase()},
      ...lastName && { lastName:lastName.toUpperCase()},
      ...email && { email },
      ...securityQuestion && { securityQuestion },
      ...securityResponse && { securityResponse },
      ...rol && { rol }
    }; 

    const arrayUsers = await UserEV.find(filters); 

    if (arrayUsers.length === 0) {
      return response.status(404).json({ 
        message:"Users Not Found"});
    }
    return response.status(200).json({ 
      message:"Users found successfully",
      "Users":arrayUsers});
  } catch (error) { 
    next (error);
  }
}

export default allUsers;