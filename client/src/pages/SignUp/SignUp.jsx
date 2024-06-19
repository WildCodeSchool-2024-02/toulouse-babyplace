import "./SignUp.scss";

function SignUp() {
  return (
    <div className="inscriptions">
      <form
        className="formulaire"
        action="fichierDeLiaisonVersLaBDD"
        method="post"
      >
        <h2>Création de Compte</h2>
        <div className="genre">
          <legend>Genre</legend>
          <input type="radio" id="femme" name="sexe" value="femme" />
          <label htmlFor="femme">Femme</label>
          <input type="radio" id="homme" name="sexe" value="homme" />
          <label htmlFor="homme">Homme</label>
          <br />
        </div>

        <label htmlFor="nom">Nom</label>
        <input className="champ" type="text" placeholder="Nom" id="nom" />
        <label htmlFor="prenom">Prénom</label>
        <input
          className="champ"
          type="text"
          placeholder="Prénom"
          name="prenom"
          id="prenom"
        />
        <label htmlFor="email">Email</label>
        <input
          className="champ"
          type="email"
          placeholder="Email"
          name="email"
          id="email"
        />
        <label htmlFor="phone-number">Numero de Telephone</label>
        <input
          className="champ"
          type="tel"
          placeholder="Numero de Telephone"
          name="phone-number"
          id="phone-number"
        />

        <label htmlFor="password">Mot de Passe</label>
        <input
          className="champ"
          type="password"
          placeholder="Mot de Passe"
          id="password"
        />
        <label htmlFor="confirm-password">Confirmer votre mot de Passe</label>
        <input
          className="champ"
          type="password"
          placeholder="Confirmer votre mot de Passe"
          id="confirm-password"
        />
        <label htmlFor="dateofbirth">Date de naissance</label>
        <input
          className="champ"
          type="date"
          placeholder="Date de naissance"
          name="dateofbirth"
          id="dateofbirth"
        />
        <label htmlFor="adresse">Adresse, CP, Ville</label>
        <input
          className="champ"
          type="text"
          id="adresse"
          placeholder="Adresse, CP, Ville"
          name="adresse"
        />
        <button className="btnReg" type="button">
          Créer un compte
        </button>
      </form>
    </div>
  );
}

export default SignUp;
