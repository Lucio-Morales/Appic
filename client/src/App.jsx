import { Routes, Route } from "react-router-dom";
import RegistrationForm from './components/registrationForm/RegistrationForm'
import LoginForm from "./components/loginForm/LoginForm";
import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </>
  )
}

export default App
