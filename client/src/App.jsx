import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import LoginForm from "./components/loginForm/LoginForm";
import UserProfile from "./components/userProfile/UserProfile";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
