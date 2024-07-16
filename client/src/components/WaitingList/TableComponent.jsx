import { useState, useEffect } from "react";
import "./TableComponent.scss";

function TableComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/childcare-center`
        );
        const fetchedData = await response.json(response);
        setData(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Nounou</th>
          <th>Status</th>
          <th>Date</th>
          <th>Créneau Horaire</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.name}>
            <td>{item.id}</td>
            <td>{item.status}</td>
            <td>{item.date}</td>
            <td>{item.timeSlot}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
