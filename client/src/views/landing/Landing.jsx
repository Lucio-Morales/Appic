import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>LANDING VIEW</h1>
      <div>
        <Link to="/register">
          <button>Registrarse</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
