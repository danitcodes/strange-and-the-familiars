class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" type="text/css" href="../../css/shared/components/header.css" media="all">

      <header>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top">

          <a class="nav-brand" href="/index.html"><img id="header-logo" src="../assets/images/StephanieStrange_StephAndNina_Logo_Solid.png"></a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-pills flex-column flex-sm-row">

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
                <a class="nav-link" href="../../pages/shop.html">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../../pages/contact.html">Contact</a>
              </li>

            </ul>
          </div>

          <div class="pos-f-t">
            <div class="collapse" id="navbarToggleExternalContent">
              <div class="bg-dark p-4">
                <ul class="nav nav-pills flex-column flex-sm-row">

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
                    <a class="nav-link" href="../../pages/shop.html">Shop</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="../../pages/contact.html">Contact</a>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-custom navbar-toggler-icon"></span>
          </button>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
