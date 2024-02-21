const postUser = async (userData) => {
  try {
    // Realizar la solicitud POST al servidor
    const response = await fetch("http://localhost:3001/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Indicar que los datos enviados son JSON
      },
      body: JSON.stringify(userData), // Convertir los datos del usuario a JSON
    });

    // Verificar si la solicitud fue exitosa
    if (!response.ok) {
      // Si la solicitud no fue exitosa, lanzar un error con el mensaje de error proporcionado por el servidor
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    // Si la solicitud fue exitosa, devolver la respuesta (puede que no sea necesaria en tu caso)
    return response.json();
  } catch (error) {
    // Capturar cualquier error y lanzarlo para que sea manejado por la función que llama a postUser
    throw error;
  }
};

export default postUser;
