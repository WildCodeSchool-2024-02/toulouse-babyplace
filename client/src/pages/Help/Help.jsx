import Accordion from "../../components/Accordion/Accordion";
import "./Help.scss";
import FaqData from "../../services/tools/FaqData";

function Help() {
  return (
    <div>
      <div className="block-help">
        <div className="block-help-center">
          <h2>Centre d'aide</h2>
          <p>
            Bienvenue sur notre Centre d'aide, où vous trouverez des réponses
            aux questions fréquemment posées, des guides d'utilisation et des
            ressources pour vous assister dans l'utilisation de notre
            plateforme.
          </p>
          <div className="infos-link-help">
            <p>Pour nous contacter</p>
            <p>+(33) 5 61 00 00 00</p>
            <p>contact@lumen.fr</p>
          </div>
        </div>
      </div>
      <div className="block-max-width">
        <div className="block-questions">
          <h3>Comment pouvons nous vous aider ?</h3>
        </div>
        {FaqData.map((element) => (
          <h3 key={element.id}>{element.category}</h3>
        ))}
        {FaqData.map((element) => (
          <div key={element.id}>
            {element.questions.map((sentence) => (
              <div key={element.id}>
                <Accordion
                  question={sentence.question}
                  answer={sentence.answer}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
