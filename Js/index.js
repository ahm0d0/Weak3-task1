import { Products } from "./products.js";
// Authentication
if (!localStorage.getItem("user")) {
  window.location.replace("/authentication.html");
}

let parentProducts = document.querySelector("#parentProducts");
let messageAddToCart = document.querySelector("#messageSuccessfuly");
let Btn = document.querySelectorAll(".btn");

let mapingProducts = Products.map((item) => {
  return `  <div id="${item.id}" class="bg-white p-4 rounded-lg shadow-lg">
      <div class="relative overflow-hidden h-52 mb-4 rounded">
        <img
          src=${item.img}
          alt="Product Image"
          class="w-full h-32 object-cover rounded"
        />
      </div>
      <h2 class="text-xl font-semibold mb-2">${item.ProductName}</h2>
      <p class="text-gray-700 mb-4">${item.ProductDescription}</p>
      <div class="flex justify-between items-center">
      <span class="text-lg font-bold">EGP.${item.Price}</span>
        <button id="${item.id}" class="bg-blue-500 text-white p-2 rounded btn">
          Add to Cart <i class="fa-solid fa-plus"></i>
          </button>
      </div>
    </div>`;
}).join("");

parentProducts.innerHTML = mapingProducts;

Btn = document.querySelectorAll(".btn");

function messageAddToCartSuccess() {
  messageAddToCart.style.opacity = "1";
  messageAddToCart.innerHTML += `
    <hr />
      <div class="flex justify-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">
        Add to Cart Successful
      </h2>
      <p class="text-gray-600 mb-4">
        The item has been added to your cart successfully!
      </p>
    </div>
  `;
  setTimeout(() => {
    messageAddToCart.style.opacity = "0";
    messageAddToCart.innerHTML = "";
  }, 2000);
}

let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || [];
let cartScore = cartArray.length;
let CartLentgh = document.getElementById("CartLentgh");
CartLentgh.innerHTML = cartScore;
function addItemToCart(id) {
  let items = {};
  let cartArrayFilterd = Products.filter((item) =>
    item.id == id ? (items = item) : ""
  );
  cartArray.push(items);
  messageAddToCartSuccess();

  cartScore += 1;
  CartLentgh.innerHTML = cartScore;

  localStorage.setItem("cartProducts", JSON.stringify(cartArray));
}

Btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    addItemToCart(btn.id);
  });
});

let LogoutBtn = document.getElementById("LogoutBtn");
console.log(LogoutBtn);

LogoutBtn.addEventListener("click", () => {
  localStorage.clear();
  console.log("hi");
});
