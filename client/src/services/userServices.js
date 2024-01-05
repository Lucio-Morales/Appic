// const createUser = async (userData) => {
//   const { name, email, password } = userData;
//   try {
//     const response = await fetch("http://localhost:3001/users/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });

//     if (response.ok) {
//       const responseData = await response.json();
//       console.log(responseData);
//     } else {
//       const errorData = await response.json();
//       console.error("Error en la respuesta del servidor:", errorData);
//     }
//   } catch (error) {
//     console.error("Error en la solicitud:", error.message);
//   }
// };

// const login = async (loginData) => {
//   const { email, password } = loginData;
//   try {
//     const response = await fetch("http://localhost:3001/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });
//     if (response.ok) {
//       const responseData = await response.json();
//       console.log(responseData);
//     } else {
//       const errorData = await response.json();
//       console.error("Error en la respuesta del servidor:", errorData);
//     }
//   } catch (error) {
//     console.error("Error en la solicitud:", error.message);
//   }
// };
const sendEmailToServer = async (user, isAuthenticated) => {
  try {
    if (isAuthenticated) {
      const response = await fetch("http://localhost:3001/users/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
        }),
      });

      if (response.ok) {
        const responseData = await response.json(); // Convertir el cuerpo de la respuesta a JSON
        console.log(responseData.msg);
      } else {
        console.error("Error al enviar el correo electrónico al servidor.");
      }
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
  }
};

export { sendEmailToServer };
