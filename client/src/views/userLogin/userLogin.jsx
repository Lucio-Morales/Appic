import { useState } from "react";
import { userLogin } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const inputChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitLoginData = async (event) => {
    event.preventDefault();
    // Agregar la logica del login aqui:
    try {
      //   await userLogin(loginData);
      //   navigate(`/user-dashboard/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={submitLoginData}>
        <h2>Te damos la bienvenida!</h2>
        <h3>Inicia sesion aqui:</h3>
        <input
          name="email"
          onChange={inputChange}
          value={loginData.email}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={inputChange}
          value={loginData.password}
          type="text"
          placeholder="Password"
        />
        <button>Get into</button>
      </form>
    </div>
  );
};

export default UserLogin;
