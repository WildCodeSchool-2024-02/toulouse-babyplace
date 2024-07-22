import { useEffect, useMemo, useState } from "react";
import "./Search.scss";
import { jwtDecode } from "jwt-decode";

function Search() {
  const [opening, setOpening] = useState("");
  const [closing, setClosing] = useState("");
  const [results, setResults] = useState([]);

  const token = localStorage.getItem("authToken");
  const { userId } = jwtDecode(token);

  const options = useMemo(
    () => ({
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }),
    []
  );

  const fetchSomeChildcare = () => {
    try {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare-center?opening=${opening}&closing=${closing}/${userId}`,
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
    const fetchAllChildcare = () => {
      try {
        fetch(`${import.meta.env.VITE_API_URL}/api/childcare-center`, options)
          .then((response) => response.json())
          .then((data) => setResults(data))
          .catch((error) => console.error(error));
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllChildcare();
  }, [options]);

  const getInitials = (name) => {
    const cleanName = name.replace(/[^a-zA-Z\s]/g, "");

    const words = cleanName.split(" ").filter((word) => word.length > 0);
    const initials = words.map((word) => word[0].toUpperCase());

    return initials.slice(0, 2).join("");
  };

  return (
    <div className="general-block-search">
      <h3>Je cherche ma future assistante maternelle : </h3>
      <div className="left-block-search">
        <div className="input-search">
          <label htmlFor="opening">Heure d'arrivée : </label>
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
        <div className="input-search">
          <label htmlFor="closing">Heure de départ : </label>
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
        <button type="button" onClick={fetchSomeChildcare} aria-label="Search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.8em"
            height="1.8em"
            viewBox="0 0 512 512"
          >
            <path
              fill="#fff"
              d="M456.69 421.39L362.6 327.3a173.8 173.8 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.8 173.8 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3M97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8"
            />
          </svg>
        </button>
      </div>
      <div className="right-block-search">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result?.id} className="result-card">
              <span className="avatar">{getInitials(result?.name)}</span>
              <p>{result?.name}</p>
              <p>{result?.address}</p>
              <p>
                Disponible de {result?.opening} à {result?.closing}
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
