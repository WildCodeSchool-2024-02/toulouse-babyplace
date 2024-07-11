import { Link } from "react-router-dom";
import NavBarProfile from "../../components/NavBarProfile/NavBarProfile";
import "./Profile.scss";

function Profile() {
  const name = localStorage.getItem("name");
  const lastname = localStorage.getItem("lastname");

  return (
    <div className="profile">
      <div className="profile-card">
        <div>
          <img src="../src/assets/images/2.jpg" alt="" />
          <p>{name}</p>
          <p>{lastname}</p>
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
