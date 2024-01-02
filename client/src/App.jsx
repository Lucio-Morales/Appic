import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./views/userRegister/userRegister";
import Landing from "./views/landing/Landing";
import UserLogin from "./views/userLogin/userLogin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </div>
  );
}

export default App;
