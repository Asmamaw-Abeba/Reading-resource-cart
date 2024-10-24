
let cart = JSON.parse(localStorage.getItem('cart')) || [{
    name: 'Asmamaw Abeba',
    password: '1993a',
    phone: '0912704881'
  }];





  function saveToStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

// TEMPORARY STORAGE
let bufferCart = {
  name: 'Asmamaw Abeba',
  password: '1993a',
  phone: '0912704881',
  profile: '' 
};


// upload profile picture

document.querySelector('.js-profile-input')
 .addEventListener('change', function() {
  const profileInput = this.files[0];
  
  if (profileInput && profileInput.type.startsWith('image')) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const imgElement = document.createElement('img');
        imgElement.src = e.target.result;
        imgElement.style.maxHeight = '180px';
        imgElement.classList.add('new-profile');
        

        const imageContainer = document.querySelector('.profiles');
        imageContainer.innerHTML = ''; // Clear previous image
        imageContainer.appendChild(imgElement);
    };
    reader.readAsDataURL(profileInput);
  } else {
    alert('Please select an image file.');
  }
});


document.querySelector('.js-next-button-1')
.addEventListener('click', () => {
  
  const nameInput = document.querySelector('.js-name-input');
  const passwordInput = document.querySelector('.js-password-input')
  const phoneInput = document.querySelector('.js-phone-input');

  let userName = nameInput.value;
  let password = passwordInput.value;
  let phone = phoneInput.value;

  bufferCart.name = userName;
  bufferCart.password = password;
  bufferCart.phone = phone;
  
  const newUserFeadback = `
    <div class="about-u">
      <div class="about-title">
        <p>
          <h1>ok!!!</h1>
        </p>
      </div>

      <div class="about-description js-logoin-data">
        <div class="login-data">
          
          <h3>Hi <span class="name-span">${bufferCart.name}</span>, </h3> 
          
          Good job you are successfully regieterd
          <a href="main.html">
            <button class="next-button js-next-button-2">
              Next
            </button>
          </a>

        </div>
      </div> 

    </div>
  `;

  const memberFeadback = `
    <div class="about-u">
      <div class="about-title">
        <p>
          <h1>You have an account!!!</h1>
        </p>
      </div>

      <div class="about-description js-logoin-data">
        <div class="login-data">
          
          <h3>Hi <span class="name-span">${bufferCart.name}</span>, </h3> 
          
          you are member, So you are familiar, So go...
          <a href="main.html">
            <button class="next-button js-next-button-2">
              Next
            </button>
          </a>
        </div>
      </div> 
    </div>
  `;

  function inputValidate() {
    if (userName === '') {
      alert('Please fill your name!');
      nameInput.value = '';
      nameInput.focus();
      return false;
    } else if (password === '') {
      alert('Please fill your password!');
      passwordInput.value = '';
      passwordInput.focus();
      return false;
    }else if (phone === '') {
      alert('Please fill your phone number');
      phoneInput.value = '';
      phoneInput.focus();
      return false;
    } else {
      const existingUser = cart.find((cartItem) => cartItem.phone === bufferCart.phone);

      if (existingUser) {
        document.querySelector('.js-about-u').innerHTML = memberFeadback;
        console.log(cart);
        console.log('Sorry, you are already registered.');
      } else {
        cart.push(bufferCart);
        saveToStorage(cart);
        console.log(cart);
        document.querySelector('.js-about-u').innerHTML = newUserFeadback;
      }
    }
  }

  inputValidate();

});





