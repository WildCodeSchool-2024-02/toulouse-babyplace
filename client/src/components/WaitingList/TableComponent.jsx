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
    <table className="table">
      <thead>
        <tr>
          <th>Assistante maternelle</th>
          <th>Créneau Horaire</th>
          <th>Ville</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((item) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.city}</td>
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
