// import axios from "axios"; 

// Configuracion de URL base con axios
// const apiUrl = axios.create({
//     baseURL: "http://localhost:3001"
// })


//Funcion que realiza una solicitud POST al servidor enviando los datos de registro del nuevo usuario.
// export const loginFormData = async (loginData) => {
//     apiUrl.post("/user/login", loginData)
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
      throw new Error(errorData.error || 'Network response was not ok bro :/');
      }
    //Si todo salio bien, devuelvo la respuesta de exito.
      return response.json();
}

//FUNCION QUE REALIZA LA SOLICITUD POST DE LOGIN
export const loginUser = (loginForm) => {
  fetch("http://localhost:3001/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginForm)
  }).then(response => {
    if(response.ok) {
      return response.json()
    }
      const errorData = response.json();
      throw new Error(errorData.error || "Network response was not ok bro :/")
  }).then(data => {
    localStorage.setItem("authToken", data.token);
    getProfileData()//Aca va la funcion que realiza la solicitud GET junto con el token para obtener los datos del perfil 
  })

  // if(!response.ok){
  //   const errorData = await response.json();
  //   throw new Error(errorData.error || "Network response was not ok bro :/")
  // }

  // return response.json()
}

const getProfileData = () => {
  const userToken = localStorage.getItem("authToken")

  fetch("http://localhost:3001/user/profile", {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${userToken}`
    }
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('No autorizado');
  })
  .then(data => {
    data
    // showProfile(data) funcion para mostrar perfil en la UI
  })
  .catch(error => {
    console.log("Error al obtener perfil", error);
  })
}