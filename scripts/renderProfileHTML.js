export function renderProfileHTML() {
  const profileHTML = `
    <div class="profiles">
      <img class="profile-picture" src="profiles/logo.jpg" alt="">
      <div class="upload-profile">
        <input class="js-profile-input" type="file">
      </div>
    </div> 
  `;
  return profileHTML;
}
renderProfileHTML();