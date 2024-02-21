import { Link } from "react-router-dom";

const ProfileNavbar = () => {
  return (
    <div>
      <Link to="/post_image">
        <button>Post image</button>
      </Link>
      <button>My favorites</button>
    </div>
  );
};

export default ProfileNavbar;
