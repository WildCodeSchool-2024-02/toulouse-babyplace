import Button from "../Button/Button";
import "./ChildCareCenterProfile.scss";

function ChildCareCenterProfile() {
  return (
    <div className="childcare-center-profile">
      <h1>
        Bienvenue le profile de la creche:{" "}
        {/* on va recuperer le nom de la creche ici */}
      </h1>
      <p>
        Nous somme une creche qui garde les enfant sage et sensible de x heure a
        y heure{" "}
        {/* on va recuperer les données des infos du profils de la creche ici */}
      </p>
      <img
        src="../src/assets/images/enfant-joyeux.jpeg"
        alt="creche-img"
        className="creche-img"
      />{" "}
      *
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
