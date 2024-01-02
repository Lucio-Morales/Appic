const createUser = async (userData) => {
  const { name, email, password } = userData;
  try {
    const response = await fetch("http://localhost:3001/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      const errorData = await response.json();
      console.error("Error en la respuesta del servidor:", errorData);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};

const userLogin = async (loginData) => {
  const { email, password } = loginData;
  try {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      const errorData = await response.json();
      console.error("Error en la respuesta del servidor:", errorData);
    }
  } catch (error) {
    console.error("Error en la solicitud:", error.message);
  }
};

export { createUser, userLogin };
