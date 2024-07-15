import Button from "../Button/Button";
import "./ChildCareCenterProfile.scss";

function ChildCareCenterProfile() {
  return (
    <div className="childcare-center-profile">
      <h1>
        Bienvenue sur le profil de :{" "}
        {/* on va recuperer le nom de la creche ici */}
      </h1>
      <img
        src="../src/assets/images/nounou.jpg"
        alt="creche-img"
        className="creche-img"
      />{" "}
      {/* on va recuperer l'image de la creche ici */}
      <p>
        Je suis une jeune fille gentille qui garde vos enfants{" "}
        {/* on va recuperer les données des infos du profils de la creche ici */}
      </p>
      <div className="profile-line">
        <h2>Conditions d'accueil </h2>
        {/* on va recuperer les Conditions de la creche ici */}

        <h2>Horaires</h2>
        {/* on va recuperer les horaires de la creche ici */}

        <h2>Localisation</h2>
        {/* on va recuperer les localisation de la creche ici */}

        <Button
          nextPath="/Reservation"
          previousPath="/"
          label="Reservez votre place"
        />
      </div>
    </div>
  );
}

export default ChildCareCenterProfile;
