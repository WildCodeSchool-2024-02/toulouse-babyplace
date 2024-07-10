import Fieldset from "../../../components/Fieldset/Fieldset";
import Input from "../../../components/Input/Input";
import "../SignUpPro.scss";
import "./SignUpProRules.scss";

function SignUpProRules() {
  return (
    <div id="sign-up-pro-rules">
      <div className="form-flex">
        <h4>Fixez un règlement intérieur</h4>
        <h5>
          Les parents doivent accepter votre règlement intérieur avant de
          réserver.
        </h5>
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
        <div id="more-rules">
          <Input
            title="Règles supplémentaires"
            type="text"
            placeholder="Respect des horaires"
          />
          <button type="submit">Ajouter</button>
        </div>
      </div>
    </div>
  );
}

export default SignUpProRules;
