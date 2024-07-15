import { useEffect } from "react";
import "./Search.scss";

function Search() {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/childcare_center?day=${"monday"}&time=${"hour"}`,
        options
      )
        .then((response) => response.json())
        .catch((error) => console.error(error));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="general-block-search">
      <div className="left-block-search">
        <p>Je cherche ma future assistante maternelle:</p>
        <select className="">
          <option value={[]}>Voir tous les horaires</option>
        </select>
        <select className="">
          <option value={[]}>Voir tous les jours</option>
        </select>
        <button type="button">Rechercher</button>
      </div>
      <div className="right-block-search">
        <p>Results</p>
      </div>
    </div>
  );
}

export default Search;
