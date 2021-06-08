class SocialButtons extends HTMLElement {
  constructor() {
    super ();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .social-buttons {

        }
      </style>

      <div class="social-buttons">
        <ul class="social">
          <li>
            <a target="_blank" href="https://www.facebook.com/strangeandthefamiliars">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://twitter.com/@Le_Strange_One">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/strangeandthefamiliars/">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/channel/UCKlNadldWRyo4ARv-CKsebA">
              <i class="fa fa-youtube" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://open.spotify.com/artist/3omd0Z9AIkQDps5TRNphRH">
              <i class="fa fa-spotify" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://strangeandthefamiliars.bandcamp.com/">
              <i class="fa fa-bandcamp" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.flickr.com/photos/136189457@N06">
              <i class="fa fa-flickr" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:strangeandthefamiliarsbooking@gmail.com">
              <i class="fa fa-envelope-square" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    `
  }
}

customElements.define('social-buttons', SocialButtons);