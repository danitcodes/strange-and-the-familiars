class SocialButtons extends HTMLElement {
  constructor() {
    super ();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>



      </style>
      <div class="social-buttons">
      </div>
    `
  }
}