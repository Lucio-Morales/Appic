import { Routes, Route } from "react-router-dom";
import RegistrationForm from './components/registrationForm/RegistrationForm'
import LoginForm from "./components/loginForm/LoginForm";
import './App.css'
import UserProfile from "./components/userProfile/UserProfile";

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profile" element={<UserProfile />} />
      </Routes>
    </>
  )
}

export default App
