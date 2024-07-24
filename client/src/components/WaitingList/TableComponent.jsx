import { useState, useEffect } from "react";
import "./TableComponent.scss";

function TableComponent() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/childcare-center")
      .then((response) => response.json())
      .then((data) => {
        const statuses = ["Annulé", "En attente", "Accepté"];
        const updatedData = data.map((item) => ({
          ...item,
          status: statuses[Math.floor(Math.random() * statuses.length)],
        }));
        setCardData(updatedData);
      });
  }, []);

  const formatTime = (time) => {
    // Assuming time is in "HH:MM" format and already in 24-hour format
    const [hours, minutes] = time.split(":");
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Assistante maternelle</th>
          <th>Ville</th>
          <th>Créneau Horaire</th>
          <th>Telephone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>
              {formatTime(item.opening)} - {formatTime(item.closing)}
            </td>
            <td>{item.phone}</td>
            <td>{item.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
