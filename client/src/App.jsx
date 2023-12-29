import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./views/userRegister/userRegister";
import Landing from "./views/landing/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<UserRegister />} />
      </Routes>
    </div>
  );
}

export default App;
