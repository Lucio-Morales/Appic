import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../loginButton/LoginButton";
import Profile from "../profile/Profile";
import LogoutButton from "../logoutButton/LogoutButton";

const WelcomeSign = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default WelcomeSign;
