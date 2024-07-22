import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBarProfile from "../../components/NavBarProfile/NavBarProfile";
import "./Profile.scss";

function Profile() {
  const [user, setUser] = useState();

  const token = localStorage.getItem("authToken");

  const { userId } = jwtDecode(token);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/customer/${userId}`
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  return (
    <div className="profile">
      <div className="profile-card">
        <div>
          <img src="../src/assets/images/2.png" alt="" />
          <p>{user?.firstname}</p>
          <p>{user?.name}</p>
        </div>{" "}
        <Link to="/Search">
          <button type="button">je cherche ma nourrice</button>
        </Link>
        <div className="profile-input">
          <div>🔔</div>
          <Link to="/reservation">
            <div>📆</div>
          </Link>
        </div>
      </div>
      <div className="text">
        <p className="profile-text">
          Mettez toutes les chances de votre côté. <br />
          Un profil complet est nécessaire pour un accueil chez une nourrice!
        </p>
      </div>
      <NavBarProfile />
    </div>
  );
}

export default Profile;
