import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./ChildCareCenterProfile.scss";

function ChildCareCenterProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/childcare-center/`
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la sélection des données:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="childcare-center-profile-container">
      {data.map((user) => (
        <div key={user.id}>
          <div className="childcare-center-profile">
            <h1>
              Bienvenue sur le profil de :{user.name}
              {/* on va recuperer le nom de la creche ici */}
            </h1>

            <img
              src="../src/assets/images/nounou.jpg"
              alt="creche-img"
              className="creche-img"
            />
            <p>{user.description}</p>
            <div className="profile-line">
              <h2>Conditions d'accueil </h2>
              {/* on va recuperer les Conditions de la creche ici */}
              <h2>Horaires</h2>
              {user.opening} , {user.closing}
              <h2>Localisation</h2>
              {user.street_address}
              <Button
                nextPath="/reservation"
                previousPath="/"
                label="Reservez votre place"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChildCareCenterProfile;
