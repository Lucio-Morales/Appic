// import styles from "./Landing.module.css";

import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <Link to="/user-register">
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default Landing;
