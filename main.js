/* HOME PAGE PRODUCTS */
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('product-list');
    // products.forEach(product => {
    for (let i = 0; i < 8; i++) {
      const product = products[i];
      const productHTML = `
          <div class="pro">
            <img src="${product.image}" alt="">
            <div class="des">
              <span>${product.brand}</span>
              <h5>${product.name}</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>$${product.price}</h4>
              </div>
            </div>
            <div id="icon">
            <a <i class="fas fa-shopping-cart" ></i></a>
          </div>
          </div>

        `;
      productList.innerHTML += productHTML;
    };
  });
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById('pro-container');
    // products.forEach(product => {
    for (let i = 8; i < 16; i++) {
      const product = products[i];
      const productHTML = `
          <div class="pro">
            <img src="${product.image}" alt="">
            <div class="des">
              <span>${product.brand}</span>
              <h5>${product.name}</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>$${product.price}</h4>
              </div>
            </div>
            <div id="icon">
            <a <i class="fas fa-shopping-cart" ></i></a>
          </div>
                    </div>
        `;
      productList.innerHTML += productHTML;
    };
  });

/* SHOP PAGE PRODUCTS */
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    let productList = document.getElementById('shop-container');
    products.forEach(product => {
      const productHTML = `
          <div class="pro">
          <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="">
            <div class="des">
              <span>${product.brand}</span>
              <h5>${product.name}</h5>
              <div class="star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <h4>$${product.price}</h4>
              </div>
            </div>
            <div id="icon">
            <a <i class="fas fa-shopping-cart" ></i></a>
          </div>
                    </div>
          `;
      productList.innerHTML += productHTML;
    });
  });

/* SIGN UP CODE */
const emailInput = document.getElementById('email-input');
const signupButton = document.getElementById('signup-button');

signupButton.addEventListener('click', function () {
  const email = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  else {
    alert('Sign up Successful')
    emailInput.innerHTML = "";
  }
  //emailInput.reset();
  emailInput.value = "";
});

/* CONTACT FORM */
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailformInput = document.getElementById('email-form-input');
const subjectInput = document.getElementById('subject-input');
const messageInput = document.getElementById('message-input');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', function () {
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }
  else if (emailformInput.value.trim() === '') {
    alert('Please enter your email address.');
    return;
  }
 else if (subjectInput.value.trim() === '') {
    alert('Please enter the subject of your message.');
    return;
  }
  else if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    return;
  }
  else{
  alert('Your message has been sent successfully!');
  }
  //form.reset();
   
  emailformInput.value= "";
  subjectInput.value= "";
  messageInput.value= "";
  nameInput.value = "";

})});