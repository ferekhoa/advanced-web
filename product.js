// fetch('products.json')
//   .then(response => response.json())
//   .then(products => {
//     const productList = document.getElementById('prodetails');
//     for (let i = 0; i < 8; i++) {
//       const product = products[i];
//       const productHTML = `
//       <div class="single-pro-image">
//       <img src="${product.image}" width="100%" id="MainImg" alt="">
//       <div class="small-img-group">
//           <div class="small-img-col">
//               <img src="${product.image}" width="100%" class="small-img" alt="">
//           </div>
//           <div class="small-img-col">
//               <img src="${product.image}" width="100%" class="small-img" alt="">
//           </div>
//           <div class="small-img-col">
//               <img src="${product.image}" width="100%" class="small-img" alt="">
//           </div>
//           <div class="small-img-col">
//               <img src="${product.image}" width="100%" class="small-img" alt="">
//           </div>
//       </div> 
//             <a href="#"><i class="fal fa-cart-arrow-down cart"></i></a>

//         `;
//       productList.innerHTML += productHTML; 
//     };
//   });

// function cart() {
//   window.location.href("cart.html")
// }

const productList = document.getElementById('prodetails');
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
fetch('products.json')
  .then((response) => response.json())
  .then((products) => {

    products.forEach((product) => {

      if (product.id == id) {

        productList.innerHTML = `
        <div class="single-pro-image">
          <img src="${product.image}" width="100%" alt="" data-id="${product.id}" >
          </div>
          <div class="single-pro-details">
          <h6><a href="shop.html">Shop / T-Shirt</a></h6>
            <h4>${product.name}</h4>
            <h2>$ ${product.price}</h2>
            <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
                <option>S</option>
            </select>
            <input type="number" value="1">
            <a href="cart.html/${product.id}">
            <button onclick="cart()" class="normal">Add to Cart</button>
            <a/>
            <h4>Product Details</h4>
            <span>${product.description}</span>
        </div>
          `;

      }
    })
  });