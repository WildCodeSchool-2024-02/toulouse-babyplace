import { useEffect, useState } from "react";
import "./Search.scss";
import { jwtDecode } from "jwt-decode";

function Search() {
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [results, setResults] = useState([]);

  const fetchAllChildcare = () => {
    const token = localStorage.getItem("authToken");
    const { openingToken, closingToken } = jwtDecode(token);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center?opening=${openingToken}&closing=${closingToken}`,
        options
      )
        .then((response) => response.json())
        .then((data) => setResults(data))
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllChildcare();
  }, [opening, closing]);

  return (
    <div className="general-block-search">
      <div className="left-block-search">
        <p>Je cherche ma future assistante maternelle:</p>
        <div>
          <label htmlFor="opening">Heure d'arrivée:</label>
          <input
            type="time"
            id="opening"
            name="opening"
            value={opening}
            onChange={(e) => setOpening(e.target.value)}
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <div>
          <label htmlFor="closing">Heure de départ:</label>
          <input
            type="time"
            id="closing"
            name="closing"
            value={closing}
            onChange={(e) => setClosing(e.target.value)}
            min="09:00"
            max="18:00"
            required
          />
        </div>
        <button type="button" onClick={fetchAllChildcare}>
          Rechercher
        </button>
      </div>
      <div className="right-block-search">
        <p>Results</p>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result?.id} className="result-card">
              <p>{result?.name}</p>
              <p>{result?.address}</p>
              <p>
                Ouvert de {result?.opening} à {result?.closing}
              </p>
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé</p>
        )}
      </div>
    </div>
  );
}

export default Search;
