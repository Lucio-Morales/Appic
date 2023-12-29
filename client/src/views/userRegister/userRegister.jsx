import styles from "./userRegister.module.css";
import { useState } from "react";

const UserRegister = () => {
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
  const postUserData = (event) => {
    event.preventDefault();

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
    </div>
  );
};

export default UserRegister;
