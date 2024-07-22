import "./App.scss";
import intro from "./public/images/intro.svg";
import easyLife from "./public/images/easy-life.svg";

function App() {
  return (
    <div id="app">
      <div id="intro-flex">
        <div id="intro">
          <div id="lumen-grid">
            <div id="lumen">
              <h1>Lumen</h1>
              <p>
                Découvrez la solution idéale pour trouver la nourrice parfaite
                pour vos enfants.
              </p>
              <p>
                Créez un profil sur Lumen et accédez à une communauté de
                nourrices disponibles près de chez vous.
              </p>
              <ul>
                <li>
                  Créez un compte gratuitement pour vous ou votre nourrice.
                </li>
                <li>
                  Service facile à utiliser pour simplifier la recherche de
                  nourrices selon vos horaires.
                </li>
                <li>
                  Profils détaillés pour une meilleure visibilité et confiance.
                </li>
              </ul>
            </div>
          </div>
          <img src={intro} alt="intro img" id="img-intro" />
        </div>
      </div>
      <div id="easy-life-flex">
        <div id="easy-life">
          <img src={easyLife} alt="easy-life images" />
          <div id="reservation">
            <h3>
              Facilitez vos recherches de nourrices grâce à une plateforme
              intuitive.
            </h3>
            <p>
              Consultez les profils des nourrices disponibles en fonction de vos
              besoins et horaires. Trouvez rapidement et facilement une nourrice
              de confiance.
            </p>
          </div>
        </div>
      </div>

      <div id="managment">
        <div id="logiciel">
          <h3>
            Profitez du meilleur service de mise en relation avec des nourrices
            qualifiées
          </h3>
        </div>
        <div id="case-middle">
          <div id="case-grid">
            <div id="diary" className="case">
              <div>
                <h4>Créez votre profil</h4>
                <p>
                  Inscrivez-vous et créez un profil détaillé pour augmenter
                  votre visibilité auprès des parents à la recherche de
                  nourrices.
                </p>
              </div>
            </div>
            <div id="alert" className="case">
              <div>
                <h4>Recherchez facilement</h4>
                <p>
                  Utilisez nos filtres de recherche pour trouver des nourrices
                  disponibles selon vos horaires et besoins spécifiques.
                </p>
              </div>
            </div>
            <div id="activity" className="case">
              <div>
                <h4>Optimisez votre visibilité</h4>
                <p>
                  Améliorez votre profil pour vous rendre plus visible et
                  permettre aux parents de vous découvrir facilement.
                </p>
              </div>
            </div>
            <div id="communication" className="case">
              <div>
                <h4>Informations claires</h4>
                <p>
                  Les parents peuvent consulter des profils détaillés pour faire
                  un choix éclairé et trouver la nourrice idéale pour leurs
                  enfants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
