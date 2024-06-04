
export const postNewUser = async (formData) => {
    try {
        const response = await fetch("http://localhost:3001/user/post", {
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error('Error en la solicitud');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error registrando al usuario:', error);
        throw error;
    }
}

