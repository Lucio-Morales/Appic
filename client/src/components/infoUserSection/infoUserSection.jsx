const InfoUserSection = ({ user }) => {
  return (
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
    </div>
  );
};

export default InfoUserSection;
