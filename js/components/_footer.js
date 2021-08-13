class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          margin: 75px 30px 30px 30px;
          padding: 35px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: black;
        }

        footer ul {
          padding-left: 0;
          text-align: center;
      }

        ul li {
          list-style: none;
          display: inline;
        }

        a {
          margin: 0 15px;
          color: inherit;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #333;
        }

        .social-row {
          font-size: 20px;
        }

        .social-row li a {
          margin: 0 15px;
        }

        .footer-img {
          height: 150px;
          width: auto;
          padding-bottom: 10px;
        }

        .nav-bar-menu {
          display: block;
          margin:10px;
        }

        @media only screen and (max-width:768px){
          footer{
            flex-direction: column;
            gap: 30px;
          }
        }
      </style>

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
          <li class="nav-item">©2021, Modern Potions Consulting.</li>
        </ul>

        <ul style="text-align: center;">
          <li class="nav-bar-menu"><a href="pages/about.html">About</a></li>
          <li class="nav-bar-menu"><a href="pages/music.html">Music</a></li>
          <li class="nav-bar-menu"><a href="pages/shows.html">Shows</a></li>
          <li class="nav-bar-menu"><a href="pages/merch.html">Merch</a></li>
          <li class="nav-bar-menu"><a href="pages/contact.html">Contact</a></li>
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
