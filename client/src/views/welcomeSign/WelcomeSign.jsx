import { Link } from "react-router-dom";

const WelcomeSign = () => {
  return (
    <div>
      <h1>Welcome to Appic</h1>
      <p>
        In this page, you can have a personal gallery to save all your moments
        in photos.
      </p>
      <br />
      <p>¿You want?</p>
      <Link to="/register">
        <button>Register</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
};

export default WelcomeSign;
