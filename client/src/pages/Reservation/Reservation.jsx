import Calendar from "../../components/Calendar/Calendar";
import "./Reservation.scss";

function Reservation() {
  return (
    <div className="reservation">
      <div className="calendar-info">
        <h1>Nom de la creche</h1>
        {/* on va recuperer les données du nom de creche ici */}
        <h2>Reservez votre place</h2>
        <p>Selectionnez la date et l'heure qui vous convient</p>{" "}
      </div>
      <Calendar />
      
    </div>
  );
}

export default Reservation;
