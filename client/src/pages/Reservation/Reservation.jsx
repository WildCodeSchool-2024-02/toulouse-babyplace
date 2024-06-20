import Calendar from "../../components/Calendar/Calendar";
import "./Reservation.scss";

function Reservation() {
  return (
    <div className="Reservation">
      <h1>Résevez une place</h1>
      <p> nom de la creche</p> {/* on va recuperer les données de creche ici */}
      <h2>Choisissez une date</h2>
      <Calendar />
      <button type="button">Suivant</button>
    </div>
  );
}

export default Reservation;
