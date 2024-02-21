import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { sendEmailToServer } from "../../services/userServices";
import InfoUserSection from "../../components/infoUserSection/infoUserSection";
import Galery from "../../components/galery/Galery";
import ProfileNavbar from "../../components/profileNavbar/ProfileNavbar";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  {
    if (isLoading) {
      return <div>Loading...</div>;
    }
  }
  return (
    isAuthenticated && (
      <>
        <InfoUserSection user={user} />
        <ProfileNavbar />
        <Galery />
      </>
    )
  );
};

export default Profile;
