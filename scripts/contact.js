//  import { updateName } from "./login.js";


const social_links = `
  <div class="social-media">
    <div class="contacts">
      <h3>Phones:</h3>
      <ol>
        <li>0912704881</li>
        <li>0905094718</li>
      </ol>
    </div>
    <button class="tooltip-button">contact</button>
  </div>

  <div class="social-media">
    <a href="mailto:asmeabeba12@gmail.com">
      <img class="twitter-icon" src="logos/email.png" alt="">
    </a>
    <button class="tooltip-button">Email</button>
  </div>

  <div class="social-media">
    <a href="https://t.me/pediro12">
      <img class="twitter-icon" src="logos/telegram.png" alt="">
    </a>
    <button class="tooltip-button">Telegram</button>
  </div>

  <div class="social-media">
    <a href="https://github.com/Asmamaw-Abeba">
      <img class="twitter-icon" src="logos/github.png" alt="">
    </a>
    <button class="tooltip-button">Github</button>
  </div>

  <div class="social-media">
    <a href="https://facebook/Asmamaw-Abeba">
      <img class="twitter-icon" src="logos/facebook.png" alt="">
    </a>
    <button class="tooltip-button">FaceBook</button>
  </div>

  <div class="social-media js-red">
    <a href="https://www.youtube.com/@AsmeAbeba">
      <img class="youtube-icon" src="logos/youtube-log.png" alt="">
    </a>
    <button class="tooltip-button">YouTube</button>
  </div>

  <div class="social-media">
    <a href="https://www.instagram.com/">
      <img class="instagram-icon" src="logos/instagram.jpg" alt="">
    </a>
    <button class="tooltip-button">Instagram</button>
  </div>

  <div class="social-media">
    <a href="https://www.tiktok.com/">
      <img class="tiktok-icon" src="logos/tiktok.png" alt="">
    </a>
    <button class="tooltip-button">TikTok</button>
  </div>

  <div class="social-media">
    <a href="https://x.com/asme_abeba">
      <img class="twitter-icon" src="logos/twitter.png" alt="">
    </a>
    <button class="tooltip-button">Twitter</button>
  </div>

  <div class="social-media">
    <a href="https://www.linkedin.com/in/asmamaw-abeba-439667334/">
      <img class="twitter-icon" src="logos/linkdin.png" alt="">
    </a>
    <button class="tooltip-button">Linkdin</button>
  </div>
`;

document.querySelector('.js-contact-button')
  .addEventListener('click', () => {
    document.querySelector('.js-grid-container')
    .innerHTML = social_links;

    document.querySelector('.js-footer')
    .innerHTML = '';
  });

 
// updateName();  
        