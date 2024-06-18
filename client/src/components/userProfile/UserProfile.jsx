import { useUser } from "../../contexts/UserContext";

const UserProfile = () => {
  const { user } = useUser();

  if (!user) return <p>Loading data...</p>;

  return (
    <div>
      <h3>Perfil de usuario: {user.name}</h3>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
