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
        <input type="text" placeholder="Recherche" />
        <div className="profile-input">
          <div>🔔</div>
          <Link to="/reservation">
            <div>📆</div>
          </Link>
        </div>
      </div>
      <p className="profile-text">
        Mettez toutes les chances de votre côté. <br />
        Un profil complet est nécessaire pour un accueil en crèche !
      </p>
      <div className="documents">
        <div className="dossier-enfant">
          Dossier <br />
          Enfants
        </div>
        <div className="dossier-parent">
          Dossier <br />
          Parents
        </div>
        <div className="dossier-inscription">
          Dossier <br />
          d'inscription
        </div>
      </div>
      <NavBarProfile />
    </div>
  );
}

export default Profile;
