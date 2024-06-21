import Button from "../../../components/Button/Button";
import Fieldset from "../../../components/Fieldset/Fieldset";
import "./SignUpProRules.scss";

function SignUpProRules() {
  return (
    <div>
      <progress max="100" value="40" />
      <form>
        <h2>Fixez un règlement intérieur</h2>
        <h3>
          Les parents doivent accepter votre règlement intérieur avant de
          réserver.
        </h3>
        <Fieldset
          legend="La période d’adaptation est obligatoire."
          name="adaptation"
        />
        <Fieldset
          legend="Taper ou sonner à la porte, ne pas rentrer sans y être invité et attendre qu’on vienne vous ouvrir."
          name="ring"
        />
        <Fieldset
          legend="Les parents doivent me transmettent toutes les informations nécessaires, ainsi que les incidents éventuels survenus au domicile."
          name="incident"
        />
        <Fieldset
          legend="L’enfant arrivera en état de propreté, habillé et ayant pris son premier repas."
          name="cleanliness"
        />
        <Fieldset
          legend="Les bijoux seront enlevés et rendus aux parents pour des raisons de sécurité (étouffement, ingestion…)."
          name="jewelry"
        />
        <Fieldset
          legend="L’établissement est habilité à administrer les médicaments uniquement sur ordonnance ou protocole."
          name="medicine"
        />

        <div>
          <label htmlFor="more">Règles supplémentaires</label>
          <input type="text" placeholder="Respect des horaires" />
          <button type="submit">Ajouter</button>
        </div>

        <Button
          nextPath="/sign-up-pro/schedules"
          previousPath="/sign-up-pro/images"
        />
      </form>
    </div>
  );
}

export default SignUpProRules;
