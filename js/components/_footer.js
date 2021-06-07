class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          height: 300px;
          margin: 75px 30px 30px 30px;
          padding: 0 10px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: black;
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
        }
      </style>

      <footer class="footer bg-dark">
        <ul>
          <li>
            <a href="../../index.html">
              <img class="footer-img"
                src="../assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"
                alt="Black and white round logo of Stephanie Strange and Nina Nightmare">
            </a>
          </li>
          <li><h3>Strange & the Familiars</h3></li>
          <li>©2021, Modern Potions Consulting.</li>
        </ul>

        <ul style="text-align: center;">
          <li class="nav-bar-menu"><a href="pages/about.html">About</a></li>
          <li class="nav-bar-menu"><a href="pages/music.html">Music</a></li>
          <li class="nav-bar-menu"><a href="pages/shows.html">Shows</a></li>
          <li class="nav-bar-menu"><a href="pages/stories.html">Stories</a></li>
          <li class="nav-bar-menu"><a href="pages/subscribe.html">Subscribe</a></li>
          <li class="nav-bar-menu"><a href="pages/bookings.html">Bookings</a></li>
          <li class="nav-bar-menu"><a href="pages/merch.html">Merch ↗</a></li>
        </ul>

        <form
          action="mailto:strangebookingpdx@gmail.com"
          style="padding-right: 40px; width: 300px;"
          method="POST"
          enctype="multipart/form-data"
          name="EmailForm">
          <fieldset>
            <legend style="letter-spacing: 2px;">Get in Touch</legend>

            <label for="email">
              Email: <input type="text" id="email" name="email-address" placeholder="Let the magic happen." required/>
            </label><br/>
            <button class="btn btn-danger" style="text-align: center; width: 220px;" type="submit" value="Subscribe">SUBSCRIBE</button>
            <social-buttons-row></social-buttons-row>
          </fieldset>
        </form>

      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);