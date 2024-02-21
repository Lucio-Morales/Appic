import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./views/landing/Landing";
import UserRegister from "./views/userRegister/userRegister";
// import PostImage from "./views/postImage/PostImage";
// import Profile from "./views/profile/Profile";
// import UserLogin from "./views/userLogin/userLogin";
// import LoginButton from "./views/Auth0LogIn/LoginButton";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user-register" element={<UserRegister />} />
        {/* <Route path="/post_image" element={<PostImage />} /> */}
        {/* <Route path="/dashboard" element={<Profile />} /> */}
      </Routes>
    </div>
  );
}

export default App;
