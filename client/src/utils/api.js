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
        throw new Error('Network response was not ok');
      }

      const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Esperar 3 segundos antes de retornar la respuesta
     await delay(3000);
    
      return response.json();
}
