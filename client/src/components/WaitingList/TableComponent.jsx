import { useState, useEffect } from "react";
import "./TableComponent.scss";

function TableComponent() {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/api/childcare-center")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nourice</th>
          <th>Status</th>
          <th>Date</th>
          <th>Créneau Horaire</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((item) => (
          <tr key={item.name}>
            <td>{item.city}</td>
            <td>{item.street_adress}</td>
            <td>{item.phone}</td>
            <td>
              {item.opening}/{item.closing}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
