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
              <p>Gagnez du temps en optimisant votre agenda au quotidien.</p>
              <p>
                Installez le logiciel Lumen maintenant pour saisir toutes les
                opportunités autour de chez vous.
              </p>
              <ul>
                <li>Souscription au logiciel Lumen sans engagement.</li>
                <li>
                  Logiciel facile à utiliser pour vous permettre
                  d&apos;optimiser vos rendez-vous.
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
              Simplifiez-vous la vie en choisissant un système de réservation
              moderne et efficace.
            </h3>
            <p>
              Gérez vos réservations directement depuis votre agenda que vous
              pouvez consulter sur votre téléphone, ordinateur ou tablette.
              Soyez prévenu en temps réel des annulations vous permettant ainsi
              de remplacer les places vacantes. Remplacez facilement les
              absences grâce aux “waiting list” des parents.
            </p>
          </div>
        </div>
      </div>

      <div id="managment">
        <div id="logiciel">
          <h3>
            Équipez-vous du logiciel de gestion de places d&apos;accueil de
            jeunes enfants le plus complet.
          </h3>
          <p>Cliquez sur l&apos;une de nos solutions pour en savoir plus.</p>
        </div>
        <div id="case-middle">
          <div id="case-grid">
            <div id="diary" className="case">
              <div>
                <h4>Agenda en ligne</h4>
                <p>
                  Consultez en temps réel votre agenda et modifiez-le en
                  quelques clics afin d&apos;optimiser votre temps et votre
                  rentabilité. Accessible depuis votre smartphone, tablette ou
                  ordinateur.
                </p>
              </div>
              <button type="button">
                En savoir plus <span> &#10140;</span>
              </button>
            </div>
            <div id="alert" className="case">
              <div>
                <h4>Soyez alerté</h4>
                <p>
                  Choisissez le mode de notifications afin d&apos;être informé
                  au plus vite des annulations et des demandes de réservation.
                </p>
              </div>
              <button type="button">
                En savoir plus <span>&#10140;</span>
              </button>
            </div>
            <div id="activity" className="case">
              <div>
                <h4>Marketing de votre activité</h4>
                <p>
                  Optimisez votre page profil pour vous rendre plus visible et
                  permettre aux parents de votre quartier de vous découvrir.
                </p>
              </div>
              <button type="button">
                En savoir plus <span>&#10140;</span>
              </button>
            </div>
            <div id="communication" className="case">
              <div>
                <h4>Communiquez avec les parents</h4>
                <p>
                  Les parents doivent avoir prérempli leur liste de documents
                  pour pouvoir faire des réservations. Les parents peuvent vous
                  soumettre les contrats déjà validés par les équipes légales de
                  Babyplace.
                </p>
              </div>
              <button type="button">
                En savoir plus <span>&#10140;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
