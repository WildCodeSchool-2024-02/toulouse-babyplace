import "./ClientsRegistration.scss";

function ClientsRegistration() {
  return (
    <div className="inscriptions">
      <h2>Création de Compte</h2>
      <div className="genre">
        <legend>Genre</legend>
        <input type="radio" id="femme" name="sexe" value="femme" />
        <label for="femme">Femme</label>
        <input type="radio" id="Homme" name="sexe" value="Homme" />
        <label for="Homme">Homme</label>
        <br />
      </div>
      <form
        className="formulaire"
        action="fichierDeLiaisonVersLaBDD"
        method="post"
      >
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" name="prenom" />
        <input type="email" placeholder="Email" name="email" id="" />
        <input
          type="tel"
          placeholder="Numero de Telephone"
          name="phone-number"
          id=""
        />
        {/* <input type="password" placeholder="Mot de Passe" /> */}
        <input
          type="date"
          placeholder="Date de naissance"
          name="dateofbirth"
          id=""
        />
        <input
          type="text"
          id="adresse"
          placeholder="Adresse, CP, Ville"
          name="adresse"
        />
        <button className="btnReg">Créer un compte</button>
      </form>
    </div>
  );
}
export default ClientsRegistration;
