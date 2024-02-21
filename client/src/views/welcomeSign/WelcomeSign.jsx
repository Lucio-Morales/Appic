import { useAuth0 } from "@auth0/auth0-react";
import { redirect } from "react-router-dom";
import LoginButton from "../loginButton/LoginButton";
import Profile from "../profile/Profile";
import LogoutButton from "../logoutButton/LogoutButton";
import styles from "./WelcomeSign.module.css";

// const WelcomeSign = () => {
//   const { isAuthenticated } = useAuth0();
//   return (
//     <div className={styles.container}>
//       {isAuthenticated ? (
//         <>
//           <Profile />
//           <LogoutButton />
//         </>
//       ) : (
//         <LoginButton />
//       )}
//     </div>
//   );
// };

// export default WelcomeSign;
const WelcomeSign = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? <redirect to="/dashboard" /> : <LoginButton />}
    </div>
  );
};

export default WelcomeSign;
