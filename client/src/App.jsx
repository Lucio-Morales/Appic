import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./views/userRegister/userRegister";
import Landing from "./views/landing/Landing";
// import UserLogin from "./views/userLogin/userLogin";
// import LoginButton from "./views/Auth0LogIn/LoginButton";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
