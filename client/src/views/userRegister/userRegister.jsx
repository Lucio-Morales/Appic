import styles from "./userRegister.module.css";
import { Toaster, toast } from "sonner";
import { BiCheck } from "react-icons/bi";
// import { createUser } from "../../services/userServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  //FUNCION QUE REALIZA LA SOLICITUD HTTP
  const postUserData = async (event) => {
    event.preventDefault();

    try {
      await createUser(userData);
    } catch (error) {
      console.error("Error al crear el usuario:", error.message);
    }

    setUserData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={postUserData}>
        <input
          className={styles.input}
          name="name"
          value={userData.name}
          onChange={inputChange}
          placeholder="Name"
          type="text"
        />
        <input
          className={styles.input}
          name="email"
          value={userData.email}
          onChange={inputChange}
          placeholder="Email"
          type="text"
        />
        <input
          className={styles.input}
          name="password"
          value={userData.password}
          onChange={inputChange}
          placeholder="Password"
          type="password"
        />
        <button className={styles.button}>SUBMIT</button>
      </form>

      <Toaster />
    </div>
  );
};

export default UserRegister;
