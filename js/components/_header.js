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
          position: sticky;
          top: 0;
          width: 100%;
          position: fixed;
          padding: 10px 0;
          color: #FFFEF2;
          z-index: 1;
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
          letter-spacing: 1px;
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

        .container nav-container{
          max-width: 90%
          margin: 0 auto; /* Center the DIV horizontally */
        }

        #header-logo {
          height: 50px;
          width: auto;
        }

      </style>

      <div class="fixed-header">
        <div class="nav-container">
          <header>
            <nav class="navbar fixed-top navbar-expand-lg">
              <a class="nav-brand" href="/index.html"><img id="header-logo" src="../assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"></a>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                  <button class="navbar-inverse navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/about.html">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/music.html">Music</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/shows.html">Shows</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/stories.html">Stories</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/bookings.html">Bookings</a>
                  </li>
                  <li class="nav-item">
                    <a class="btn btn-danger" href="pages/merch.html">Merch</a>
                  </li>

                </ul>
              </div>

              <nav class="navbar navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </nav>

          </header>
        </div>
      </div>
    `;
  }

}

customElements.define('header-component', Header);