import "./Footer.scss";

function Footer() {
  return (
    <div id="footer">
      <div id="footer-top">
        <h2>Essayez c’est gratuit !</h2>
        <div>
          <button id="btn-more" type="button">
            En savoir plus
          </button>
          <button id="btn-demo" type="button">
            Demander une démo <span>&#10140;</span>
          </button>
        </div>
      </div>
      <div>
        <p>Lumen</p>
        <ul>
          <li>Accueil</li>
          <li>Aide</li>
          <li>Lumen Pro</li>
          <li>S'inscrire</li>
        </ul>
      </div>
      <p id="p">© | All rights reserved</p>
    </div>
  );
}

export default Footer;
