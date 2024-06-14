import "./App.scss";
import intro from "./public/images/intro.svg";
import easyLife from "./public/images/easy-life.svg";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div id="app">
      <NavBar />
      <div id="intro-flex">
        <div id="intro">
          <div id="lumen-grid">
            <div id="lumen">
              <h1>Lumen</h1>
              <p>Gagnez du temps en optimisant votre agenda au quotdien.</p>
              <p>
                Installez le logiciel Lumen maintenant pour saisir toutes les
                opportunites autour de chez vous.{" "}
              </p>
              <ul>
                <li>Souscription au logiciel Lumen sans engagement.</li>
                <li>
                  Logiciel facile à utiliser pour vous permettre
                  d&apos;optimiser vos rdv.
                </li>
                <li>Communication directe et simplifiée avec les parents.</li>
              </ul>
            </div>
            <button type="button">En savoir plus</button>
          </div>
          <img src={intro} alt="intro img" id="img-intro" />
        </div>
      </div>
      <div id="easy-life-flex">
        <div id="easy-life">
          <img src={easyLife} alt="easy-life images" />
          <div id="reservation">
            <h3>
              Simplifiez vous la vie en choisissant un systeme de reservation
              moderne et efficace.
            </h3>
            <p>
              Gerez vos reservations directement depuis votre agenda que vous
              pouvez consulter sur votre telephone, ordinateur ou tablette Soyez
              prevenu en temps reel des annulations vous permettant ainsi de
              remplacer les places vacantes. Remplacez facilement les absences
              grace aux “waiting list” des parents.
            </p>
          </div>
        </div>
      </div>

      <div id="managment">
        <div id="logiciel">
          <h3>
            Equipez vous du logiciel de gestion de place d&apos;accueil de
            jeunes enfants le plus complet
          </h3>
          <p>Cliquez sur l&apos;une de nos solutions pour en savoir plus</p>
        </div>
        <div id="case-middle">
          <div id="case-grid">
            <div id="diary" className="case">
              <h4>Agenda en ligne</h4>
              <p>
                Consultez en temps reel votre agenda et modifiez le en quelques
                cliques afin d&apos;optimiser votre temps et votre rentabilite.
                Accessible de puis votre Smarktphone, tabelle ou Telephone
              </p>
              <button type="button">
                Learn more <span>&#10140;</span>
              </button>
            </div>
            <div id="alert" className="case">
              <h4>Soyez alertee</h4>
              <p>
                Choisissez le mode de notifications afin d&apos;etre informe au
                plus vote des annulations et des demandes de reservation.
              </p>
              <button type="button">
                Learn more <span>&#10140;</span>
              </button>
            </div>
            <div id="activity" className="case">
              <h4>Marketing de votre activité</h4>
              <p>
                Optimisez votre page profil pour vous rendre plus visible et
                vous permettre de vous decouvrir par les parents de votre
                quartier.
              </p>
              <button type="button">
                Learn more <span>&#10140;</span>
              </button>
            </div>
            <div id="communication" className="case">
              <h4>Communiquez avec les parents</h4>
              <p>
                Les parents doivent avoir prerempliss leur liste de documents
                pour pouvoir faire des reservations. Les parents peuvent vous
                soumettre les contrats deja valide par les equipes legales de
                Babyplabce
              </p>
              <button type="button">
                Learn more <span>&#10140;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
