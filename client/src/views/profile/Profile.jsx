import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { sendEmailToServer } from "../../services/userServices";
import InfoUserSection from "../../components/infoUserSection/infoUserSection";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) sendEmailToServer(user, isAuthenticated);
  }, [isAuthenticated]);
  {
    if (isLoading) {
      return <div>Loading...</div>;
    }
  }
  return isAuthenticated && <InfoUserSection user={user} />;
};

export default Profile;
