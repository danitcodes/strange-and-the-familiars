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
          <li><img class="footer-img" src="../assets/images/StephanieStrange_StephAndNina_Logo_Solid.png" alt="Black and white round logo of Stephanie Strange and Nina Nightmare"></li>
          <li><h3>Strange & the Familiars</h3></li>
          <li>©2021, Modern Potions Consulting.</li>
        </ul>

        <ul style="text-align: center;">
          <h4 class="nav-bar-menu">Navigate</h4>
          <li class="nav-bar-menu"><a href="index.html">Home</a></li>
          <li class="nav-bar-menu"><a href="music.html">Music</a></li>
          <li class="nav-bar-menu"><a href="shows.html">Shows</a></li>
          <li class="nav-bar-menu"><a href="stories.html">Stories</a></li>
          <li class="nav-bar-menu"><a href="subscribe.html">Subscribe</a></li>
          <li class="nav-bar-menu"><a href="bookings.html">Bookings</a></li>
          <li class="nav-bar-menu"><a href="merch.html">Merch ↗</a></li>
        </ul>

        <form style="padding-right: 40px; width: 300px;">
          <fieldset>
            <legend style="letter-spacing: 2px;">Get in Touch</legend>

            <label for="email">
              Email: <input type="text" id="email" name="email_address" placeholder="Let the magic happen."></input>
            </label><br/>
            <button class="btn btn-danger" style="text-align: center; width: 220px;" type="submit">SUBSCRIBE</button>
            <social-buttons-row></social-buttons-row>
          </fieldset>
        </form>

      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);