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
export const createNewUser = async (formData) => {
    const response = await fetch("http://localhost:3001/user/post", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(formData)
    });
    
    //Si la respuesta del servidor es negativa, lanzo un error con el mensaje de error que recibo del mismo.
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Network response was not ok');
      }
    //Si todo salio bien, devuelvo la respuesta de exito.
      return response.json();
}
