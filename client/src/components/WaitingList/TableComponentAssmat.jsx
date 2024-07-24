import { useState, useEffect } from "react";
import "./TableComponent.scss";

function TableComponentAssmat() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/childcare-center")
      .then((response) => response.json())
      .then((data) => {
        setCardData(data);
      });
  }, []);

  const handleStatusChange = (index, newStatus) => {
    const updatedData = [...cardData];
    updatedData[index].status = newStatus;
    setCardData(updatedData);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Parent</th>
          <th>Ville</th>
          <th>Créneau Horaire</th>
          <th>Telephone</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {cardData.map((item, index) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>
              {item.opening}/{item.closing}
            </td>
            <td>{item.phone}</td>
            <td>
              <select
                value={item.status}
                onChange={(e) => handleStatusChange(index, e.target.value)}
              >
                <option value="Validé">Valider</option>
                <option value="En attente">En attente</option>
                <option value="Annulé">Annuler</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponentAssmat;
