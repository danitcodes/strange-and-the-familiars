class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" type="text/css" href="../../assets/_shared/stylesheets/components/footer.css" media="all">

      <footer class="footer bg-dark">
        <ul>
          <li class="nav-item">
            <a href="../../index.html">
              <img class="footer-img img-responsive"
                src="../assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"
                alt="Black and white round logo of Stephanie Strange and Nina Nightmare">
            </a>
          </li>
          <li class="nav-item"><h3>Strange & the Familiars</h3></li>
          <li class="nav-item">©2025, Modern Potions Consulting.</li>
        </ul>

        <ul style="text-align: center;">
          <li class="nav-bar-menu"><a href="../../pages/about.html">About</a></li>
          <li class="nav-bar-menu"><a href="../../pages/music.html">Music</a></li>
          <li class="nav-bar-menu"><a href="../../pages/shows.html">Shows</a></li>
          <li class="nav-bar-menu"><a href="../../pages/shop.html">Shop</a></li>
          <li class="nav-bar-menu"><a href="../../pages/contact.html">Contact</a></li>
        </ul>

        <div style=" width: 300px;">
          <div style="letter-spacing: 2px; text-align: center;">
            <h4 style="margin: 0.25em; padding: 0.25em;" >Find Us</h4>
            <a href="https://www.patreon.com/stephaniestrange"><img class="img-responsive" alt="Patreon" src="https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white" /></a>
            </div>
          <social-buttons style="margin: 0.25em; padding: 0.25em;" ></social-buttons>
        </div>

      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);
