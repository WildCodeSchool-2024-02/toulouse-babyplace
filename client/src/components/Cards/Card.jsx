import "./Card.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Card() {
  const [cardData, setCardData] = useState({
    name: "",
    city: "",
    opening: "",
    closing: "",
  });
  useEffect(() => {
    fetch("http://localhost:3310/api/childcare-center")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{cardData.name}</h2>
        <h4>{cardData.city}</h4>
      </div>
      <div className="card-body">
        <p>Disponible de: {cardData.opening}</p>
        <p>à: {cardData.closing}</p>
      </div>
      <div className="card-footer">
        <button type="button" onClick={handleClick}>
          Voir le profil
        </button>
      </div>
    </div>
  );
}

export default Card;
