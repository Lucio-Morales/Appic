// import axios from "axios"; 

//Configuracion de URL base con axios
// const apiUrl = axios.create({
//     baseURL: "http://localhost:3001"
// })


//Funcion que realiza una solicitud POST al servidor enviando los datos de registro del nuevo usuario.
// export const createNewUser = async (formData) => {
//     apiUrl.post("/user/post", formData)
// }


//CON FETCH
export const createNewUser = async (data) => {
    const response = await fetch("http://localhost:3001/user/post", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Network response was not ok');
      }
    
      return response.json();
}
