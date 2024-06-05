import axios from "axios"; 

const apiUrl = axios.create({
    baseURL: "http://localhost:3001"
})


//Funcion que realiza una solicitud POST al servidor enviando los datos de registro del nuevo usuario.

// export const postNewUser = async (formData) => {
//     try {
//         const serverResponse = await fetch("http://localhost:3001/user/post", {
//             method: "POST",
//             headers: {
//                 "Content-type":"application/json",
//             },
//             body: JSON.stringify(formData)
//         })

//         if (!serverResponse.ok) {
//             throw new Error('Error en la solicitud');
//         }

//         const data = await serverResponse.json();
//         return data;
//     } catch (error) {
//         console.error('Error registrando al usuario:', error);
//         throw error;
//     }
// }

//CON AXIOS
export const createNewUser = async (formData) => {
    apiUrl.post("/user/post", formData)
}

