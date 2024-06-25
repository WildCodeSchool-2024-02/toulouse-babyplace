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
      <div className="block-questions">
        <h2>Comment pouvons nous vous aider ?</h2>
      </div>
      <div className="block-all-questions">
        {FaqData.map((category) => (
          <div key={category.id} className="category-block">
            <h3>{category.category}</h3>
            <div className="flex-category-block">
              {category.questions.map((question) => (
                <div key={question.id}>
                  <Accordion
                    question={question.question}
                    answer={question.answer}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Help;
