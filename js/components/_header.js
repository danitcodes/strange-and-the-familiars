class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        body {
          padding-top: 60px;
          padding-bottom: 40px;
        }

        .fixed-header {
          width: 100%;
          position: fixed;
          padding: 10px 0;
          color: #FFFEF2;
        }

        .fixed-header {
          top: 0;
        }

        nav {
          height: 75px;
          position: fixed;
          display: absolute;
          text-align: center;
          align-items: center;
          padding-top: 15px;
          background-color: black;
          color: #FFFEF2;
        }

        nav a{
          color: #fff;
          text-decoration: none;
          padding: 7px 25px;
          display: inline-block;
      }

        ul li {
          list-style: none;
          display: inline;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
          display: inline;
        }

        a:hover {
          color: #ff0000;
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 red;
        }

        .container {
          width: 80%;
          margin: 0 auto; /* Center the DIV horizontally */
        }

        #header-logo {
          height: 50px;
          width: auto;
        }

      </style>
      <div class="fixed-header">
        <div class="container">
          <header>
            <nav>
              <ul>
                <li><img id="header-logo" src="assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"</li>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">Music</a></li>
                <li><a href="shows.html">Shows</a></li>
                <li><a href="stories.html">Stories</a></li>
                <li><a href="subscribe.html">Subscribe</a></li>
                <li><a href="bookings.html">Bookings</a></li>
                <li><a class="btn btn-danger" href="merch.html">Merch</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    `;
  }

}

customElements.define('header-component', Header);